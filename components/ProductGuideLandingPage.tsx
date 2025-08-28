'use client'

import { useState } from 'react'
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

  const translations = {
    no: {
      title: 'Din Personlige Produktguide',
      subtitle: 'Skreddersyd for din virksomhet',
      description: 'Få AI-drevne anbefalinger og ekspertinnsikt for å øke salget av dine produkter.',
      downloadGuide: 'Last Ned Guide',
      scheduleConsultation: 'Planlegg Konsultasjon',
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
      scheduleConsultation: 'Schedule Consultation',
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
    <div className="min-h-screen bg-gradient-to-br from-charcoal-50 to-n60-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-charcoal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <BookOpen className="w-8 h-8 text-n60-500" />
              <div>
                <h1 className="text-xl font-bold text-charcoal-900">{t.header.title}</h1>
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
                      ? 'bg-white text-charcoal-900 shadow-sm' 
                      : 'text-charcoal-600 hover:text-charcoal-900'
                  }`}
                >
                  NO
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    language === 'en' 
                      ? 'bg-white text-charcoal-900 shadow-sm' 
                      : 'text-charcoal-600 hover:text-charcoal-900'
                  }`}
                >
                  EN
                </button>
              </div>
              
              <button className="flex items-center space-x-2 px-4 py-2 text-charcoal-600 hover:text-charcoal-900 transition-colors">
                <Download className="w-4 h-4" />
                <span className="text-sm">{t.downloadGuide}</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 text-charcoal-600 hover:text-charcoal-900 transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="text-sm">Del</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-n60-100 text-n60-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Skreddersyd for {userData.company}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-charcoal-900 mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-charcoal-600 mb-8 max-w-3xl mx-auto">
              {t.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-charcoal-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Skreddersyd for ditt budsjett: {userData.budget}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-n60-500" />
                <span>Perfekt for {userData.companySize}</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-n60-500" />
                <span>Forventet ROI: 6-12 måneder</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Content Grid - Both visible simultaneously */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Product Guide */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-charcoal-200 overflow-hidden">
                <div className="bg-gradient-to-r from-n60-600 to-n60-700 text-white px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-6 h-6" />
                    <h2 className="text-xl font-semibold">Interaktiv Produktguide</h2>
                  </div>
                  <p className="text-n60-100 text-sm mt-1">
                    Bla gjennom dine personlige anbefalinger og innsikter
                  </p>
                </div>
                
                <div className="p-6">
                  <ProductGuide userData={userData} language={language} />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Chatbot */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-charcoal-200 overflow-hidden">
                <div className="bg-gradient-to-r from-n60-600 to-n60-700 text-white px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <Bot className="w-6 h-6" />
                    <h2 className="text-xl font-semibold">AI Produktassistent</h2>
                  </div>
                  <p className="text-n60-100 text-sm mt-1">
                    Still spørsmål og få øyeblikkelige, personlige svar
                  </p>
                </div>
                
                <div className="p-6 h-[600px]">
                  <ProductGuideChatbot userData={userData} language={language} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-n60-600 to-n60-700 text-white rounded-2xl p-8 border border-n60-500"
          >
            <h2 className="text-3xl font-bold mb-4">
              {t.cta.title}
            </h2>
            <p className="text-n60-100 mb-8">
              {t.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-n60-600 hover:bg-n60-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>{t.cta.schedule}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                {t.cta.download}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="w-8 h-8 text-n60-500" />
                <span className="text-xl font-bold">n60.ai</span>
              </div>
              <p className="text-charcoal-300">
                {t.footer.description}
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">{t.footer.quickLinks}</h3>
              <ul className="space-y-2 text-charcoal-300">
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.createGuide}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.browseTemplates}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.support}</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">{t.footer.contact}</h3>
              <ul className="space-y-2 text-charcoal-300">
                <li>hello@n60.ai</li>
                <li>+47 123 45 678</li>
                <li>{t.footer.available}</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-charcoal-700 mt-8 pt-8 text-center text-charcoal-400">
            <p>&copy; 2024 n60.ai. {t.footer.copyright} {new Date().toLocaleDateString('no-NO', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
