import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to Authify</h1>
      <p>This project demonstrates a secure authentication system using JWT (JSON Web Tokens).</p>
      <ul>
        <li>🔒 Users can <strong>Register</strong> with name, email, and password.</li>
        <li>🔑 On <strong>Login</strong>, a JWT token is generated and stored on the client.</li>
        <li>🛡️ Protected routes like <code>/dashboard</code> require a valid token to access.</li>
        <li>⏳ Tokens expire after a set time (default 1 hour), and invalid tokens prevent access.</li>
        <li>💾 Frontend is built in React, backend is in Express, data is stored in MongoDB.</li>
      </ul>
      <p>Explore the navigation links above to register or log in and access protected content.</p>
    </div>
  );
};

export default Home;
