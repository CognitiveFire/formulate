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
}

export default function ProductGuideChatbot({ userData }: ProductGuideChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: `Hi ${userData.name}! I'm your AI product guide assistant. I can help you understand your personalized recommendations, answer questions about implementation, or provide additional insights. What would you like to know?`,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Pre-defined quick questions
  const quickQuestions = [
    "What are the key differences between the recommendations?",
    "How long does implementation take?",
    "What's the expected ROI?",
    "Can you explain the cost breakdown?",
    "What training is required?",
    "How do I get started?"
  ]

  // AI response generator based on user data and question
  const generateAIResponse = async (question: string) => {
    setIsTyping(true)
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000))
    
    let response = ''
    const questionLower = question.toLowerCase()
    
    if (questionLower.includes('difference') || questionLower.includes('compare')) {
      response = `Great question! Here's how the three recommendations differ:

**EnterprisePro Suite ($299/month)** - Best for established companies needing enterprise-grade features. Offers advanced analytics, custom integrations, and 24/7 support.

**StartupFlex Platform ($99/month)** - Perfect for growing businesses. Quick to implement with essential features and mobile app access.

**BusinessCore Solution ($199/month)** - Ideal middle ground with comprehensive features, good value, and strong security.

For your ${userData.companySize} company focusing on ${userData.useCase}, I'd recommend starting with ${userData.budget.includes('Under $100') ? 'StartupFlex' : userData.budget.includes('$1000+') ? 'EnterprisePro' : 'BusinessCore'} based on your budget and needs.`
    } else if (questionLower.includes('implementation') || questionLower.includes('time') || questionLower.includes('long')) {
      response = `Implementation typically takes 6-8 weeks total, broken down into phases:

**Phase 1 (Weeks 1-2):** Assessment & Planning
**Phase 2 (Weeks 3-4):** Setup & Configuration  
**Phase 3 (Weeks 5-6):** Training & Rollout
**Phase 4 (Weeks 7-8):** Full Deployment

For your ${userData.companySize} company, you might be able to accelerate this timeline if you have a dedicated team. The key is proper planning and stakeholder alignment upfront.`
    } else if (questionLower.includes('roi') || questionLower.includes('return')) {
      response = `Based on your profile, here's what you can expect:

**Efficiency Gains:** 20-40% improvement in ${userData.useCase} processes
**Time Savings:** 15-25 hours per week of manual work eliminated
**Better Decisions:** Data-driven insights for improved outcomes
**Team Collaboration:** Enhanced communication and workflow

**Expected ROI Timeline:** 6-12 months
**Total First Year Cost:** Approximately 1.5x your software budget (${userData.budget})

The ROI comes from increased productivity, reduced errors, and better resource allocation. Most companies see positive returns within the first year.`
    } else if (questionLower.includes('cost') || questionLower.includes('pricing') || questionLower.includes('breakdown')) {
      response = `Here's a detailed cost breakdown for your ${userData.companySize} company:

**Software Costs:** ${userData.budget} (annual)
**Implementation:** 15-25% of annual software cost
**Training:** $2,000 - $5,000 (depending on team size)
**Total First Year:** Approximately 1.5x your software budget

**Hidden Costs to Consider:**
• Internal team time for implementation
• Potential downtime during transition
• Additional integrations or customizations

**Cost-Saving Tips:**
• Start with essential features, add advanced ones later
• Negotiate annual contracts for better rates
• Consider phased implementation to spread costs
• Look for startup/enterprise discounts`
    } else if (questionLower.includes('training') || questionLower.includes('learn')) {
      response = `Training requirements vary by solution, but here's what to expect:

**For StartupFlex Platform:**
• 2-4 hours of basic training
• Self-paced learning modules
• 1-2 support sessions

**For BusinessCore Solution:**
• 4-8 hours of comprehensive training
• Hands-on workshops
• Administrator certification
• Ongoing support for 3 months

**For EnterprisePro Suite:**
• 8-16 hours of intensive training
• Custom training program
• Administrator and power user training
• Ongoing support and advanced training

**Training Timeline:** Usually completed during Phase 3 (weeks 5-6) of implementation.

**Tips:** Start training key users early, create internal champions, and document processes for future team members.`
    } else if (questionLower.includes('start') || questionLower.includes('begin') || questionLower.includes('next')) {
      response = `Perfect! Here's your action plan to get started:

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

Would you like me to help you prepare for any of these steps?`
    } else {
      response = `That's an interesting question! Based on your profile as a ${userData.companySize} company in the ${userData.useCase} space, I'd be happy to help you dive deeper into any aspect of your personalized product guide.

You can ask me about:
• Specific product comparisons
• Implementation strategies
• Cost analysis and ROI
• Training requirements
• Getting started steps
• Or any other questions about your recommendations

What would you like to explore further?`
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

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return
    
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    
    // Generate AI response
    await generateAIResponse(inputValue)
  }

  const handleQuickQuestion = (question: string) => {
    setInputValue(question)
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
            <h3 className="font-semibold">AI Product Guide Assistant</h3>
            <p className="text-n60-100 text-sm">Ready to help with your questions</p>
          </div>
        </div>
      </div>

      {/* Quick Questions */}
      <div className="p-4 bg-charcoal-50 border-b border-charcoal-200">
        <p className="text-sm font-medium text-charcoal-700 mb-3">Quick Questions:</p>
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
              placeholder="Ask me anything about your product guide..."
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
          I can help with product comparisons, implementation, costs, training, and getting started
        </div>
      </div>
    </div>
  )
}
