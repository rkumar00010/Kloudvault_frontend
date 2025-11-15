import React, { useState } from 'react';

export default function Company() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const faqs = [
    {
      q: 'Can I change plans later?',
      a: 'Yes. You can upgrade or downgrade any time. Changes take effect immediately and are prorated for the current period.'
    },
    {
      q: 'What happens if I exceed my storage limit?',
      a: 'We will notify you well in advance. You can add more storage instantly from the console or talk to sales for volume pricing.'
    },
    {
      q: 'Is there a free trial?',
      a: 'All paid plans include a 14‑day free trial. No credit card required to get started.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept major credit cards, wire transfers for annual plans, and can support invoicing for Enterprise.'
    },
    {
      q: 'Do you offer discounts for nonprofits or education?',
      a: 'Yes. Eligible organizations receive special pricing. Contact sales to verify eligibility.'
    },
    {
      q: "What's included in support?",
      a: 'All plans include email support. Growth adds priority response (4h), Enterprise includes 24/7 phone & Slack.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Absolutely. Cancel anytime from the console. Your plan will remain active until the end of the current billing cycle.'
    },
    {
      q: 'How do user licenses work?',
      a: 'Each license allows one named user. You can reassign licenses and add more at any time.'
    }
  ];

  return (
    <div className="company-page">
      <div className="blog-hero"></div>
      <section className="products-hero company-hero">
        <div className="products-hero-content">
          <h1 className="products-banner-title">
             Simple,<span className="products-banner-accent">Transparent</span> Pricing
          </h1>
          <p className="products-banner-desc">
            All plans include access to our complete data lifecycle platform. Start free, scale as you grow.
          </p>

          <div className="pricing-toggle">
            <button
              className={`toggle-btn ${billing === 'monthly' ? 'active' : ''}`}
              onClick={() => setBilling('monthly')}
            >
              Monthly
            </button>
            <button
              className={`toggle-btn ${billing === 'yearly' ? 'active' : ''}`}
              onClick={() => setBilling('yearly')}
            >
              Yearly <span className="save">(Save 20%)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing plans */}
      <section className="pricing-section">
        <div className="plans-grid">
          {/* Starter */}
          <div className="plan-card">
            <div className="plan-header">
              <div className="plan-name">Starter</div>
              <div className="plan-sub">Perfect for small teams getting started</div>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">{billing === 'yearly' ? '399' : '499'}</span>
                <span className="per">/month</span>
              </div>
              <div className="plan-includes">5TB storage included</div>
            </div>
            <ul className="plan-features">
              <li>All 6 core modules included</li>
              <li>Basic archival policies</li>
              <li>Daily backups with 7-day retention</li>
              <li>Basic dashboards and reports</li>
              <li>5,000 pages/month scanning & OCR</li>
              <li>10 user licenses</li>
              <li>Email support (24hr response)</li>
              <li>SOC 2 compliance</li>
            </ul>
            <div className="plan-cta">
              <a href="#" className="btn primary">Start Free Trial</a>
            </div>
          </div>

          {/* Growth - featured */}
          <div className="plan-card featured">
            <div className="badge">Most Popular</div>
            <div className="plan-header">
              <div className="plan-name">Growth</div>
              <div className="plan-sub">For growing teams with advanced needs</div>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">{billing === 'yearly' ? '1299' : '1499'}</span>
                <span className="per">/month</span>
              </div>
              <div className="plan-includes">25TB storage included</div>
            </div>
            <ul className="plan-features">
              <li>Everything in Starter, plus:</li>
              <li>Advanced archival with legal holds</li>
              <li>Hourly backups with 30-day retention</li>
              <li>Unlimited custom reports & dashboards</li>
              <li>Unlimited scanning & OCR</li>
              <li>50 user licenses</li>
              <li>Priority support (4hr response)</li>
              <li>API access & webhooks</li>
              <li>Multi-region replication</li>
              <li>ISO 27001 compliance</li>
            </ul>
            <div className="plan-cta">
              <a href="#" className="btn gradient">Start Free Trial</a>
            </div>
          </div>

          {/* Enterprise */}
          <div className="plan-card">
            <div className="plan-header">
              <div className="plan-name">Enterprise</div>
              <div className="plan-sub">Custom solutions for large organizations</div>
              <div className="plan-price custom">Custom</div>
              <div className="plan-includes">Unlimited storage included</div>
            </div>
            <ul className="plan-features">
              <li>Everything in Growth, plus:</li>
              <li>Custom SLAs and guarantees</li>
              <li>Dedicated account manager</li>
              <li>White-glove migration assistance</li>
              <li>Custom integrations & workflows</li>
              <li>Unlimited user licenses</li>
              <li>24/7 phone & Slack support</li>
              <li>On-premise deployment options</li>
              <li>Custom compliance requirements</li>
              <li>Volume discounts</li>
            </ul>
            <div className="plan-cta">
              <a href="#" className="btn outline">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      {/* Included modules */}
      <section className="included-section">
        <div className="included-header">
          <div className="included-kicker">What's Included</div>
          <h3 className="included-title">All plans include our complete suite of modules</h3>
        </div>
        <div className="included-grid">
          <div className="included-card">
            <div className="included-title-sm">Archival Data</div>
            <div className="included-sub">Policy-driven cold storage with legal holds</div>
          </div>
          <div className="included-card">
            <div className="included-title-sm">Data Backup</div>
            <div className="included-sub">Incremental backups with instant recovery</div>
          </div>
          <div className="included-card">
            <div className="included-title-sm">Reports & Analytics</div>
            <div className="included-sub">Unified reporting and dashboards</div>
          </div>
          <div className="included-card">
            <div className="included-title-sm">Scanning</div>
            <div className="included-sub">High-volume document capture</div>
          </div>
          <div className="included-card">
            <div className="included-title-sm">OCR</div>
            <div className="included-sub">AI-powered text extraction</div>
          </div>
          <div className="included-card">
            <div className="included-title-sm">Calling (CTI)</div>
            <div className="included-sub">Telephony integration with CRM</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="faq-header">
          <div className="faq-kicker">Frequently Asked Questions</div>
          <h3 className="faq-title">Everything you need to know about pricing</h3>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div key={i} className={`faq-item ${openIdx === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                <span className="q-icon">?</span>
                {f.q}
                <span className={`chev ${openIdx === i ? 'open' : ''}`}>▾</span>
              </button>
              {openIdx === i && <div className="faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Sales CTA */}
      <section className="sales-cta">
        <div className="sales-inner">
          <div className="sales-kicker">Still Have Questions?</div>
          <h3 className="sales-title">Talk to our sales team to find the perfect plan for your organization.</h3>
          <a href="#" className="sales-btn">Contact Sales</a>
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
  );
}
