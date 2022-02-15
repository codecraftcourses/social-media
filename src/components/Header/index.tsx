import React from 'react';
import { IoLogoTwitter } from 'react-icons/io5';
import HeaderAuth from '../HeaderAuth';

function Header() {
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-2">
        <IoLogoTwitter className="text-primary-600" size={24} />
        <HeaderAuth />
      </div>
    </header>
  );
}

export default Header;
