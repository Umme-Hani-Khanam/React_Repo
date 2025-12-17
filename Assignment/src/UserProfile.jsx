import React from 'react'
import UserInfo from './UserInfo';

const UserProfile = () => {
  const name='Khanam';
  const age=30;
    return (
    <div>
        <UserInfo name={name} age={age}/>
    </div>
  )
}

export default UserProfile