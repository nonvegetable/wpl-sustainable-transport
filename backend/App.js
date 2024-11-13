const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors()); // Enable CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
let db;

async function connectToDb() {
    try {
        await client.connect();
        db = client.db('students'); // Ensure this database name matches your MongoDB setup
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
connectToDb();

// Serve the HTML form at the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Adjust the path as needed
});

// Login Route
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await db.collection('user1').findOne({ email, password });
        if (user) {
            res.json({ message: 'Login successful' });
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' });
    }
});

// Signup Route
app.post('/api/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await db.collection('user1').findOne({ email });
        if (existingUser) {
            res.status(409).json({ error: 'Email already registered' });
            return;
        }
        
        await db.collection('user1').insertOne({ name, email, password });
        res.json({ message: 'Signup successful' });
    } catch (error) {
        res.status(500).json({ error: 'Error signing up' });
    }
});

// Post Submission Route for Forum
app.post('/api/forum/post', async (req, res) => {
    const { content } = req.body;
    try {
        const post = { content, comments: [] };
        await db.collection('posts').insertOne(post);
        res.json({ message: 'Post submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving post to MongoDB' });
    }
});

// Add Comment to Post Route
app.post('/api/forum/post/:id/comment', async (req, res) => {
    const { id } = req.params;
    const { comment } = req.body;
    try {
        await db.collection('posts').updateOne(
            { _id: new ObjectId(id) },
            { $push: { comments: comment } }
        );
        res.json({ message: 'Comment added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error adding comment to post' });
    }
});

// Start the server
app.listen(5000, () => {
    console.log('Backend server running on http://localhost:5000');
});
