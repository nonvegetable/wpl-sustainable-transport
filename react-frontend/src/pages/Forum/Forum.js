// src/pages/Forum/Forum.js
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './Forum.module.css';

const Forum = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/forum/posts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        fetchPosts();
    }, []);

    const handlePostSubmit = async (e) => {
        e.preventDefault();
        if (newPost.trim()) {
            try {
                const response = await fetch('http://localhost:5000/api/forum/post', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ content: newPost })
                });
                const data = await response.json();
                if (response.ok) {
                    setPosts([data, ...posts]);
                    setNewPost('');
                } else {
                    alert(data.error);
                }
            } catch (error) {
                console.error("Error submitting post:", error);
            }
        }
    };

    const addComment = async (index, comment) => {
        const postId = posts[index]._id;
        try {
            const response = await fetch(`http://localhost:5000/api/forum/post/${postId}/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ comment })
            });
            if (response.ok) {
                const updatedPosts = [...posts];
                updatedPosts[index].comments.push(comment);
                setPosts(updatedPosts);
            } else {
                const data = await response.json();
                alert(data.error);
            }
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    };

    return (
        <div className={styles.forumPage}>
            <Header />
            <main className={styles.mainContent}>
                <h1 className={styles.pageTitle}>Sustainable Transport Forum</h1>
                <p>Discuss ideas, share complaints, and collaborate on sustainable transport solutions!</p>
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
                <div className={styles.postsSection}>
                    {posts.map((post, index) => (
                        <Post 
                            key={post._id} 
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
                {(post.comments || []).map((comment, index) => ( // Default to empty array if comments is undefined
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
