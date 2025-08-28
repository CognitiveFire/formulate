'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Wand2, ArrowRight, Check, Sparkles, Eye, Globe, BarChart3, Target, TrendingUp, FormInput, Palette, Zap, BookOpen, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import MobileNavigation from '@/components/MobileNavigation'

export default function HomePage() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: 'AI-drevet spørsmålsgenerering',
      description: 'Vår AI analyserer innholdstypen og beskrivelsen din for å automatisk generere de mest relevante spørsmålene for dine lead-genereringsskjemaer.',
      color: 'from-n60-500 to-n60-600'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Landingsside-bygger',
      description: 'Opprett vakre, konverteringsoptimaliserte landingssider med vår drag-and-drop-bygger. Tilpass farger, fonter og layout for å matche ditt merke.',
      color: 'from-n60-600 to-n60-700'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'AI-innholdsgenerering',
      description: 'Få personlige innsikter, anbefalinger og neste steg generert av AI basert på skjemasvar. Levere reell verdi til dine leads.',
      color: 'from-n60-700 to-n60-800'
    }
  ]

  const benefits = [
    'Øk skjemafullføring med 300%',
    'Generer kvalifiserte leads med AI-drevne spørsmål',
    'Opprett profesjonelle landingssider på minutter',
    'Levere personlig innhold automatisk',
    'Spar timer på skjema- og innholdsproduksjon',
    'Forbedre konverteringsrater med smart optimalisering'
  ]

  const aiContentExample = {
    title: 'AI-beredskapsvurderingsrapport',
    summary: 'Basert på dine svar viser organisasjonen din moderat beredskap for AI-implementering med sterk potensial innen prosessautomatisering.',
    insights: [
      'Teamet ditt har grunnleggende erfaring med automatisering',
      'Datainfrastruktur er delvis klar',
      'Ledelsen viser sterk støtte til transformasjon'
    ],
    recommendations: [
      'Invester i AI-ferdighetstrening',
      'Implementer datastyringsrammeverk',
      'Start med pilotprosjekter'
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal-50 via-white to-charcoal-50">
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-n60-800 via-n60-700 to-n60-900 text-white">
        <nav className="bg-n60-800/90 backdrop-blur-md border-b border-n60-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-8 h-8 text-white" />
                <h1 className="text-xl font-bold text-white">Formulate</h1>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/builder" className="text-white hover:text-n60-100 transition-colors">
                  Bygger
                </Link>
                <Link href="/wizard" className="text-white hover:text-n60-100 transition-colors">
                  Veiviser
                </Link>
                <Link href="/demo" className="text-white hover:text-n60-100 transition-colors">
                  Demo
                </Link>
                <Link href="/product-guide-demo" className="text-white hover:text-n60-100 transition-colors">
                  Produktguide Demo
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-3">
              AI-drevne landingssider
            </h1>
            <p className="text-xl md:text-2xl text-n60-100 mb-4 max-w-3xl mx-auto">
              Opprett imponerende, konverteringsoptimaliserte landingssider på minutter med vår AI-drevne plattform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/builder"
                className="bg-[#2887fd] text-white hover:bg-[#1d6fd8] font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Start å bygge</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/demo"
                className="border-2 border-white text-white hover:bg-white hover:text-n60-800 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
              >
                Se demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-n60-800 mb-4">
              Alt du trenger for å opprette høyt konverterende landingssider
            </h2>
            <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
              Fra AI-drevet innholdsproduksjon til avanserte analyser, vi har deg dekket
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-n60-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-n60-700">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6">
                <Wand2 className="w-8 h-8 text-n60-800" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI-innholdsproduksjon</h3>
              <p className="text-n60-100">
                Generer overbevisende kopi, overskrifter og CTAs som konverterer besøkende til kunder
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-charcoal-200">
              <div className="w-16 h-16 bg-n60-800 rounded-xl flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-n60-800 mb-4">Smart designmaler</h3>
              <p className="text-charcoal-600">
                Velg mellom hundrevis av profesjonelt designede maler optimalisert for konvertering
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-charcoal-200">
              <div className="w-16 h-16 bg-n60-800 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-n60-800 mb-4">Avanserte analyser</h3>
              <p className="text-charcoal-600">
                Spor ytelse, A/B-test variasjoner og optimaliser for bedre resultater
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Content Example Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-n60-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Se AI-innholdsproduksjon i aksjon
            </h2>
            <p className="text-xl text-n60-100 max-w-2xl mx-auto">
              Her er et eksempel på AI-generert innhold for en SaaS-landingsside
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-n60-800 mb-2">{aiContentExample.title}</h4>
                <p className="text-charcoal-600 mb-4">{aiContentExample.summary}</p>
                
                <h5 className="font-medium text-n60-800 mb-2">Nøkkelinnsikter</h5>
                <ul className="space-y-2 text-charcoal-600">
                  {aiContentExample.insights.map((insight, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary-500 mr-2 mt-0.5 flex-shrink-0" />
                      {insight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium text-n60-800 mb-2">Anbefalinger</h5>
                <ul className="space-y-2 text-charcoal-600">
                  {aiContentExample.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-secondary-500 mr-2 mt-0.5 flex-shrink-0" />
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
