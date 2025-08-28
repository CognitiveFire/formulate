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
    setStep('guide')
    // Ensure we're at the top when switching to guide
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
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
              <span className="text-xl font-bold text-white">n60.ai</span>
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
              <span>Personlig Produktguide Demo</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Få Din Personlige
              <span className="text-n60-500 block">Produktguide</span>
            </h1>
            <p className="text-lg sm:text-xl text-charcoal-300 mb-8 max-w-3xl mx-auto">
              Opplev hvordan AI skaper en skreddersydd produktguide tilpasset dine forretningsbehov. 
              Fyll ut skjemaet nedenfor for å se dine personlige anbefalinger i aksjon.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-charcoal-400">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-n60-500" />
                <span>AI-drevne anbefalinger</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-n60-500" />
                <span>Interaktiv e-leser guide</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bot className="w-4 h-4 text-n60-500" />
                <span>AI chatbot assistent</span>
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
                Opprett Din Personlige Produktguide
              </h2>
              <p className="text-charcoal-300">
                Fortell oss om dine forretningsbehov og få AI-drevne produktanbefalinger
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal-300 mb-2">
                    Ditt Navn *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    className="input-field"
                    placeholder="Skriv ditt fullnavn"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-charcoal-300 mb-2">
                    Virksomhetsnavn *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => updateFormData('company', e.target.value)}
                    className="input-field"
                    placeholder="Skriv virksomhetsnavn"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal-300 mb-2">
                    Hvilken type produkter leter du etter? *
                  </label>
                  <select
                    required
                    value={formData.productType}
                    onChange={(e) => updateFormData('productType', e.target.value)}
                    className="input-field"
                  >
                    <option value="">Velg produkttype...</option>
                    {productTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-charcoal-300 mb-2">
                    Hva er ditt primære bruksområde? *
                  </label>
                  <select
                    required
                    value={formData.useCase}
                    onChange={(e) => updateFormData('useCase', e.target.value)}
                    className="input-field"
                  >
                    <option value="">Velg bruksområde...</option>
                    {useCases.map(useCase => (
                      <option key={useCase} value={useCase}>{useCase}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal-300 mb-2">
                    Virksomhetsstørrelse *
                  </label>
                  <select
                    required
                    value={formData.companySize}
                    onChange={(e) => updateFormData('companySize', e.target.value)}
                    className="input-field"
                  >
                    <option value="">Velg virksomhetsstørrelse...</option>
                    {companySizes.map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-charcoal-300 mb-2">
                    Budsjettsområde *
                  </label>
                  <select
                    required
                    value={formData.budget}
                    onChange={(e) => updateFormData('budget', e.target.value)}
                    className="input-field"
                  >
                    <option value="">Velg budsjettsområde...</option>
                    {budgetRanges.map(budget => (
                      <option key={budget} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal-300 mb-2">
                  Spesifikke krav eller utfordringer
                </label>
                <textarea
                  value={formData.requirements}
                  onChange={(e) => updateFormData('requirements', e.target.value)}
                  rows={3}
                  className="input-field"
                  placeholder="Beskriv dine spesifikke behov, utfordringer eller krav..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal-300 mb-2">
                  Implementeringstidslinje
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => updateFormData('timeline', e.target.value)}
                  className="input-field"
                >
                  <option value="">Velg tidslinje...</option>
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
                  <span>Generer Min Personlige Produktguide</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-xs text-charcoal-400 text-center mt-3">
                  AI vil analysere dine svar og lage en skreddersydd guide med produktanbefalinger, 
                  implementeringsstrategier og kostnadsanalyse.
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
              Hva Du Får
            </h2>
            <p className="text-lg text-charcoal-300">
              Din personlige produktguide inkluderer alt du trenger for å ta informerte beslutninger
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-n60-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-n60-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Interaktiv Guide</h3>
              <p className="text-charcoal-300">
                Bla gjennom dine personlige anbefalinger i et e-leser stil grensesnitt med profesjonell formatering.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-n60-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-n60-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Assistent</h3>
              <p className="text-charcoal-300">
                Få øyeblikkelige svar på dine spørsmål med vår AI chatbot som forstår dine spesifikke behov.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-n60-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-n60-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Handlingsorienterte Innspill</h3>
              <p className="text-charcoal-300">
                Motta implementeringsveikart, kostnadsanalyse og ROI-prognoser skreddersyd for din virksomhet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
