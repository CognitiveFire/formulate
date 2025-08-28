'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Bot, Download, Share2, ArrowRight, Star, CheckCircle, Users, TrendingUp, Globe } from 'lucide-react'
import ProductGuide from './ProductGuide'
import ProductGuideChatbot from './ProductGuideChatbot'

interface ProductGuideLandingPageProps {
  userData: {
    name: string
    company: string
    productType: string
    useCase: string
    companySize: string
    budget: string
    requirements?: string
    timeline?: string
  }
}

export default function ProductGuideLandingPage({ userData }: ProductGuideLandingPageProps) {
  const [language, setLanguage] = useState<'no' | 'en'>('no')

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const translations = {
    no: {
      title: 'Din Personlige Produktguide',
      subtitle: 'Skreddersyd for din virksomhet',
      description: 'Få AI-drevne anbefalinger og ekspertinnsikt for å øke salget av dine produkter.',
      downloadGuide: 'Last Ned Guide',
      shareGuide: 'Del Guide',
      scheduleConsultation: 'Planlegg Konsultasjon',
      heroTitle: 'Kraftig AI-markedsføring for norske SMB',
      heroSubtitle: 'Få skreddersydde AI-verktøy og strategier for å øke salget av dine produkter og tjenester.',
      seeDemo: 'SE DEMOEN',
      readyToStart: 'Klar til å Komme i Gang?',
      footerDescription: 'Din personlige guide er bare begynnelsen. La oss gjøre disse anbefalingene til virkelighet.',
      contactUs: 'Kontakt Oss',
      scheduleDemo: 'Planlegg Demo',
      contactInfo: 'hello@n60.ai',
      header: {
        title: 'n60.ai',
        subtitle: 'AI-Drevet Produktguide'
      },
      features: {
        aiRecommendations: 'AI-drevne anbefalinger',
        interactiveGuide: 'Interaktiv e-leser guide',
        aiAssistant: 'AI chatbot assistent'
      },
      cta: {
        title: 'Klar til å Implementere Din Løsning?',
        description: 'Din personlige guide er bare begynnelsen. La oss gjøre disse anbefalingene til virkelighet.',
        schedule: 'Planlegg Konsultasjon',
        download: 'Last Ned Full Guide'
      },
      footer: {
        description: 'AI-drevne produktguider og anbefalinger skreddersyd for dine forretningsbehov.',
        quickLinks: 'Hurtiglenker',
        createGuide: 'Opprett Ny Guide',
        browseTemplates: 'Bla Gjennom Maler',
        support: 'Support',
        contact: 'Kontakt',
        available: 'Tilgjengelig 24/7',
        copyright: 'Alle rettigheter forbeholdt. Denne guiden ble generert den'
      }
    },
    en: {
      title: 'Your Personalized Product Guide',
      subtitle: 'Tailored for your business',
      description: 'Get AI-powered recommendations and expert insights to increase sales of your products.',
      downloadGuide: 'Download Guide',
      shareGuide: 'Share Guide',
      scheduleConsultation: 'Schedule Consultation',
      heroTitle: 'Powerful AI Marketing for Norwegian SMBs',
      heroSubtitle: 'Get customized AI tools and strategies to increase sales of your products and services.',
      seeDemo: 'SEE DEMO',
      readyToStart: 'Ready to Get Started?',
      footerDescription: 'Your personalized guide is just the beginning. Let\'s turn these recommendations into reality.',
      contactUs: 'Contact Us',
      scheduleDemo: 'Schedule Demo',
      contactInfo: 'hello@n60.ai',
      header: {
        title: 'n60.ai',
        subtitle: 'AI-Powered Product Guide'
      },
      features: {
        aiRecommendations: 'AI-powered recommendations',
        interactiveGuide: 'Interactive e-reader guide',
        aiAssistant: 'AI chatbot assistant'
      },
      cta: {
        title: 'Ready to Implement Your Solution?',
        description: 'Your personalized guide is just the beginning. Let\'s turn these recommendations into reality.',
        schedule: 'Schedule Consultation',
        download: 'Download Full Guide'
      },
      footer: {
        description: 'AI-powered product guides and recommendations tailored to your business needs.',
        quickLinks: 'Quick Links',
        createGuide: 'Create New Guide',
        browseTemplates: 'Browse Templates',
        support: 'Support',
        contact: 'Contact',
        available: 'Available 24/7',
        copyright: 'All rights reserved. This guide was generated on'
      }
    }
  }

  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal-50 via-white to-charcoal-50">
      {/* Header */}
      <header className="bg-white border-b border-charcoal-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-charcoal-900">n60.ai</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-charcoal-600 hover:text-charcoal-900 transition-colors">Løsninger</a>
              <a href="#" className="text-charcoal-600 hover:text-charcoal-900 transition-colors">Innovasjon</a>
              <a href="#" className="text-charcoal-600 hover:text-charcoal-900 transition-colors">Hvordan vi jobber</a>
              <a href="#" className="text-charcoal-600 hover:text-charcoal-900 transition-colors">Hvorfor AI</a>
              <a href="#" className="text-charcoal-600 hover:text-charcoal-900 transition-colors">Pris</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'no' ? 'en' : 'no')}
              className="px-3 py-2 text-sm text-charcoal-600 hover:text-charcoal-900 transition-colors"
            >
              {language === 'no' ? 'EN' : 'NO'}
            </button>
            <button className="px-4 py-2 bg-charcoal-600 text-white rounded-lg hover:bg-charcoal-700 transition-colors">
              {t.downloadGuide}
            </button>
            <button className="px-4 py-2 border border-charcoal-300 text-charcoal-700 rounded-lg hover:bg-charcoal-50 transition-colors">
              {t.shareGuide}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-charcoal-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t.heroTitle}
          </h1>
          <p className="text-xl text-charcoal-200 max-w-3xl mx-auto mb-8">
            {t.heroSubtitle}
          </p>
          <button className="bg-white text-charcoal-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-charcoal-50 transition-colors">
            {t.seeDemo}
          </button>
        </div>
      </section>

      {/* Main Content - Product Guide and Chatbot */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 max-w-7xl mx-auto">
        {/* Left Column - Product Guide */}
        <div className="bg-white rounded-2xl shadow-2xl border border-charcoal-200">
          <ProductGuide userData={userData} language={language} />
        </div>
        
        {/* Right Column - Chatbot */}
        <div className="bg-white rounded-2xl shadow-2xl border border-charcoal-200">
          <ProductGuideChatbot userData={userData} language={language} />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-charcoal-900 text-white py-12 px-6 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">{t.readyToStart}</h3>
          <p className="text-charcoal-300 mb-8 max-w-2xl mx-auto">
            {t.footerDescription}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-6 py-3 bg-white text-charcoal-900 rounded-lg font-semibold hover:bg-charcoal-50 transition-colors">
              {t.contactUs}
            </button>
            <button className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-charcoal-900 transition-colors">
              {t.scheduleDemo}
            </button>
          </div>
          <div className="mt-8 text-charcoal-400 text-sm">
            <p>n60.ai • Oslo, Norge • {t.contactInfo}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
