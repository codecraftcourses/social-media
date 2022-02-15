import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components';

function App() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <Outlet />
      </main>
    </>
  );
}

export default App;
