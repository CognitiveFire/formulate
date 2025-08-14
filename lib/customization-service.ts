// Customization Service for Formulate
export interface CustomizationOptions {
  // Layout & Design
  layout: 'single-column' | 'two-column' | 'hero-form' | 'sidebar-form'
  theme: 'modern' | 'classic' | 'minimal' | 'bold' | 'professional'
  spacing: 'compact' | 'comfortable' | 'spacious'
  
  // Typography
  headingFont: 'inter' | 'roboto' | 'open-sans' | 'montserrat' | 'playfair'
  bodyFont: 'inter' | 'roboto' | 'open-sans' | 'montserrat' | 'source-sans'
  fontSize: 'small' | 'medium' | 'large'
  
  // Colors
  primaryColor: string
  secondaryColor: string
  backgroundColor: string
  textColor: string
  accentColor: string
  
  // Visual Elements
  showLogo: boolean
  showSocialProof: boolean
  showTrustBadges: boolean
  showProgressBar: boolean
  showBackgroundPattern: boolean
  backgroundPattern: 'dots' | 'grid' | 'waves' | 'geometric' | 'none'
  
  // Form Styling
  formStyle: 'card' | 'minimal' | 'floating' | 'inline'
  formBorderRadius: 'none' | 'small' | 'medium' | 'large' | 'full'
  formShadow: 'none' | 'subtle' | 'medium' | 'strong'
  
  // Animation & Interactions
  animations: 'subtle' | 'moderate' | 'dynamic' | 'none'
  hoverEffects: boolean
  microInteractions: boolean
  
  // Content Layout
  contentAlignment: 'left' | 'center' | 'right'
  imagePosition: 'left' | 'right' | 'top' | 'bottom' | 'none'
  showTestimonials: boolean
  showFeatures: boolean
  
  // Mobile Optimization
  mobileFirst: boolean
  responsiveBreakpoints: {
    mobile: number
    tablet: number
    desktop: number
  }
}

export interface PresetTheme {
  name: string
  description: string
  options: Partial<CustomizationOptions>
  preview: string
}

export class CustomizationService {
  private presets: Map<string, PresetTheme> = new Map()
  private customizations: Map<string, CustomizationOptions> = new Map()

  constructor() {
    this.initializePresets()
  }

  // Initialize preset themes
  private initializePresets() {
    this.presets.set('modern-tech', {
      name: 'Modern Tech',
      description: 'Clean, tech-focused design with subtle animations',
      options: {
        layout: 'hero-form',
        theme: 'modern',
        spacing: 'comfortable',
        headingFont: 'inter',
        bodyFont: 'inter',
        fontSize: 'medium',
        primaryColor: '#3B82F6',
        secondaryColor: '#1E40AF',
        backgroundColor: '#FFFFFF',
        textColor: '#1F2937',
        accentColor: '#10B981',
        showLogo: true,
        showSocialProof: true,
        showTrustBadges: true,
        showProgressBar: true,
        showBackgroundPattern: true,
        backgroundPattern: 'dots',
        formStyle: 'card',
        formBorderRadius: 'large',
        formShadow: 'medium',
        animations: 'subtle',
        hoverEffects: true,
        microInteractions: true,
        contentAlignment: 'center',
        imagePosition: 'right',
        showTestimonials: true,
        showFeatures: true,
        mobileFirst: true
      },
      preview: '/presets/modern-tech.png'
    })

    this.presets.set('professional-corporate', {
      name: 'Professional Corporate',
      description: 'Trustworthy, business-focused design',
      options: {
        layout: 'two-column',
        theme: 'professional',
        spacing: 'comfortable',
        headingFont: 'roboto',
        bodyFont: 'open-sans',
        fontSize: 'medium',
        primaryColor: '#1F2937',
        secondaryColor: '#374151',
        backgroundColor: '#F9FAFB',
        textColor: '#111827',
        accentColor: '#059669',
        showLogo: true,
        showSocialProof: true,
        showTrustBadges: true,
        showProgressBar: false,
        showBackgroundPattern: false,
        backgroundPattern: 'none',
        formStyle: 'card',
        formBorderRadius: 'medium',
        formShadow: 'subtle',
        animations: 'none',
        hoverEffects: false,
        microInteractions: false,
        contentAlignment: 'left',
        imagePosition: 'left',
        showTestimonials: true,
        showFeatures: false,
        mobileFirst: false
      },
      preview: '/presets/professional-corporate.png'
    })

    this.presets.set('startup-friendly', {
      name: 'Startup Friendly',
      description: 'Bold, energetic design for modern startups',
      options: {
        layout: 'hero-form',
        theme: 'bold',
        spacing: 'spacious',
        headingFont: 'montserrat',
        bodyFont: 'open-sans',
        fontSize: 'large',
        primaryColor: '#8B5CF6',
        secondaryColor: '#7C3AED',
        backgroundColor: '#F8FAFC',
        textColor: '#0F172A',
        accentColor: '#F59E0B',
        showLogo: true,
        showSocialProof: true,
        showTrustBadges: false,
        showProgressBar: true,
        showBackgroundPattern: true,
        backgroundPattern: 'geometric',
        formStyle: 'floating',
        formBorderRadius: 'full',
        formShadow: 'strong',
        animations: 'dynamic',
        hoverEffects: true,
        microInteractions: true,
        contentAlignment: 'center',
        imagePosition: 'top',
        showTestimonials: false,
        showFeatures: true,
        mobileFirst: true
      },
      preview: '/presets/startup-friendly.png'
    })

    this.presets.set('minimal-clean', {
      name: 'Minimal Clean',
      description: 'Simple, distraction-free design',
      options: {
        layout: 'single-column',
        theme: 'minimal',
        spacing: 'compact',
        headingFont: 'inter',
        bodyFont: 'inter',
        fontSize: 'medium',
        primaryColor: '#000000',
        secondaryColor: '#6B7280',
        backgroundColor: '#FFFFFF',
        textColor: '#111827',
        accentColor: '#3B82F6',
        showLogo: false,
        showSocialProof: false,
        showTrustBadges: false,
        showProgressBar: false,
        showBackgroundPattern: false,
        backgroundPattern: 'none',
        formStyle: 'minimal',
        formBorderRadius: 'none',
        formShadow: 'none',
        animations: 'none',
        hoverEffects: false,
        microInteractions: false,
        contentAlignment: 'center',
        imagePosition: 'none',
        showTestimonials: false,
        showFeatures: false,
        mobileFirst: true
      },
      preview: '/presets/minimal-clean.png'
    })
  }

