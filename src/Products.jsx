import React from 'react'

export default function Products({ goTo }){
  const handleLearn = (e, page) => {
    e.preventDefault()
    if (typeof goTo === 'function') {
      goTo(page)
    } else {
      window.scrollTo(0, 0)
    }
  }
  return (
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
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><rect x="6" y="10" width="26" height="18" rx="4" stroke="#bfaaff" strokeWidth="2.2" /><rect x="10" y="16" width="18" height="2.5" rx="1.2" fill="#bfaaff" /><rect x="14" y="21" width="10" height="2.5" rx="1.2" fill="#bfaaff" /></svg>
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
            <a className="product-link" href="#" onClick={(e)=>handleLearn(e,'archival')}>Learn More <span>→</span></a>
          </div>

          {/* Data Backup */}
          <div className="product-card compact">
            <div className="solution-icon backup">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><ellipse cx="19" cy="12" rx="11" ry="5" stroke="#bfaaff" strokeWidth="2.2" /><rect x="8" y="12" width="22" height="14" rx="6" stroke="#bfaaff" strokeWidth="2.2" /><ellipse cx="19" cy="26" rx="11" ry="5" stroke="#bfaaff" strokeWidth="2.2" /></svg>
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
            <a className="product-link" href="#">Learn More <span>→</span></a>
          </div>

          {/* Reports & Analytics */}
          <div className="product-card compact">
            <div className="solution-icon analytics">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><rect x="8" y="22" width="4" height="8" rx="2" fill="#bfaaff" /><rect x="16" y="16" width="4" height="14" rx="2" fill="#bfaaff" /><rect x="24" y="10" width="4" height="20" rx="2" fill="#bfaaff" /></svg>
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
            <a className="product-link" href="#">Learn More <span>→</span></a>
          </div>

          {/* Scanning */}
          <div className="product-card compact">
            <div className="solution-icon scanning">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><rect x="8" y="8" width="6" height="6" rx="2" stroke="#bfaaff" strokeWidth="2.2" /><rect x="24" y="8" width="6" height="6" rx="2" stroke="#bfaaff" strokeWidth="2.2" /><rect x="8" y="24" width="6" height="6" rx="2" stroke="#bfaaff" strokeWidth="2.2" /><rect x="24" y="24" width="6" height="6" rx="2" stroke="#bfaaff" strokeWidth="2.2" /></svg>
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
            <a className="product-link" href="#">Learn More <span>→</span></a>
          </div>

          {/* OCR */}
          <div className="product-card compact">
            <div className="solution-icon ocr">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><rect x="10" y="8" width="18" height="22" rx="4" stroke="#bfaaff" strokeWidth="2.2" /><rect x="14" y="14" width="10" height="2.5" rx="1.2" fill="#bfaaff" /><rect x="14" y="19" width="10" height="2.5" rx="1.2" fill="#bfaaff" /><rect x="14" y="24" width="6" height="2.5" rx="1.2" fill="#bfaaff" /></svg>
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
            <a className="product-link" href="#">Learn More <span>→</span></a>
          </div>

          {/* Calling (CTI) */}
          <div className="product-card compact">
            <div className="solution-icon cti">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><path d="M12 14c2.5 5 8.5 11 13 13l3-3c.5-.5 1.3-.5 1.8 0l2.2 2.2c.5.5.5 1.3 0 1.8-2.2 2.2-4.5 3.5-7.5 2.5-4.5-1.5-10.5-7.5-12-12-1-3 0-5.3 2.5-7.5.5-.5 1.3-.5 1.8 0L14 9c.5.5.5 1.3 0 1.8l-3 3z" stroke="#bfaaff" strokeWidth="2.2" fill="none" /></svg>
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
            <a className="product-link" href="#">Learn More <span>→</span></a>
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
  )
}
