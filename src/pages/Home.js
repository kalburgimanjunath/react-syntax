import React from 'react';
import { Logo, Avatar } from '../components/index';
export default function Home() {
  const user = [
    {
      name: 'Manjunath Manav',
      email: '@manjumanav',
    },
    {
      name: 'Manjunath Kalburgi',
      email: '@manjumanav',
    },
  ];
  return (
    <div style={{ display: 'flex' }}>
      <Logo />
      <div>
        <h3>A Tasty Treats Podcast for Web Developers.</h3>
        <Avatar user={user[0]} />
        <Avatar user={user[1]} />
      </div>
    </div>
  );
}
