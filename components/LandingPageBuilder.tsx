'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Palette, Settings, Eye, Download, Share2, Upload, Globe, Wand2, Check, Sparkles, FileText, BarChart3, TrendingUp, Users, Target, Zap } from 'lucide-react'
import { useDropzone } from 'react-dropzone'
import LandingPagePreview from './LandingPagePreview'

interface FormData {
  contentType: string
  description: string
  questions: Array<{
    id: string
    type: 'text' | 'email' | 'select' | 'textarea' | 'number'
    question: string
    required: boolean
    options?: string[]
  }>
  formName: string
  formDescription: string
}

interface LandingPageConfig {
  title: string
  subtitle: string
  description: string
  ctaText: string
  logo: string | null
  primaryColor: string
  backgroundColor: string
  customUrl: string
  showSocialProof: boolean
  socialProofText: string
}

interface AIContent {
  title: string
  summary: string
  keyInsights: string[]
  recommendations: string[]
  nextSteps: string[]
  generatedAt: string
}

export default function LandingPageBuilder({ formData }: { formData: FormData | null }) {
  const [activeTab, setActiveTab] = useState('design')
  const [config, setConfig] = useState<LandingPageConfig>({
    title: formData?.formName || 'AI Readiness Assessment',
    subtitle: 'Discover your AI implementation readiness',
    description: formData?.description || 'Get a comprehensive analysis of your organization\'s readiness for AI implementation. Our AI-powered assessment will provide personalized insights and recommendations.',
    ctaText: 'Get Your Free Assessment',
    logo: null,
    primaryColor: '#0ea5e9',
    backgroundColor: '#ffffff',
    customUrl: '',
    showSocialProof: true,
    socialProofText: 'Join 10,000+ companies using our assessments'
  })

  const [logoPreview, setLogoPreview] = useState<string | null>(null)
  const [showLandingPagePreview, setShowLandingPagePreview] = useState(false)
  const [showAIContentPreview, setShowAIContentPreview] = useState(false)
  const [showFullPreview, setShowFullPreview] = useState(false)

  // Mock AI-generated content for demo purposes
  const [aiContent] = useState<AIContent>({
    title: 'AI Readiness Assessment Report',
    summary: 'Based on your responses, your organization shows moderate readiness for AI implementation with strong potential in process automation and data analytics. However, there are key areas that need attention before full-scale deployment.',
    keyInsights: [
      'Your team has basic automation experience but lacks advanced AI skills',
      'Data infrastructure is partially ready but needs consolidation',
      'Leadership shows strong support for digital transformation',
      'Budget allocation is appropriate for your company size',
      'Industry position allows for competitive advantage through AI adoption'
    ],
    recommendations: [
      'Invest in AI skills training for key team members',
      'Implement data governance framework before AI deployment',
      'Start with pilot projects in customer service automation',
      'Establish AI ethics and compliance guidelines',
      'Create cross-functional AI implementation team'
    ],
    nextSteps: [
      'Schedule AI readiness workshop with leadership team',
      'Conduct skills gap analysis for technical staff',
      'Evaluate potential AI vendors and partners',
      'Develop 90-day AI implementation roadmap',
      'Set up AI project monitoring and success metrics'
    ],
    generatedAt: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  })

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.svg']
    },
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = () => {
          setLogoPreview(reader.result as string)
          setConfig(prev => ({ ...prev, logo: reader.result as string }))
        }
        reader.readAsDataURL(file)
      }
    }
  })

  const updateConfig = (field: keyof LandingPageConfig, value: any) => {
    setConfig(prev => ({ ...prev, [field]: value }))
  }

  const generateLandingPage = () => {
    // Simulate AI generation
    const newTitle = `${config.title} - Powered by AI`
    const newDescription = `${config.description} This personalized assessment has been generated using advanced AI algorithms to provide you with the most relevant insights for your business.`
    
    setConfig(prev => ({
      ...prev,
      title: newTitle,
      description: newDescription
    }))
  }

  const tabs = [
    { id: 'design', label: 'Design', icon: <Palette className="w-4 h-4" /> },
    { id: 'content', label: 'Content', icon: <Settings className="w-4 h-4" /> },
    { id: 'ai-content', label: 'AI Content', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'preview', label: 'Preview', icon: <Eye className="w-4 h-4" /> }
  ]

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Panel - Customization */}
        <div className="space-y-6">
          {/* Tab Navigation */}
          <div className="bg-white rounded-lg p-1 shadow-sm">
            <div className="flex space-x-1 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-secondary-600 hover:text-secondary-900'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="card">
            {activeTab === 'design' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-secondary-900">Design Customization</h3>
                
                {/* Logo Upload */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Company Logo
                  </label>
                  <div
                    {...getRootProps()}
                    className="border-2 border-dashed border-secondary-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors cursor-pointer"
                  >
                    <input {...getInputProps()} />
                    {logoPreview ? (
                      <div className="space-y-2">
                        <img src={logoPreview} alt="Logo" className="w-16 h-16 mx-auto object-contain" />
                        <p className="text-sm text-secondary-600">Click to change logo</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Upload className="w-8 h-8 mx-auto text-secondary-400" />
                        <p className="text-sm text-secondary-600">Drop your logo here or click to browse</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Color Scheme */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Primary Color
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="color"
                        value={config.primaryColor}
                        onChange={(e) => updateConfig('primaryColor', e.target.value)}
                        className="w-10 h-10 rounded border border-secondary-300"
                      />
                      <input
                        type="text"
                        value={config.primaryColor}
                        onChange={(e) => updateConfig('primaryColor', e.target.value)}
                        className="input-field flex-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Background Color
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="color"
                        value={config.backgroundColor}
                        onChange={(e) => updateConfig('backgroundColor', e.target.value)}
                        className="w-10 h-10 rounded border border-secondary-300"
                      />
                      <input
                        type="text"
                        value={config.backgroundColor}
                        onChange={(e) => updateConfig('backgroundColor', e.target.value)}
                        className="input-field flex-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Social Proof */}
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={config.showSocialProof}
                      onChange={(e) => updateConfig('showSocialProof', e.target.checked)}
                      className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-sm font-medium text-secondary-700">Show social proof</span>
                  </label>
                  {config.showSocialProof && (
                    <input
                      type="text"
                      value={config.socialProofText}
                      onChange={(e) => updateConfig('socialProofText', e.target.value)}
                      placeholder="e.g., Join 10,000+ companies using our assessments"
                      className="input-field mt-2"
                    />
                  )}
                </div>
              </div>
            )}

            {activeTab === 'content' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-secondary-900">Content & Copy</h3>
                
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Page Title
                  </label>
                  <input
                    type="text"
                    value={config.title}
                    onChange={(e) => updateConfig('title', e.target.value)}
                    className="input-field"
                    placeholder="Enter your page title..."
                  />
                </div>

                {/* Subtitle */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    value={config.subtitle}
                    onChange={(e) => updateConfig('subtitle', e.target.value)}
                    className="input-field"
                    placeholder="Enter your subtitle..."
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={config.description}
                    onChange={(e) => updateConfig('description', e.target.value)}
                    rows={4}
                    className="input-field"
                    placeholder="Describe what visitors will get..."
                  />
                </div>

                {/* CTA Text */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Call-to-Action Button Text
                  </label>
                  <input
                    type="text"
                    value={config.ctaText}
                    onChange={(e) => updateConfig('ctaText', e.target.value)}
                    className="input-field"
                    placeholder="e.g., Get Your Free Assessment"
                  />
                </div>

                {/* Custom URL */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Custom URL Slug
                  </label>
                  <div className="flex items-center space-x-2">
                    <span className="text-secondary-500">formulate.app/</span>
                    <input
                      type="text"
                      value={config.customUrl}
                      onChange={(e) => updateConfig('customUrl', e.target.value)}
                      className="input-field flex-1"
                      placeholder="your-custom-url"
                    />
                  </div>
                </div>

                {/* AI Enhancement */}
                <div className="pt-4 border-t border-secondary-200">
                  <button
                    onClick={generateLandingPage}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    <Wand2 className="w-4 h-4" />
                    <span>Enhance with AI</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'ai-content' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-secondary-900">AI-Generated Content</h3>
                
                <div className="p-4 bg-primary-50 border border-primary-200 rounded-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <Sparkles className="w-5 h-5 text-primary-600" />
                    <span className="text-sm font-medium text-primary-700">AI Content Ready</span>
                  </div>
                  <p className="text-sm text-primary-600 mb-4">
                    Based on your form responses, AI has generated personalized content including insights, recommendations, and next steps.
                  </p>
                  <button
                    onClick={() => setShowAIContentPreview(true)}
                    className="w-full btn-primary text-sm"
                  >
                    Preview AI Content
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-secondary-50 rounded-lg">
                    <FileText className="w-5 h-5 text-secondary-600" />
                    <div>
                      <h4 className="font-medium text-secondary-900">Content Summary</h4>
                      <p className="text-sm text-secondary-600">AI-generated insights and analysis</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-secondary-50 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-secondary-600" />
                    <div>
                      <h4 className="font-medium text-secondary-900">Key Insights</h4>
                      <p className="text-sm text-secondary-600">Data-driven findings and observations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-secondary-50 rounded-lg">
                    <Target className="w-5 h-5 text-secondary-600" />
                    <div>
                      <h4 className="font-medium text-secondary-900">Recommendations</h4>
                      <p className="text-sm text-secondary-600">Actionable next steps and advice</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-secondary-200">
                  <button className="w-full btn-secondary flex items-center justify-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>Regenerate with AI</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'preview' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-secondary-900">Preview & Actions</h3>
                
                <div className="space-y-4">
                  <button 
                    onClick={() => setShowFullPreview(true)}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Full Screen Preview</span>
                  </button>
                  
                  <button 
                    onClick={() => setShowLandingPagePreview(true)}
                    className="w-full btn-secondary flex items-center justify-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Preview Landing Page</span>
                  </button>
                  
                  <button 
                    onClick={() => setShowAIContentPreview(true)}
                    className="w-full btn-secondary flex items-center justify-center space-x-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Preview AI Content</span>
                  </button>
                  
                  <button className="w-full btn-secondary flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download HTML</span>
                  </button>
                  
                  <button className="w-full btn-secondary flex items-center justify-center space-x-2">
                    <Share2 className="w-4 h-4" />
                    <span>Share Link</span>
                  </button>
                </div>

                <div className="p-4 bg-secondary-50 rounded-lg">
                  <h4 className="font-medium text-secondary-900 mb-2">Your Landing Page URL</h4>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-secondary-400" />
                    <span className="text-sm text-secondary-600">
                      {config.customUrl 
                        ? `formulate.app/${config.customUrl}` 
                        : 'formulate.app/ai-readiness-assessment'
                      }
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Preview */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-secondary-900">
              {showLandingPagePreview ? 'Landing Page Preview' : 
               showAIContentPreview ? 'AI Content Preview' : 'Form Preview'}
            </h3>
            <div className="flex items-center space-x-2 text-sm text-secondary-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Live Preview</span>
            </div>
          </div>

          {/* Landing Page Preview */}
          {showLandingPagePreview && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card max-h-[600px] overflow-y-auto"
              style={{ backgroundColor: config.backgroundColor }}
            >
              {/* Logo */}
              {config.logo && (
                <div className="flex justify-center mb-6">
                  <img src={config.logo} alt="Logo" className="h-12 object-contain" />
                </div>
              )}

              {/* Hero Section */}
              <div className="text-center mb-8">
                <h1 
                  className="text-3xl font-bold mb-4"
                  style={{ color: config.primaryColor }}
                >
                  {config.title}
                </h1>
                <p className="text-lg text-secondary-600 mb-2">
                  {config.subtitle}
                </p>
                <p className="text-secondary-600 mb-6">
                  {config.description}
                </p>
                
                {config.showSocialProof && (
                  <p className="text-sm text-secondary-500 mb-6">
                    {config.socialProofText}
                  </p>
                )}
              </div>

              {/* Form */}
              <div className="space-y-4">
                {formData?.questions.map((question, index) => (
                  <div key={question.id}>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      {question.question}
                      {question.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    
                    {question.type === 'text' && (
                      <input
                        type="text"
                        className="input-field"
                        placeholder="Enter your answer..."
                      />
                    )}
                    
                    {question.type === 'email' && (
                      <input
                        type="email"
                        className="input-field"
                        placeholder="Enter your email..."
                      />
                    )}
                    
                    {question.type === 'select' && (
                      <select className="input-field">
                        <option value="">Select an option...</option>
                        {question.options?.map((option, optionIndex) => (
                          <option key={optionIndex} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}
                    
                    {question.type === 'textarea' && (
                      <textarea
                        className="input-field"
                        rows={3}
                        placeholder="Enter your answer..."
                      />
                    )}
                    
                    {question.type === 'number' && (
                      <input
                        type="number"
                        className="input-field"
                        placeholder="Enter a number..."
                      />
                    )}
                  </div>
                ))}
                
                <button
                  className="w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200"
                  style={{
                    backgroundColor: config.primaryColor,
                    color: '#ffffff'
                  }}
                >
                  {config.ctaText}
                </button>
              </div>
            </motion.div>
          )}

          {/* AI Content Preview */}
          {showAIContentPreview && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card max-h-[600px] overflow-y-auto"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-secondary-900">{aiContent.title}</h2>
                  <p className="text-sm text-secondary-500">Generated on {aiContent.generatedAt}</p>
                </div>
              </div>

              {/* Summary */}
              <div className="mb-6 p-4 bg-secondary-50 rounded-lg">
                <h3 className="font-semibold text-secondary-900 mb-2">Executive Summary</h3>
                <p className="text-secondary-700">{aiContent.summary}</p>
              </div>

              {/* Key Insights */}
              <div className="mb-6">
                <h3 className="font-semibold text-secondary-900 mb-3 flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-primary-600" />
                  <span>Key Insights</span>
                </h3>
                <div className="space-y-2">
                  {aiContent.keyInsights.map((insight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-secondary-700 text-sm">{insight}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              <div className="mb-6">
                <h3 className="font-semibold text-secondary-900 mb-3 flex items-center space-x-2">
                  <Target className="w-5 h-5 text-primary-600" />
                  <span>Recommendations</span>
                </h3>
                <div className="space-y-2">
                  {aiContent.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-secondary-700 text-sm">{rec}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Steps */}
              <div className="mb-6">
                <h3 className="font-semibold text-secondary-900 mb-3 flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-primary-600" />
                  <span>Next Steps</span>
                </h3>
                <div className="space-y-2">
                  {aiContent.nextSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-secondary-700 text-sm">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Status */}
              <div className="p-3 bg-primary-50 border border-primary-200 rounded-lg">
                <div className="flex items-center space-x-2 text-sm text-primary-700">
                  <Sparkles className="w-4 h-4" />
                  <span>Content generated by AI • Ready for customization</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Default Form Preview */}
          {!showLandingPagePreview && !showAIContentPreview && (
            <div className="card" style={{ backgroundColor: config.backgroundColor }}>
              {/* Logo */}
              {config.logo && (
                <div className="flex justify-center mb-6">
                  <img src={config.logo} alt="Logo" className="h-12 object-contain" />
                </div>
              )}

              {/* Content */}
              <div className="text-center mb-8">
                <h1 
                  className="text-3xl font-bold mb-4"
                  style={{ color: config.primaryColor }}
                >
                  {config.title}
                </h1>
                <p className="text-lg text-secondary-600 mb-2">
                  {config.subtitle}
                </p>
                <p className="text-secondary-600 mb-6">
                  {config.description}
                </p>
                
                {config.showSocialProof && (
                  <p className="text-sm text-secondary-500 mb-6">
                    {config.socialProofText}
                  </p>
                )}
              </div>

              {/* Form */}
              <div className="space-y-4">
                {formData?.questions.map((question, index) => (
                  <div key={question.id}>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      {question.question}
                      {question.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    
                    {question.type === 'text' && (
                      <input
                        type="text"
                        className="input-field"
                        placeholder="Enter your answer..."
                      />
                    )}
                    
                    {question.type === 'email' && (
                      <input
                        type="email"
                        className="input-field"
                        placeholder="Enter your email..."
                      />
                    )}
                    
                    {question.type === 'select' && (
                      <select className="input-field">
                        <option value="">Select an option...</option>
                        {question.options?.map((option, optionIndex) => (
                          <option key={optionIndex} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}
                    
                    {question.type === 'textarea' && (
                      <textarea
                        className="input-field"
                        rows={3}
                        placeholder="Enter your answer..."
                      />
                    )}
                    
                    {question.type === 'number' && (
                      <input
                        type="number"
                        className="input-field"
                        placeholder="Enter a number..."
                      />
                    )}
                  </div>
                ))}
                
                <button
                  className="w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200"
                  style={{
                    backgroundColor: config.primaryColor,
                    color: '#ffffff'
                  }}
                >
                  {config.ctaText}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Full Screen Landing Page Preview */}
      {formData && (
        <LandingPagePreview
          formData={formData}
          config={config}
          isOpen={showFullPreview}
          onClose={() => setShowFullPreview(false)}
        />
      )}
    </>
  )
}
