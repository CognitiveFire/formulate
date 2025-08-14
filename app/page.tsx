'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Wand2, FormInput, Palette, Zap, Users, Download, Share2 } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const [isHovered, setIsHovered] = useState(false)

  const features = [
    {
      icon: <Wand2 className="w-6 h-6" />,
      title: 'AI-Powered Forms',
      description: 'Smart forms that adapt to your content needs and ask the right questions.'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Custom Landing Pages',
      description: 'Beautiful, conversion-focused pages with your branding and styling.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Personalized Content',
      description: 'AI generates unique content pieces based on form responses.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Lead Generation',
      description: 'Capture qualified leads with intelligent content experiences.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-secondary-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Wand2 className="w-8 h-8 text-primary-600" />
              <span className="text-xl font-bold text-secondary-900">Formulate</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/demo" className="text-secondary-600 hover:text-secondary-900 font-medium">
                See Demo
              </Link>
              <Link href="/wizard" className="btn-secondary">
                Create Form
              </Link>
              <Link href="/builder" className="btn-primary">
                Landing Page Builder
              </Link>
            </div>
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
            <h1 className="text-5xl md:text-6xl font-bold text-secondary-900 mb-6">
              Turn Ideas Into
              <span className="text-primary-600 block">Lead-Generating Content</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto">
              Just describe your content idea and Formulate builds the perfect form and landing page. 
              AI generates personalized content that converts visitors into qualified leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/wizard" className="btn-primary text-lg px-8 py-3">
                Start Creating
              </Link>
              <Link href="/builder" className="btn-secondary text-lg px-8 py-3">
                View Examples
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
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
              Ready to Generate More Leads?
            </h2>
            <p className="text-primary-100 mb-6">
              Join thousands of marketers using Formulate to create conversion-focused content experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/wizard" className="bg-white text-primary-600 hover:bg-primary-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Get Started Free
              </Link>
              <button className="border border-white/30 text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Wand2 className="w-6 h-6 text-primary-400" />
              <span className="text-lg font-semibold">Formulate</span>
            </div>
            <div className="flex space-x-6 text-secondary-300">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-secondary-700 text-center text-secondary-400">
            <p>&copy; 2024 Formulate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
