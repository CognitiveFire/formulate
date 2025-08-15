'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Wand2, ArrowRight, Check, Sparkles } from 'lucide-react'
import Link from 'next/link'
import MobileNavigation from '@/components/MobileNavigation'

export default function DemoPage() {
  const [selectedType, setSelectedType] = useState('')
  const [description, setDescription] = useState('')
  const [showExample, setShowExample] = useState(false)

  const contentTypes = [
    'Readiness Report',
    'Product Comparison', 
    'Investment Profile',
    'ROI Calculator',
    'Case Study',
    'White Paper',
    'Assessment'
  ]

  const examples = {
    'Readiness Report': 'A comprehensive analysis of your organization\'s readiness for AI implementation. Our AI-powered assessment will provide personalized insights and recommendations based on your industry, company size, and current technology stack.',
    'Product Comparison': 'An in-depth comparison of leading marketing automation tools to help you choose the right solution for your business needs and budget.',
    'Investment Profile': 'A personalized investment profile that matches your risk tolerance, timeline, and financial goals with the most suitable investment opportunities.',
    'ROI Calculator': 'Calculate the potential return on investment for implementing new business software, including cost savings, efficiency gains, and revenue impact.',
    'Case Study': 'Real-world examples of how companies in your industry have successfully implemented similar solutions and achieved measurable results.',
    'White Paper': 'Expert insights and research on emerging trends in digital transformation, with actionable strategies for modern businesses.',
    'Assessment': 'Evaluate your team\'s current skills and identify areas for improvement with our comprehensive skills assessment framework.'
  }

  const aiQuestions = {
    'Readiness Report': [
      'What is your business email address?',
      'What is your company name?',
      'What industry are you in?',
      'How many employees does your company have?',
      'What is your current implementation level?',
      'What are your main challenges and goals?',
      'What is your timeline for implementation?',
      'What is your budget range?'
    ],
    'Product Comparison': [
      'What is your email address?',
      'What is your name?',
      'What is your company name?',
      'What products are you comparing?',
      'What is your primary use case?',
      'What is your company size?',
      'What specific features are most important to you?',
      'What is your decision timeline?'
    ]
  }

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
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/wizard" className="btn-secondary">
                Try It Now
              </Link>
              <Link href="/builder" className="btn-primary">
                Landing Page Builder
              </Link>
            </div>
            <MobileNavigation currentPage="/demo" />
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
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Question Generation</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary-900 mb-6">
              See How AI Generates
              <span className="text-primary-600 block">Perfect Form Questions</span>
            </h1>
            <p className="text-lg sm:text-xl text-secondary-600 mb-8 max-w-3xl mx-auto px-4">
              Watch Formulate's AI analyze your content type and description to automatically generate 
              the most relevant questions for your lead generation forms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Panel - Input */}
            <div className="space-y-8">
              <div className="card">
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                  Try the AI Question Generator
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Content Type
                    </label>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="input-field"
                    >
                      <option value="">Select a content type...</option>
                      {contentTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Describe your content idea
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={4}
                      placeholder="Describe what you want to create..."
                      className="input-field"
                    />
                  </div>

                  <button
                    onClick={() => setShowExample(true)}
                    disabled={!selectedType || !description}
                    className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Wand2 className="w-4 h-4" />
                    <span>Generate AI Questions</span>
                  </button>
                </div>
              </div>

              {showExample && selectedType && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="card bg-primary-50 border-primary-200"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary-900">
                      AI Analysis Complete!
                    </h3>
                  </div>
                  <p className="text-primary-700 mb-4">
                    Based on your content type and description, AI has generated the perfect questions to collect the right information from your leads.
                  </p>
                  <Link href="/wizard" className="btn-primary w-full">
                    Create Your Form Now
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Right Panel - AI Output */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-secondary-900">
                  AI-Generated Questions
                </h3>
                <div className="flex items-center space-x-2 text-sm text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  <Wand2 className="w-4 h-4" />
                  <span>AI-Powered</span>
                </div>
              </div>

              {showExample && selectedType ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card"
                >
                  <div className="space-y-4">
                    {aiQuestions[selectedType as keyof typeof aiQuestions]?.map((question, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-secondary-700">{question}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <div className="card bg-secondary-50 border-dashed border-secondary-300">
                  <div className="text-center py-12">
                    <Wand2 className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-secondary-600 mb-2">
                      No Questions Generated Yet
                    </h3>
                    <p className="text-secondary-500">
                      Select a content type and describe your idea to see AI-generated questions
                    </p>
                  </div>
                </div>
              )}

              {/* How It Works */}
              <div className="card bg-gradient-to-r from-secondary-50 to-primary-50">
                <h4 className="font-semibold text-secondary-900 mb-3">How AI Question Generation Works</h4>
                <div className="space-y-3 text-sm text-secondary-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>AI analyzes your content type and description</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>Identifies key information needed for your content</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>Generates relevant questions with appropriate field types</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>Customizes questions based on your specific context</span>
                  </div>
                </div>
              </div>
            </div>
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
            className="card bg-gradient-to-r from-primary-600 to-primary-700 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Create AI-Powered Forms?
            </h2>
            <p className="text-primary-100 mb-6">
              Experience the power of AI-generated questions that collect the right information from your leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/wizard" className="bg-white text-primary-600 hover:bg-primary-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Start Creating
              </Link>
              <Link href="/builder" className="border border-white/30 text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                View Landing Page Builder
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
