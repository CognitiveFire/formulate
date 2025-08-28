'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Wand2 } from 'lucide-react'
import Link from 'next/link'

interface MobileNavigationProps {
  currentPage?: string
}

export default function MobileNavigation({ currentPage }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navigationItems = [
    { href: '/demo', label: 'See Demo' },
    { href: '/wizard', label: 'Create Form' },
    { href: '/builder', label: 'Landing Page Builder' }
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden p-2 text-white hover:text-n60-100 transition-colors"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden">
          {/* Mobile Menu */}
          <div className="fixed right-0 top-0 h-full w-80 bg-n60-800 shadow-2xl z-50 lg:hidden">
            <div className="flex items-center justify-between p-6 border-b border-n60-700 bg-n60-800">
              <div className="flex items-center space-x-2">
                <Wand2 className="w-8 h-8 text-n60-500" />
                <span className="text-xl font-bold text-white">Formulate</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-white hover:text-n60-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-6 bg-n60-800 rounded-lg mx-4 mb-20 shadow-lg border border-n60-700">
              <div className="space-y-4">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    currentPage === '/' 
                      ? 'bg-n60-700 text-white' 
                      : 'text-charcoal-300 hover:bg-n60-700 hover:text-white'
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/demo"
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    currentPage === '/demo' 
                      ? 'bg-n60-700 text-white' 
                      : 'text-charcoal-300 hover:bg-n60-700 hover:text-white'
                  }`}
                >
                  Demo
                </Link>
                <Link
                  href="/wizard"
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    currentPage === '/wizard' 
                      ? 'bg-n60-700 text-white' 
                      : 'text-charcoal-300 hover:bg-n60-700 hover:text-white'
                  }`}
                >
                  Create Form
                </Link>
                <Link
                  href="/builder"
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    currentPage === '/builder' 
                      ? 'bg-n60-700 text-white' 
                      : 'text-charcoal-300 hover:bg-n60-700 hover:text-white'
                  }`}
                >
                  Landing Page Builder
                </Link>
                <Link
                  href="/product-guide-demo"
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    currentPage === '/product-guide-demo' 
                      ? 'bg-n60-700 text-white' 
                      : 'text-charcoal-300 hover:bg-n60-700 hover:text-white'
                  }`}
                >
                  Product Guide Demo
                </Link>
              </div>
            </nav>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-n60-700 bg-n60-800">
              <div className="text-center">
                <p className="text-sm text-charcoal-400 mb-2">
                  AI-Powered Form & Landing Page Creation
                </p>
                <p className="text-xs text-charcoal-500">
                  © 2024 Formulate. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
