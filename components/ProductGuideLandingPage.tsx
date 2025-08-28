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
      <header className="bg-white shadow-sm border-b border-charcoal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <BookOpen className="w-8 h-8 text-n60-800" />
              <div>
                <h1 className="text-xl font-bold text-n60-800">{t.header.title}</h1>
                <p className="text-xs text-charcoal-500">{t.header.subtitle}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <div className="flex items-center space-x-2 bg-charcoal-100 rounded-lg p-1">
                <button
                  onClick={() => setLanguage('no')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    language === 'no' 
                      ? 'bg-white text-n60-800 shadow-sm' 
                      : 'text-charcoal-600 hover:text-n60-800'
                  }`}
                >
                  NO
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    language === 'en' 
                      ? 'bg-white text-n60-800 shadow-sm' 
                      : 'text-charcoal-600 hover:text-n60-800'
                  }`}
                >
                  EN
                </button>
              </div>
              
              <button className="flex items-center space-x-2 px-4 py-2 text-charcoal-600 hover:text-n60-800 transition-colors">
                <Download className="w-4 h-4" />
                <span className="text-sm">{t.downloadGuide}</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 text-charcoal-600 hover:text-n60-800 transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="text-sm">Del</span>
              </button>
            </div>
          </div>
        </div>
      </header>

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
      <footer className="bg-n60-800 text-white py-12 px-6 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">{t.readyToStart}</h3>
          <p className="text-n60-100 mb-8 max-w-2xl mx-auto">
            {t.footerDescription}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-6 py-3 bg-secondary-500 text-white rounded-lg font-semibold hover:bg-secondary-600 transition-colors">
              {t.contactUs}
            </button>
            <button className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-n60-800 transition-colors">
              {t.scheduleDemo}
            </button>
          </div>
          <div className="mt-8 text-n60-200 text-sm">
            <p>n60.ai • Oslo, Norge • {t.contactInfo}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
