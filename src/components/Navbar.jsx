import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '/Kloudvault logo.png'
import './Navbar.css'

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === ''
    }
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  const handleNavClick = (e, path) => {
    e.preventDefault()
    navigate(path)
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <header className="navbar">
      <div className="nav-left">
        <img 
          src={logo} 
          alt="Kloudvault" 
          className="logo" 
          onClick={() => { navigate('/'); window.scrollTo(0, 0); }} 
          style={{ cursor: 'pointer' }} 
        />
      </div>

      <nav className="nav-links">
        <Link 
          to="/" 
          onClick={(e) => handleNavClick(e, '/')} 
          className={isActive('/') ? 'active' : ''}
        >
          Home
        </Link>
        <Link 
          to="/product" 
          onClick={(e) => handleNavClick(e, '/product')} 
          className={isActive('/product') ? 'active' : ''}
        >
          Products
        </Link>
        <Link 
          to="/blogs" 
          onClick={(e) => handleNavClick(e, '/blogs')} 
          className={isActive('/blogs') ? 'active' : ''}
        >
          Blogs
        </Link>
        <Link 
          to="/company" 
          onClick={(e) => handleNavClick(e, '/company')} 
          className={isActive('/company') ? 'active' : ''}
        >
          Company
        </Link>
        <Link 
          to="/support" 
          onClick={(e) => handleNavClick(e, '/support')} 
          className={isActive('/support') ? 'active' : ''}
        >
          Support
        </Link>
      </nav>

      <div className="nav-right">
        <a className="talk" href="#" onClick={(e) => handleNavClick(e, '/support')}>Talk to Sales</a>
        <button className="demo" onClick={() => { navigate('/support'); window.scrollTo(0, 0); }}>Book a Demo</button>
      </div>

      {/* Mobile CTA visible on <=900px */}
      <button className="demo nav-mobile-cta" onClick={() => { navigate('/support'); window.scrollTo(0, 0); }}>Book a Demo</button>

      {/* Hamburger */}
      <button
        className="nav-toggle"
        aria-label="Open menu"
        aria-expanded={menuOpen ? 'true' : 'false'}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true">
          <Link to="/" onClick={(e) => handleNavClick(e, '/')} className={isActive('/') ? 'active' : ''}>Home</Link>
          <Link to="/product" onClick={(e) => handleNavClick(e, '/product')} className={isActive('/product') ? 'active' : ''}>Products</Link>
          <Link to="/support" onClick={(e) => handleNavClick(e, '/support')} className={isActive('/support') ? 'active' : ''}>Support</Link>
          <Link to="/blogs" onClick={(e) => handleNavClick(e, '/blogs')} className={isActive('/blogs') ? 'active' : ''}>Blogs</Link>
          <Link to="/company" onClick={(e) => handleNavClick(e, '/company')} className={isActive('/company') ? 'active' : ''}>Company</Link>
          <a href="#" onClick={(e) => handleNavClick(e, '/support')}>Talk to Sales</a>
        </div>
      )}
    </header>
  )
}

