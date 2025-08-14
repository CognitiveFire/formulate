# Deployment Guide for Formulate

This guide will walk you through deploying your Formulate application to Railway using GitHub.

## Prerequisites

- GitHub account
- Railway account (free tier available)
- Node.js 18+ installed locally

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository: `formulate`
5. Make it public or private (your choice)
6. Don't initialize with README (we already have one)
7. Click "Create repository"

## Step 2: Push Code to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Formulate AI-powered lead generation platform"

# Add remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/formulate.git

# Push to main branch
git push -u origin main
```

## Step 3: Deploy to Railway

1. Go to [Railway](https://railway.app) and sign in with GitHub
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your `formulate` repository
5. Railway will automatically detect it's a Next.js project
6. Click "Deploy"

## Step 4: Configure Railway

Railway will automatically:
- Detect the Next.js framework
- Install dependencies
- Build the application
- Deploy to a live URL

### Environment Variables (Optional)

No environment variables are required for basic functionality, but you can add:

- `NODE_ENV=production`
- `NEXT_PUBLIC_APP_URL=https://your-app.railway.app`

## Step 5: Custom Domain (Optional)

1. In Railway dashboard, go to your project
2. Click on "Settings" tab
3. Under "Domains", click "Generate Domain"
4. Or add your custom domain if you have one

## Step 6: Verify Deployment

1. Visit your Railway URL (e.g., `https://your-app.railway.app`)
2. Test the form wizard: `/wizard`
3. Test the landing page builder: `/builder`
4. Verify all functionality works correctly

## Automatic Deployments

Railway will automatically:
- Deploy on every push to the main branch
- Rebuild when dependencies change
- Handle SSL certificates
- Provide monitoring and logs

## Monitoring and Logs

In Railway dashboard:
- View real-time logs
- Monitor performance
- Check deployment status
- View error logs if any issues occur

## Troubleshooting

### Build Failures

If the build fails:
1. Check Railway logs for error messages
2. Verify all dependencies are in `package.json`
3. Ensure Node.js version compatibility
4. Check for TypeScript compilation errors

### Runtime Errors

If the app crashes:
1. Check Railway logs
2. Verify environment variables
3. Check for missing dependencies
4. Ensure proper Next.js configuration

### Performance Issues

1. Enable Railway's performance monitoring
2. Check bundle size with `npm run build`
3. Optimize images and assets
4. Consider implementing caching strategies

## Cost Optimization

Railway's free tier includes:
- 500 hours/month of runtime
- 1GB storage
- Shared infrastructure

For production use, consider:
- Pro plan for dedicated resources
- Custom domains
- Advanced monitoring
- Team collaboration features

## Security Considerations

1. Keep dependencies updated
2. Use HTTPS (automatic with Railway)
3. Implement proper form validation
4. Consider rate limiting for forms
5. Regular security audits

## Backup and Recovery

1. GitHub serves as your code backup
2. Railway provides automatic backups
3. Consider database backups if adding persistence
4. Document deployment procedures

## Next Steps

After successful deployment:
1. Test all functionality thoroughly
2. Set up monitoring and alerts
3. Configure custom domain if desired
4. Set up CI/CD pipeline if needed
5. Plan for scaling and optimization

## Support

- Railway Documentation: [docs.railway.app](https://docs.railway.app)
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)
- GitHub Issues: Create issues in your repository
- Railway Support: Available in dashboard
