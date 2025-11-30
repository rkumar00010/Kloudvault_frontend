import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './Home.jsx'
import Products from './Products.jsx'
import Blog from './Blog.tsx'
import Company from './Company.tsx'
import Support from './Support.tsx'
import Archival from './Archival.jsx'
import DataBackup from './DataBackup.jsx'
import ReportsAnalytics from './ReportsAnalytics.jsx'
import Scanning from './Scanning.jsx'
import OCR from './OCR.jsx'
import CTI from './CTI.jsx'

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/company" element={<Company />} />
        <Route path="/support" element={<Support />} />
        <Route path="/archival" element={<Archival />} />
        <Route path="/backup" element={<DataBackup />} />
        <Route path="/reports" element={<ReportsAnalytics />} />
        <Route path="/scanning" element={<Scanning />} />
        <Route path="/ocr" element={<OCR />} />
        <Route path="/cti" element={<CTI />} />
      </Routes>
    </div>
  )
}
