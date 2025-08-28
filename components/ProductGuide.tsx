'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, BookOpen, Star, CheckCircle, ArrowRight, Download, Share2, Bookmark, ArrowLeft } from 'lucide-react'

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
  language: 'no' | 'en'
}

export default function ProductGuide({ userData, language }: ProductGuideProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [isBookmarked, setIsBookmarked] = useState(false)

  const translations = {
    no: {
      title: `Personlig ${userData.productType} Guide`,
      subtitle: `Skreddersyd for ${userData.companySize} virksomheter som fokuserer på ${userData.useCase}`,
      executiveSummary: `Basert på dine behov som en ${userData.companySize} virksomhet innen ${userData.useCase}, har vi kuratert de mest relevante ${userData.productType} løsningene innenfor ditt ${userData.budget} budsjett.`,
      profileSummary: 'Din Profil Sammendrag',
      company: 'Virksomhet',
      size: 'Størrelse',
      focus: 'Fokus',
      budget: 'Budsjett',
      topRecommendations: 'Topp Anbefalinger',
      implementationRoadmap: 'Implementerings Veikart',
      costAnalysis: 'Kostnadsanalyse & ROI',
      nextSteps: 'Neste Steg',
      readyToStart: 'Klar til å Komme i Gang?',
      guideComplete: 'Din Personlige Guide er Komplett!',
      guideDescription: 'Du har nå en omfattende, skreddersydd produktguide som matcher dine spesifikke forretningsbehov. Bruk denne guiden til å ta informerte beslutninger og akselerere implementeringsprosessen.',
      downloadPDF: 'Last Ned PDF',
      shareGuide: 'Del Guide',
      bookmark: 'Bokmerke',
      bookmarked: 'Bokmerket',
      generatedOn: 'Denne guiden ble generert den',
      validFor: 'Gyldig i 30 dager • Oppdateringer tilgjengelig på forespørsel',
      phase1: 'Fase 1: Vurdering & Planlegging (Uke 1-2)',
      phase2: 'Fase 2: Oppsett & Konfigurering (Uke 3-4)',
      phase3: 'Fase 3: Trening & Lansering (Uke 5-6)',
      phase4: 'Fase 4: Full Implementering (Uke 7-8)',
      costBreakdown: 'Kostnadsoversikt',
      expectedReturns: 'Forventede Avkastninger',
      softwareCosts: 'Programvare (Årlig)',
      implementationCosts: 'Implementering',
      trainingCosts: 'Trening',
      totalFirstYear: 'Total Første År',
      roi: 'Forventet ROI innen 6-12 måneder',
      efficiencyImprovement: '20-40% effektivitetsforbedring',
      timeSavings: 'Redusert manuelt arbeid med 15-25 timer/uke',
      betterDecisions: 'Bedre beslutningstaking med datainnsikt',
      teamCollaboration: 'Forbedret team samarbeid',
      scheduleDemo: 'Planlegg demo med våre topp 2 anbefalinger',
      requestPricing: 'Be om detaljert prising og implementerings tilbud',
      planStakeholder: 'Planlegg interessentgjennomgang møte',
      prepareBudget: 'Forbered budsjettgodkjenning dokumentasjon',
      setupCriteria: 'Sett opp leverandør evalueringskriterier',
      readyToImplement: 'Klar til å Implementere Din Løsning?',
      implementationDescription: 'Vårt team er klart til å hjelpe deg med å implementere den perfekte løsningen for dine forretningsbehov.',
      scheduleConsultation: 'Planlegg Konsultasjon'
    },
    en: {
      title: `Personalized ${userData.productType} Guide`,
      subtitle: `Tailored for ${userData.companySize} businesses focusing on ${userData.useCase}`,
      executiveSummary: `Based on your requirements as a ${userData.companySize} company in the ${userData.useCase} space, we've curated the most relevant ${userData.productType} solutions within your ${userData.budget} budget range.`,
      profileSummary: 'Your Profile Summary',
      company: 'Company',
      size: 'Size',
      focus: 'Focus',
      budget: 'Budget',
      topRecommendations: 'Top Recommendations',
      implementationRoadmap: 'Implementation Roadmap',
      costAnalysis: 'Cost Analysis & ROI',
      nextSteps: 'Next Steps',
      readyToStart: 'Ready to Get Started?',
      guideComplete: 'Your Personalized Guide is Complete!',
      guideDescription: 'You now have a comprehensive, tailored product guide that matches your specific business requirements. Use this guide to make informed decisions and accelerate your implementation process.',
      downloadPDF: 'Download PDF',
      shareGuide: 'Share Guide',
      bookmark: 'Bookmark',
      bookmarked: 'Bookmarked',
      generatedOn: 'This guide was generated on',
      validFor: 'Valid for 30 days • Updates available upon request',
      phase1: 'Phase 1: Assessment & Planning (Week 1-2)',
      phase2: 'Phase 2: Setup & Configuration (Week 3-4)',
      phase3: 'Phase 3: Training & Rollout (Week 5-6)',
      phase4: 'Phase 4: Full Deployment (Week 7-8)',
      costBreakdown: 'Cost Breakdown',
      expectedReturns: 'Expected Returns',
      softwareCosts: 'Software (Annual)',
      implementationCosts: 'Implementation',
      trainingCosts: 'Training',
      totalFirstYear: 'Total First Year',
      roi: 'Expected ROI within 6-12 months',
      efficiencyImprovement: '20-40% efficiency improvement',
      timeSavings: 'Reduced manual work by 15-25 hours/week',
      betterDecisions: 'Better decision making with data insights',
      teamCollaboration: 'Improved team collaboration',
      scheduleDemo: 'Schedule demo with our top 2 recommendations',
      requestPricing: 'Request detailed pricing and implementation quotes',
      planStakeholder: 'Plan stakeholder review meeting',
      prepareBudget: 'Prepare budget approval documentation',
      setupCriteria: 'Set up vendor evaluation criteria',
      readyToImplement: 'Ready to Implement Your Solution?',
      implementationDescription: 'Our team is ready to help you implement the perfect solution for your business needs.',
      scheduleConsultation: 'Schedule Consultation'
    }
  }

  const t = translations[language]

  // Generate personalized content based on user data for AI marketing products
  const generatePersonalizedContent = () => {
    const content = {
      title: t.title,
      subtitle: t.subtitle,
      executiveSummary: t.executiveSummary,
      
      topRecommendations: [
        {
          name: "AI Marketing Suite Pro",
          category: userData.productType,
          rating: 4.8,
          price: "kr 45,000/mnd",
          features: ["AI-drevet innholdsgenerering", "Automatisert kampanjeoptimering", "24/7 support", "Skalerbar arkitektur"],
          pros: ["Utmerket for markedsføringsbehov", "Høy tilpasningsevne", "Fantastisk supportteam"],
          cons: ["Steil læringskurve", "Høyere oppstartspris"],
          bestFor: `${userData.companySize} virksomheter som trenger robuste ${userData.useCase} løsninger`
        },
        {
          name: "LeadGen AI Platform",
          category: userData.productType,
          rating: 4.6,
          price: "kr 15,000/mnd",
          features: ["Enkel oppstart", "Grunnleggende funksjoner", "Mobil app", "API tilgang"],
          pros: ["Rask å implementere", "Rimelig prising", "Brukervennlig grensesnitt"],
          cons: ["Begrensede avanserte funksjoner", "Grunnleggende rapportering"],
          bestFor: `Voksende virksomheter som leter etter ${userData.useCase} løsninger`
        },
        {
          name: "International Expansion Hub",
          category: userData.productType,
          rating: 4.7,
          price: "kr 30,000/mnd",
          features: ["Omfattende verktøykasse", "Avansert rapportering", "Team samarbeid", "Sikkerhetsfunksjoner"],
          pros: ["Funksjonsrik plattform", "God verdi for pengene", "Sterk sikkerhet"],
          cons: ["Komplekst grensesnitt", "Krever trening"],
          bestFor: `Etablerte virksomheter med dedikerte team`
        }
      ],

      implementationGuide: {
        phase1: {
          title: t.phase1,
          tasks: [
            "Gjennomgå nåværende systemer og prosesser",
            "Definer spesifikke suksessmetrikker",
            "Identifiser nøkkelinteressenter og beslutningstakere",
            "Opprett implementeringstidslinje"
          ]
        },
        phase2: {
          title: t.phase2,
          tasks: [
            "Installer og konfigurer valgt løsning",
            "Sett opp brukerkontoer og tillatelser",
            "Konfigurer integrasjoner med eksisterende verktøy",
            "Importer historiske data"
          ]
        },
        phase3: {
          title: t.phase3,
          tasks: [
            "Trene nøkkelbrukere og administratorer",
            "Opprett brukerdokumentasjon og guider",
            "Pilot med lite team",
            "Samle tilbakemeldinger og gjøre justeringer"
          ]
        },
        phase4: {
          title: t.phase4,
          tasks: [
            "Lansere til hele organisasjonen",
            "Overvåke ytelse og bruk",
            "Gi løpende støtte",
            "Måle suksessmetrikker"
          ]
        }
      },

      costAnalysis: {
        softwareCosts: userData.budget,
        implementationCosts: "15-25% av årlig programvarekostnad",
        trainingCosts: "kr 15,000 - kr 35,000",
        totalFirstYear: "Omtrent 1.5x ditt programvarebudsjett",
        roi: "Forventet ROI innen 6-12 måneder"
      },

      nextSteps: [
        t.scheduleDemo,
        t.requestPricing,
        t.planStakeholder,
        t.prepareBudget,
        t.setupCriteria
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
              <h1 className="text-3xl font-bold text-n60-800 mb-2">{content.title}</h1>
              <p className="text-xl text-charcoal-600 mb-4">{content.subtitle}</p>
              <p className="text-charcoal-700 max-w-2xl mx-auto">{content.executiveSummary}</p>
            </div>
            
            <div className="bg-gradient-to-r from-n60-50 to-charcoal-50 rounded-xl p-6 border border-n60-200 shadow-sm">
              <h2 className="text-xl font-semibold text-n60-800 mb-4">{t.profileSummary}</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-left bg-white p-3 rounded-lg border border-charcoal-200">
                  <span className="font-medium text-charcoal-700">{t.company}:</span>
                  <span className="ml-2 text-n60-800 font-semibold">{userData.company}</span>
                </div>
                <div className="text-left bg-white p-3 rounded-lg border border-charcoal-200">
                  <span className="font-medium text-charcoal-700">{t.size}:</span>
                  <span className="ml-2 text-n60-800 font-semibold">{userData.companySize}</span>
                </div>
                <div className="text-left bg-white p-3 rounded-lg border border-charcoal-200">
                  <span className="font-medium text-charcoal-700">{t.focus}:</span>
                  <span className="ml-2 text-n60-800 font-semibold">{userData.useCase}</span>
                </div>
                <div className="text-left bg-white p-3 rounded-lg border border-charcoal-200">
                  <span className="font-medium text-charcoal-700">{t.budget}:</span>
                  <span className="ml-2 text-n60-800 font-semibold">{userData.budget}</span>
                </div>
              </div>
            </div>
          </div>
        )

      case 1:
        return (
          <div>
            <h2 className="text-2xl font-bold text-n60-800 mb-6 text-center">{t.topRecommendations}</h2>
            <div className="space-y-6">
              {content.topRecommendations.map((rec, index) => (
                <div key={index} className="bg-white rounded-lg border border-charcoal-200 p-6 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-n60-800">{rec.name}</h3>
                      <p className="text-charcoal-600">{rec.category}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(rec.rating) ? 'text-yellow-400 fill-current' : 'text-charcoal-300'}`} />
                        ))}
                        <span className="text-sm text-charcoal-600 ml-2">{rec.rating}</span>
                      </div>
                      <p className="text-lg font-bold text-secondary-600">{rec.price}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-n60-800 mb-2">Nøkkelfunksjoner:</h4>
                    <div className="flex flex-wrap gap-2">
                      {rec.features.map((feature, i) => (
                        <span key={i} className="px-2 py-1 bg-charcoal-100 text-charcoal-700 text-xs rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Pros Section */}
                  <div className="mb-4">
                    <h4 className="font-medium text-green-700 mb-2">Fordeler</h4>
                    <ul className="space-y-1">
                      {rec.pros.map((pro, i) => (
                        <li key={i} className="flex items-center text-sm text-charcoal-700">
                          <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Cons Section */}
                  <div className="mb-4">
                    <h4 className="font-medium text-secondary-700 mb-2">Ulemper</h4>
                    <ul className="space-y-1">
                      {rec.cons.map((con, i) => (
                        <li key={i} className="flex items-center text-sm text-charcoal-700">
                          <div className="w-3 h-3 bg-secondary-500 rounded-full mr-2"></div>
                          {con}
                        </li>
                      ))}
                    </ul>
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
            <h2 className="text-2xl font-bold text-n60-800 mb-6 text-center">{t.implementationRoadmap}</h2>
            <div className="space-y-6">
              {Object.entries(content.implementationGuide).map(([phase, data]) => (
                <div key={phase} className="bg-white rounded-lg border border-charcoal-200 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-n60-800 mb-3">{data.title}</h3>
                  <ul className="space-y-2">
                    {data.tasks.map((task, index) => (
                      <li key={index} className="flex items-start text-charcoal-700">
                        <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-n60-800 mb-6 text-center">{t.nextSteps}</h2>
            
            {/* Next Steps List - Single Column Layout */}
            <div className="space-y-4 max-w-2xl mx-auto">
              {content.nextSteps.map((step, index) => (
                <div key={index} className="bg-white border border-charcoal-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-charcoal-100 text-charcoal-600 rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-charcoal-700 text-sm leading-relaxed">{step}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-charcoal-500 flex-shrink-0 mt-1" />
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Section */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-charcoal-600 to-charcoal-700 rounded-xl text-white p-6 text-center shadow-lg">
                <h3 className="text-xl font-semibold mb-3">{t.readyToImplement}</h3>
                <p className="text-charcoal-100 mb-4 text-sm leading-relaxed">
                  {t.implementationDescription}
                </p>
                <button className="bg-white text-charcoal-600 hover:bg-charcoal-50 font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg">
                  {t.scheduleConsultation}
                </button>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div>
            <h2 className="text-2xl font-bold text-n60-800 mb-6 text-center">{t.costAnalysis}</h2>
            <div className="bg-gradient-to-r from-charcoal-50 to-charcoal-50 rounded-xl p-8 border border-charcoal-200">
              {/* Cost Breakdown Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-n60-800 mb-4">{t.costBreakdown}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-charcoal-200">
                    <span className="text-charcoal-700 text-sm font-medium">{t.softwareCosts}:</span>
                    <span className="font-semibold text-n60-800 text-sm text-right ml-4">{content.costAnalysis.softwareCosts}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-charcoal-200">
                    <span className="text-charcoal-700 text-sm font-medium">{t.implementationCosts}:</span>
                    <span className="font-semibold text-n60-800 text-sm text-right ml-4">{content.costAnalysis.implementationCosts}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-charcoal-200">
                    <span className="text-charcoal-700 text-sm font-medium">{t.trainingCosts}:</span>
                    <span className="font-semibold text-n60-800 text-sm text-right ml-4">{content.costAnalysis.trainingCosts}</span>
                  </div>
                  <div className="border-t border-charcoal-300 pt-4 mt-4">
                    <div className="flex justify-between items-center p-3 bg-secondary-50 rounded-lg border border-secondary-200">
                      <span className="font-semibold text-n60-800 text-sm">{t.totalFirstYear}:</span>
                      <span className="font-bold text-secondary-600 text-sm text-right ml-4">{content.costAnalysis.totalFirstYear}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Expected Returns Section */}
              <div>
                <h3 className="text-lg font-semibold text-n60-800 mb-4">{t.expectedReturns}</h3>
                <div className="space-y-6">
                  <div className="text-center p-6 bg-n60-800 text-white rounded-lg border border-charcoal-200 shadow-lg">
                    <div className="text-3xl font-bold text-white mb-3">ROI</div>
                    <div className="text-sm text-n60-100">{content.costAnalysis.roi}</div>
                  </div>
                  <div className="text-sm text-charcoal-700 bg-white p-4 rounded-lg border border-charcoal-200">
                    <p className="mb-3 font-medium">Basert på din virksomhetsstørrelse og bruksområde kan du forvente:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                        {t.efficiencyImprovement}
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                        {t.timeSavings}
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                        {t.betterDecisions}
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                        {t.teamCollaboration}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="text-center">
            <div className="mb-8">
              <CheckCircle className="w-16 h-16 text-secondary-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-n60-800 mb-4">{t.guideComplete}</h2>
              <p className="text-charcoal-600 max-w-2xl mx-auto">
                {t.guideDescription}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <button className="flex items-center justify-center space-x-2 p-4 bg-white border border-charcoal-200 rounded-lg hover:border-secondary-500 transition-colors">
                <Download className="w-5 h-5 text-secondary-500" />
                <span className="text-charcoal-700">{t.downloadPDF}</span>
              </button>
              <button className="flex items-center justify-center space-x-2 p-4 bg-white border border-charcoal-200 rounded-lg hover:border-secondary-500 transition-colors">
                <Share2 className="w-5 h-5 text-secondary-500" />
                <span className="text-charcoal-700">{t.shareGuide}</span>
              </button>
              <button 
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`flex items-center justify-center space-x-2 p-4 rounded-lg transition-colors ${
                  isBookmarked 
                    ? 'bg-secondary-100 border-secondary-500 text-secondary-700' 
                    : 'bg-white border border-charcoal-200 text-charcoal-700 hover:border-secondary-500'
                }`}
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked ? 'text-secondary-600 fill-current' : 'text-secondary-500'}`} />
                <span>{isBookmarked ? t.bookmarked : t.bookmark}</span>
              </button>
            </div>
            
            <div className="text-sm text-charcoal-500">
              <p>{t.generatedOn} {new Date().toLocaleDateString(language === 'no' ? 'no-NO' : 'en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
              <p>{t.validFor}</p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="bg-gradient-to-br from-charcoal-50 via-white to-charcoal-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-n60-800 mb-2">Din Personlige Produktguide</h1>
          <p className="text-charcoal-700">AI-drevne anbefalinger skreddersyd for dine forretningsbehov</p>
        </div>

        {/* Navigation Bar */}
        <div className="bg-gradient-to-r from-n60-800 to-n60-700 text-white px-6 py-4 rounded-t-2xl mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BookOpen className="w-6 h-6" />
              <span className="font-semibold">Produktguide</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className="p-2 rounded-lg hover:bg-n60-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <span className="text-sm font-medium">
                Side {currentPage + 1} av {totalPages}
              </span>
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
                className="p-2 rounded-lg hover:bg-n60-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="bg-white rounded-b-2xl p-8 shadow-lg border border-charcoal-200">
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

        {/* Page Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === currentPage ? 'bg-n60-800' : 'bg-charcoal-300 hover:bg-charcoal-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
