import React from 'react';
import Profile from './Profile/Profile';

import profileUser from '../user.json';

export default function App() {
  return (
    <div>
      <h1>hello</h1>
      <Profile
        name={profileUser.name}
        tag={profileUser.tag}
        location={profileUser.location}
        avatar={profileUser.avatar}
        stats={profileUser.stats}
      />
    </div>
  );
}
