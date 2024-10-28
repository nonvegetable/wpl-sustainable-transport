// src/pages/Forum/Forum.js
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './Forum.module.css';

const Forum = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');

    const handlePostSubmit = (e) => {
        e.preventDefault();
        if (newPost.trim()) {
            setPosts([{ content: newPost, comments: [] }, ...posts]);
            setNewPost('');
        }
    };

    const addComment = (index, comment) => {
        const updatedPosts = [...posts];
        updatedPosts[index].comments.push(comment);
        setPosts(updatedPosts);
    };

    return (
        <div className={styles.forumPage}>
            <Header />
            <main className={styles.mainContent}>
                <h1 className={styles.pageTitle}>Sustainable Transport Forum</h1>
                <p>Discuss ideas, share complaints, and collaborate on sustainable transport solutions!</p>

                {/* New Post Form */}
                <form onSubmit={handlePostSubmit} className={styles.newPostForm}>
                    <textarea
                        className={styles.postInput}
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                        placeholder="Share your thoughts or ideas..."
                        required
                    />
                    <button type="submit" className={styles.postButton}>Post</button>
                </form>

                {/* Display Posts */}
                <div className={styles.postsSection}>
                    {posts.map((post, index) => (
                        <Post 
                            key={index} 
                            post={post} 
                            onAddComment={(comment) => addComment(index, comment)} 
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

const Post = ({ post, onAddComment }) => {
    const [newComment, setNewComment] = useState('');

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            onAddComment(newComment);
            setNewComment('');
        }
    };

    return (
        <div className={styles.post}>
            <p className={styles.postContent}>{post.content}</p>
            <div className={styles.commentsSection}>
                {post.comments.map((comment, index) => (
                    <p key={index} className={styles.comment}>{comment}</p>
                ))}
                <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
                    <input
                        type="text"
                        className={styles.commentInput}
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                        required
                    />
                    <button type="submit" className={styles.commentButton}>Comment</button>
                </form>
            </div>
        </div>
    );
};

export default Forum;
