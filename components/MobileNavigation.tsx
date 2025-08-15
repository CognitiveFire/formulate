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
        className="lg:hidden p-2 rounded-md text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100 transition-colors"
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
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-secondary-200">
                <div className="flex items-center space-x-2">
                  <Wand2 className="w-8 h-8 text-primary-600" />
                  <span className="text-xl font-bold text-secondary-900">Formulate</span>
                </div>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-md text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100 transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation items */}
              <nav className="p-6">
                <ul className="space-y-4">
                  {navigationItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                          currentPage === item.href
                            ? 'bg-primary-100 text-primary-700'
                            : 'text-secondary-700 hover:bg-secondary-100 hover:text-secondary-900'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-secondary-200">
                <Link
                  href="/"
                  onClick={toggleMenu}
                  className="block text-center btn-primary w-full"
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
