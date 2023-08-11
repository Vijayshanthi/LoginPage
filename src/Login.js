import React, { useState } from 'react';
const staticUsers = [
    { username: 'mano@gmail.com', password: 'anjali' },
    {username: 'murugesh@gmail.com', password: 'jeni'},
];
export default function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        const user = staticUsers.find(user => user.username === username);

        if (user) {
            if (user.password === password) {
                setErrorMessage('');
                localStorage.setItem('loggedInUser', JSON.stringify(user));
                alert('Login successful!');
            }
             else {
                setErrorMessage('Incorrect password');
            }
        } else {
            setErrorMessage('User not found');
        }
    };
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={({ target }) => setUsername(target.value)}
                /><br/><br/>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                /><br/><br/>
                <button type="submit">Login</button>
            </form>
            {errorMessage && <p className="Incorrect Password">{errorMessage}</p>}
        </div>
    );
}
