import React from 'react';
import Profile from './Profile/Profile';
import FriendList from './Friend-list/Friend-list';
import Statistics from './Statistics/Statistics';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import profileUser from '../components/Profile/user.json';
import friends from '../components/Friend-list/friends.json';
import statisticalData from '../components/Statistics/statistical-data.json';
import transactions from '../components/TransactionHistory/transactions.json';

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
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <TransactionHistory items={transactions} />
    </div>
  );
}
