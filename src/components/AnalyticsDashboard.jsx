import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  Activity,
  Database,
  Users,
  Zap,
} from "lucide-react";
import './Analytic.css'

export default function AnalyticsDashboard() {
  const [tick, setTick] = useState(0)
  useEffect(() => { const id = setInterval(()=>setTick(t=>t+1), 3000); return ()=>clearInterval(id) }, [])

  const performanceData = [
    { name: "Jan", value: 4200, recovery: 3800, backup: 2400 },
    { name: "Feb", value: 5300, recovery: 4200, backup: 2800 },
    { name: "Mar", value: 4800, recovery: 3900, backup: 3200 },
    { name: "Apr", value: 6100, recovery: 5200, backup: 3800 },
    { name: "May", value: 7200, recovery: 6100, backup: 4200 },
    { name: "Jun", value: 8400, recovery: 7300, backup: 4800 },
  ];

  const storageData = [
    { name: "Archive", value: 45, color: "#8B5CF6" },
    { name: "Backup", value: 30, color: "#D4AF37" },
    { name: "Active", value: 15, color: "#7C4DFF" },
    { name: "Other", value: 10, color: "#B8860B" },
  ];

  const activityData = [
    { time: "00:00", scans: 120, ocr: 85, calls: 45 },
    { time: "04:00", scans: 90, ocr: 65, calls: 32 },
    { time: "08:00", scans: 280, ocr: 195, calls: 120 },
    { time: "12:00", scans: 340, ocr: 240, calls: 160 },
    { time: "16:00", scans: 310, ocr: 220, calls: 145 },
    { time: "20:00", scans: 180, ocr: 125, calls: 75 },
  ];

  const metrics = [
    {
      icon: Database,
      label: "Total Storage",
      value: "10.2 PB",
      change: "+12.5%",
      trend: "up",
      color: "#8B5CF6",
    },
    {
      icon: Activity,
      label: "Active Users",
      value: "8,549",
      change: "+8.2%",
      trend: "up",
      color: "#D4AF37",
    },
    {
      icon: Zap,
      label: "Avg Response",
      value: "0.8s",
      change: "-15.3%",
      trend: "down",
      color: "#7C4DFF",
    },
    {
      icon: Users,
      label: "Daily Scans",
      value: "12.4K",
      change: "+22.1%",
      trend: "up",
      color: "#B8860B",
    },
  ];

  return (
    <div className="adash2">
      <div className="adash2-grid">
        <div className="adash2-left">
          <div className="ai-pill">AI-Powered Intelligence</div>
          <h3 className="adash2-title">Smarter Analytics, Powered by <span className="accent">AI</span></h3>
          <p className="adash2-desc">Unlock deep insights and performance trends with real-time AI-driven analytics across your entire data estate.</p>
          <ul className="adash2-list">
            <li><span className="dot"></span><div><div className="pt">Instant Insights</div><div className="pb">Real-time anomaly detection and trend analysis</div></div></li>
            <li><span className="dot"></span><div><div className="pt">Predictive Power</div><div className="pb">Forecast storage needs and optimize costs</div></div></li>
            <li><span className="dot"></span><div><div className="pt">Smart Visuals</div><div className="pb">Auto-generated dashboards tailored to your role</div></div></li>
            <li><span className="dot"></span><div><div className="pt">Ask Anything</div><div className="pb">Natural language queries across all modules</div></div></li>
          </ul>
          <div className="ai-actions">
            <button className="cta primary">Explore Analytics</button>
            <button className="cta secondary">Book A Demo</button>
          </div>
        </div>

        <div className="adash2-right">
          <div className="adash2-kpis">
            {metrics.map((m,i)=>{
              const Icon = m.icon; const TrendIcon = m.trend==='up'?TrendingUp:TrendingDown;
              return (
                <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.08}} className="kpi-card">
                  <div className="kpi-top">
                    <div className="kpi-ico" style={{backgroundColor: m.color+"20"}}>
                      <Icon style={{color:m.color}} width={16} height={16} />
                    </div>
                    <div className={`kpi-delta ${m.trend==='up'?'up':'down'}`}>
                      <TrendIcon width={14} height={14} />
                      <span>{m.change}</span>
                    </div>
                  </div>
                  <div className="kpi-value" style={{color:m.color}}>{m.value}</div>
                  <div className="kpi-label">{m.label}</div>
                </motion.div>
              )
            })}
          </div>

          <div className="adash2-panels">
            <motion.div initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay:0.2}} className="panel">
              <div className="panel-title">Performance Trends</div>
              <div className="panel-sub">Monthly data operations volume</div>
              <ResponsiveContainer width="100%" height={240}>
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id="p1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="p2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#D4AF37" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis dataKey="name" stroke="#788199" style={{fontSize:'12px'}} />
                  <YAxis stroke="#788199" style={{fontSize:'12px'}} />
                  <Tooltip contentStyle={{ backgroundColor: '#0f1320', border: '1px solid #8B5CF620', borderRadius: '8px', color: '#fff' }} />
                  <Area type="monotone" dataKey="value" stroke="#8B5CF6" strokeWidth={2} fill="url(#p1)" animationDuration={1000} />
                  <Area type="monotone" dataKey="recovery" stroke="#D4AF37" strokeWidth={2} fill="url(#p2)" animationDuration={1000} />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay:0.25}} className="panel">
              <div className="panel-title">Storage Distribution</div>
              <div className="panel-sub">Data allocation by type</div>
              <div className="panel-center">
                <ResponsiveContainer width="100%" height={240}>
                  <PieChart>
                    <Pie data={storageData} cx="50%" cy="50%" innerRadius={58} outerRadius={86} paddingAngle={5} dataKey="value" animationDuration={1000}>
                      {storageData.map((e,idx)=> <Cell key={idx} fill={e.color} />)}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#0f1320', border: '1px solid #8B5CF620', borderRadius: '8px', color: '#fff' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="legend legend-col2">
                {storageData.map((it,i)=> (
                  <div key={i} className="legend-rowline"><span className="lg" style={{background: it.color}}></span><span className="legend-name">{it.name}</span><span className="legend-val">{it.value}%</span></div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.3}} className="panel wide">
              <div className="panel-title">Daily Activity Timeline</div>
              <div className="panel-sub">Real-time operations across modules</div>
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis dataKey="time" stroke="#788199" style={{fontSize:'12px'}} />
                  <YAxis stroke="#788199" style={{fontSize:'12px'}} />
                  <Tooltip contentStyle={{ backgroundColor: '#0f1320', border: '1px solid #8B5CF620', borderRadius: '8px', color: '#fff' }} />
                  <Bar dataKey="scans" fill="#8B5CF6" radius={[8,8,0,0]} animationDuration={1000} />
                  <Bar dataKey="ocr" fill="#D4AF37" radius={[8,8,0,0]} animationDuration={1000} />
                  <Bar dataKey="calls" fill="#7C4DFF" radius={[8,8,0,0]} animationDuration={1000} />
                </BarChart>
              </ResponsiveContainer>
              <div className="legend legend-inline">
                <div><span className="lg lg-purple"></span>Scans</div>
                <div><span className="lg lg-gold"></span>OCR</div>
                <div><span className="lg lg-blue"></span>Calls</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}