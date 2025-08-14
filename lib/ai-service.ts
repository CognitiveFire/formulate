import OpenAI from 'openai'

// AI Service for Formulate
export class AIService {
  private openai: OpenAI | null = null
  private isConfigured = false

  constructor() {
    // Initialize OpenAI if API key is available
    const apiKey = process.env.OPENAI_API_KEY
    if (apiKey) {
      this.openai = new OpenAI({ apiKey })
      this.isConfigured = true
    }
  }

  // Generate questions using AI
  async generateQuestions(contentType: string, description: string): Promise<any[]> {
    if (!this.isConfigured || !this.openai) {
      // Fallback to simulated AI if no API key
      return this.simulateAIQuestionGeneration(contentType, description)
    }

    try {
      const prompt = this.buildPrompt(contentType, description)
      
      const completion = await this.openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are an expert in lead generation and form design. Generate relevant form questions based on the content type and description provided. Return only valid JSON with the question structure."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 2000
      })

      const response = completion.choices[0]?.message?.content
      if (response) {
        try {
          const questions = JSON.parse(response)
          return this.validateAndFormatQuestions(questions)
        } catch (parseError) {
          console.error('Failed to parse AI response:', parseError)
          return this.simulateAIQuestionGeneration(contentType, description)
        }
      }

      return this.simulateAIQuestionGeneration(contentType, description)
    } catch (error) {
      console.error('AI API error:', error)
      return this.simulateAIQuestionGeneration(contentType, description)
    }
  }

  // Generate personalized content based on form responses
  async generatePersonalizedContent(
    contentType: string, 
    formResponses: Record<string, any>
  ): Promise<string> {
    if (!this.isConfigured || !this.openai) {
      return this.generateFallbackContent(contentType, formResponses)
    }

    try {
      const prompt = this.buildContentPrompt(contentType, formResponses)
      
      const completion = await this.openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are an expert content creator. Generate personalized, valuable content based on the form responses provided. Make it actionable and relevant to the user's specific situation."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.8,
        max_tokens: 3000
      })

      return completion.choices[0]?.message?.content || this.generateFallbackContent(contentType, formResponses)
    } catch (error) {
      console.error('AI content generation error:', error)
      return this.generateFallbackContent(contentType, formResponses)
    }
  }

  // Build prompt for question generation
  private buildPrompt(contentType: string, description: string): string {
    return `Generate 8-12 relevant form questions for a ${contentType} about: "${description}"

Requirements:
- Include basic contact info (email, name, company)
- Questions should be relevant to the content type
- Mix required and optional questions
- Use appropriate field types (text, select, textarea, number)
- For select fields, provide relevant options
- Questions should help qualify leads and gather insights

Return JSON in this format:
[
  {
    "id": "1",
    "type": "email",
    "question": "What is your business email address?",
    "required": true
  },
  {
    "id": "2", 
    "type": "select",
    "question": "What industry are you in?",
    "required": true,
    "options": ["Technology", "Healthcare", "Finance", "Manufacturing", "Retail", "Education", "Other"]
  }
]

Focus on questions that will help create valuable, personalized content for the user.`
  }

  // Build prompt for content generation
  private buildContentPrompt(contentType: string, formResponses: Record<string, any>): string {
    const responses = Object.entries(formResponses)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n')

    return `Create a personalized ${contentType} based on these form responses:

${responses}

Requirements:
- Make it highly relevant to the user's specific situation
- Include actionable insights and recommendations
- Use the user's industry, company size, and other details
- Provide value that justifies the form submission
- Keep it professional but engaging
- Include specific next steps or recommendations

Format the content appropriately for the content type.`
  }

  // Validate and format AI-generated questions
  private validateAndFormatQuestions(questions: any[]): any[] {
    if (!Array.isArray(questions)) {
      return this.simulateAIQuestionGeneration('Assessment', 'General assessment')
    }

    const validQuestions = questions.filter(q => 
      q.id && q.type && q.question && 
      ['text', 'email', 'select', 'textarea', 'number'].includes(q.type)
    )

    if (validQuestions.length < 3) {
      return this.simulateAIQuestionGeneration('Assessment', 'General assessment')
    }

    return validQuestions.map((q, index) => ({
      id: q.id || (index + 1).toString(),
      type: q.type,
      question: q.question,
      required: q.required || false,
      options: q.options || undefined
    }))
  }

  // Fallback content generation
  private generateFallbackContent(contentType: string, formResponses: Record<string, any>): string {
    const companyName = formResponses.companyName || formResponses.name || 'your company'
    const industry = formResponses.industry || 'your industry'
    
    return `Thank you for your interest in our ${contentType}!

Based on your information, we've prepared a personalized ${contentType} for ${companyName} in the ${industry} sector.

This content has been tailored to address the specific challenges and opportunities that companies like yours typically face. We've analyzed your responses and created actionable insights that you can implement immediately.

Key highlights of your personalized ${contentType}:
• Industry-specific recommendations
• Actionable next steps
• Relevant case studies and examples
• Customized implementation roadmap

We hope you find this content valuable for your business growth and success!`
  }

  // Simulated AI for development/testing
  private simulateAIQuestionGeneration(contentType: string, description: string): any[] {
    // This is the existing simulated logic - keeping it as fallback
    const questionTemplates = {
      'Readiness Report': [
        { id: '1', type: 'email', question: 'What is your business email address?', required: true },
        { id: '2', type: 'text', question: 'What is your company name?', required: true },
        { id: '3', type: 'select', question: 'What industry are you in?', required: true, options: ['Technology', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Education', 'Other'] },
        { id: '4', type: 'select', question: 'How many employees does your company have?', required: true, options: ['1-10', '11-50', '51-200', '201-1000', '1000+'] },
        { id: '5', type: 'select', question: 'What is your current implementation level?', required: true, options: ['Beginner', 'Intermediate', 'Advanced', 'Expert'] },
        { id: '6', type: 'textarea', question: 'What are your main challenges and goals?', required: false },
        { id: '7', type: 'select', question: 'What is your timeline for implementation?', required: false, options: ['Immediate', '3-6 months', '6-12 months', '1+ years'] },
        { id: '8', type: 'select', question: 'What is your budget range?', required: false, options: ['Under $10K', '$10K - $50K', '$50K - $200K', '$200K+'] }
      ]
    }
    
    return questionTemplates[contentType as keyof typeof questionTemplates] || questionTemplates['Readiness Report']
  }

  // Check if AI service is configured
  isReady(): boolean {
    return this.isConfigured
  }

  // Get configuration status
  getStatus(): { configured: boolean; provider: string } {
    return {
      configured: this.isConfigured,
      provider: this.isConfigured ? 'OpenAI' : 'Simulated'
    }
  }
}

// Export singleton instance
export const aiService = new AIService()
