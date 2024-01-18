import styles from './AuthPage.module.css';
import React from 'react';
// Components
import UserRegistration from '../../components/UserRegistration/UserRegistration';
import UserLogin from '../../components/UserLogin/UserLogin';
//Hooks
import { useState } from 'react';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className={styles.AuthPage}>
      <div>
        <h3 onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? 'SIGN UP' : 'LOG IN'}
        </h3>
      </div>
      {showLogin ? (
        <UserLogin setUser={setUser} />
      ) : (
        <UserRegistration setUser={setUser} />
      )}
    </div>
  );
}
