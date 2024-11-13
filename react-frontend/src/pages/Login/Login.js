// src/pages/Login/Login.js
import React, { useState } from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (response.ok) {
            sessionStorage.setItem('loggedIn', true);
            alert('Login successful!');
            window.location.href = '/';
        } else {
            alert(data.error);
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginLogo}>
                <i className="fas fa-tree"></i> EcoTransit
            </div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="loginEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="loginPassword"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <div className={styles.loginFooter}>
                <span>Don't have an account? <Link to="/signup">Sign Up</Link></span>
            </div>
        </div>
    );
};

export default Login;
