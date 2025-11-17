import React, { useState } from 'react'
import './archival.css'

export default function ReportsAnalytics(){
  const [tab, setTab] = useState('overview')
  const [openFAQ, setOpenFAQ] = useState(null)
  const [billing, setBilling] = useState('monthly')

  return (
    <div className="archival-page">
      <div className="blog-hero"></div>
      <section className="archival-hero">
        <div className="archival-hero-inner">
          <div className="archival-icon">
            {/* Bar chart icon */}
            <svg width="28" height="28" viewBox="0 0 38 38" fill="none"><rect x="8" y="22" width="4" height="8" rx="2" fill="#ffffff" opacity="0.9"/><rect x="16" y="16" width="4" height="14" rx="2" fill="#ffffff" opacity="0.9"/><rect x="24" y="10" width="4" height="20" rx="2" fill="#ffffff" opacity="0.9"/></svg>
          </div>
          <div className="archival-hero-text">
            <div className="archival-kicker">Reports & Analytics</div>
            <h1 className="archival-title">Unified insights across your entire data estate.</h1>
          </div>
        </div>
      </section>

      <div className="archival-tabs">
        <div className="archival-tabs-inner">
          <button className={`archival-tab ${tab==='overview'?'active':''}`} onClick={()=>setTab('overview')}>Overview</button>
          <button className={`archival-tab ${tab==='pricing'?'active':''}`} onClick={()=>setTab('pricing')}>Pricing</button>
          <button className={`archival-tab ${tab==='about'?'active':''}`} onClick={()=>setTab('about')}>About Us</button>
        </div>
      </div>

      <section className="archival-content">
        {tab==='overview' && (
          <div className="archival-overview">
            <div className="ov-head">
              <div className="ov-line">Turn data into decisions with comprehensive reporting and analytics. Pre-built dashboards, custom reports, and real-time insights across all Kloudvault modules.</div>
            </div>
            <div className="ov-grid">
              <div className="ov-card ov-problem">
                <div className="ov-title red">The Problem</div>
                <p className="ov-text">Data is scattered across multiple systems, making it impossible to get a complete picture. Manual reporting is time-consuming and error-prone.</p>
              </div>
              <div className="ov-card ov-solution">
                <div className="ov-title gold">Our Solution</div>
                <p className="ov-text">Our unified analytics platform aggregates data across archival, backup, scanning, OCR, and CTI systems. Build custom dashboards, automate reporting, and export insights in any format.</p>
              </div>
            </div>

            <div className="ov-features">
              <div className="ov-section-title">Key Features</div>
              <div className="feat-grid">
                <div className="feat-item"><span className="feat-dot">✓</span><span className="feat-text">Pre-built dashboards for compliance, storage, and usage</span></div>
                <div className="feat-item"><span className="feat-dot">✓</span><span className="feat-text">Scheduled reports with automated distribution</span></div>
                <div className="feat-item"><span className="feat-dot">✓</span><span className="feat-text">Export to PDF, Excel, CSV, and APIs</span></div>
                <div className="feat-item"><span className="feat-dot">✓</span><span className="feat-text">Custom report builder with drag-and-drop interface</span></div>
                <div className="feat-item"><span className="feat-dot">✓</span><span className="feat-text">Real-time analytics and alerting</span></div>
                <div className="feat-item"><span className="feat-dot">✓</span><span className="feat-text">Role-based access controls for sensitive data</span></div>
              </div>
            </div>

            <div className="ov-faq">
              <div className="ov-section-title">Frequently Asked Questions</div>
              <div className="faq-list">
                {[ 
                  { q: 'Can I create custom reports?', a: 'Yes. Our report builder lets you create custom reports using any data field, with filtering, grouping, and visualization options.' },
                  { q: 'How do I share reports?', a: 'Schedule automated distribution via email, export to common formats, or share via secure links with expiration dates.' },
                  { q: 'What compliance reports are available?', a: 'Pre-built reports for SOC 2, ISO 27001, GDPR, HIPAA, and more. Customize to meet your specific audit requirements.' }
                ].map((item, idx) => (
                  <div key={idx} className={`faq-item ${openFAQ===idx?'open':''}`}>
                    <button className="faq-question" onClick={()=> setOpenFAQ(openFAQ===idx?null:idx)}>
                      <span>{item.q}</span>
                      <span className="faq-chevron">{openFAQ===idx?'▾':'▸'}</span>
                    </button>
                    {openFAQ===idx && (
                      <div className="faq-answer">{item.a}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab==='pricing' && (
          <div className="pricing-wrap">
            <div className="pricing-eyebrow">Simple, Transparent Pricing</div>
            <h2 className="pricing-title">Choose the plan that fits your needs</h2>

            <div className="billing-toggle" role="tablist" aria-label="Billing period">
              <button className={`bt ${billing==='monthly'?'active':''}`} onClick={()=>setBilling('monthly')}>Monthly</button>
              <button className={`bt ${billing==='yearly'?'active':''}`} onClick={()=>setBilling('yearly')}>Yearly <span className="save">(Save 20%)</span></button>
            </div>

            <div className="plans">
              <div className="plan">
                <div className="plan-name">Starter</div>
                <div className="plan-price"><span className="currency">$</span><span className="amount">{billing==='monthly'?199:159}</span><span className="per">/month</span></div>
                {/* <div className="plan-included">1 Dashboard</div> */}
                <ul className="plan-list">
                  <li>Basic dashboards</li>
                  <li>10 custom reports</li>
                  <li>Email supportt</li>
                </ul>
                <button className="plan-cta subtle">Get Started</button>
              </div>
              <div className="plan featured">
                <div className="badge">Most Popular</div>
                <div className="plan-name">Growth</div>
                <div className="plan-price"><span className="currency">$</span><span className="amount">{billing==='monthly'?699:559}</span><span className="per">/month</span></div>
                {/* <div className="plan-included">10 Dashboards</div> */}
                <ul className="plan-list">
                  <li>Unlimited custom reports</li>
                  <li>Scheduled reporting</li>
                  <li>API access</li>
                  <li>Priority support</li>

                </ul>
                <button className="plan-cta gradient">Get Started</button>
              </div>
              <div className="plan">
                <div className="plan-name">Enterprise</div>
                <div className="plan-price"><span className="custom">Custom</span></div>
                {/* <div className="plan-included">Unlimited</div> */}
                <ul className="plan-list">
                  <li>Everything in Growth</li>
                  <li>White-label reports</li>
                  <li>Dedicated support</li>
                  <li>Custom integrations</li>

                </ul>
                <button className="plan-cta subtle">Contact Sales</button>
              </div>
            </div>
          </div>
        )}

        {tab==='about' && (
          <div className="about-wrap">
            <div className="about-eyebrow">About Kloudvault</div>
            <h3 className="about-headline">Kloudvault is built by Kloudrac, a team with over a decade of cloud infrastructure and data management experience.</h3>
            <p className="about-desc">We've worked with enterprises across BFSI, healthcare, and public sector organizations to solve their most complex data challenges. Kloudvault represents the culmination of that experience—a unified platform that eliminates the complexity and vendor sprawl of traditional data lifecycle management.</p>

            <div className="about-highlights">
              <div className="ah-item">
                <div className="ah-icon">
                  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
                </div>
                <div className="ah-title">Security First</div>
                <div className="ah-text">SOC 2, ISO 27001 certified with zero‑trust architecture</div>
              </div>
              <div className="ah-item">
                <div className="ah-icon">
                  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8Z"/></svg>
                </div>
                <div className="ah-title">Built for Scale</div>
                <div className="ah-text">Managing 10PB+ across 500+ enterprise customers</div>
              </div>
              <div className="ah-item">
                <div className="ah-icon">
                  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div className="ah-title">Expert Support</div>
                <div className="ah-text">Dedicated success team with 24/7 enterprise support</div>
              </div>
            </div>

            <div className="about-cta">
              <div className="cta-left">
                <div className="cta-title">Ready to learn more?</div>
                <div className="cta-sub">Schedule a personalized demo with our team to see how Reports & Analytics can transform your data operations.</div>
              </div>
              <div className="cta-right">
                <button className="cta primary">Book a Demo</button>
              </div>
            </div>
          </div>
        )}
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
