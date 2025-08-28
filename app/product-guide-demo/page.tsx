'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Wand2, ArrowRight, Check, Sparkles, BookOpen, Bot, Star, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import ProductGuideLandingPage from '@/components/ProductGuideLandingPage'
import MobileNavigation from '@/components/MobileNavigation'

export default function ProductGuideDemoPage() {
  const [step, setStep] = useState<'form' | 'guide'>('form')
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    productType: '',
    useCase: '',
    companySize: '',
    budget: '',
    requirements: '',
    timeline: ''
  })

  const productTypes = [
    'Software & SaaS',
    'Hardware & Equipment',
    'Marketing Tools',
    'Analytics & Data',
    'Security Solutions',
    'Communication Tools',
    'Other'
  ]

  const useCases = [
    'Business Operations',
    'Customer Management',
    'Team Collaboration',
    'Data Analysis',
    'Marketing & Sales',
    'Product Development',
    'Other'
  ]

  const companySizes = [
    'Startup (1-10 employees)',
    'Small Business (11-50 employees)',
    'Medium Business (51-200 employees)',
    'Large Business (200+ employees)',
    'Enterprise (1000+ employees)'
  ]

  const budgetRanges = [
    'Under $100/month',
    '$100 - $500/month',
    '$500 - $2000/month',
    '$2000 - $10000/month',
    '$10000+/month'
  ]

  const timelines = [
    'Immediate (within 1 month)',
    'Short-term (1-3 months)',
    'Medium-term (3-6 months)',
    'Long-term (6+ months)',
    'Just exploring options'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('guide')
  }

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (step === 'guide') {
    return <ProductGuideLandingPage userData={formData} />
  }

  return (
    <div className="min-h-screen bg-charcoal-900 text-white">
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
              <Link href="/wizard" className="btn-secondary">
                Try It Now
              </Link>
              <Link href="/builder" className="btn-primary">
                Landing Page Builder
              </Link>
            </div>
            <MobileNavigation currentPage="/product-guide-demo" />
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
              <span>Personalized Product Guide Demo</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Get Your Personalized
              <span className="text-n60-500 block">Product Guide</span>
            </h1>
            <p className="text-lg sm:text-xl text-charcoal-300 mb-8 max-w-3xl mx-auto">
              Experience how AI creates a customized product guide tailored to your business needs. 
              Fill out the form below to see your personalized recommendations in action.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-charcoal-400">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-n60-500" />
                <span>AI-powered recommendations</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-n60-500" />
                <span>Interactive e-reader guide</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bot className="w-4 h-4 text-n60-500" />
                <span>AI chatbot assistant</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="card bg-charcoal-800 border border-charcoal-700"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-n60-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-n60-600" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Create Your Personalized Product Guide
              </h2>
              <p className="text-charcoal-300">
                Tell us about your business needs and get AI-powered product recommendations
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    className="input-field"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-charcoal-300 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => updateFormData('company', e.target.value)}
                    className="input-field"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal-300 mb-2">
                    What type of products are you looking for? *
                  </label>
                  <select
                    required
                    value={formData.productType}
                    onChange={(e) => updateFormData('productType', e.target.value)}
                    className="input-field"
                  >
                    <option value="">Select product type...</option>
                    {productTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-charcoal-300 mb-2">
                    What is your primary use case? *
                  </label>
                  <select
                    required
                    value={formData.useCase}
                    onChange={(e) => updateFormData('useCase', e.target.value)}
                    className="input-field"
                  >
                    <option value="">Select use case...</option>
                    {useCases.map(useCase => (
                      <option key={useCase} value={useCase}>{useCase}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal-300 mb-2">
                    Company Size *
                  </label>
                  <select
                    required
                    value={formData.companySize}
                    onChange={(e) => updateFormData('companySize', e.target.value)}
                    className="input-field"
                  >
                    <option value="">Select company size...</option>
                    {companySizes.map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-charcoal-300 mb-2">
                    Budget Range *
                  </label>
                  <select
                    required
                    value={formData.budget}
                    onChange={(e) => updateFormData('budget', e.target.value)}
                    className="input-field"
                  >
                    <option value="">Select budget range...</option>
                    {budgetRanges.map(budget => (
                      <option key={budget} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal-300 mb-2">
                  Specific Requirements or Pain Points
                </label>
                <textarea
                  value={formData.requirements}
                  onChange={(e) => updateFormData('requirements', e.target.value)}
                  rows={3}
                  className="input-field"
                  placeholder="Describe your specific needs, challenges, or requirements..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal-300 mb-2">
                  Implementation Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => updateFormData('timeline', e.target.value)}
                  className="input-field"
                >
                  <option value="">Select timeline...</option>
                  {timelines.map(timeline => (
                    <option key={timeline} value={timeline}>{timeline}</option>
                  ))}
                </select>
              </div>

              <div className="pt-6 border-t border-charcoal-600">
                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4 flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Generate My Personalized Product Guide</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-xs text-charcoal-400 text-center mt-3">
                  AI will analyze your responses and create a customized guide with product recommendations, 
                  implementation strategies, and cost analysis.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              What You'll Get
            </h2>
            <p className="text-lg text-charcoal-300">
              Your personalized product guide includes everything you need to make informed decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-n60-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-n60-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Interactive Guide</h3>
              <p className="text-charcoal-300">
                Flip through your personalized recommendations in an e-reader style interface with professional formatting.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-n60-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-n60-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Assistant</h3>
              <p className="text-charcoal-300">
                Get instant answers to your questions with our AI chatbot that understands your specific needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-n60-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-n60-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Actionable Insights</h3>
              <p className="text-charcoal-300">
                Receive implementation roadmaps, cost analysis, and ROI projections tailored to your business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
