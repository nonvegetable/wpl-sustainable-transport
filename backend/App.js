// Assuming you already have the MongoDB connection setup as shown previously
const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uri = 'mongodb://localhost:27017'; 
const client = new MongoClient(uri);
let db;

async function connectToDb() {
    try {
        await client.connect();
        db = client.db('register'); 
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}
connectToDb();

// Serve the HTML form at the root route ('/')
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, ''));
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
        await db.collection('user1').insertOne({ name, email, password });
        res.json({ message: 'Signup successful' });
    } catch (error) {
        res.status(500).json({ error: 'Error signing up' });
    }
});

app.listen(5000, () => {
    console.log('Backend server running on http://localhost:5000');
});
