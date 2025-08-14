// Analytics Service for Formulate
export interface FormAnalytics {
  formId: string
  contentType: string
  totalSubmissions: number
  conversionRate: number
  averageCompletionTime: number
  questionPerformance: QuestionPerformance[]
  topPerformingQuestions: string[]
  dropoffPoints: DropoffPoint[]
  leadQuality: LeadQualityMetrics
  createdAt: Date
  lastUpdated: Date
}

export interface QuestionPerformance {
  questionId: string
  questionText: string
  completionRate: number
  averageTimeToAnswer: number
  dropoffRate: number
  required: boolean
  fieldType: string
}

export interface DropoffPoint {
  questionId: string
  questionText: string
  dropoffCount: number
  dropoffRate: number
  commonIssues: string[]
}

export interface LeadQualityMetrics {
  averageScore: number
  qualifiedLeads: number
  totalLeads: number
  qualificationRate: number
  topQualifyingQuestions: string[]
}

export class AnalyticsService {
  private analytics: Map<string, FormAnalytics> = new Map()

  // Track form submission
  trackFormSubmission(formId: string, contentType: string, startTime: number, endTime: number, responses: Record<string, any>) {
    const completionTime = endTime - startTime
    
    if (!this.analytics.has(formId)) {
      this.analytics.set(formId, {
        formId,
        contentType,
        totalSubmissions: 0,
        conversionRate: 0,
        averageCompletionTime: 0,
        questionPerformance: [],
        topPerformingQuestions: [],
        dropoffPoints: [],
        leadQuality: {
          averageScore: 0,
          qualifiedLeads: 0,
          totalLeads: 0,
          qualificationRate: 0,
          topQualifyingQuestions: []
        },
        createdAt: new Date(),
        lastUpdated: new Date()
      })
    }

    const analytics = this.analytics.get(formId)!
    analytics.totalSubmissions++
    analytics.averageCompletionTime = 
      (analytics.averageCompletionTime * (analytics.totalSubmissions - 1) + completionTime) / analytics.totalSubmissions
    analytics.lastUpdated = new Date()

    // Update question performance
    this.updateQuestionPerformance(formId, responses, completionTime)
    
    // Update lead quality
    this.updateLeadQuality(formId, responses)
  }

  // Track question interaction
  trackQuestionInteraction(formId: string, questionId: string, questionText: string, fieldType: string, required: boolean, timeSpent: number) {
    if (!this.analytics.has(formId)) return

    const analytics = this.analytics.get(formId)!
    let questionPerf = analytics.questionPerformance.find(q => q.questionId === questionId)
    
    if (!questionPerf) {
      questionPerf = {
        questionId,
        questionText,
        completionRate: 0,
        averageTimeToAnswer: 0,
        dropoffRate: 0,
        required,
        fieldType
      }
      analytics.questionPerformance.push(questionPerf)
    }

    // Update completion rate and time
    questionPerf.completionRate = (questionPerf.completionRate + 1) / 2
    questionPerf.averageTimeToAnswer = 
      (questionPerf.averageTimeToAnswer + timeSpent) / 2
  }

  // Track form abandonment
  trackFormAbandonment(formId: string, questionId: string, questionText: string, reason?: string) {
    if (!this.analytics.has(formId)) return

    const analytics = this.analytics.get(formId)!
    let dropoffPoint = analytics.dropoffPoints.find(d => d.questionId === questionId)
    
    if (!dropoffPoint) {
      dropoffPoint = {
        questionId,
        questionText,
        dropoffCount: 0,
        dropoffRate: 0,
        commonIssues: []
      }
      analytics.dropoffPoints.push(dropoffPoint)
    }

    dropoffPoint.dropoffCount++
    dropoffPoint.dropoffRate = dropoffPoint.dropoffCount / analytics.totalSubmissions
    
    if (reason && !dropoffPoint.commonIssues.includes(reason)) {
      dropoffPoint.commonIssues.push(reason)
    }
  }

  // Update question performance metrics
  private updateQuestionPerformance(formId: string, responses: Record<string, any>, completionTime: number) {
    const analytics = this.analytics.get(formId)!
    
    Object.entries(responses).forEach(([questionId, response]) => {
      let questionPerf = analytics.questionPerformance.find(q => q.questionId === questionId)
      
      if (questionPerf) {
        questionPerf.completionRate = (questionPerf.completionRate + 1) / 2
        questionPerf.averageTimeToAnswer = 
          (questionPerf.averageTimeToAnswer + completionTime) / 2
      }
    })
  }