  // Get all preset themes
  getPresets(): PresetTheme[] {
    return Array.from(this.presets.values())
  }

  // Get preset by name
  getPreset(name: string): PresetTheme | undefined {
    return this.presets.get(name)
  }

  // Apply preset to customization
  applyPreset(presetName: string, currentOptions: CustomizationOptions): CustomizationOptions {
    const preset = this.presets.get(presetName)
    if (!preset) return currentOptions

    return {
      ...currentOptions,
      ...preset.options
    }
  }

  // Generate CSS from customization options
  generateCSS(options: CustomizationOptions): string {
    const css = `
      :root {
        --primary-color: ${options.primaryColor};
        --secondary-color: ${options.secondaryColor};
        --background-color: ${options.backgroundColor};
        --text-color: ${options.textColor};
        --accent-color: ${options.accentColor};
        --spacing: ${this.getSpacingValue(options.spacing)};
        --border-radius: ${this.getBorderRadiusValue(options.formBorderRadius)};
        --shadow: ${this.getShadowValue(options.formShadow)};
      }

      .formulate-page {
        font-family: ${this.getFontFamily(options.bodyFont)};
        background-color: var(--background-color);
        color: var(--text-color);
        line-height: ${options.spacing === 'compact' ? '1.4' : '1.6'};
      }

      .formulate-heading {
        font-family: ${this.getFontFamily(options.headingFont)};
        font-size: ${this.getFontSizeValue(options.fontSize)};
        text-align: ${options.contentAlignment};
        color: var(--text-color);
      }

      .formulate-form {
        background: ${options.formStyle === 'card' ? 'white' : 'transparent'};
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
        padding: var(--spacing);
        ${options.formStyle === 'floating' ? 'transform: translateY(-10px);' : ''}
      }

      .formulate-button {
        background-color: var(--primary-color);
        color: white;
        border-radius: var(--border-radius);
        transition: all 0.3s ease;
        ${options.hoverEffects ? `
        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        ` : ''}
      }

      ${options.animations !== 'none' ? `
      .formulate-animate {
        animation: ${this.getAnimationValue(options.animations)} 0.6s ease-out;
      }
      ` : ''}

      ${options.showBackgroundPattern && options.backgroundPattern !== 'none' ? `
      .formulate-background {
        background-image: ${this.getBackgroundPattern(options.backgroundPattern)};
      }
      ` : ''}

      @media (max-width: 768px) {
        ${options.mobileFirst ? `
        .formulate-page {
          padding: 1rem;
        }
        ` : `
        .formulate-page {
          padding: 2rem;
        }
        `}
      }
    `

    return css
  }

