import React, { useState } from 'react'
import '../style/archival.css'

export default function Archival(){
  const [tab, setTab] = useState('overview')
  const [openFAQ, setOpenFAQ] = useState(null)
  const [billing, setBilling] = useState('monthly') // 'monthly' | 'yearly'
  return (
    <div className="archival-page">
      {/* <div className="blog-hero"></div> */}
      <section className="archival-hero">
        <div className="archival-hero-inner">
          <div className="archival-icon">
            <svg width="28" height="28" viewBox="0 0 38 38" fill="none"><rect x="6" y="10" width="26" height="18" rx="4" stroke="#ffffff" strokeWidth="1.8" opacity="0.9"/><rect x="10" y="16" width="18" height="2.5" rx="1.2" fill="#ffffff" opacity="0.9"/><rect x="14" y="21" width="10" height="2.5" rx="1.2" fill="#ffffff" opacity="0.9"/></svg>
          </div>
          <div className="archival-hero-text">
            
            <div className="archival-kicker">Data Backup</div>
            <h1 className="archival-title">Incremental, immutable backups with instant restore.</h1>
          </div>
        </div>
      </section>

      <div className="archival-tabs">
        <div className="archival-tabs-inner">
          <button className={`archival-tab ${tab==='overview'?'active':''}`} onClick={()=>setTab('overview')}>Overview</button>
          <button className={`archival-tab ${tab==='pricing'?'':''}`} onClick={()=>setTab('pricing')}>Pricing</button>
          <button className={`archival-tab ${tab==='about'?'':''}`} onClick={()=>setTab('about')}>About Us</button>
        </div>
      </div>

      <section className="archival-content">
        {tab==='overview' && (
          <div className="archival-overview">
            <div className="ov-head">
              <div className="ov-line">Enterprise-grade backup with incremental snapshots, immutable storage, and point-in-time recovery. Protect against ransomware with air-gapped backups.</div>
              {/* <div className="ov-line">Automated lifecycle policies, legal hold workflows, and compliance‑ready audit trails.</div> */}
            </div>
            <div className="ov-grid">
              <div className="ov-card ov-problem">
                <div className="ov-title red">The Problem</div>
                <p className="ov-text">Traditional backups are slow, expensive, and vulnerable to ransomware. Recovery times measured in hours or days put businesses at risk.</p>
              </div>
              <div className="ov-card ov-solution">
                <div className="ov-title gold">Our Solution</div>
                <p className="ov-text">Our incremental backup engine captures only changes, reducing storage and time by 95%. Immutable storage prevents tampering, and instant recovery gets you back online in minutes.</p>
              </div>
            </div>

            <div className="ov-features">
              <div className="ov-section-title">Key Features</div>
              <div className="feat-grid">
                <div className="feat-item"><span className="feat-dot">✓</span><span className="feat-text">Incremental forever backups</span></div>
                <div className="feat-item"><span className="feat-dot">✓</span><span className="feat-text">Immutable storage prevents ransomware</span></div>
                <div className="feat-item"><span className="feat-dot">✓</span><span className="feat-text">Automated backup verification</span></div>
                <div className="feat-item"><span className="feat-dot">✓</span><span className="feat-text">Point-in-time recovery to any snapshot</span></div>
                <div className="feat-item"><span className="feat-dot">✓</span><span className="feat-text">Cross-region and cross-cloud replication</span></div>
                <div className="feat-item"><span className="feat-dot">✓</span><span className="feat-text">Granular file and folder recovery</span></div>
              </div>
            </div>

            <div className="ov-faq">
              <div className="ov-section-title">Frequently Asked Questions</div>
              <div className="faq-list">
                {[ 
                  { q: 'What is the Recovery time objective (RTO)?', a: 'For instant recovery, RTO is typically under 5 minutes. Full system restores depend on data size but average 15-30 minutes for most workloads.' },
                  { q: 'Hopw does immutable storage work ?', a: 'Backups are written in append-only mode with WORM (write once, read many) guarantees. Even if an attacker gains access, they cannot delete or modify backups.' },
                  { q: 'Can I backup databases and VMs?', a: 'Yes. We support application-aware backups for databases (SQL Server, Oracle, PostgreSQL, MongoDB) and hypervisors (VMware, Hyper-V, KVM).' }
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
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{billing==='monthly'?199:239}</span>
                  <span className="per">/month</span>
                </div>
                <div className="plan-included">500GB included</div>
                <ul className="plan-list">
                  <li>Daily backups</li>
                  <li>7‑day retention</li>
                  <li>Email support</li>
                </ul>
                <button className="plan-cta subtle">Get Started</button>
              </div>

              <div className="plan featured">
                <div className="badge">Most Popular</div>
                <div className="plan-name">Growth</div>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{billing==='monthly'?799:799}</span>
                  <span className="per">/month</span>
                </div>
                <div className="plan-included">5TB included</div>
                <ul className="plan-list">
                  <li>Hourly backups</li>
                  <li>30-day retention</li>
                  <li>Instant recovery</li>
                  <li>Priority support</li>
                </ul>
                <button className="plan-cta gradient">Get Started</button>
              </div>

              <div className="plan">
                <div className="plan-name">Enterprise</div>
                <div className="plan-price">
                  <span className="custom">Custom</span>
                </div>
                <div className="plan-included">Unlimited included</div>
                <ul className="plan-list">
                  <li>Everything in Growth</li>
                  <li>Immutable storage</li>
                  <li>Cross-cloud replication</li>
                  <li>Dedicated support</li>
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
                <div className="cta-sub">Schedule a personalized demo with our team to see how Archival Data can transform your data operations.</div>
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
