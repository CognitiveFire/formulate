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
    productType: [] as string[],
    useCase: [] as string[],
    companySize: '',
    budget: '',
    requirements: '',
    timeline: ''
  })

  const productTypes = [
    'AI Marketing Tools',
    'Lead Generation Software',
    'International Expansion Platform',
    'Product Marketing Suite',
    'Customer Analytics Platform',
    'Marketing Automation Tools',
    'Other'
  ]

  const useCases = [
    'Product Marketing',
    'Lead Generation',
    'International Expansion',
    'Customer Analytics',
    'Marketing Automation',
    'Sales Enablement',
    'Other'
  ]

  const companySizes = [
    'Startup (1-10 ansatte)',
    'Small Business (11-50 ansatte)',
    'Medium Business (51-200 ansatte)',
    'Large Business (200+ ansatte)',
    'Enterprise (1000+ ansatte)'
  ]

  const budgetRanges = [
    'kr 30,000 - kr 75,000/mnd',
    'kr 75,000 - kr 150,000/mnd',
    'kr 150,000 - kr 250,000/mnd',
    'kr 250,000 - kr 300,000/mnd',
    'kr 300,000+/mnd'
  ]

  const timelines = [
    'Umiddelbart (innen 1 måned)',
    'Kort sikt (1-3 måneder)',
    'Mellomlang sikt (3-6 måneder)',
    'Lang sikt (6+ måneder)',
    'Bare utforsker alternativer'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Convert arrays to comma-separated strings for the guide component
    const guideData = {
      ...formData,
      productType: Array.isArray(formData.productType) ? formData.productType.join(', ') : formData.productType,
      useCase: Array.isArray(formData.useCase) ? formData.useCase.join(', ') : formData.useCase
    }
    
    setStep('guide')
    // Ensure we're at the top when switching to guide
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  const updateFormData = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (step === 'guide') {
    // Convert arrays to comma-separated strings for the guide component
    const guideData = {
      ...formData,
      productType: Array.isArray(formData.productType) ? formData.productType.join(', ') : formData.productType,
      useCase: Array.isArray(formData.useCase) ? formData.useCase.join(', ') : formData.useCase
    }
    return <ProductGuideLandingPage userData={guideData} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal-50 via-white to-charcoal-50">
      {/* Navigation */}
      <nav className="bg-n60-800/90 backdrop-blur-md border-b border-n60-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <BookOpen className="w-8 h-8 text-white" />
              <span className="text-xl font-bold text-white">n60.ai</span>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/" className="text-n60-100 hover:text-white transition-colors">
                Hjem
              </Link>
              <Link href="/demo" className="text-n60-100 hover:text-white transition-colors">
                Demo
              </Link>
            </div>
            <MobileNavigation currentPage="/product-guide-demo" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-n60-800 mb-6">
            Personlig Produktguide
          </h1>
          <p className="text-xl text-charcoal-600 mb-8">
            Få AI-drevne anbefalinger skreddersyd for dine forretningsbehov
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-charcoal-200 p-8">
            <h2 className="text-2xl font-bold text-n60-800 mb-6 text-center">
              Fortell oss om din virksomhet
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-2">
                  Ditt Navn
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-n60-500 focus:border-n60-500 transition-colors"
                  placeholder="Skriv ditt fullnavn"
                  required
                />
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-charcoal-700 mb-2">
                  Bedriftsnavn
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={(e) => updateFormData('company', e.target.value)}
                  className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-n60-500 focus:border-n60-500 transition-colors"
                  placeholder="Skriv bedriftsnavnet ditt"
                  required
                />
              </div>

              {/* Product Type - Multiple Choice */}
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">
                  Produkttype (velg så mange som passer)
                </label>
                <div className="space-y-2">
                  {productTypes.map((type) => (
                    <label key={type} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.productType.includes(type)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            updateFormData('productType', [...formData.productType, type])
                          } else {
                            updateFormData('productType', formData.productType.filter(t => t !== type))
                          }
                        }}
                        className="w-4 h-4 text-n60-600 border-charcoal-300 rounded focus:ring-n60-500 focus:ring-2"
                      />
                      <span className="text-charcoal-700">{type}</span>
                    </label>
                  ))}
                </div>
                {/* Display selected product types */}
                {formData.productType && formData.productType.length > 0 && (
                  <div className="mt-3 p-3 bg-n60-50 border border-n60-200 rounded-lg">
                    <p className="text-sm font-medium text-n60-800 mb-1">Valgte produkttyper:</p>
                    <p className="text-sm text-charcoal-700">{formData.productType.join(', ')}</p>
                  </div>
                )}
              </div>

              {/* Use Case - Multiple Choice */}
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">
                  Hovedbruksområde (velg så mange som passer)
                </label>
                <div className="space-y-2">
                  {useCases.map((useCase) => (
                    <label key={useCase} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.useCase.includes(useCase)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            updateFormData('useCase', [...formData.useCase, useCase])
                          } else {
                            updateFormData('useCase', formData.useCase.filter(uc => uc !== useCase))
                          }
                        }}
                        className="w-4 h-4 text-n60-600 border-charcoal-300 rounded focus:ring-n60-500 focus:ring-2"
                      />
                      <span className="text-charcoal-700">{useCase}</span>
                    </label>
                  ))}
                </div>
                {/* Display selected use cases */}
                {formData.useCase && formData.useCase.length > 0 && (
                  <div className="mt-3 p-3 bg-n60-50 border border-n60-200 rounded-lg">
                    <p className="text-sm font-medium text-n60-800 mb-1">Valgte bruksområder:</p>
                    <p className="text-sm text-charcoal-700">{formData.useCase.join(', ')}</p>
                  </div>
                )}
              </div>

              {/* Company Size */}
              <div>
                <label htmlFor="companySize" className="block text-sm font-medium text-charcoal-700 mb-2">
                  Bedriftsstørrelse
                </label>
                <select
                  id="companySize"
                  name="companySize"
                  value={formData.companySize}
                  onChange={(e) => updateFormData('companySize', e.target.value)}
                  className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-n60-500 focus:border-n60-500 transition-colors"
                  required
                >
                  <option value="">Velg bedriftsstørrelse</option>
                  {companySizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
                {/* Display selected company size */}
                {formData.companySize && (
                  <div className="mt-3 p-3 bg-n60-50 border border-n60-200 rounded-lg">
                    <p className="text-sm font-medium text-n60-800 mb-1">Valgt bedriftsstørrelse:</p>
                    <p className="text-sm text-charcoal-700">{formData.companySize}</p>
                  </div>
                )}
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-charcoal-700 mb-2">
                  Budsjett
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={(e) => updateFormData('budget', e.target.value)}
                  className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-n60-500 focus:border-n60-500 transition-colors"
                  required
                >
                  <option value="">Velg budsjett</option>
                  {budgetRanges.map((budget) => (
                    <option key={budget} value={budget}>{budget}</option>
                  ))}
                </select>
                {/* Display selected budget */}
                {formData.budget && (
                  <div className="mt-3 p-3 bg-n60-50 border border-n60-200 rounded-lg">
                    <p className="text-sm font-medium text-n60-800 mb-1">Valgt budsjett:</p>
                    <p className="text-sm text-charcoal-700">{formData.budget}</p>
                  </div>
                )}
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-charcoal-700 mb-2">
                  Tidsramme
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={(e) => updateFormData('timeline', e.target.value)}
                  className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-n60-500 focus:border-n60-500 transition-colors"
                  required
                >
                  <option value="">Velg tidsramme</option>
                  {timelines.map((timeline) => (
                    <option key={timeline} value={timeline}>{timeline}</option>
                  ))}
                </select>
                {/* Display selected timeline */}
                {formData.timeline && (
                  <div className="mt-3 p-3 bg-n60-50 border border-n60-200 rounded-lg">
                    <p className="text-sm font-medium text-n60-800 mb-1">Valgt tidsramme:</p>
                    <p className="text-sm text-charcoal-700">{formData.timeline}</p>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-n60-800 text-white py-4 px-6 rounded-lg font-semibold hover:bg-n60-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Generer Personlig Guide</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-n60-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Hva Du Får
            </h2>
            <p className="text-lg text-n60-100">
              Din personlige produktguide inkluderer alt du trenger for å ta informerte beslutninger
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-n60-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-n60-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Interaktiv Guide</h3>
              <p className="text-n60-100">
                Bla gjennom dine personlige anbefalinger i et e-leser stil grensesnitt med profesjonell formatering.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-n60-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-n60-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Assistent</h3>
              <p className="text-n60-100">
                Få øyeblikkelige svar på dine spørsmål med vår AI chatbot som forstår dine spesifikke behov.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-n60-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-n60-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Handlingsorienterte Innspill</h3>
              <p className="text-n60-100">
                Få konkrete anbefalinger og neste steg basert på din virksomhetsstørrelse og mål.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