  // Get spacing value
  private getSpacingValue(spacing: string): string {
    const spacingMap = {
      'compact': '1rem',
      'comfortable': '2rem',
      'spacious': '3rem'
    }
    return spacingMap[spacing as keyof typeof spacingMap] || '2rem'
  }

  // Get border radius value
  private getBorderRadiusValue(radius: string): string {
    const radiusMap = {
      'none': '0',
      'small': '0.25rem',
      'medium': '0.5rem',
      'large': '1rem',
      'full': '9999px'
    }
    return radiusMap[radius as keyof typeof radiusMap] || '0.5rem'
  }

  // Get shadow value
  private getShadowValue(shadow: string): string {
    const shadowMap = {
      'none': 'none',
      'subtle': '0 1px 3px rgba(0,0,0,0.1)',
      'medium': '0 4px 6px rgba(0,0,0,0.1)',
      'strong': '0 10px 25px rgba(0,0,0,0.15)'
    }
    return shadowMap[shadow as keyof typeof shadowMap] || 'none'
  }

  // Get font family
  private getFontFamily(font: string): string {
    const fontMap = {
      'inter': '"Inter", sans-serif',
      'roboto': '"Roboto", sans-serif',
      'open-sans': '"Open Sans", sans-serif',
      'montserrat': '"Montserrat", sans-serif',
      'playfair': '"Playfair Display", serif',
      'source-sans': '"Source Sans Pro", sans-serif'
    }
    return fontMap[font as keyof typeof fontMap] || '"Inter", sans-serif'
  }

  // Get font size
  private getFontSizeValue(size: string): string {
    const sizeMap = {
      'small': '1.125rem',
      'medium': '1.5rem',
      'large': '2rem'
    }
    return sizeMap[size as keyof typeof sizeMap] || '1.5rem'
  }

  // Get animation value
  private getAnimationValue(animation: string): string {
    const animationMap = {
      'subtle': 'fadeInUp',
      'moderate': 'slideInUp',
      'dynamic': 'bounceIn',
      'none': 'none'
    }
    return animationMap[animation as keyof typeof animationMap] || 'none'
  }

  // Get background pattern
  private getBackgroundPattern(pattern: string): string {
    const patternMap = {
      'dots': 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
      'grid': 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
      'waves': 'linear-gradient(45deg, #f3f4f6 25%, transparent 25%), linear-gradient(-45deg, #f3f4f6 25%, transparent 25%)',
      'geometric': 'linear-gradient(30deg, #f3f4f6 12%, transparent 12.5%, transparent 87%, #f3f4f6 87.5%, #f3f4f6), linear-gradient(150deg, #f3f4f6 12%, transparent 12.5%, transparent 87%, #f3f4f6 87.5%, #f3f4f6)',
      'none': 'none'
    }
    return patternMap[pattern as keyof typeof patternMap] || 'none'
  }

  // Save customization
  saveCustomization(formId: string, options: CustomizationOptions): void {
    this.customizations.set(formId, options)
  }

  // Get customization
  getCustomization(formId: string): CustomizationOptions | undefined {
    return this.customizations.get(formId)
  }

  // Export customization
  exportCustomization(formId: string): string {
    const customization = this.customizations.get(formId)
    if (!customization) return ''

    return JSON.stringify(customization, null, 2)
  }

  // Import customization
  importCustomization(formId: string, jsonString: string): boolean {
    try {
      const options = JSON.parse(jsonString) as CustomizationOptions
      this.customizations.set(formId, options)
      return true
    } catch (error) {
      console.error('Failed to import customization:', error)
      return false
    }
  }

  // Get default customization options
  getDefaultOptions(): CustomizationOptions {
    return {
      layout: 'hero-form',
      theme: 'modern',
      spacing: 'comfortable',
      headingFont: 'inter',
      bodyFont: 'inter',
      fontSize: 'medium',
      primaryColor: '#3B82F6',
      secondaryColor: '#1E40AF',
      backgroundColor: '#FFFFFF',
      textColor: '#1F2937',
      accentColor: '#10B981',
      showLogo: true,
      showSocialProof: true,
      showTrustBadges: false,
      showProgressBar: true,
      showBackgroundPattern: false,
      backgroundPattern: 'none',
      formStyle: 'card',
      formBorderRadius: 'medium',
      formShadow: 'subtle',
      animations: 'subtle',
      hoverEffects: true,
      microInteractions: true,
      contentAlignment: 'center',
      imagePosition: 'right',
      showTestimonials: false,
      showFeatures: false,
      mobileFirst: true,
      responsiveBreakpoints: {
        mobile: 768,
        tablet: 1024,
        desktop: 1280
      }
    }
  }
}

// Export singleton instance
export const customizationService = new CustomizationService()
