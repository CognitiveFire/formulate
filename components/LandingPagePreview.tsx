'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Eye, Smartphone, Monitor, Tablet, Download, Share2, Copy, Check } from 'lucide-react'

interface FormData {
  contentType: string
  description: string
  questions: Array<{
    id: string
    type: 'text' | 'email' | 'select' | 'textarea' | 'number'
    question: string
    required: boolean
    options?: string[]
  }>
  formName: string
  formDescription: string
}

interface LandingPageConfig {
  title: string
  subtitle: string
  description: string
  ctaText: string
  logo: string | null
  primaryColor: string
  backgroundColor: string
  customUrl: string
  showSocialProof: boolean
  socialProofText: string
}

interface LandingPagePreviewProps {
  formData: FormData
  config: LandingPageConfig
  isOpen: boolean
  onClose: () => void
}

export default function LandingPagePreview({ formData, config, isOpen, onClose }: LandingPagePreviewProps) {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')
  const [copied, setCopied] = useState(false)

  const deviceSizes = {
    desktop: 'w-full max-w-4xl',
    tablet: 'w-full max-w-2xl',
    mobile: 'w-full max-w-sm'
  }

  const copyUrl = () => {
    const url = config.customUrl 
      ? `formulate.app/${config.customUrl}` 
      : 'formulate.app/ai-readiness-assessment'
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareUrl = () => {
    const url = config.customUrl 
      ? `formulate.app/${config.customUrl}` 
      : 'formulate.app/ai-readiness-assessment'
    
    if (navigator.share) {
      navigator.share({
        title: config.title,
        text: config.description,
        url: url
      })
    } else {
      copyUrl()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-secondary-200">
              <div>
                <h2 className="text-xl font-bold text-secondary-900">Landing Page Preview</h2>
                <p className="text-sm text-secondary-600">See how your page will look to visitors</p>
              </div>
              
              <div className="flex items-center space-x-2">
                {/* Device Toggle */}
                <div className="flex items-center bg-secondary-100 rounded-lg p-1">
                  <button
                    onClick={() => setDeviceView('desktop')}
                    className={`p-2 rounded-md transition-colors ${
                      deviceView === 'desktop' ? 'bg-white shadow-sm' : 'text-secondary-600'
                    }`}
                  >
                    <Monitor className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDeviceView('tablet')}
                    className={`p-2 rounded-md transition-colors ${
                      deviceView === 'tablet' ? 'bg-white shadow-sm' : 'text-secondary-600'
                    }`}
                  >
                    <Tablet className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDeviceView('mobile')}
                    className={`p-2 rounded-md transition-colors ${
                      deviceView === 'mobile' ? 'bg-white shadow-sm' : 'text-secondary-600'
                    }`}
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>
                
                <button
                  onClick={onClose}
                  className="p-2 text-secondary-400 hover:text-secondary-600 rounded-lg hover:bg-secondary-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Preview Content */}
            <div className="flex-1 overflow-auto p-6">
              <div className={`mx-auto ${deviceSizes[deviceView]} transition-all duration-300`}>
                {/* Landing Page Content */}
                <div 
                  className="min-h-screen rounded-lg shadow-lg overflow-hidden"
                  style={{ backgroundColor: config.backgroundColor }}
                >
                  {/* Header/Navigation */}
                  <header className="bg-white/90 backdrop-blur-sm border-b border-secondary-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="flex justify-between items-center h-16">
                        {config.logo ? (
                          <img src={config.logo} alt="Logo" className="h-8 object-contain" />
                        ) : (
                          <div className="text-xl font-bold text-secondary-900">Your Brand</div>
                        )}
                        <nav className="hidden md:flex items-center space-x-6">
                          <a href="#features" className="text-secondary-600 hover:text-secondary-900">Features</a>
                          <a href="#pricing" className="text-secondary-600 hover:text-secondary-900">Pricing</a>
                          <a href="#contact" className="text-secondary-600 hover:text-secondary-900">Contact</a>
                        </nav>
                      </div>
                    </div>
                  </header>

                  {/* Hero Section */}
                  <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                      <h1 
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
                        style={{ color: config.primaryColor }}
                      >
                        {config.title}
                      </h1>
                      <p className="text-xl sm:text-2xl text-secondary-600 mb-4">
                        {config.subtitle}
                      </p>
                      <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
                        {config.description}
                      </p>
                      
                      {config.showSocialProof && (
                        <p className="text-sm text-secondary-500 mb-8">
                          {config.socialProofText}
                        </p>
                      )}
                    </div>
                  </section>

                  {/* Form Section */}
                  <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-2xl mx-auto">
                      <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                          Get Your Personalized Report
                        </h2>
                        <p className="text-secondary-600">
                          Fill out the form below to receive your customized {formData.contentType.toLowerCase()}
                        </p>
                      </div>

                      <div className="bg-white rounded-xl shadow-lg p-8 border border-secondary-200">
                        <form className="space-y-6">
                          {formData.questions.map((question, index) => (
                            <div key={question.id}>
                              <label className="block text-sm font-medium text-secondary-700 mb-2">
                                {question.question}
                                {question.required && <span className="text-red-500 ml-1">*</span>}
                              </label>
                              
                              {question.type === 'text' && (
                                <input
                                  type="text"
                                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                  placeholder="Enter your answer..."
                                />
                              )}
                              
                              {question.type === 'email' && (
                                <input
                                  type="email"
                                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                  placeholder="Enter your email..."
                                />
                              )}
                              
                              {question.type === 'select' && (
                                <select className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                                  <option value="">Select an option...</option>
                                  {question.options?.map((option, optionIndex) => (
                                    <option key={optionIndex} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              )}
                              
                              {question.type === 'textarea' && (
                                <textarea
                                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                  rows={3}
                                  placeholder="Enter your answer..."
                                />
                              )}
                              
                              {question.type === 'number' && (
                                <input
                                  type="number"
                                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                  placeholder="Enter a number..."
                                />
                              )}
                            </div>
                          ))}
                          
                          <button
                            type="submit"
                            className="w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
                            style={{
                              backgroundColor: config.primaryColor,
                              color: '#ffffff'
                            }}
                          >
                            {config.ctaText}
                          </button>
                        </form>
                      </div>
                    </div>
                  </section>

                  {/* Footer */}
                  <footer className="bg-secondary-900 text-white py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                      <p className="text-secondary-400">
                        © 2024 Your Company. All rights reserved.
                      </p>
                    </div>
                  </footer>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-between p-6 border-t border-secondary-200 bg-secondary-50">
              <div className="flex items-center space-x-4">
                <button
                  onClick={copyUrl}
                  className="flex items-center space-x-2 px-4 py-2 text-sm text-secondary-600 hover:text-secondary-900 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied!' : 'Copy URL'}</span>
                </button>
                
                <button
                  onClick={shareUrl}
                  className="flex items-center space-x-2 px-4 py-2 text-sm text-secondary-600 hover:text-secondary-900 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="btn-secondary">
                  <Download className="w-4 h-4 mr-2" />
                  Download HTML
                </button>
                <button className="btn-primary">
                  Publish Page
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