  // Update lead quality metrics
  private updateLeadQuality(formId: string, responses: Record<string, any>) {
    const analytics = this.analytics.get(formId)!
    
    // Simple lead scoring based on response completeness and quality
    let score = 0
    let totalQuestions = analytics.questionPerformance.length
    
    Object.entries(responses).forEach(([questionId, response]) => {
      if (response && response.toString().trim().length > 0) {
        score += 1
      }
    })
    
    const leadScore = score / totalQuestions
    analytics.leadQuality.averageScore = 
      (analytics.leadQuality.averageScore * analytics.leadQuality.totalLeads + leadScore) / (analytics.leadQuality.totalLeads + 1)
    
    analytics.leadQuality.totalLeads++
    if (leadScore > 0.7) {
      analytics.leadQuality.qualifiedLeads++
    }
    
    analytics.leadQuality.qualificationRate = analytics.leadQuality.qualifiedLeads / analytics.leadQuality.totalLeads
  }

  // Get form analytics
  getFormAnalytics(formId: string): FormAnalytics | undefined {
    return this.analytics.get(formId)
  }

  // Get all analytics
  getAllAnalytics(): FormAnalytics[] {
    return Array.from(this.analytics.values())
  }

  // Get analytics by content type
  getAnalyticsByContentType(contentType: string): FormAnalytics[] {
    return Array.from(this.analytics.values()).filter(a => a.contentType === contentType)
  }

  // Get top performing forms
  getTopPerformingForms(limit: number = 10): FormAnalytics[] {
    return Array.from(this.analytics.values())
      .sort((a, b) => b.conversionRate - a.conversionRate)
      .slice(0, limit)
  }

  // Get question insights
  getQuestionInsights(formId: string): {
    bestQuestions: QuestionPerformance[]
    problematicQuestions: QuestionPerformance[]
    recommendations: string[]
  } {
    const analytics = this.analytics.get(formId)
    if (!analytics) return { bestQuestions: [], problematicQuestions: [], recommendations: [] }

    const bestQuestions = analytics.questionPerformance
      .filter(q => q.completionRate > 0.8)
      .sort((a, b) => b.completionRate - a.completionRate)

    const problematicQuestions = analytics.questionPerformance
      .filter(q => q.dropoffRate > 0.1)
      .sort((a, b) => b.dropoffRate - a.dropoffRate)

    const recommendations = this.generateRecommendations(analytics)

    return { bestQuestions, problematicQuestions, recommendations }
  }

  // Generate recommendations based on analytics
  private generateRecommendations(analytics: FormAnalytics): string[] {
    const recommendations: string[] = []

    // Check completion rate
    if (analytics.conversionRate < 0.5) {
      recommendations.push('Consider reducing the number of required questions to improve completion rate')
    }

    // Check for problematic questions
    const highDropoffQuestions = analytics.questionPerformance.filter(q => q.dropoffRate > 0.2)
    if (highDropoffQuestions.length > 0) {
      recommendations.push(`Questions with high dropoff rates: ${highDropoffQuestions.map(q => q.questionText).join(', ')}`)
    }

    // Check completion time
    if (analytics.averageCompletionTime > 300000) { // 5 minutes
      recommendations.push('Form completion time is high - consider simplifying complex questions')
    }

    // Check lead quality
    if (analytics.leadQuality.qualificationRate < 0.3) {
      recommendations.push('Lead qualification rate is low - review question relevance and scoring')
    }

    return recommendations
  }

  // Export analytics data
  exportAnalytics(formId: string): string {
    const analytics = this.analytics.get(formId)
    if (!analytics) return ''

    return JSON.stringify(analytics, null, 2)
  }

  // Clear analytics (for testing)
  clearAnalytics(): void {
    this.analytics.clear()
  }

  // Get summary statistics
  getSummaryStats(): {
    totalForms: number
    totalSubmissions: number
    averageConversionRate: number
    averageCompletionTime: number
    topContentTypes: Array<{ type: string; submissions: number }>
  } {
    const forms = Array.from(this.analytics.values())
    
    if (forms.length === 0) {
      return {
        totalForms: 0,
        totalSubmissions: 0,
        averageConversionRate: 0,
        averageCompletionTime: 0,
        topContentTypes: []
      }
    }

    const totalSubmissions = forms.reduce((sum, form) => sum + form.totalSubmissions, 0)
    const averageConversionRate = forms.reduce((sum, form) => sum + form.conversionRate, 0) / forms.length
    const averageCompletionTime = forms.reduce((sum, form) => sum + form.averageCompletionTime, 0) / forms.length

    // Group by content type
    const contentTypeStats = new Map<string, number>()
    forms.forEach(form => {
      const current = contentTypeStats.get(form.contentType) || 0
      contentTypeStats.set(form.contentType, current + form.totalSubmissions)
    })

    const topContentTypes = Array.from(contentTypeStats.entries())
      .map(([type, submissions]) => ({ type, submissions }))
      .sort((a, b) => b.submissions - a.submissions)
      .slice(0, 5)

    return {
      totalForms: forms.length,
      totalSubmissions,
      averageConversionRate,
      averageCompletionTime,
      topContentTypes
    }
  }
}

// Export singleton instance
export const analyticsService = new AnalyticsService()
