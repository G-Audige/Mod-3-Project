import React from 'react';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function UserAccountPage({ user, setUser }) {
  return (
    <div>
      UserAccountPage
      <UserLogOut user={user} setUser={setUser} />
    </div>
  );
}
