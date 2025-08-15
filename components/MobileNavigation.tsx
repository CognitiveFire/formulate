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
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-3 rounded-lg text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100 transition-colors border border-secondary-200 hover:border-secondary-300"
        aria-label="Toggle mobile menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={toggleMenu}
            />
            
            {/* Menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-80 bg-secondary-100 shadow-2xl z-50 lg:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-secondary-200 bg-white">
                <div className="flex items-center space-x-2">
                  <Wand2 className="w-8 h-8 text-primary-600" />
                  <span className="text-xl font-bold text-secondary-900">Formulate</span>
                </div>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-lg text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100 transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation items */}
              <nav className="p-6 bg-white rounded-lg mx-4 mb-20 shadow-lg border border-secondary-200">
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-secondary-500 uppercase tracking-wider mb-3">
                    Navigation
                  </h3>
                </div>
                <ul className="space-y-3">
                  {navigationItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className={`block w-full px-6 py-4 rounded-xl text-base font-semibold transition-all duration-200 border-2 ${
                          currentPage === item.href
                            ? 'bg-primary-600 text-white border-primary-600 shadow-lg shadow-primary-600/25'
                            : 'bg-white text-secondary-700 border-secondary-200 hover:bg-secondary-50 hover:border-primary-300 hover:text-primary-700 hover:shadow-md'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-secondary-200 bg-white">
                <Link
                  href="/"
                  onClick={toggleMenu}
                  className="block text-center w-full px-6 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/25"
                >
                  Back to Home
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
