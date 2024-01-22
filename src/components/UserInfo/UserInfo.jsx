import React from 'react';
// Contexts
import { UserContext } from '../../contexts/UserContext';
// Hooks
import { useContext } from 'react';

export default function UserInfo() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <p>Username: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
