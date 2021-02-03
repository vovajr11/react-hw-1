import React from 'react';
import styles from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id} className={styles.item}>
          <span
            className={friend.isOnline ? styles.active : styles.inactive}
          ></span>

          <img src={friend.avatar} alt="" width="48" />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
