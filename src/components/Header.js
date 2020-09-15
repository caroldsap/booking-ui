import React from 'react';
import Link from './Link';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/list" className="item">
        My Bookings
      </Link>
      <Link href="/book" className="item">
        Book a Service
      </Link>
      <Link href="/ratings" className="item">
        Rate A Service
      </Link>
      
    </div>
  );
};

export default Header;
