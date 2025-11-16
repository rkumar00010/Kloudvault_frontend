import React from 'react'
import './App.css'
import logo from '/Kloudvault logo.png'
import DashboardImg from '/Dashboard.webp'
import { useState, useEffect } from 'react';
import Blog from './Blog.tsx'
import Company from './Company.tsx'
import Support from './Support.tsx'
import AnalyticsDashboard from './components/AnalyticsDashboard.jsx';
import AISection from  './components/AISection.jsx'
import Archival from './Archival.jsx'
import DataBackup from './DataBackup.jsx'
import ReportsAnalytics from './ReportsAnalytics.jsx'
import Scanning from './Scanning.jsx'
import OCR from './OCR.jsx'
import CTI from './CTI.jsx'

export default function App() {

  const [rotation, setRotation] = useState(15);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const applyHash = () => {
      const hash = (window.location.hash || '').replace('#', '') || 'home';
      setCurrentPage(hash);
      window.scrollTo(0, 0);
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  const goTo = (page) => {
    if (window.location.hash !== `#${page}`) {
      window.location.hash = `#${page}`;
    } else {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newRotation = Math.max(0, 15 - scrollTop * 0.05);
      setRotation(newRotation);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Scroll-reveal observer for all pages
  useEffect(() => {
    // Broader page sections + limit Home solutions to first 6 cards
    const sectionSelectors = [
      // Home (sections only; cards handled separately)
      // 'main.hero',
      // '.ai-section',
      // '.dashboard-section',
      // '.testimonials-section',
      '.stats-section',
      // '.solutions-section',
      '.solutions-header',
      '.analytics-dashboard-section',
      // Products
      '.products-hero',
      '.products-grid',
      // '.products-cta-section',
      // Blog
      '.values-grid',
      '.blog-hero',
      '.blog-mission',
      // '.blog-values',
      '.blog-team',
      '.blog-compliance',
      // '.blog-careers',
      '.values-grid',
      '.team-grid',
      '.comp-grid',
      // Company
      '.company-hero',
      '.pricing-section',
      '.included-grid',
      '.faq-section',
      // Support
      '.resources-grid'
    ];

    const sectionElements = Array.from(document.querySelectorAll(sectionSelectors.join(',')));
    const sixHomeCards = Array.from(document.querySelectorAll('.solutions-grid > *')).slice(0, 6);
    const elements = [...sectionElements, ...sixHomeCards];
    if (elements.length === 0) return;
    elements.forEach((el, idx) => {
      el.classList.add('kv-reveal');
      // stagger a bit so multiple items flow nicely
      el.style.transitionDelay = `${Math.min(idx * 70, 700)}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      elements.forEach((el) => {
        el.classList.remove('is-revealed');
        // keep kv-reveal for re-entrance on next page view
        el.style.transitionDelay = '';
      });
    };
  }, [currentPage]);

  return (
    <div className="app" >

      {/* <header className="kv-navbar">
        <div className="kv-container">
          <div className="kv-left">
            <img src="Kloudvault logo.png" alt="Kloudvault" className="kv-logo" />
          </div>

          <nav className="kv-center" aria-label="Main navigation">
            <a className="kv-link active" href="#">Home</a>
            <a className="kv-link" href="#">Products</a>
            <a className="kv-link" href="#">Blogs</a>
            <a className="kv-link" href="#">Company</a>
            <a className="kv-link" href="#">Support</a>
          </nav>

          <div className="kv-right">
            <a className="kv-sales" href="#">Talk to Sales</a>
            <button className="kv-demo">Book a Demo</button>
          </div>
        </div>
      </header> */}

      <header className="navbar">
        <div className="nav-left">
          <img src={logo} alt="Kloudvault" className="logo" onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} style={{ cursor: 'pointer' }} />
          {/* <span className="brand">Kloudvault</span> */}
        </div>

        <nav className="nav-links">
          <a href="#" onClick={(e) => handleNavClick(e, 'home')} className={currentPage === 'home' ? 'active' : ''}>Home</a>
          <a href="#" onClick={(e) => handleNavClick(e, 'products')} className={currentPage === 'products' ? 'active' : ''}>Products</a>
          <a href="#" onClick={(e) => handleNavClick(e, 'blogs')} className={currentPage === 'blogs' ? 'active' : ''}>Blogs</a>
          <a href="#" onClick={(e) => handleNavClick(e, 'company')} className={currentPage === 'company' ? 'active' : ''}>Company</a>
          <a href="#" onClick={(e) => handleNavClick(e, 'support')} className={currentPage === 'support' ? 'active' : ''}>Support</a>
          {/* <a href="#" onClick={(e) => handleNavClick(e, 'archival')} className={currentPage === 'archival' ? 'active' : ''}>Archival</a> */}
        </nav>

        <div className="nav-right">
          <a className="talk" href="#">Talk to Sales</a>
          <button className="demo">Book a Demo</button>
        </div>
      </header>

      {currentPage === 'home' ? (
        <>
          <main className="hero">
            <div className="hero-inner">
              <div className="kv-badge">Enterprise Data Lifecycle Platform</div>
              <div className="hero-subtitle">Your Data's Final <span className="accent">Vault</span></div>
              <p className="hero-desc">
                Secure, searchable, and always compliant. Kloudvault unifies archival, backup, reporting, scanning, OCR, and CTI into one cloud-native platform.
              </p>
              <div className="hero-circle hero-circle-glow">
              </div>
              <div className="hero-circle1 hero-circle-glow">
              </div>
              <div className="hero-ctas">
                <button className="cta nav-demo" onClick={() => goTo('support')}>Book a Demo →</button>
                <button className="cta secondary" onClick={() => goTo('products')}>Explore Solutions</button>
              </div>

              <div className="scroll-indicator">
                <div className="si-dot"></div>
              </div>
            </div>
          </main>



          {/* <div className="stat-icon">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      </div> */}

          <section className="ai-section">
  <AISection />
</section>

          {/* <section className="dashboard-section">
        <img 
        
          src={DashboardImg}
          alt="Kloudvault Dashboard Interface" 
          className="dashboard-preview"
        />
      </section> */}
          <section className="dashboard-section">
            <img
              src={DashboardImg}
              alt="Kloudvault Dashboard Interface"
              className="dashboard-preview"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: "transform 0.15s linear"
              }}
            />
          </section>




          <section className="testimonials-section">
            <h2 className="testimonials-title">
              Trusted by Thousands<br />
              of Happy Users
            </h2>
            <div className="testimonials-container">
              <div className="testimonials-track scroll-left">
                {/* First set of testimonials */}
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <img src="https://i.pravatar.cc/150?img=1" alt="Kathryn Murphy" />
                    </div>
                    <div className="testimonial-info">
                      <h3>Kathryn Murphy</h3>
                      <p>georgia.young@example.com</p>
                    </div>
                  </div>
                  <p className="testimonial-text">
                    This app helped me finally understand where my money was going. I set my budget goals and saved over $3,000 in just a few months. It's like having a personal finance coach in my pocket.
                  </p>
                  <div className="testimonial-footer">
                    <div className="testimonial-date">Feb 15, 2025</div>
                    <div className="testimonial-rating" aria-label="5 stars">
                      <span className="stars">{'★'.repeat(5)}</span>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <img src="https://i.pravatar.cc/150?img=2" alt="Dianne Russell" />
                    </div>
                    <div className="testimonial-info">
                      <h3>Dianne Russell</h3>
                      <p>tanya.hill@example.com</p>
                    </div>
                  </div>
                  <p className="testimonial-text">
                    The AI insights are gold. It alerts me to hidden fees, tracks my investments in real time, and even suggests better returns. I've optimized my portfolio thanks to this tool.
                  </p>
                  <div className="testimonial-footer">
                    <div className="testimonial-date">Feb 15, 2025</div>
                    <div className="testimonial-rating" aria-label="5 stars">
                      <span className="stars">{'★'.repeat(5)}</span>
                    </div>
                  </div>
                </div>

                {/* Duplicate testimonials for continuous scroll */}
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <img src="https://i.pravatar.cc/150?img=3" alt="Kathryn Murphy" />
                    </div>
                    <div className="testimonial-info">
                      <h3>Kathryn Murphy</h3>
                      <p>georgia.young@example.com</p>
                    </div>
                  </div>
                  <p className="testimonial-text">
                    This app helped me finally understand where my money was going. I set my budget goals and saved over $3,000 in just a few months. It's like having a personal finance coach in my pocket.
                  </p>
                  <div className="testimonial-footer">
                    <div className="testimonial-date">Feb 15, 2025</div>
                    <div className="testimonial-rating" aria-label="5 stars">
                      <span className="stars">{'★'.repeat(5)}</span>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <img src="https://i.pravatar.cc/150?img=4" alt="Dianne Russell" />
                    </div>
                    <div className="testimonial-info">
                      <h3>Dianne Russell</h3>
                      <p>tanya.hill@example.com</p>
                    </div>
                  </div>
                  <p className="testimonial-text">
                    The AI insights are gold. It alerts me to hidden fees, tracks my investments in real time, and even suggests better returns. I've optimized my portfolio thanks to this tool.
                  </p>
                  <div className="testimonial-footer">
                    <div className="testimonial-date">Feb 15, 2025</div>
                    <div className="testimonial-rating" aria-label="5 stars">
                      <span className="stars">{'★'.repeat(5)}</span>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <img src="https://i.pravatar.cc/150?img=5" alt="Arlene McCoy" />
                    </div>
                    <div className="testimonial-info">
                      <h3>Arlene McCoy</h3>
                      <p>debra.holt@example.com</p>
                    </div>
                  </div>
                  <p className="testimonial-text">
                    I work with international clients, and this platform makes currency conversion and payments effortless. Plus, the security features give me peace of mind.
                  </p>
                  <div className="testimonial-footer">
                    <div className="testimonial-date">Feb 15, 2025</div>
                    <div className="testimonial-rating" aria-label="5 stars">
                      <span className="stars">{'★'.repeat(5)}</span>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <img src="https://i.pravatar.cc/150?img=6" alt="Marvin McKinney" />
                    </div>
                    <div className="testimonial-info">
                      <h3>Marvin McKinney</h3>
                      <p>sara.cruz@example.com</p>
                    </div>
                  </div>
                  <p className="testimonial-text">
                    Clean UI, fast syncing, powerful analytics—I was blown away. It's like the Apple of fintech platforms. Highly recommended for anyone who loves data and design.
                  </p>
                  <div className="testimonial-footer">
                    <div className="testimonial-date">Feb 15, 2025</div>
                    <div className="testimonial-rating" aria-label="5 stars">
                      <span className="stars">{'★'.repeat(5)}</span>
                    </div>
                  </div>
                </div>

                {/* Duplicate for continuous scroll */}
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <img src="https://i.pravatar.cc/150?img=5" alt="Arlene McCoy" />
                    </div>
                    <div className="testimonial-info">
                      <h3>Arlene McCoy</h3>
                      <p>debra.holt@example.com</p>
                    </div>
                  </div>
                  <p className="testimonial-text">
                    I work with international clients, and this platform makes currency conversion and payments effortless. Plus, the security features give me peace of mind.
                  </p>
                  <div className="testimonial-footer">
                    <div className="testimonial-date">Feb 15, 2025</div>
                    <div className="testimonial-rating" aria-label="5 stars">
                      <span className="stars">{'★'.repeat(5)}</span>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <img src="https://i.pravatar.cc/150?img=6" alt="Marvin McKinney" />
                    </div>
                    <div className="testimonial-info">
                      <h3>Marvin McKinney</h3>
                      <p>sara.cruz@example.com</p>
                    </div>
                  </div>
                  <p className="testimonial-text">
                    Clean UI, fast syncing, powerful analytics—I was blown away. It's like the Apple of fintech platforms. Highly recommended for anyone who loves data and design.
                  </p>
                  <div className="testimonial-footer">
                    <div className="testimonial-date">Feb 15, 2025</div>
                    <div className="testimonial-rating" aria-label="5 stars">
                      <span className="stars">{'★'.repeat(5)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second row scrolling in opposite direction */}
              <div className="testimonials-track scroll-right">
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <img src="https://i.pravatar.cc/150?img=7" alt="Kathryn Murphy" />
                    </div>
                    <div className="testimonial-info">
                      <h3>Kathryn Murphy</h3>
                      <p>georgia.young@example.com</p>
                    </div>
                  </div>
                  <p className="testimonial-text">
                    This app helped me finally understand where my money was going. I set my budget goals and saved over $3,000 in just a few months. It's like having a personal finance coach in my pocket.
                  </p>
                  <div className="testimonial-footer">
                    <div className="testimonial-date">Feb 15, 2025</div>
                    <div className="testimonial-rating" aria-label="5 stars">
                      <span className="stars">{'★'.repeat(5)}</span>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <img src="https://i.pravatar.cc/150?img=8" alt="Dianne Russell" />
                    </div>
                    <div className="testimonial-info">
                      <h3>Dianne Russell</h3>
                      <p>tanya.hill@example.com</p>
                    </div>
                  </div>
                  <p className="testimonial-text">
                    The AI insights are gold. It alerts me to hidden fees, tracks my investments in real time, and even suggests better returns. I've optimized my portfolio thanks to this tool.
                  </p>
                  <div className="testimonial-footer">
                    <div className="testimonial-date">Feb 15, 2025</div>
                    <div className="testimonial-rating" aria-label="5 stars">
                      <span className="stars">{'★'.repeat(5)}</span>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <img src="https://i.pravatar.cc/150?img=9" alt="Arlene McCoy" />
                    </div>
                    <div className="testimonial-info">
                      <h3>Arlene McCoy</h3>
                      <p>debra.holt@example.com</p>
                    </div>
                  </div>
                  <p className="testimonial-text">
                    I work with international clients, and this platform makes currency conversion and payments effortless. Plus, the security features give me peace of mind.
                  </p>
                  <div className="testimonial-footer">
                    <div className="testimonial-date">Feb 15, 2025</div>
                    <div className="testimonial-rating" aria-label="5 stars">
                      <span className="stars">{'★'.repeat(5)}</span>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <img src="https://i.pravatar.cc/150?img=10" alt="Marvin McKinney" />
                    </div>
                    <div className="testimonial-info">
                      <h3>Marvin McKinney</h3>
                      <p>sara.cruz@example.com</p>
                    </div>
                  </div>
                  <p className="testimonial-text">
                    Clean UI, fast syncing, powerful analytics—I was blown away. It's like the Apple of fintech platforms. Highly recommended for anyone who loves data and design.
                  </p>
                  <div className="testimonial-footer">
                    <div className="testimonial-date">Feb 15, 2025</div>
                    <div className="testimonial-rating" aria-label="5 stars">
                      <span className="stars">{'★'.repeat(5)}</span>
                    </div>
                  </div>
                </div>

                {/* Duplicate for continuous scroll */}
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <img src="https://i.pravatar.cc/150?img=11" alt="Arlene McCoy" />
                    </div>
                    <div className="testimonial-info">
                      <h3>Arlene McCoy</h3>
                      <p>debra.holt@example.com</p>
                    </div>
                  </div>
                  <p className="testimonial-text">
                    I work with international clients, and this platform makes currency conversion and payments effortless. Plus, the security features give me peace of mind.
                  </p>
                  <div className="testimonial-footer">
                    <div className="testimonial-date">Feb 15, 2025</div>
                    <div className="testimonial-rating" aria-label="5 stars">
                      <span className="stars">{'★'.repeat(5)}</span>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <img src="https://i.pravatar.cc/150?img=12" alt="Marvin McKinney" />
                    </div>
                    <div className="testimonial-info">
                      <h3>Marvin McKinney</h3>
                      <p>sara.cruz@example.com</p>
                    </div>
                  </div>
                  <p className="testimonial-text">
                    Clean UI, fast syncing, powerful analytics—I was blown away. It's like the Apple of fintech platforms. Highly recommended for anyone who loves data and design.
                  </p>
                  <div className="testimonial-footer">
                    <div className="testimonial-date">Feb 15, 2025</div>
                    <div className="testimonial-rating" aria-label="5 stars">
                      <span className="stars">{'★'.repeat(5)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="stats-section">
            <div className="stats-grid">
              <div className="stat">

                <div className="stat-value">99.9%</div>
                <div className="stat-label">Uptime SLA</div>
              </div>
              <div className="stat">
                <div className="stat-value">500+</div>
                <div className="stat-label">Enterprise Clients</div>
              </div>
              <div className="stat">
                <div className="stat-value">10PB+</div>
                <div className="stat-label">Data Managed</div>
              </div>
              <div className="stat">
                <div className="stat-value">&lt;1min</div>
                <div className="stat-label">Average Recovery</div>
              </div>
            </div>
          </section>

          {/* Solutions Section */}
          <section className="solutions-section">
            <div className="solutions-header">
              <div className="solutions-title">Complete Data Lifecycle Solutions</div>
              <div className="solutions-desc">Six integrated modules to secure, manage, and unlock the value of your enterprise data.</div>
            </div>
            <div className="solutions-grid">
              <div className="solution-card" onClick={() => { setCurrentPage('archival'); window.scrollTo(0, 0); }} style={{ cursor: 'pointer' }}>
                <div className="solution-icon archival">
                  {/* Archive box icon */}
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><rect x="6" y="10" width="26" height="18" rx="4" stroke="#8b5cf6" strokeWidth="2.2" /><rect x="10" y="16" width="18" height="2.5" rx="1.2" fill="#8b5cf6" /><rect x="14" y="21" width="10" height="2.5" rx="1.2" fill="#8b5cf6" /></svg>
                </div>
                <div className="solution-title">Archival Data</div>
                <div className="solution-desc">Policy-driven cold storage with warm retrieval and legal holds.</div>
                <a className="solution-link" href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('archival'); window.scrollTo(0, 0); }}>Learn More &rarr;</a>
              </div>
              <div className="solution-card" onClick={() => { setCurrentPage('backup'); window.scrollTo(0, 0); }} style={{ cursor: 'pointer' }}>
                <div className="solution-icon backup">
                  {/* Database icon */}
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><ellipse cx="19" cy="12" rx="11" ry="5" stroke="#8b5cf6" strokeWidth="2.2" /><rect x="8" y="12" width="22" height="14" rx="6" stroke="#8b5cf6" strokeWidth="2.2" /><ellipse cx="19" cy="26" rx="11" ry="5" stroke="#8b5cf6" strokeWidth="2.2" /></svg>
                </div>
                <div className="solution-title">Data Backup</div>
                <div className="solution-desc">Incremental, immutable backups with instant restore capabilities.</div>
                <a className="solution-link" href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('backup'); window.scrollTo(0, 0); }}>Learn More &rarr;</a>
              </div>
              <div className="solution-card" onClick={() => { setCurrentPage('reports'); window.scrollTo(0, 0); }} style={{ cursor: 'pointer' }}>
                <div className="solution-icon analytics">
                  {/* Analytics bar chart icon */}
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><rect x="8" y="22" width="4" height="8" rx="2" fill="#8b5cf6" /><rect x="16" y="16" width="4" height="14" rx="2" fill="#8b5cf6" /><rect x="24" y="10" width="4" height="20" rx="2" fill="#8b5cf6" /></svg>
                </div>
                <div className="solution-title">Reports & Analytics</div>
                <div className="solution-desc">Unified reporting layer with dashboards and comprehensive exports.</div>
                <a className="solution-link" href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('reports'); window.scrollTo(0, 0); }}>Learn More &rarr;</a>
              </div>
              <div className="solution-card" onClick={() => { setCurrentPage('scanning'); window.scrollTo(0, 0); }} style={{ cursor: 'pointer' }}>
                <div className="solution-icon scanning">
                  {/* Scan/QR icon */}
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><rect x="8" y="8" width="6" height="6" rx="2" stroke="#8b5cf6" strokeWidth="2.2" /><rect x="24" y="8" width="6" height="6" rx="2" stroke="#8b5cf6" strokeWidth="2.2" /><rect x="8" y="24" width="6" height="6" rx="2" stroke="#8b5cf6" strokeWidth="2.2" /><rect x="24" y="24" width="6" height="6" rx="2" stroke="#8b5cf6" strokeWidth="2.2" /></svg>
                </div>
                <div className="solution-title">Scanning</div>
                <div className="solution-desc">High-volume document capture with intelligent queue management.</div>
                <a className="solution-link" href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('scanning'); window.scrollTo(0, 0); }}>Learn More &rarr;</a>
              </div>
              <div className="solution-card" onClick={() => { setCurrentPage('ocr'); window.scrollTo(0, 0); }} style={{ cursor: 'pointer' }}>
                <div className="solution-icon ocr">
                  {/* OCR document icon */}
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><rect x="10" y="8" width="18" height="22" rx="4" stroke="#8b5cf6" strokeWidth="2.2" /><rect x="14" y="14" width="10" height="2.5" rx="1.2" fill="#8b5cf6" /><rect x="14" y="19" width="10" height="2.5" rx="1.2" fill="#8b5cf6" /><rect x="14" y="24" width="6" height="2.5" rx="1.2" fill="#8b5cf6" /></svg>
                </div>
                <div className="solution-title">OCR</div>
                <div className="solution-desc">Accurate text extraction with entity detection and auto-tagging.</div>
                <a className="solution-link" href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('ocr'); window.scrollTo(0, 0); }}>Learn More &rarr;</a>
              </div>
              <div className="solution-card" onClick={() => { setCurrentPage('cti'); window.scrollTo(0, 0); }} style={{ cursor: 'pointer' }}>
                <div className="solution-icon cti">
                  {/* Phone/CTI icon */}
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><path d="M12 14c2.5 5 8.5 11 13 13l3-3c.5-.5 1.3-.5 1.8 0l2.2 2.2c.5.5.5 1.3 0 1.8-2.2 2.2-4.5 3.5-7.5 2.5-4.5-1.5-10.5-7.5-12-12-1-3 0-5.3 2.5-7.5.5-.5 1.3-.5 1.8 0L14 9c.5.5.5 1.3 0 1.8l-3 3z" stroke="#8b5cf6" strokeWidth="2.2" fill="none" /></svg>
                </div>
                <div className="solution-title">Calling (CTI)</div>
                <div className="solution-desc">Click-to-call, call logging, recordings, and analytics.</div>
                <a className="solution-link" href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('cti'); window.scrollTo(0, 0); }}>Learn More &rarr;</a>
              </div>
            </div>
          </section>


          {/* Analytics Dashboard Section */}
          <section className="analytics-dashboard-section">
            
            <AnalyticsDashboard />
          </section>


          {/* Our Values Section (before footer) */}
          <section className="blog-values">
            <div className="values-header">
              <div className="values-kicker">Why Enterprise Leaders Choose Kloudvault</div>
              <h3 className="values-title">Built for scale, security, and compliance</h3>
            </div>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  {/* Shield icon */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div className="value-title">Enterprise Security</div>
                <p className="value-desc">
                  SOC 2, ISO 27001, GDPR-ready compliance built from day one.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  {/* Bolt icon */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8Z" />
                  </svg>
                </div>
                <div className="value-title">Lightning Fast</div>
                <p className="value-desc">
                  Instant data retrieval and real-time analytics across all modules.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  {/* Users icon */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="value-title">Cloud Native</div>
                <p className="value-desc">
                  Scale effortlessly without infrastructure overhead or complexity.
                </p>
              </div>
            </div>
          </section>

       

          {/* CTA Section */}
          <section className="products-cta-section">
            <div className="products-cta-content">
              <h2 className="products-cta-title">
                Ready to Secure Your Data?
              </h2>
              <p className="products-cta-desc">
                Join hundreds of enterprises trusting Kloudvault with their most critical data.
              </p>
              {/* <button className="products-cta-button">
                Book a Demo <span className="cta-arrow">→</span>
              </button> */}
              <div className="hero-ctas">
                <button className="cta nav-demo" onClick={() => goTo('support')}>Book a Demo →</button>
                <button className="cta secondary" onClick={() => goTo('company')}>View Pricing</button>
              </div>

            </div>
          </section>

        

          {/* Footer Section */}
          <footer className="site-footer">
            <div className="footer-inner">
              <div className="footer-brand">
                <div className="brand-logo">
                  <img src="Kloudvault logo.png" alt="Kloudvault" />
                </div>
                <p className="footer-desc">
                  Enterprise-ready data lifecycle solutions—secure, compliant, and natively cloud.
                </p>
                <div className="footer-badges">
                  <span className="badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" color="#d4af37">
                      <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z"/>
                      <path d="M9.5 12l2 2 4-4"/>
                    </svg>
                    SOC 2
                  </span>
                  <span className="badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" color="#d4af37">
                      <circle cx="12" cy="12" r="9"/>
                      <path d="M8 12h8"/>
                      <path d="M12 8v8"/>
                    </svg>
                    ISO 27001
                  </span>
                  <span className="badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" color="#d4af37">
                      <rect x="4" y="10" width="16" height="10" rx="2"/>
                      <path d="M8 10V7a4 4 0 0 1 8 0v3"/>
                    </svg>
                    GDPR Ready
                  </span>
                </div>
                <div className="newsletter">
                  <p>Subscribe to our newsletter</p>
                  <div className="newsletter-input">
                    <input type="email" placeholder="your@email.com" />
                    <button>Subscribe</button>
                  </div>
                </div>
              </div>

              <div className="footer-links">
                <h4>Solutions</h4>
                <a href="#archival">Archival Data</a>
                <a href="#backup">Data Backup</a>
                <a href="#reports">Reports & Analytics</a>
                <a href="#scanning">Scanning</a>
                <a href="#ocr">OCR</a>
                <a href="#cti">Calling (CTI)</a>
              </div>

              <div className="footer-links">
                <h4>Company</h4>
                <a href="#blogs">About</a>
                <a href="#company">Pricing</a>
                <a href="#support">Contact</a>
                <a href="#">Careers</a>
                <a href="#">Resources</a>
              </div>

              <div className="footer-links">
                <h4>Legal</h4>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Security</a>
                <a href="#">Compliance</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="footer-copyright">
                © 2025 Kloudrac. All rights reserved.
              </div>
              <div className="footer-backing">
                Backed by Kloudrac's decade of cloud delivery.
              </div>
            </div>
          </footer>
        </>
      ) : currentPage === 'products' ? (
        <div className="products-page">
          <div className='product-space' style={{ display: "flex", width: "300px", height: "50px" }}></div>
          <section className="products-hero">
            <div className="products-hero-content">
              {/* <div className="products-arrow-up">↑</div> */}
              <h1 className="products-banner-title">
                Complete Data Lifecycle <span className="products-banner-accent">Solutions</span>
              </h1>
              <p className="products-banner-desc">
                Six integrated modules designed to secure, manage, and unlock the value of your enterprise data—all from one unified platform.
              </p>
            </div>
          </section>

          {/* Solutions Section */}
          <section className="solutions-section">
            <div className="solutions-header">
              {/* <div className="solutions-title">Complete Data Lifecycle Solutions</div> */}
              {/* <div className="solutions-desc">Six integrated modules to secure, manage, and unlock the value of your enterprise data.</div> */}
            </div>
            <div className="products-grid">
              {/* Archival Data */}
              <div className="product-card compact">
                <div className="solution-icon archival">
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><rect x="6" y="10" width="26" height="18" rx="4" stroke="#8b5cf6" strokeWidth="2.2" /><rect x="10" y="16" width="18" height="2.5" rx="1.2" fill="#8b5cf6" /><rect x="14" y="21" width="10" height="2.5" rx="1.2" fill="#8b5cf6" /></svg>
                </div>
                <div className="product-head">
                  <div className="product-title">Archival Data</div>
                  <div className="product-subtitle">Policy-driven cold storage with warm retrieval.</div>
                </div>
                <p className="product-desc">Archive historical data with intelligent lifecycle policies. Reduce primary storage costs while maintaining instant access for compliance and legal holds.</p>
                <ul className="product-points">
                  <li>Automated tiering</li>
                  <li>Legal hold management</li>
                  <li>Instant retrieval</li>
                  <li>Policy-based retention</li>
                </ul>
                <a className="product-link" href="#" onClick={(e) => { e.preventDefault(); goTo('archival'); }}>Learn More <span>→</span></a>
              </div>

              {/* Data Backup */}
              <div className="product-card compact">
                <div className="solution-icon backup">
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><ellipse cx="19" cy="12" rx="11" ry="5" stroke="#8b5cf6" strokeWidth="2.2" /><rect x="8" y="12" width="22" height="14" rx="6" stroke="#8b5cf6" strokeWidth="2.2" /><ellipse cx="19" cy="26" rx="11" ry="5" stroke="#8b5cf6" strokeWidth="2.2" /></svg>
                </div>
                <div className="product-head">
                  <div className="product-title">Data Backup</div>
                  <div className="product-subtitle">Incremental, immutable backups with instant restore.</div>
                </div>
                <p className="product-desc">Protect your critical business data with enterprise‑grade backup solutions. Automated, encrypted, and ready for instant recovery.</p>
                <ul className="product-points">
                  <li>Incremental backups</li>
                  <li>Point‑in‑time recovery</li>
                  <li>Immutable storage</li>
                  <li>Cross‑region replication</li>
                </ul>
                <a className="product-link" href="#" onClick={(e)=>{e.preventDefault(); goTo('backup');}}>Learn More <span>→</span></a>
              </div>

              {/* Reports & Analytics */}
              <div className="product-card compact">
                <div className="solution-icon analytics">
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><rect x="8" y="22" width="4" height="8" rx="2" fill="#8b5cf6" /><rect x="16" y="16" width="4" height="14" rx="2" fill="#8b5cf6" /><rect x="24" y="10" width="4" height="20" rx="2" fill="#8b5cf6" /></svg>
                </div>
                <div className="product-head">
                  <div className="product-title">Reports & Analytics</div>
                  <div className="product-subtitle">Unified insights across your entire data estate.</div>
                </div>
                <p className="product-desc">Transform data into actionable insights with comprehensive reporting and analytics across all modules.</p>
                <ul className="product-points">
                  <li>Custom dashboards</li>
                  <li>Automated reporting</li>
                  <li>Compliance analytics</li>
                  <li>Real‑time insights</li>
                </ul>
                <a className="product-link" href="#" onClick={(e)=>{e.preventDefault(); goTo('reports');}}>Learn More <span>→</span></a>
              </div>

              {/* Scanning */}
              <div className="product-card compact">
                <div className="solution-icon scanning">
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><rect x="8" y="8" width="6" height="6" rx="2" stroke="#8b5cf6" strokeWidth="2.2" /><rect x="24" y="8" width="6" height="6" rx="2" stroke="#8b5cf6" strokeWidth="2.2" /><rect x="8" y="24" width="6" height="6" rx="2" stroke="#8b5cf6" strokeWidth="2.2" /><rect x="24" y="24" width="6" height="6" rx="2" stroke="#8b5cf6" strokeWidth="2.2" /></svg>
                </div>
                <div className="product-head">
                  <div className="product-title">Scanning</div>
                  <div className="product-subtitle">High‑volume document capture at enterprise scale.</div>
                </div>
                <p className="product-desc">Digitize physical documents efficiently with intelligent scanning workflows and quality control.</p>
                <ul className="product-points">
                  <li>Batch processing</li>
                  <li>Queue management</li>
                  <li>Quality control</li>
                  <li>Multi‑format support</li>
                </ul>
                <a className="product-link" href="#" onClick={(e)=>{e.preventDefault(); goTo('scanning');}}>Learn More <span>→</span></a>
              </div>

              {/* OCR */}
              <div className="product-card compact">
                <div className="solution-icon ocr">
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><rect x="10" y="8" width="18" height="22" rx="4" stroke="#8b5cf6" strokeWidth="2.2" /><rect x="14" y="14" width="10" height="2.5" rx="1.2" fill="#8b5cf6" /><rect x="14" y="19" width="10" height="2.5" rx="1.2" fill="#8b5cf6" /><rect x="14" y="24" width="6" height="2.5" rx="1.2" fill="#8b5cf6" /></svg>
                </div>
                <div className="product-head">
                  <div className="product-title">OCR</div>
                  <div className="product-subtitle">Accurate text extraction with AI‑powered recognition.</div>
                </div>
                <p className="product-desc">Extract and index text from scanned documents with industry‑leading accuracy and entity detection.</p>
                <ul className="product-points">
                  <li>Multi‑language support</li>
                  <li>Entity detection</li>
                  <li>Auto‑tagging</li>
                  <li>Searchable archives</li>
                </ul>
                <a className="product-link" href="#" onClick={(e)=>{e.preventDefault(); goTo('ocr');}}>Learn More <span>→</span></a>
              </div>

              {/* Calling (CTI) */}
              <div className="product-card compact">
                <div className="solution-icon cti">
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><path d="M12 14c2.5 5 8.5 11 13 13l3-3c.5-.5 1.3-.5 1.8 0l2.2 2.2c.5.5.5 1.3 0 1.8-2.2 2.2-4.5 3.5-7.5 2.5-4.5-1.5-10.5-7.5-12-12-1-3 0-5.3 2.5-7.5.5-.5 1.3-.5 1.8 0L14 9c.5.5.5 1.3 0 1.8l-3 3z" stroke="#8b5cf6" strokeWidth="2.2" fill="none" /></svg>
                </div>
                <div className="product-head">
                  <div className="product-title">Calling (CTI)</div>
                  <div className="product-subtitle">Complete telephony integration for your CRM.</div>
                </div>
                <p className="product-desc">Integrate calling directly into your workflows with click‑to‑call, recordings, and comprehensive analytics.</p>
                <ul className="product-points">
                  <li>Click‑to‑call</li>
                  <li>Call recording</li>
                  <li>Call analytics</li>
                  <li>CRM integration</li>
                </ul>
                <a className="product-link" href="#" onClick={(e)=>{e.preventDefault(); goTo('cti');}}>Learn More <span>→</span></a>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="products-cta-section">
            <div className="products-cta-content">
              <h2 className="products-cta-title">Ready to Get Started?</h2>
              <p className="products-cta-desc">See how Kloudvault can transform your data lifecycle management.</p>
              <button className="products-cta-button">
                Book a Demo <span className="cta-arrow">→</span>
              </button>
            </div>
          </section>



          {/* Footer Section */}
          <footer className="site-footer">
            <div className="footer-inner">
              <div className="footer-brand">
                <div className="brand-logo">
                  <img src="Kloudvault logo.png" alt="Kloudvault" />
                </div>
                <p className="footer-desc">
                  Enterprise-ready data lifecycle solutions—secure, compliant, and natively cloud.
                </p>
                <div className="footer-badges">
                  <span className="badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" color="#d4af37">
                      <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z"/>
                      <path d="M9.5 12l2 2 4-4"/>
                    </svg>
                    SOC 2
                  </span>
                  <span className="badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" color="#d4af37">
                      <circle cx="12" cy="12" r="9"/>
                      <path d="M8 12h8"/>
                      <path d="M12 8v8"/>
                    </svg>
                    ISO 27001
                  </span>
                  <span className="badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" color="#d4af37">
                      <rect x="4" y="10" width="16" height="10" rx="2"/>
                      <path d="M8 10V7a4 4 0 0 1 8 0v3"/>
                    </svg>
                    GDPR Ready
                  </span>
                </div>
                <div className="newsletter">
                  <p>Subscribe to our newsletter</p>
                  <div className="newsletter-input">
                    <input type="email" placeholder="your@email.com" />
                    <button>Subscribe</button>
                  </div>
                </div>
              </div>

              <div className="footer-links">
                <h4>Solutions</h4>
                <a href="#archival">Archival Data</a>
                <a href="#backup">Data Backup</a>
                <a href="#reports">Reports & Analytics</a>
                <a href="#scanning">Scanning</a>
                <a href="#ocr">OCR</a>
                <a href="#cti">Calling (CTI)</a>
              </div>

              <div className="footer-links">
                <h4>Company</h4>
                <a href="#blogs">About</a>
                <a href="#company">Pricing</a>
                <a href="#support">Contact</a>
                <a href="#">Careers</a>
                <a href="#">Resources</a>
              </div>

              <div className="footer-links">
                <h4>Legal</h4>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Security</a>
                <a href="#">Compliance</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="footer-copyright">
                © 2025 Kloudrac. All rights reserved.
              </div>
              <div className="footer-backing">
                Backed by Kloudrac's decade of cloud delivery.
              </div>
            </div>
          </footer>
        </div>
      ) : currentPage === 'blogs' ? (
        <Blog />
      ) : currentPage === 'company' ? (
        <Company />
      ) : currentPage === 'support' ? (
        <Support />
      ) : currentPage === 'archival' ? (
        <Archival />
      ) : currentPage === 'backup' ? (
        <DataBackup />
      ) : currentPage === 'reports' ? (
        <ReportsAnalytics />
      ) : currentPage === 'scanning' ? (
        <Scanning />
      ) : currentPage === 'ocr' ? (
        <OCR />
      ) : currentPage === 'cti' ? (
        <CTI />
      ) 
      
      : null}

    </div>
  )
}