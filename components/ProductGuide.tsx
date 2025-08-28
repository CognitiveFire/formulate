'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, BookOpen, Star, CheckCircle, ArrowRight, Download, Share2, Bookmark } from 'lucide-react'

interface ProductGuideProps {
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

export default function ProductGuide({ userData }: ProductGuideProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [isBookmarked, setIsBookmarked] = useState(false)

  // Generate personalized content based on user data
  const generatePersonalizedContent = () => {
    const content = {
      title: `Personalized ${userData.productType} Guide`,
      subtitle: `Tailored for ${userData.companySize} businesses focusing on ${userData.useCase}`,
      executiveSummary: `Based on your requirements as a ${userData.companySize} company in the ${userData.useCase} space, we've curated the most relevant ${userData.productType} solutions within your ${userData.budget} budget range.`,
      
      topRecommendations: [
        {
          name: "EnterprisePro Suite",
          category: userData.productType,
          rating: 4.8,
          price: "$299/month",
          features: ["Advanced analytics", "Custom integrations", "24/7 support", "Scalable architecture"],
          pros: ["Excellent for enterprise needs", "Highly customizable", "Great support team"],
          cons: ["Steep learning curve", "Higher initial cost"],
          bestFor: `${userData.companySize} companies needing robust ${userData.useCase} solutions`
        },
        {
          name: "StartupFlex Platform",
          category: userData.productType,
          rating: 4.6,
          price: "$99/month",
          features: ["Easy setup", "Essential features", "Mobile app", "API access"],
          pros: ["Quick to implement", "Affordable pricing", "User-friendly interface"],
          cons: ["Limited advanced features", "Basic reporting"],
          bestFor: `Growing businesses looking for ${userData.useCase} solutions`
        },
        {
          name: "BusinessCore Solution",
          category: userData.productType,
          rating: 4.7,
          price: "$199/month",
          features: ["Comprehensive toolkit", "Advanced reporting", "Team collaboration", "Security features"],
          pros: ["Feature-rich platform", "Good value for money", "Strong security"],
          cons: ["Complex interface", "Requires training"],
          bestFor: `Established businesses with dedicated teams`
        }
      ],

      implementationGuide: {
        phase1: {
          title: "Phase 1: Assessment & Planning (Week 1-2)",
          tasks: [
            "Audit current systems and processes",
            "Define specific success metrics",
            "Identify key stakeholders and decision makers",
            "Create implementation timeline"
          ]
        },
        phase2: {
          title: "Phase 2: Setup & Configuration (Week 3-4)",
          tasks: [
            "Install and configure chosen solution",
            "Set up user accounts and permissions",
            "Configure integrations with existing tools",
            "Import historical data"
          ]
        },
        phase3: {
          title: "Phase 3: Training & Rollout (Week 5-6)",
          tasks: [
            "Train key users and administrators",
            "Create user documentation and guides",
            "Pilot with small team",
            "Gather feedback and make adjustments"
          ]
        },
        phase4: {
          title: "Phase 4: Full Deployment (Week 7-8)",
          tasks: [
            "Roll out to entire organization",
            "Monitor performance and usage",
            "Provide ongoing support",
            "Measure success metrics"
          ]
        }
      },

      costAnalysis: {
        softwareCosts: userData.budget,
        implementationCosts: "15-25% of annual software cost",
        trainingCosts: "$2,000 - $5,000",
        totalFirstYear: "Approximately 1.5x your software budget",
        roi: "Expected ROI within 6-12 months"
      },

      nextSteps: [
        "Schedule a demo with our top 2 recommendations",
        "Request detailed pricing and implementation quotes",
        "Plan stakeholder review meeting",
        "Prepare budget approval documentation",
        "Set up vendor evaluation criteria"
      ]
    }

    return content
  }

  const content = generatePersonalizedContent()
  const totalPages = 6

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0))

  const renderPage = (pageNum: number) => {
    switch (pageNum) {
      case 0:
        return (
          <div className="text-center">
            <div className="mb-8">
              <BookOpen className="w-16 h-16 text-n60-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-charcoal-900 mb-2">{content.title}</h1>
              <p className="text-xl text-charcoal-600 mb-4">{content.subtitle}</p>
              <p className="text-charcoal-700 max-w-2xl mx-auto">{content.executiveSummary}</p>
            </div>
            
            <div className="bg-gradient-to-r from-n60-50 to-charcoal-50 rounded-xl p-6 border border-n60-200">
              <h2 className="text-xl font-semibold text-charcoal-900 mb-4">Your Profile Summary</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-left">
                  <span className="font-medium text-charcoal-700">Company:</span> {userData.company}
                </div>
                <div className="text-left">
                  <span className="font-medium text-charcoal-700">Size:</span> {userData.companySize}
                </div>
                <div className="text-left">
                  <span className="font-medium text-charcoal-700">Focus:</span> {userData.useCase}
                </div>
                <div className="text-left">
                  <span className="font-medium text-charcoal-700">Budget:</span> {userData.budget}
                </div>
              </div>
            </div>
          </div>
        )

      case 1:
        return (
          <div>
            <h2 className="text-2xl font-bold text-charcoal-900 mb-6 text-center">Top Recommendations</h2>
            <div className="space-y-6">
              {content.topRecommendations.map((rec, index) => (
                <div key={index} className="bg-white rounded-lg border border-charcoal-200 p-6 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-charcoal-900">{rec.name}</h3>
                      <p className="text-charcoal-600">{rec.category}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(rec.rating) ? 'text-yellow-400 fill-current' : 'text-charcoal-300'}`} />
                        ))}
                        <span className="text-sm text-charcoal-600 ml-2">{rec.rating}</span>
                      </div>
                      <p className="text-lg font-bold text-n60-600">{rec.price}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-charcoal-900 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {rec.features.map((feature, i) => (
                        <span key={i} className="px-2 py-1 bg-charcoal-100 text-charcoal-700 text-xs rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Pros</h4>
                      <ul className="space-y-1">
                        {rec.pros.map((pro, i) => (
                          <li key={i} className="flex items-center text-sm text-charcoal-700">
                            <CheckCircle className="w-3 h-3 text-green-600 mr-2" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-700 mb-2">Cons</h4>
                      <ul className="space-y-1">
                        {rec.cons.map((con, i) => (
                          <li key={i} className="flex items-center text-sm text-charcoal-700">
                            <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <p className="text-sm text-charcoal-600">
                    <span className="font-medium">Best for:</span> {rec.bestFor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )

      case 2:
        return (
          <div>
            <h2 className="text-2xl font-bold text-charcoal-900 mb-6 text-center">Implementation Roadmap</h2>
            <div className="space-y-6">
              {Object.entries(content.implementationGuide).map(([phase, data]) => (
                <div key={phase} className="bg-white rounded-lg border border-charcoal-200 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-charcoal-900 mb-3">{data.title}</h3>
                  <ul className="space-y-2">
                    {data.tasks.map((task, index) => (
                      <li key={index} className="flex items-start text-charcoal-700">
                        <div className="w-2 h-2 bg-n60-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )

      case 3:
        return (
          <div>
            <h2 className="text-2xl font-bold text-charcoal-900 mb-6 text-center">Cost Analysis & ROI</h2>
            <div className="bg-gradient-to-r from-n60-50 to-charcoal-50 rounded-xl p-8 border border-n60-200">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-900 mb-4">Cost Breakdown</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-charcoal-700">Software (Annual):</span>
                      <span className="font-semibold text-charcoal-900">{content.costAnalysis.softwareCosts}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-700">Implementation:</span>
                      <span className="font-semibold text-charcoal-900">{content.costAnalysis.implementationCosts}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-700">Training:</span>
                      <span className="font-semibold text-charcoal-900">{content.costAnalysis.trainingCosts}</span>
                    </div>
                    <div className="border-t border-charcoal-300 pt-3 mt-3">
                      <div className="flex justify-between">
                        <span className="font-semibold text-charcoal-900">Total First Year:</span>
                        <span className="font-bold text-n60-600">{content.costAnalysis.totalFirstYear}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-900 mb-4">Expected Returns</h3>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-white rounded-lg border border-charcoal-200">
                      <div className="text-2xl font-bold text-green-600 mb-2">ROI</div>
                      <div className="text-sm text-charcoal-600">{content.costAnalysis.roi}</div>
                    </div>
                    <div className="text-sm text-charcoal-700">
                      <p className="mb-2">Based on your company size and use case, you can expect:</p>
                      <ul className="space-y-1">
                        <li>• 20-40% efficiency improvement</li>
                        <li>• Reduced manual work by 15-25 hours/week</li>
                        <li>• Better decision making with data insights</li>
                        <li>• Improved team collaboration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div>
            <h2 className="text-2xl font-bold text-charcoal-900 mb-6 text-center">Next Steps</h2>
            <div className="space-y-4">
              {content.nextSteps.map((step, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-charcoal-200 shadow-sm">
                  <div className="w-8 h-8 bg-n60-100 text-n60-600 rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <span className="text-charcoal-700 flex-1">{step}</span>
                  <ArrowRight className="w-5 h-5 text-n60-500" />
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-n60-600 to-n60-700 rounded-xl text-white text-center">
              <h3 className="text-xl font-semibold mb-3">Ready to Get Started?</h3>
              <p className="text-n60-100 mb-4">
                Our team is ready to help you implement the perfect solution for your business needs.
              </p>
              <button className="bg-white text-n60-600 hover:bg-n60-50 font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Schedule Consultation
              </button>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="text-center">
            <div className="mb-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-charcoal-900 mb-4">Your Personalized Guide is Complete!</h2>
              <p className="text-charcoal-600 max-w-2xl mx-auto">
                You now have a comprehensive, tailored product guide that matches your specific business requirements. 
                Use this guide to make informed decisions and accelerate your implementation process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <button className="flex items-center justify-center space-x-2 p-4 bg-white border border-charcoal-200 rounded-lg hover:border-n60-500 transition-colors">
                <Download className="w-5 h-5 text-n60-500" />
                <span className="text-charcoal-700">Download PDF</span>
              </button>
              <button className="flex items-center justify-center space-x-2 p-4 bg-white border border-charcoal-200 rounded-lg hover:border-n60-500 transition-colors">
                <Share2 className="w-5 h-5 text-n60-500" />
                <span className="text-charcoal-700">Share Guide</span>
              </button>
              <button 
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`flex items-center justify-center space-x-2 p-4 rounded-lg transition-colors ${
                  isBookmarked 
                    ? 'bg-n60-100 border-n60-500 text-n60-700' 
                    : 'bg-white border border-charcoal-200 text-charcoal-700 hover:border-n60-500'
                }`}
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked ? 'text-n60-600 fill-current' : 'text-n60-500'}`} />
                <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
              </button>
            </div>
            
            <div className="text-sm text-charcoal-500">
              <p>This guide was generated on {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
              <p>Valid for 30 days • Updates available upon request</p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="bg-gradient-to-br from-charcoal-50 to-n60-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-charcoal-900 mb-2">Your Personalized Product Guide</h1>
          <p className="text-charcoal-600">AI-powered recommendations tailored to your business needs</p>
        </div>

        {/* E-Reader Container */}
        <div className="bg-white rounded-2xl shadow-2xl border border-charcoal-200 overflow-hidden">
          {/* Navigation Bar */}
          <div className="bg-charcoal-900 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <BookOpen className="w-6 h-6 text-n60-400" />
              <span className="font-semibold">Product Guide</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-charcoal-300">
                Page {currentPage + 1} of {totalPages}
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className="p-2 rounded-lg hover:bg-charcoal-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages - 1}
                  className="p-2 rounded-lg hover:bg-charcoal-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Page Content */}
          <div className="p-8 min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderPage(currentPage)}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Page Indicators */}
          <div className="bg-charcoal-100 px-6 py-4 flex items-center justify-center space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentPage ? 'bg-n60-500' : 'bg-charcoal-300 hover:bg-charcoal-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
