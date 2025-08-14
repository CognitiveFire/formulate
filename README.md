# Formulate - AI-Powered Lead Generation Platform

Formulate is an AI-powered platform that turns your ideas into lead-generating content journeys. Just describe the type of content you want, and Formulate builds custom forms and landing pages designed to collect the right information from your leads.

## Features

- **AI-Powered Form Wizard**: Step-by-step interface to create intelligent forms
- **Smart Question Generation**: AI analyzes your content type and description to generate relevant questions
- **Industry-Specific Templates**: Pre-built question sets for Technology, Healthcare, Finance, Manufacturing, Retail, and Education
- **Landing Page Builder**: Advanced builder with real-time preview and customization
- **AI Content Generation**: Generate personalized content based on form responses
- **Advanced Analytics**: Track form performance, question effectiveness, and lead quality
- **Preset Themes**: Professional themes including Modern Tech, Corporate, Startup, and Minimal
- **Advanced Customization**: Layout, typography, colors, animations, and responsive design
- **Real-time Preview**: See changes instantly as you customize
- **Mobile-First Design**: Responsive design that works on all devices

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **Forms**: React Hook Form for validation
- **File Upload**: React Dropzone for logo uploads
- **Icons**: Lucide React for consistent iconography
- **AI Integration**: OpenAI GPT-4 for intelligent question generation
- **Analytics**: Built-in analytics service for form performance tracking
- **Customization**: Advanced theming and customization system
- **Deployment**: Railway

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenAI API key (optional, for AI features)

### Quick Start
```bash
# Clone the repository
git clone <your-repo-url>
cd formulate

# Install dependencies
npm install

# Set up environment variables (optional)
cp env.example .env.local
# Edit .env.local and add your OpenAI API key

# Start development server
npm run dev
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/formulate.git
cd formulate
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
formulate/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── wizard/            # Form wizard page
│   └── builder/           # Landing page builder
├── components/             # React components
│   ├── FormWizard.tsx     # Form creation wizard
│   └── LandingPageBuilder.tsx # Landing page builder
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── railway.json           # Railway deployment config
```

## Usage

### 1. Create a Form

1. Navigate to `/wizard`
2. Select your content type (Readiness Report, Product Comparison, etc.)
3. Describe your content idea in detail
4. **AI generates intelligent questions** based on your content type and description
5. **Industry-specific questions** are automatically added based on your description
6. Customize the AI-generated questions or add new ones
7. Set form details and appearance
8. Generate your form and landing page

#### AI-Powered Features
- **Smart Question Generation**: AI analyzes your content and creates relevant questions
- **Industry Detection**: Automatically detects industry keywords and adds specialized questions
- **Context Awareness**: Questions adapt based on your specific description and goals
- **Question Optimization**: AI suggests the best field types and required/optional settings

### 2. Build Landing Page

1. Navigate to `/builder`
2. Customize design elements (logo, colors, styling)
3. Edit content and copy
4. Preview your landing page
5. Download or share your page

### 3. Customization Options

- **Design**: Logo upload, color schemes, background colors
- **Content**: Page title, subtitle, description, CTA text
- **Form**: Question types, validation, required fields
- **URL**: Custom URL slugs for your landing pages
- **Preset Themes**: Modern Tech, Professional Corporate, Startup Friendly, Minimal Clean
- **Advanced Styling**: Typography, spacing, animations, hover effects
- **Layout Options**: Single column, two column, hero form, sidebar form
- **Responsive Design**: Mobile-first approach with custom breakpoints

### 4. Analytics & Insights

- **Form Performance**: Track completion rates and conversion metrics
- **Question Analysis**: Identify best-performing and problematic questions
- **Lead Quality**: Score leads based on response completeness
- **Dropoff Points**: Find where users abandon forms
- **AI Recommendations**: Get suggestions for improving form effectiveness

### 5. AI Content Generation

- **Personalized Content**: Generate unique content based on form responses
- **Industry Relevance**: Content adapts to user's industry and company size
- **Actionable Insights**: Provide specific recommendations and next steps
- **Multiple Formats**: Support for reports, assessments, case studies, and more

## Deployment

### Railway Deployment

1. Push your code to GitHub
2. Connect your repository to Railway
3. Railway will automatically detect the Next.js project
4. Deploy with the provided configuration

### Environment Variables

For basic functionality, no environment variables are required. For AI features:

#### Required for AI (Optional for basic use)
- `OPENAI_API_KEY`: Your OpenAI API key for AI question generation
- Copy `env.example` to `.env.local` and add your API key

#### Optional
- `NODE_ENV=production`
- `NEXT_PUBLIC_APP_URL=https://your-app.railway.app`

#### Getting OpenAI API Key
1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create a new API key
3. Add it to your `.env.local` file
4. Restart your development server

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@formulate.app or create an issue in this repository.

## Roadmap

- [ ] Form analytics and insights
- [ ] A/B testing capabilities
- [ ] Integration with CRM systems
- [ ] Advanced AI content generation
- [ ] Multi-language support
- [ ] Team collaboration features
