import React from 'react';
// Components
import UserNav from '../../components/UserNav/UserNav';
import UserInfo from '../../components/UserInfo/UserInfo';

export default function UserAccountPage() {
  return (
    <div>
      <h1>User Account Page</h1>
      <UserNav />
      <UserInfo />
    </div>
  );
}
