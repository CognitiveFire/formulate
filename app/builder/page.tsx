'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Wand2, Palette, Settings, Eye, Download, Share2, Upload, Globe } from 'lucide-react'
import Link from 'next/link'
import LandingPageBuilder from '@/components/LandingPageBuilder'
import MobileNavigation from '@/components/MobileNavigation'

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal-50 via-white to-charcoal-50">
      {/* Navigation */}
      <nav className="bg-n60-800/90 backdrop-blur-md border-b border-n60-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Wand2 className="w-8 h-8 text-n60-500" />
              <span className="text-xl font-bold text-white">Formulate</span>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/" className="text-charcoal-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/demo" className="text-charcoal-300 hover:text-white transition-colors">
                Demo
              </Link>
              <Link href="/wizard" className="text-charcoal-300 hover:text-white transition-colors">
                Wizard
              </Link>
            </div>
            <MobileNavigation currentPage="/builder" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <LandingPageBuilder formData={null} />
      </div>
    </div>
  )
}
