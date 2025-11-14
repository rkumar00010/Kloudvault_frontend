import React from 'react';

export default function Blog() {
  return (
  <>
  
    <div className="blog-page">
      
      <div className="blog-hero"></div>
      <section className="products-hero">
        <div className="products-hero-content">
          <h1 className="products-banner-title">
            Building the Future of <span className="products-banner-accent">Data Management</span>
          </h1>
          <p className="products-banner-desc">
            Kloudvault by Kloudrac represents over a decade of cloud infrastructure expertise, built to solve the
            complex data lifecycle challenges faced by modern enterprises.
          </p>
        </div>
      </section>

      {/* Stats Section (reuse existing styles) */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat">
            <div className="stat-value">10+</div>
            <div className="stat-label">Years of Experience</div>
          </div>
          <div className="stat">
            <div className="stat-value">500+</div>
            <div className="stat-label">Enterprise Customers</div>
          </div>
          <div className="stat">
            <div className="stat-value">10PB+</div>
            <div className="stat-label">Data Under Management</div>
          </div>
          <div className="stat">
            <div className="stat-value">99.9%</div>
            <div className="stat-label">Uptime SLA</div>
          </div>
        </div>
      </section>

      {/* Mission Section (above footer) */}
      <section className="blog-mission">
        <div className="mission-inner">
          <div className="mission-left">
            <div className="mission-kicker">Our Mission</div>
            <h3 className="mission-title">
              To eliminate the complexity and vendor sprawl of enterprise data lifecycle management with a unified,
              cloud-native platform.
            </h3>
            <p className="mission-body">
              We've seen firsthand how organizations struggle with disconnected archival systems, backup solutions,
              reporting tools, and document workflows. Each vendor adds cost, complexity, and compliance risk.
              Kloudvault unifies these capabilities into one secure, scalable platform—so you can focus on your
              business, not your infrastructure.
            </p>
          </div>
          <div className="mission-right">
            <div className="mission-canvas">
              <div className="mission-orb" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section (before footer) */}
      <section className="blog-values">
        <div className="values-header">
          <div className="values-kicker">Our Values</div>
          <h3 className="values-title">The principles that guide everything we build</h3>
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
            <div className="value-title">Security First</div>
            <p className="value-desc">We believe security and compliance should be built-in, not bolted on. Every feature is designed with zero-trust principles and enterprise-grade encryption.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              {/* Bolt icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8Z" />
              </svg>
            </div>
            <div className="value-title">Innovation Driven</div>
            <p className="value-desc">We continuously invest in R&D to stay ahead of evolving data challenges. Our platform leverages the latest in AI, cloud infrastructure, and automation.</p>
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
            <div className="value-title">Customer Obsessed</div>
            <p className="value-desc">Your success is our success. We provide white-glove onboarding, 24/7 support, and dedicated account management to ensure you get maximum value.</p>
          </div>
        </div>
      </section>

      {/* Meet the Team (before footer) */}
      <section className="blog-team">
        <div className="team-header">
          <div className="team-kicker">Meet the Team</div>
          <h3 className="team-title">Experts dedicated to your data success</h3>
        </div>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-card-title">Leadership Team</div>
            <p className="team-card-desc">Decades of combined experience in cloud infrastructure, data management, and enterprise software from companies like AWS, Google Cloud, and Microsoft.</p>
          </div>
          <div className="team-card">
            <div className="team-card-title">Engineering</div>
            <p className="team-card-desc">World‑class engineers building scalable, secure systems that handle petabytes of data across global regions with sub‑second latency.</p>
          </div>
          <div className="team-card">
            <div className="team-card-title">Customer Success</div>
            <p className="team-card-desc">Dedicated specialists who partner from day one—ensuring seamless migration, adoption, and ongoing optimization.</p>
          </div>
        </div>
      </section>

      {/* Security & Compliance (before footer) */}
      <section className="blog-compliance">
        <div className="comp-header">
          <div className="comp-kicker">Security & Compliance</div>
          <h3 className="comp-title">Built to meet the highest industry standards</h3>
        </div>
        <div className="comp-grid">
          <div className="comp-card">
            <div className="comp-icon">
              {/* Shield */}
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /></svg>
            </div>
            <div className="comp-title-sm">SOC 2 Type II</div>
            <div className="comp-sub">Annual audits</div>
          </div>
          <div className="comp-card">
            <div className="comp-icon">
              {/* Ribbon */}
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5" /></svg>
            </div>
            <div className="comp-title-sm">ISO 27001</div>
            <div className="comp-sub">Certified</div>
          </div>
          <div className="comp-card">
            <div className="comp-icon">
              {/* Globe */}
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 0 0 20M12 2a15.3 15.3 0 0 1 0 20" /></svg>
            </div>
            <div className="comp-title-sm">GDPR Ready</div>
            <div className="comp-sub">EU compliance</div>
          </div>
          <div className="comp-card">
            <div className="comp-icon">
              {/* Trend */}
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 7-7" /><path d="M21 21H3" /></svg>
            </div>
            <div className="comp-title-sm">HIPAA</div>
            <div className="comp-sub">Healthcare ready</div>
          </div>
        </div>
      </section>

      {/* Careers CTA (before footer) */}
      <section className="blog-careers">
        <div className="careers-inner">
          <div className="careers-kicker">Join Us on This Journey</div>
          <h3 className="careers-title">We're hiring talented individuals who share our passion for solving complex data challenges.</h3>
          <div className="careers-actions">
            <a className="careers-btn primary" href="#">View Open Positions</a>
            <a className="careers-btn ghost" href="#">Contact Us</a>
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
              <span className="badge">SQL 2</span>
              <span className="badge">ISO 27001</span>
              <span className="badge">GDPR Ready</span>
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
            <a href="#">Archival Data</a>
            <a href="#">Data Backup</a>
            <a href="#">Reports & Analytics</a>
            <a href="#">Scanning</a>
            <a href="#">OCR</a>
            <a href="#">Calling (CTI)</a>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
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
          <div className="footeropyright">
            © 2025 Kloudrac. All rights reserved.
          </div>
          <div className="footer-backing">
            Backed by Kloudrac's decade of cloud delivery.
          </div>
        </div>
      </footer>
    </div>
  </>
  );
}
