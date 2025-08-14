'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Wand2, FormInput, Palette, Zap, Check } from 'lucide-react'
import Link from 'next/link'
import FormWizard from '@/components/FormWizard'

export default function WizardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-primary-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Wand2 className="w-8 h-8 text-primary-600" />
              <span className="text-xl font-bold text-secondary-900">Formulate</span>
            </Link>
            <Link href="/builder" className="btn-secondary">
              Landing Page Builder
            </Link>
          </div>
        </div>
      </nav>

      {/* Wizard Content */}
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-secondary-900 mb-4">
              Create Your AI-Powered Form
            </h1>
            <p className="text-secondary-600">
              Follow these steps to build a form that generates personalized content for your leads
            </p>
          </div>
          
          <FormWizard />
        </div>
      </div>
    </div>
  )
}
