'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Wand2, Palette, Settings, Eye, Download, Share2, Upload, Globe } from 'lucide-react'
import Link from 'next/link'
import LandingPageBuilder from '@/components/LandingPageBuilder'
import MobileNavigation from '@/components/MobileNavigation'

export default function BuilderPage() {
  const [formData, setFormData] = useState(null)

  useEffect(() => {
    // Get form data from URL params
    const urlParams = new URLSearchParams(window.location.search)
    const formDataParam = urlParams.get('formData')
    if (formDataParam) {
      try {
        setFormData(JSON.parse(decodeURIComponent(formDataParam)))
      } catch (error) {
        console.error('Error parsing form data:', error)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-charcoal-900">
      {/* Navigation */}
      <nav className="bg-charcoal-800/90 backdrop-blur-md border-b border-charcoal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Wand2 className="w-8 h-8 text-n60-500" />
              <span className="text-xl font-bold text-white">Formulate</span>
            </Link>
            <div className="hidden lg:block">
              <Link href="/wizard" className="btn-secondary">
                Create New Form
              </Link>
            </div>
            <MobileNavigation currentPage="/builder" />
          </div>
        </div>
      </nav>

      {/* Builder Content */}
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-4">
              Landing Page Builder
            </h1>
            <p className="text-charcoal-300">
              Customize your landing page design and preview how it will look to your visitors
            </p>
          </div>
          
          <LandingPageBuilder formData={formData} />
        </div>
      </div>
    </div>
  )
}
