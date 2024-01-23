import React from 'react';
// Contexts
import { UserContext } from '../../contexts/UserContext';
// Hooks
import { useContext } from 'react';

export default function UserInfo() {
  const { user } = useContext(UserContext);
  return (
    <div className='user-info-page'>
      <p>
        <strong>Username:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
}
