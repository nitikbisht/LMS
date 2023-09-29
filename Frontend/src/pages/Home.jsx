import React from 'react';

export function Home() {
  const name = JSON.parse(localStorage.getItem('name'));
  return (
    <>
      <div>
        <h1>Hi {name} !!! </h1>
        <h2>Welcome to Leave Management System</h2>
      </div>
    </>
  );
}
export default Home;
