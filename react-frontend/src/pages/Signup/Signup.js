import React, { useState } from 'react';
import styles from './Signup.module.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:5000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();
        if (response.ok) {
            alert('Sign up successful! Please log in.');
            window.location.href = '../login/login.html';  // Redirect to login page
        } else {
            alert(data.error);
        }
    };

    return (
        <div className={styles.signupContainer}>
            <div className={styles.signupLogo}>
                <i className="fas fa-tree"></i> EcoTransit
            </div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="signupName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="signupEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="signupPassword"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <div className={styles.signupFooter}>
                <span>Already have an account? <Link to="/login">Login</Link></span>
            </div>
        </div>
    );
};

export default Signup;
