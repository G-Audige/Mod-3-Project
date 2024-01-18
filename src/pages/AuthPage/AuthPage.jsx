import React from 'react';
// Components
import UserRegistration from '../../components/UserRegistration/UserRegistration';
import UserLogin from '../../components/UserLogin/UserLogin';

function AuthPage() {
  return (
    <div>
      AuthPage
      <UserRegistration />
      <UserLogin />
    </div>
  );
}

export default AuthPage;
