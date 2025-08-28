'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Bot, Download, Share2, ArrowRight, Star, CheckCircle, Users, TrendingUp } from 'lucide-react'
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
  const [activeSection, setActiveSection] = useState<'guide' | 'chat'>('guide')

  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal-50 to-n60-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-charcoal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <BookOpen className="w-8 h-8 text-n60-500" />
              <div>
                <h1 className="text-xl font-bold text-charcoal-900">Formulate</h1>
                <p className="text-xs text-charcoal-500">AI-Powered Product Guide</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 text-charcoal-600 hover:text-charcoal-900 transition-colors">
                <Download className="w-4 h-4" />
                <span className="text-sm">Download PDF</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 text-charcoal-600 hover:text-charcoal-900 transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="text-sm">Share</span>
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
              <span>Personalized for {userData.company}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-charcoal-900 mb-6">
              Your {userData.productType} Guide
            </h1>
            <p className="text-xl text-charcoal-600 mb-8 max-w-3xl mx-auto">
              AI-powered recommendations tailored to your {userData.companySize} business focusing on {userData.useCase}. 
              Get expert insights, implementation strategies, and cost analysis.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-charcoal-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Customized for your budget: {userData.budget}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-n60-500" />
                <span>Perfect for {userData.companySize} companies</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-n60-500" />
                <span>Expected ROI: 6-12 months</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Navigation Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-xl p-1 shadow-sm border border-charcoal-200">
              <button
                onClick={() => setActiveSection('guide')}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'guide'
                    ? 'bg-n60-500 text-white'
                    : 'text-charcoal-600 hover:text-charcoal-900'
                }`}
              >
                <BookOpen className="w-4 h-4 inline mr-2" />
                Product Guide
              </button>
              <button
                onClick={() => setActiveSection('chat')}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'chat'
                    ? 'bg-n60-500 text-white'
                    : 'text-charcoal-600 hover:text-charcoal-900'
                }`}
              >
                <Bot className="w-4 h-4 inline mr-2" />
                AI Assistant
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Product Guide */}
            <motion.div
              key="guide"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: activeSection === 'guide' ? 1 : 0.3, x: activeSection === 'guide' ? 0 : -20 }}
              transition={{ duration: 0.3 }}
              className={`${activeSection === 'guide' ? 'block' : 'hidden lg:block'}`}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-charcoal-200 overflow-hidden">
                <div className="bg-gradient-to-r from-n60-600 to-n60-700 text-white px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-6 h-6" />
                    <h2 className="text-xl font-semibold">Interactive Product Guide</h2>
                  </div>
                  <p className="text-n60-100 text-sm mt-1">
                    Flip through your personalized recommendations and insights
                  </p>
                </div>
                
                <div className="p-6">
                  <ProductGuide userData={userData} />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Chatbot */}
            <motion.div
              key="chat"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: activeSection === 'chat' ? 1 : 0.3, x: activeSection === 'chat' ? 0 : 20 }}
              transition={{ duration: 0.3 }}
              className={`${activeSection === 'chat' ? 'block' : 'hidden lg:block'}`}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-charcoal-200 overflow-hidden">
                <div className="bg-gradient-to-r from-n60-600 to-n60-700 text-white px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <Bot className="w-6 h-6" />
                    <h2 className="text-xl font-semibold">AI Product Assistant</h2>
                  </div>
                  <p className="text-n60-100 text-sm mt-1">
                    Ask questions and get instant, personalized answers
                  </p>
                </div>
                
                <div className="p-6 h-[600px]">
                  <ProductGuideChatbot userData={userData} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Responsive View */}
          <div className="lg:hidden mt-8">
            {activeSection === 'guide' ? (
              <div className="bg-white rounded-2xl shadow-xl border border-charcoal-200 overflow-hidden">
                <div className="bg-gradient-to-r from-n60-600 to-n60-700 text-white px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-6 h-6" />
                    <h2 className="text-xl font-semibold">Interactive Product Guide</h2>
                  </div>
                  <p className="text-n60-100 text-sm mt-1">
                    Flip through your personalized recommendations and insights
                  </p>
                </div>
                
                <div className="p-6">
                  <ProductGuide userData={userData} />
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl border border-charcoal-200 overflow-hidden">
                <div className="bg-gradient-to-r from-n60-600 to-n60-700 text-white px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <Bot className="w-6 h-6" />
                    <h2 className="text-xl font-semibold">AI Product Assistant</h2>
                  </div>
                  <p className="text-n60-100 text-sm mt-1">
                    Ask questions and get instant, personalized answers
                  </p>
                </div>
                
                <div className="p-6 h-[600px]">
                  <ProductGuideChatbot userData={userData} />
                </div>
              </div>
            )}
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
              Ready to Implement Your Solution?
            </h2>
            <p className="text-n60-100 mb-8">
              Your personalized guide is just the beginning. Let's turn these recommendations into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-n60-600 hover:bg-n60-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Download Full Guide
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
                <span className="text-xl font-bold">Formulate</span>
              </div>
              <p className="text-charcoal-300">
                AI-powered product guides and recommendations tailored to your business needs.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-charcoal-300">
                <li><a href="#" className="hover:text-white transition-colors">Create New Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Browse Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-charcoal-300">
                <li>hello@formulate.app</li>
                <li>+1 (555) 123-4567</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-charcoal-700 mt-8 pt-8 text-center text-charcoal-400">
            <p>&copy; 2024 Formulate. All rights reserved. This guide was generated on {new Date().toLocaleDateString('en-US', { 
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
