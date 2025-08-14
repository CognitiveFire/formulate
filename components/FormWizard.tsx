'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Wand2, FormInput, Palette, Zap, Check, Plus, Trash2, Sparkles } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { aiService } from '@/lib/ai-service'

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

const contentTypes = [
  'Readiness Report',
  'Product Comparison',
  'Investment Profile',
  'ROI Calculator',
  'Case Study',
  'White Paper',
  'Assessment',
  'Custom'
]

const questionTypes = [
  { value: 'text', label: 'Short Text' },
  { value: 'email', label: 'Email' },
  { value: 'select', label: 'Multiple Choice' },
  { value: 'textarea', label: 'Long Text' },
  { value: 'number', label: 'Number' }
]

export default function FormWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isGenerating, setIsGenerating] = useState(false)
  
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      questions: [
        { id: '1', type: 'email', question: 'What is your email address?', required: true },
        { id: '2', type: 'text', question: 'What is your name?', required: true }
      ]
    }
  })

  const watchedQuestions = watch('questions')

  const addQuestion = () => {
    const newId = (watchedQuestions.length + 1).toString()
    setValue('questions', [
      ...watchedQuestions,
      { id: newId, type: 'text', question: '', required: false }
    ])
  }

  const removeQuestion = (index: number) => {
    const newQuestions = watchedQuestions.filter((_, i) => i !== index)
    setValue('questions', newQuestions)
  }

  const updateQuestion = (index: number, field: string, value: any) => {
    const newQuestions = [...watchedQuestions]
    newQuestions[index] = { ...newQuestions[index], [field]: value }
    setValue('questions', newQuestions)
  }

  const generateAIQuestions = async (contentType: string, description: string) => {
    setIsGenerating(true)
    
    try {
      // Use real AI service if available, fallback to simulated
      const aiQuestions = await aiService.generateQuestions(contentType, description)
      
      // Update the form with AI-generated questions
      setValue('questions', aiQuestions)
      
      // Move to form details step (skip the manual question building step)
      setCurrentStep(3)
    } catch (error) {
      console.error('Error generating AI questions:', error)
      // Fallback to default questions if AI fails
    } finally {
      setIsGenerating(false)
    }
  }

  const onSubmit = async (data: FormData) => {
    setIsGenerating(true)
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsGenerating(false)
    // Navigate to builder with form data
    window.location.href = `/builder?formData=${encodeURIComponent(JSON.stringify(data))}`
  }

  const steps = [
    { number: 1, title: 'Content Type', icon: <Wand2 className="w-5 h-5" /> },
    { number: 2, title: 'Form Questions', icon: <FormInput className="w-5 h-5" /> },
    { number: 3, title: 'Form Details', icon: <Palette className="w-5 h-5" /> },
    { number: 4, title: 'Generate', icon: <Zap className="w-5 h-5" /> }
  ]

  return (
    <div className="w-full">
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
              currentStep >= step.number 
                ? 'bg-primary-600 border-primary-600 text-white' 
                : 'border-secondary-300 text-secondary-400'
            }`}>
              {currentStep > step.number ? (
                <Check className="w-5 h-5" />
              ) : (
                step.icon
              )}
            </div>
            <span className={`ml-2 text-sm font-medium ${
              currentStep >= step.number ? 'text-secondary-900' : 'text-secondary-400'
            }`}>
              {step.title}
            </span>
            {index < steps.length - 1 && (
              <div className={`w-16 h-0.5 mx-4 ${
                currentStep > step.number ? 'bg-primary-600' : 'bg-secondary-300'
              }`} />
            )}
          </div>
        ))}
      </div>

      {/* Wizard Content */}
      <div className="card">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="wizard-step"
          >
            {/* Step 1: Content Type */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                  What type of content do you want to create?
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Content Type
                    </label>
                    <select
                      {...register('contentType', { required: 'Please select a content type' })}
                      className="input-field"
                    >
                      <option value="">Select a content type...</option>
                      {contentTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.contentType && (
                      <p className="text-red-500 text-sm mt-1">{errors.contentType.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Describe your content idea
                    </label>
                    <textarea
                      {...register('description', { 
                        required: 'Please describe your content idea',
                        minLength: { value: 20, message: 'Description must be at least 20 characters' }
                      })}
                      rows={4}
                      placeholder="e.g., A comprehensive readiness assessment for companies looking to implement AI solutions..."
                      className="input-field"
                    />
                    {errors.description && (
                      <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                    )}
                  </div>

                  {/* AI Question Generation */}
                  <div className="pt-4 border-t border-secondary-200">
                    <div className="text-center">
                      {/* AI Status Indicator */}
                      <div className="flex items-center justify-center space-x-2 mb-4">
                        <div className={`w-2 h-2 rounded-full ${aiService.isReady() ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                        <span className="text-xs text-secondary-600">
                          {aiService.isReady() ? 'AI Powered by OpenAI' : 'AI Simulation Mode'}
                        </span>
                      </div>
                      
                      <p className="text-sm text-secondary-600 mb-4">
                        Let AI generate the perfect questions for your content
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          const contentType = watch('contentType')
                          const description = watch('description')
                          if (contentType && description) {
                            generateAIQuestions(contentType, description)
                          }
                        }}
                        disabled={!watch('contentType') || !watch('description') || isGenerating}
                        className="btn-primary flex items-center justify-center space-x-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isGenerating ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>AI is generating questions...</span>
                          </>
                        ) : (
                          <>
                            <Wand2 className="w-4 h-4" />
                            <span>Generate AI Questions</span>
                          </>
                        )}
                      </button>
                      <p className="text-xs text-secondary-500 mt-2">
                        AI will analyze your content type and description to create relevant questions
                      </p>
                      
                      {/* Show regenerate option if questions already exist */}
                      {watchedQuestions.length > 2 && (
                        <div className="mt-3 pt-3 border-t border-secondary-200">
                          <button
                            type="button"
                            onClick={() => {
                              const contentType = watch('contentType')
                              const description = watch('description')
                              if (contentType && description) {
                                generateAIQuestions(contentType, description)
                              }
                            }}
                            disabled={isGenerating}
                            className="text-sm text-primary-600 hover:text-primary-700 underline disabled:opacity-50"
                          >
                            Regenerate questions with AI
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Form Questions */}
            {currentStep === 2 && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-secondary-900">
                    Customize your form questions
                  </h2>
                  {watchedQuestions.length > 2 && (
                    <div className="flex items-center space-x-2 text-sm text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      <Wand2 className="w-4 h-4" />
                      <span>AI-Generated Questions</span>
                    </div>
                  )}
                </div>
                
                <div className="mb-6 p-4 bg-secondary-50 rounded-lg border border-secondary-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Wand2 className="w-4 h-4 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-secondary-900 mb-1">
                        AI-Powered Question Generation
                      </h3>
                      <p className="text-sm text-secondary-600">
                        These questions were intelligently generated based on your content type and description. 
                        You can edit, reorder, or add new questions to perfectly match your needs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {watchedQuestions.map((question, index) => (
                    <div key={question.id} className="p-4 border border-secondary-200 rounded-lg hover:border-primary-300 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <h3 className="text-lg font-medium text-secondary-900">
                            Question {index + 1}
                          </h3>
                          {question.required && (
                            <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full">
                              Required
                            </span>
                          )}
                        </div>
                        {watchedQuestions.length > 2 && (
                          <button
                            type="button"
                            onClick={() => removeQuestion(index)}
                            className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-secondary-700 mb-2">
                            Question Type
                          </label>
                          <select
                            value={question.type}
                            onChange={(e) => updateQuestion(index, 'type', e.target.value)}
                            className="input-field"
                          >
                            {questionTypes.map(type => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              checked={question.required}
                              onChange={(e) => updateQuestion(index, 'required', e.target.checked)}
                              className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
                            />
                            <span className="ml-2 text-sm text-secondary-700">Required</span>
                          </label>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Question Text
                        </label>
                        <input
                          type="text"
                          value={question.question}
                          onChange={(e) => updateQuestion(index, 'question', e.target.value)}
                          placeholder="Enter your question..."
                          className="input-field"
                        />
                      </div>
                      
                      {question.type === 'select' && (
                        <div className="mt-4">
                          <label className="block text-sm font-medium text-secondary-700 mb-2">
                            Options (one per line)
                          </label>
                          <textarea
                            value={question.options?.join('\n') || ''}
                            onChange={(e) => updateQuestion(index, 'options', e.target.value.split('\n').filter(Boolean))}
                            rows={3}
                            placeholder="Option 1&#10;Option 2&#10;Option 3"
                            className="input-field"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                  
                  <button
                    type="button"
                    onClick={addQuestion}
                    className="w-full py-3 border-2 border-dashed border-secondary-300 rounded-lg text-secondary-600 hover:border-primary-400 hover:text-primary-600 transition-colors duration-200"
                  >
                    <Plus className="w-5 h-5 mx-auto mb-2" />
                    Add Another Question
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Form Details */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                  Customize your form appearance
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Form Name
                    </label>
                    <input
                      {...register('formName', { required: 'Please enter a form name' })}
                      placeholder="e.g., AI Readiness Assessment"
                      className="input-field"
                    />
                    {errors.formName && (
                      <p className="text-red-500 text-sm mt-1">{errors.formName.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Form Description
                    </label>
                    <textarea
                      {...register('formDescription', { required: 'Please enter a form description' })}
                      rows={3}
                      placeholder="Brief description of what this form will provide..."
                      className="input-field"
                    />
                    {errors.formDescription && (
                      <p className="text-red-500 text-sm mt-1">{errors.formDescription.message}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Generate */}
            {currentStep === 4 && (
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                  Ready to generate your form?
                </h2>
                <p className="text-secondary-600 mb-8">
                  Formulate will create a custom form and landing page based on your specifications. 
                  You can then customize the design and styling to match your brand.
                </p>
                
                <button
                  onClick={handleSubmit(onSubmit)}
                  disabled={isGenerating}
                  className="btn-primary text-lg px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Generating...</span>
                    </div>
                  ) : (
                    'Generate Form & Landing Page'
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-secondary-200">
          <button
            onClick={() => {
              // If we're on step 3 and questions were AI-generated, go back to step 1
              if (currentStep === 3 && watchedQuestions.length > 2) {
                setCurrentStep(1)
              } else {
                setCurrentStep(Math.max(1, currentStep - 1))
              }
            }}
            disabled={currentStep === 1}
            className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {currentStep === 3 && watchedQuestions.length > 2 ? 'Back to Content' : 'Previous'}
          </button>
          
          {currentStep < 4 ? (
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="btn-primary"
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}
