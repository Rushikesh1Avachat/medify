import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header
      style={{
        background: '#2563eb',
        color: 'white',
        padding: '16px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <h1 style={{ margin: 0, fontSize: '1.8rem', fontWeight: 'bold' }}>Medify</h1>

      <nav>
        <ul
          style={{
            display: 'flex',
            gap: '32px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link
              to="/find-doctors"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 500,
              }}
            >
              FIND DOCTORS
            </Link>
          </li>
          <li>
            <Link
              to="/hospitals"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 500,
              }}
            >
              HOSPITALS
            </Link>
          </li>
          <li>
            <Link
              to="/medicines"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 500,
              }}
            >
              MEDICINES
            </Link>
          </li>
          <li>
            <Link
              to="/my-bookings"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 'bold',
              }}
            >
              MY BOOKINGS
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
