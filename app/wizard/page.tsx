'use client'

import { motion } from 'framer-motion'
import { Wand2, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import FormWizard from '@/components/FormWizard'
import MobileNavigation from '@/components/MobileNavigation'

export default function WizardPage() {
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
              <Link href="/builder" className="text-charcoal-300 hover:text-white transition-colors">
                Builder
              </Link>
            </div>
            <MobileNavigation currentPage="/wizard" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FormWizard />
      </div>
    </div>
  )
}
