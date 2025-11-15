import React, { useState } from 'react'
import '../style/archival.css'

export default function CTI(){
  const [tab, setTab] = useState('overview')
  const [openFAQ, setOpenFAQ] = useState(null)
  const [billing, setBilling] = useState('monthly')

  return (
    <div className="archival-page">
      <section className="archival-hero">
        <div className="archival-hero-inner">
          <div className="archival-icon">
            {/* Phone/CTI icon */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.6" opacity="0.9"><path d="M12 14c2.5 5 8.5 11 13 13l3-3c.5-.5 1.3-.5 1.8 0l2.2 2.2c.5.5.5 1.3 0 1.8-2.2 2.2-4.5 3.5-7.5 2.5-4.5-1.5-10.5-7.5-12-12-1-3 0-5.3 2.5-7.5.5-.5 1.3-.5 1.8 0L14 9c.5.5.5 1.3 0 1.8l-3 3z"/></svg>
          </div>
          <div className="archival-hero-text">
            <div className="archival-kicker">Calling (CTI)</div>
            <h1 className="archival-title">Complete telephony integration for your CRM.</h1>
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
              <div className="ov-line">Integrate calling directly into your workflows with click-to-call, automatic call logging, recordings, and comprehensive analytics. Transform your customer communications.</div>
            </div>
            <div className="ov-grid">
              <div className="ov-card ov-problem">
                <div className="ov-title red">The Problem</div>
                <p className="ov-text">Manual dialing wastes agent time. Call data is disconnected from CRM systems. Compliance requires call recording but storage is expensive.</p>
              </div>
              <div className="ov-card ov-solution">
                <div className="ov-title gold">Our Solution</div>
                <p className="ov-text">Our CTI platform integrates with your CRM to enable one-click calling, automatic logging, cloud recording, and analytics—all within your existing workflow.</p>
              </div>
            </div>

            <div className="ov-features">
              <div className="ov-section-title">Key Features</div>
              <div className="feat-grid">
                <div className="feat-item"><span className="feat-dot">✓</span><span className="feat-text">Click-to-call from any CRM or application</span></div>
                <div className="feat-item"><span className="feat-dot">✓</span><span className="feat-text">Cloud-based call recording and storage</span></div>
                <div className="feat-item"><span className="feat-dot">✓</span><span className="feat-text">IVR and call routing workflows</span></div>
                <div className="feat-item"><span className="feat-dot">✓</span><span className="feat-text">Automatic call logging and CRM updates</span></div>
                <div className="feat-item"><span className="feat-dot">✓</span><span className="feat-text">Real-time and historical call analytics</span></div>
                <div className="feat-item"><span className="feat-dot">✓</span><span className="feat-text">
Compliance-ready recording retention</span></div>
              </div>
            </div>

            <div className="ov-faq">
              <div className="ov-section-title">Frequently Asked Questions</div>
              <div className="faq-list">
                {[ 
                  { q: 'Which CRM systems do you integrate with?', a: 'We have native integrations for Salesforce, HubSpot, Zoho, and Microsoft Dynamics. Custom integrations are available via our API.' },
                  { q: 'How long are call recordings stored?', a: 'Recording retention is configurable from 30 days to unlimited. Enterprise plans include archival integration for long-term compliance storage.' },
                  { q: 'Can I use my existing phone system?', a: 'Yes. We support SIP trunking and can integrate with most PBX systems including Asterisk, FreePBX, and Cisco.' }
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
                <div className="plan-price"><span className="currency">$</span><span className="amount">{billing==='monthly'?25:39}</span><span className="per">/month</span></div>
                <ul className="plan-list">
                  <li>Click-to-call</li>
                  <li>Basic analytics</li>
                  <li>Email support</li>
                </ul>
                <button className="plan-cta subtle">Get Started</button>
              </div>
              <div className="plan featured">
                <div className="badge">Most Popular</div>
                <div className="plan-name">Growth</div>
                <div className="plan-price"><span className="currency">$</span><span className="amount">{billing==='monthly'?45:159}</span><span className="per">/month</span></div>
                <ul className="plan-list">
                  <li>Call recording</li>
                  <li>CRM integration</li>
                  <li>Advanced analytics</li>
                  <li>Priority support</li>

                </ul>
                <button className="plan-cta gradient">Get Started</button>
              </div>
              <div className="plan">
                <div className="plan-name">Enterprise</div>
                <div className="plan-price"><span className="custom">Custom</span></div>
                <ul className="plan-list">
                  <li>Everything in Growth</li>
                  <li>Custom IVR</li>
                  <li>Dedicated support</li>
                  <li>SIP trunking</li>

                </ul>
                <button className="plan-cta subtle">Contact Sales</button>
              </div>
            </div>
          </div>
        )}

        {tab==='about' && (
          <div className="about-wrap">
            <div className="about-eyebrow">About Kloudvault</div>
            <h3 className="about-headline">Enterprise‑ready CTI, built by a team with a decade of CRM experience.</h3>
            <p className="about-desc">We’ve delivered telephony and CRM integrations for sales and support teams at scale—focusing on reliability, analytics, and security.</p>

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
                <div className="cta-title">See a Live Demo</div>
                <div className="cta-sub">Walk through CTI setup, call logging, and analytics dashboards with our team.</div>
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
