import React from 'react';
import './UserAccountPage.css';
// Components
import UserNav from '../../components/UserNav/UserNav';
import UserInfo from '../../components/UserInfo/UserInfo';

export default function UserAccountPage() {
  return (
    <div className='user-account-page'>
      <div>
        <UserNav />
      </div>
      <div className='user-info'>
        <h1>User Account Page</h1>
        <UserInfo />
      </div>
    </div>
  );
}
