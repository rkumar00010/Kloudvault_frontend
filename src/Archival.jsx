import React, { useState } from 'react'
import './archival.css'

export default function Archival(){
  const [tab, setTab] = useState('overview')
  return (
    <div className="archival-page">
      <section className="archival-hero">
        <div className="archival-hero-inner">
          <div className="archival-icon">
            <svg width="28" height="28" viewBox="0 0 38 38" fill="none"><rect x="6" y="10" width="26" height="18" rx="4" stroke="#ffffff" strokeWidth="1.8" opacity="0.9"/><rect x="10" y="16" width="18" height="2.5" rx="1.2" fill="#ffffff" opacity="0.9"/><rect x="14" y="21" width="10" height="2.5" rx="1.2" fill="#ffffff" opacity="0.9"/></svg>
          </div>
          <div className="archival-hero-text">
            <div className="archival-kicker">Archival Data</div>
            <h1 className="archival-title">Policy‑driven cold storage with warm retrieval and legal holds.</h1>
          </div>
        </div>
      </section>

      <div className="archival-tabs">
        <button className={`archival-tab ${tab==='overview'?'active':''}`} onClick={()=>setTab('overview')}>Overview</button>
        <button className={`archival-tab ${tab==='pricing'?'':''}`} onClick={()=>setTab('pricing')}>Pricing</button>
        <button className={`archival-tab ${tab==='about'?'':''}`} onClick={()=>setTab('about')}>About Us</button>
      </div>

      <section className="archival-content">
        {tab==='overview' && (
          <div className="archival-panel">
            <h2 className="archival-h2">Why Archival Data</h2>
            <p className="archival-p">Archive historical data with intelligent lifecycle policies. Reduce primary storage costs while maintaining instant access for compliance and legal holds.</p>
            <ul className="archival-list">
              <li>Automated tiering and policy‑based retention</li>
              <li>Instant warm retrieval with legal holds</li>
              <li>WORM and immutability options</li>
              <li>Audit trails and compliance reporting</li>
            </ul>
          </div>
        )}
        {tab==='pricing' && (
          <div className="archival-panel">
            <h2 className="archival-h2">Pricing</h2>
            <p className="archival-p">Contact sales for enterprise‑grade, usage‑based pricing with predictable retrieval tiers.</p>
            <div className="archival-cards">
              <div className="archival-card"><div className="card-title">Standard</div><div className="card-body">Low‑cost storage with on‑demand retrieval.</div></div>
              <div className="archival-card"><div className="card-title">Enterprise</div><div className="card-body">SLA backed, legal holds, and priority support.</div></div>
            </div>
          </div>
        )}
        {tab==='about' && (
          <div className="archival-panel">
            <h2 className="archival-h2">About Us</h2>
            <p className="archival-p">Kloudvault is built by Kloudrac, delivering secure, compliant and cloud‑native data lifecycle solutions.</p>
          </div>
        )}
      </section>
    </div>
  )
}
