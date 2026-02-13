import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer
      style={{
        background: '#1e3a8a',
        color: 'white',
        padding: '48px 16px 24px',
        marginTop: '60px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '32px',
        }}
      >
        <div>
          <h3 style={{ margin: '0 0 16px', fontSize: '1.5rem' }}>Medify</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>
            Trusted platform for booking medical appointments.
          </p>
        </div>

        <div>
          <h4 style={{ margin: '0 0 16px', fontSize: '1.2rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '8px' }}>
              <Link to="/find-doctors" style={{ color: '#dbeafe', textDecoration: 'none' }}>
                Find Doctors
              </Link>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <Link to="/hospitals" style={{ color: '#dbeafe', textDecoration: 'none' }}>
                Hospitals
              </Link>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <Link to="/medicines" style={{ color: '#dbeafe', textDecoration: 'none' }}>
                Medicines
              </Link>
            </li>
            <li>
              <Link to="/my-bookings" style={{ color: '#dbeafe', textDecoration: 'none' }}>
                My Bookings
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 style={{ margin: '0 0 16px', fontSize: '1.2rem' }}>Contact</h4>
          <p style={{ margin: '0 0 8px' }}>support@medify.com</p>
          <p style={{ margin: 0 }}>+91 98765 43210</p>
        </div>
      </div>

      <p
        style={{
          textAlign: 'center',
          marginTop: '48px',
          opacity: 0.8,
          fontSize: '0.95rem',
        }}
      >
        © 2026 Medify. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;