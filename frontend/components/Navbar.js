'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt='logo' style={{'maxHeight': '50px', 'maxWidth': '50px'}} />
            Banao
          </Link>
        </div>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link href="/">SingnUp</Link>
          <Link href="/login">Login</Link>
          <Link href="/reset">Forgot Password</Link>
        </div>
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
