import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
    const [loading, setLoading] = useState(true); // Loading state to control GIF display
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Display the GIF for 3 seconds before showing the login form
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000); // Adjust the duration as needed

        // Cleanup the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        
        // Simulate login logic
        console.log('Email:', email);
        console.log('Password:', password);
        
        // Show an alert
        alert('Login successful! Redirecting to QR page...');

        // Redirect to the QR page after the alert
        navigate('/qr');
    };

    return (
        <div className="login-container">
            {loading ? (
                <div className="loading">
                    <img src="logo.gif" alt="Loading..." /> {/* Ensure the GIF is in the public folder */}
                </div>
            ) : (
                <div className="login-form">
                    {/* Logo Section */}
                    <div className="logo">
                        <img src="ananta-logo.png" alt="Ananta Logo" />
                    </div>

                    <h2>Login</h2>

                    <form onSubmit={handleLogin}>
                        <div className="input-group">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="actions">
                            <button type="submit" className="login-button">Login</button>
                        </div>
                        <div className="signup-prompt">
                            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Login;
