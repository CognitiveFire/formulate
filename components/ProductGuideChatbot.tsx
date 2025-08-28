'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Bot, User, MessageCircle, HelpCircle, BookOpen, Star, TrendingUp, Target } from 'lucide-react'

interface Message {
  id: string
  type: 'user' | 'bot'
  content: string
  timestamp: Date
}

interface ProductGuideChatbotProps {
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

export default function ProductGuideChatbot({ userData, language }: ProductGuideChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const translations = {
    no: {
      welcome: `Hei ${userData.name}! Jeg er din AI produktguide assistent. Jeg kan hjelpe deg med å forstå dine personlige anbefalinger, svare på spørsmål om implementering, eller gi deg ytterligere innsikt. Hva vil du vite?`,
      quickQuestions: 'Hurtigspørsmål:',
      keyDifferences: 'Hva er hovedforskjellene mellom anbefalingene?',
      implementationTime: 'Hvor lang tid tar implementering?',
      expectedROI: 'Hva er forventet ROI?',
      costBreakdown: 'Kan du forklare kostnadsoversikten?',
      trainingRequired: 'Hvilken trening kreves?',
      howToStart: 'Hvordan kommer jeg i gang?',
      aiAssistant: 'AI Produktassistent',
      readyToHelp: 'Klar til å hjelpe med dine spørsmål',
      askAnything: 'Spør meg om alt om din produktguide...',
      canHelpWith: 'Jeg kan hjelpe med produkt sammenligninger, implementering, kostnader, trening og å komme i gang',
      differenceResponse: `Flott spørsmål! Her er hvordan de tre anbefalingene skiller seg ut:

**AI Marketing Suite Pro (kr 45,000/mnd)** - Best for etablerte virksomheter som trenger enterprise-grade funksjoner. Tilbyr avansert analyse, tilpassede integrasjoner og 24/7 støtte.

**LeadGen AI Platform (kr 15,000/mnd)** - Perfekt for voksende virksomheter. Rask å implementere med grunnleggende funksjoner og mobil app tilgang.

**International Expansion Hub (kr 30,000/mnd)** - Ideell mellomting med omfattende funksjoner, god verdi for pengene og sterk sikkerhet.

For din ${userData.companySize} virksomhet som fokuserer på ${userData.useCase}, anbefaler jeg å starte med ${userData.budget.includes('Under kr 50,000') ? 'LeadGen AI' : userData.budget.includes('kr 200,000+') ? 'AI Marketing Suite Pro' : 'International Expansion Hub'} basert på ditt budsjett og behov.`,
      implementationResponse: `Implementering tar vanligvis 6-8 uker totalt, oppdelt i faser:

**Fase 1 (Uke 1-2):** Vurdering & Planlegging
**Fase 2 (Uke 3-4):** Oppsett & Konfigurering  
**Fase 3 (Uke 5-6):** Trening & Lansering
**Fase 4 (Uke 7-8):** Full Implementering

For din ${userData.companySize} virksomhet kan du kanskje akselerere denne tidslinjen hvis du har et dedikert team. Nøkkelen er riktig planlegging og interessentjustering på forhånd.`,
      roiResponse: `Basert på din profil kan du forvente:

**Effektivitetsgevinster:** 20-40% forbedring i ${userData.useCase} prosesser
**Tidsbesparelser:** 15-25 timer per uke av manuelt arbeid eliminert
**Bedre beslutninger:** Datadrevne innsikter for forbedrede resultater
**Team samarbeid:** Forbedret kommunikasjon og arbeidsflyt

**Forventet ROI Tidslinje:** 6-12 måneder
**Total Første År Kostnad:** Omtrent 1.5x ditt programvarebudsjett (${userData.budget})

ROI-en kommer fra økt produktivitet, reduserte feil og bedre ressursallokering. De fleste virksomheter ser positive avkastninger innen det første året.`,
      costResponse: `Her er en detaljert kostnadsoversikt for din ${userData.companySize} virksomhet:

**Programvarekostnader:** ${userData.budget} (årlig)
**Implementering:** 15-25% av årlig programvarekostnad
**Trening:** kr 15,000 - kr 35,000 (avhengig av teamstørrelse)
**Total Første År:** Omtrent 1.5x ditt programvarebudsjett

**Skjulte kostnader å vurdere:**
• Intern teamtid for implementering
• Potensiell nedetid under overgang
• Ytterligere integrasjoner eller tilpasninger

**Kostnadsbesparende tips:**
• Start med grunnleggende funksjoner, legg til avanserte senere
• Forhandle årlige kontrakter for bedre priser
• Vurder faset implementering for å spre kostnader
• Se etter startup/enterprise rabatter`,
      trainingResponse: `Trengingskrav varierer etter løsning, men her er hva du kan forvente:

**For LeadGen AI Platform:**
• 2-4 timer grunnleggende trening
• Selvstudie læringsmoduler
• 1-2 støttesesjoner

**For International Expansion Hub:**
• 4-8 timer omfattende trening
• Hands-on workshops
• Administrator sertifisering
• Løpende støtte i 3 måneder

**For AI Marketing Suite Pro:**
• 8-16 timer intensiv trening
• Tilpasset treningsprogram
• Administrator og power user trening
• Løpende støtte og avansert trening

**Trenings Tidslinje:** Vanligvis fullført under Fase 3 (uke 5-6) av implementering.

**Tips:** Start trening av nøkkelbrukere tidlig, opprett interne forkjempere, og dokumenter prosesser for fremtidige teammedlemmer.`,
      startResponse: `Perfekt! Her er din handlingsplan for å komme i gang:

**Umiddelbare handlinger (denne uken):**
1. Planlegg demoer med dine topp 2 anbefalinger
2. Be om detaljerte prisingstilbud
3. Identifiser nøkkelinteressenter for beslutningstaking

**Neste 2 uker:**
1. Gjennomgå demoer og samle team tilbakemeldinger
2. Planlegg interessentgjennomgang møte
3. Forbered budsjettgodkjenning dokumentasjon
4. Sett opp leverandør evalueringskriterier

**Måned 1:**
1. Gjør endelig leverandørvalg
2. Signer kontrakter og begynn implementeringsplanlegging
3. Samle ditt implementeringsteam
4. Sett prosjekt milepæler og suksessmetrikker

**Pro Tips:** Start med et pilotprogram hvis mulig. Dette reduserer risiko og hjelper deg å lære før full implementering.

Vil du at jeg skal hjelpe deg med å forberede noen av disse stegene?`,
      defaultResponse: `Det er et interessant spørsmål! Basert på din profil som en ${userData.companySize} virksomhet innen ${userData.useCase} området, vil jeg gjerne hjelpe deg med å dykke dypere inn i alle aspekter av din personlige produktguide.

Du kan spørre meg om:
• Spesifikke produktsammenligninger
• Implementeringsstrategier
• Kostnadsanalyse og ROI
• Treningskrav
• Komme i gang steg
• Eller andre spørsmål om dine anbefalinger

Hva vil du utforske nærmere?`
    },
    en: {
      welcome: `Hi ${userData.name}! I'm your AI product guide assistant. I can help you understand your personalized recommendations, answer questions about implementation, or provide additional insights. What would you like to know?`,
      quickQuestions: 'Quick Questions:',
      keyDifferences: 'What are the key differences between the recommendations?',
      implementationTime: 'How long does implementation take?',
      expectedROI: 'What\'s the expected ROI?',
      costBreakdown: 'Can you explain the cost breakdown?',
      trainingRequired: 'What training is required?',
      howToStart: 'How do I get started?',
      aiAssistant: 'AI Product Assistant',
      readyToHelp: 'Ready to help with your questions',
      askAnything: 'Ask me anything about your product guide...',
      canHelpWith: 'I can help with product comparisons, implementation, costs, training, and getting started',
      differenceResponse: `Great question! Here's how the three recommendations differ:

**AI Marketing Suite Pro (kr 45,000/mnd)** - Best for established companies needing enterprise-grade features. Offers advanced analytics, custom integrations, and 24/7 support.

**LeadGen AI Platform (kr 15,000/mnd)** - Perfect for growing businesses. Quick to implement with essential features and mobile app access.

**International Expansion Hub (kr 30,000/mnd)** - Ideal middle ground with comprehensive features, good value for money, and strong security.

For your ${userData.companySize} company focusing on ${userData.useCase}, I'd recommend starting with ${userData.budget.includes('Under kr 50,000') ? 'LeadGen AI' : userData.budget.includes('kr 200,000+') ? 'AI Marketing Suite Pro' : 'International Expansion Hub'} based on your budget and needs.`,
      implementationResponse: `Implementation typically takes 6-8 weeks total, broken down into phases:

**Phase 1 (Weeks 1-2):** Assessment & Planning
**Phase 2 (Weeks 3-4):** Setup & Configuration  
**Phase 3 (Weeks 5-6):** Training & Rollout
**Phase 4 (Weeks 7-8):** Full Deployment

For your ${userData.companySize} company, you might be able to accelerate this timeline if you have a dedicated team. The key is proper planning and stakeholder alignment upfront.`,
      roiResponse: `Based on your profile, here's what you can expect:

**Efficiency Gains:** 20-40% improvement in ${userData.useCase} processes
**Time Savings:** 15-25 hours per week of manual work eliminated
**Better Decisions:** Data-driven insights for improved outcomes
**Team Collaboration:** Enhanced communication and workflow

**Expected ROI Timeline:** 6-12 months
**Total First Year Cost:** Approximately 1.5x your software budget (${userData.budget})

The ROI comes from increased productivity, reduced errors, and better resource allocation. Most companies see positive returns within the first year.`,
      costResponse: `Here's a detailed cost breakdown for your ${userData.companySize} company:

**Software Costs:** ${userData.budget} (annual)
**Implementation:** 15-25% of annual software cost
**Training:** kr 15,000 - kr 35,000 (depending on team size)
**Total First Year:** Approximately 1.5x your software budget

**Hidden Costs to Consider:**
• Internal team time for implementation
• Potential downtime during transition
• Additional integrations or customizations

**Cost-Saving Tips:**
• Start with essential features, add advanced ones later
• Negotiate annual contracts for better rates
• Consider phased implementation to spread costs
• Look for startup/enterprise discounts`,
      trainingResponse: `Training requirements vary by solution, but here's what to expect:

**For LeadGen AI Platform:**
• 2-4 hours of basic training
• Self-paced learning modules
• 1-2 support sessions

**For International Expansion Hub:**
• 4-8 hours of comprehensive training
• Hands-on workshops
• Administrator certification
• Ongoing support for 3 months

**For AI Marketing Suite Pro:**
• 8-16 hours of intensive training
• Custom training program
• Administrator and power user training
• Ongoing support and advanced training

**Training Timeline:** Usually completed during Phase 3 (weeks 5-6) of implementation.

**Tips:** Start training key users early, create internal champions, and document processes for future team members.`,
      startResponse: `Perfect! Here's your action plan to get started:

**Immediate Actions (This Week):**
1. Schedule demos with your top 2 recommendations
2. Request detailed pricing quotes
3. Identify key stakeholders for decision-making

**Next 2 Weeks:**
1. Review demos and gather team feedback
2. Plan stakeholder review meeting
3. Prepare budget approval documentation
4. Set up vendor evaluation criteria

**Month 1:**
1. Make final vendor selection
2. Sign contracts and begin implementation planning
3. Assemble your implementation team
4. Set project milestones and success metrics

**Pro Tip:** Start with a pilot program if possible. This reduces risk and helps you learn before full deployment.

Would you like me to help you prepare for any of these steps?`,
      defaultResponse: `That's an interesting question! Based on your profile as a ${userData.companySize} company in the ${userData.useCase} space, I'd be happy to help you dive deeper into any aspect of your personalized product guide.

You can ask me about:
• Specific product comparisons
• Implementation strategies
• Cost analysis and ROI
• Training requirements
• Getting started steps
• Or any other questions about your recommendations

What would you like to explore further?`
    }
  }

  const t = translations[language]

  // Initialize with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        id: '1',
        type: 'bot',
        content: t.welcome,
        timestamp: new Date()
      }])
    }
  }, [language, messages.length, t.welcome])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Pre-defined quick questions
  const quickQuestions = [
    t.keyDifferences,
    t.implementationTime,
    t.expectedROI,
    t.costBreakdown,
    t.trainingRequired,
    t.howToStart
  ]

  // AI response generator based on user data and question
  const generateAIResponse = async (question: string) => {
    setIsTyping(true)
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000))
    
    let response = ''
    const questionLower = question.toLowerCase()
    
    if (questionLower.includes('difference') || questionLower.includes('compare') || questionLower.includes('forskjell')) {
      response = t.differenceResponse
    } else if (questionLower.includes('implementation') || questionLower.includes('time') || questionLower.includes('long') || questionLower.includes('implementering') || questionLower.includes('tid')) {
      response = t.implementationResponse
    } else if (questionLower.includes('roi') || questionLower.includes('return') || questionLower.includes('avkastning')) {
      response = t.roiResponse
    } else if (questionLower.includes('cost') || questionLower.includes('pricing') || questionLower.includes('breakdown') || questionLower.includes('kostnad') || questionLower.includes('prising')) {
      response = t.costResponse
    } else if (questionLower.includes('training') || questionLower.includes('learn') || questionLower.includes('trening') || questionLower.includes('lære')) {
      response = t.trainingResponse
    } else if (questionLower.includes('start') || questionLower.includes('begin') || questionLower.includes('next') || questionLower.includes('starte') || questionLower.includes('begynne')) {
      response = t.startResponse
    } else {
      response = t.defaultResponse
    }
    
    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'bot',
      content: response,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, newMessage])
    setIsTyping(false)
  }

  const handleQuickQuestion = (question: string) => {
    setInputValue(question)
    // Automatically send the question after a brief delay to simulate user interaction
    setTimeout(() => {
      handleSendMessage(question)
    }, 100)
  }

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputValue
    if (!textToSend.trim()) return
    
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: textToSend,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    
    // Generate AI response
    await generateAIResponse(textToSend)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-charcoal-200 h-full flex flex-col">
      {/* Chatbot Header */}
      <div className="bg-gradient-to-r from-n60-600 to-n60-700 text-white px-6 py-4 rounded-t-2xl">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold">{t.aiAssistant}</h3>
            <p className="text-n60-100 text-sm">{t.readyToHelp}</p>
          </div>
        </div>
      </div>

      {/* Quick Questions */}
      <div className="p-4 bg-charcoal-50 border-b border-charcoal-200">
        <p className="text-sm font-medium text-charcoal-700 mb-3">{t.quickQuestions}</p>
        <div className="flex flex-wrap gap-2">
          {quickQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuickQuestion(question)}
              className="px-3 py-1 bg-white text-charcoal-600 text-xs rounded-full border border-charcoal-200 hover:border-n60-500 hover:text-n60-600 transition-colors"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.type === 'user' 
                    ? 'bg-n60-500 text-white' 
                    : 'bg-charcoal-100 text-charcoal-600'
                }`}>
                  {message.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`rounded-2xl px-4 py-3 ${
                  message.type === 'user'
                    ? 'bg-n60-500 text-white'
                    : 'bg-charcoal-100 text-charcoal-800'
                }`}>
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</div>
                  <div className={`text-xs mt-2 ${
                    message.type === 'user' ? 'text-n60-100' : 'text-charcoal-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing Indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-charcoal-100 text-charcoal-600 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-charcoal-100 text-charcoal-800 rounded-2xl px-4 py-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-charcoal-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-charcoal-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-charcoal-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-charcoal-200">
        <div className="flex space-x-3">
          <div className="flex-1 relative">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t.askAnything}
              className="w-full px-4 py-3 border border-charcoal-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-n60-500 focus:border-transparent resize-none"
              rows={1}
              style={{ minHeight: '48px', maxHeight: '120px' }}
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="px-4 py-3 bg-n60-600 text-white rounded-xl hover:bg-n60-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        
        <div className="mt-3 text-xs text-charcoal-500 text-center">
          {t.canHelpWith}
        </div>
      </div>
    </div>
  )
}
