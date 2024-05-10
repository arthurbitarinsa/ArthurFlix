import React, { useState } from 'react';
import '../css/signup.css'; 

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username, 'Email:', email, 'Password:', password, 'Birthdate:', birthdate, 'Agree to Terms:', agreeToTerms);
        // Signup algorithm
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <input
                    type="date"
                    value={birthdate}
                    onChange={e => setBirthdate(e.target.value)}
                    required
                />
                <label className="checkbox-container">
                    I agree to the terms and conditions
                    <input
                        type="checkbox"
                        checked={agreeToTerms}
                        onChange={e => setAgreeToTerms(e.target.checked)}
                        required
                    />
                    <span className="checkmark"></span>
                </label>
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
}

export default Signup;
