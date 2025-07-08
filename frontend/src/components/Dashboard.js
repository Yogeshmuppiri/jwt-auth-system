import React, { useEffect, useState } from 'react';
import API from '../api';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [msg, setMsg] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get('/auth/protected')
      .then(res => {
        setMsg(res.data.message);
        setUser(res.data.user);
      })
      .catch(() => {
        setMsg('Unauthorized');
      });
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Dashboard</h2>
      <div className={styles.section}>
        <h3>Status</h3>
        <p>{msg}</p>
        {user && <p>Welcome, <strong>{user.name}</strong>!</p>}
      </div>

      <div className={styles.section}>
        <h3>🔐 How Authentication Works</h3>
        <p>
          When you <strong>register</strong>, your credentials are securely stored in MongoDB with a hashed password.
        </p>
        <p>
          On <strong>login</strong>, if your credentials are valid, the backend generates a <strong>JWT token</strong>
          which gets stored in <code>localStorage</code> on the frontend.
        </p>
        <p>
          This token is automatically sent with every protected API request via an <code>Authorization</code> header.
        </p>
        <p>
          The backend checks the token on every protected route using middleware. If valid, the user is allowed access.
        </p>
      </div>

      <div className={styles.section}>
        <h3>💡 Token Details</h3>
        <p>
          The token contains your user ID and expires after <strong>1 hour</strong>. Once expired, you’ll need to log in again.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
