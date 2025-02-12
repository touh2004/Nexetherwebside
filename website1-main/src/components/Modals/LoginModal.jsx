import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "../../styles/login.css";
import axios from 'axios';

const LoginModal = ({ showLoginModal, handleCloseModal, toggleForm, isSignUp }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    if (!showLoginModal) return null;

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await axios.post('/api/login', { email, password });
            const token = response.data.token;
            localStorage.setItem('token', token);

            handleCloseModal();
            window.location.href = "/profile"; 

        } catch (error) {
            console.error("Login Error:", error);

            if (error.response) {
                console.error("Server Error:", error.response.data);
                setError(error.response.data.message || "Login failed");
            } else if (error.request) {
                console.error("Request Error:", error.request);
                setError("No response from the server");
            } else {
                console.error("Setup Error:", error.message);
                setError("Login failed");
            }
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await axios.post('/api/signup', {
                username,
                email,
                password,
            });

            setSuccessMessage("Signup successful! You can now login.");
            toggleForm();

        } catch (dbError) {
            console.error('Signup error:', dbError.response?.data || dbError);
            setError(dbError.response?.data?.message || "Signup failed. Please try again.");
        }
    };

    
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={handleCloseModal}>&#x2715;</span>
                <div className={`container ${isSignUp ? 'active' : ''}`} id="container">
                    {!isSignUp && (
                        <div className="form-container sign-in active">
                            <form onSubmit={handleLogin}>
                                <h1>Sign In</h1>
                                {error && <p className="error-message">{error}</p>}
                                <div className="social-icons">
                                    <a href="#"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                                </div>
                                <span>or use your email password</span>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                                <a className="forgot-link" href="#">Forget Your Password?</a>
                                <button type="submit">Sign In</button>
                            </form>
                        </div>
                    )}

                    <div className={`form-container sign-up ${isSignUp ? 'active' : ''}`}>
                        <form onSubmit={handleSignUp}>
                            <h1>Sign Up</h1>
                            {error && <p className="error-message">{error}</p>}
                            {successMessage && <p className="success-message">{successMessage}</p>}
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                            <button type="submit">Sign Up</button>
                        </form>
                    </div>

                    <div className="toggle-container">
                        <div className="toggle">
                            <div className="toggle-panel toggle-left">
                                <h1>Welcome Back!</h1>
                                <p>Enter your personal details to use all of the site features</p>
                                <button className="hidden" id="login" onClick={toggleForm}>Sign In</button>
                            </div>
                            <div className="toggle-panel toggle-right">
                                <h1>Hello, Friend!</h1>
                                <p>Register with your personal details to use all of the site features</p>
                                <button className="hidden" id="register" onClick={toggleForm}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;