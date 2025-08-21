'use client'

import { motion } from 'framer-motion'
import { Wand2, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import FormWizard from '@/components/FormWizard'
import MobileNavigation from '@/components/MobileNavigation'

export default function WizardPage() {
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
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/demo" className="text-charcoal-300 hover:text-white transition-colors">
                Demo
              </Link>
              <Link href="/builder" className="btn-secondary">
                Landing Page Builder
              </Link>
            </div>
            <MobileNavigation currentPage="/wizard" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-n60-100 text-n60-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Form Creation</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Create the Perfect Form
              <span className="text-n60-500 block">in Minutes</span>
            </h1>
            <p className="text-lg sm:text-xl text-charcoal-300 mb-8 max-w-3xl mx-auto">
              Let AI generate the perfect questions for your lead generation forms. 
              Then customize and build beautiful landing pages that convert visitors into customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="btn-secondary text-lg px-8 py-4">
                See Demo First
              </Link>
              <Link href="#wizard" className="btn-primary text-lg px-8 py-4">
                Start Creating
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wizard Section */}
      <section id="wizard" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FormWizard />
        </div>
      </section>
    </div>
  )
}
