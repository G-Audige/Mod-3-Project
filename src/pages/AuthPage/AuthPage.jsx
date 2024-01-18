import React from 'react';
// Components
import UserRegistration from '../../components/UserRegistration/UserRegistration';
import UserLogin from '../../components/UserLogin/UserLogin';

export default function AuthPage() {
  return (
    <div>
      AuthPage
      <UserRegistration />
      <UserLogin />
    </div>
  );
}
