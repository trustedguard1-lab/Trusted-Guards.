# Setup & Configuration Guide

## Initial Setup

### 1. Node.js & pnpm

Ensure you have Node.js 18+ and pnpm installed:

```bash
# Check Node.js version
node --version  # Should be v18 or higher

# Install pnpm globally (if not already installed)
npm install -g pnpm

# Verify pnpm version
pnpm --version  # Should be 8+
```

### 2. Clone & Install

```bash
# Clone repository
git clone <repository-url>
cd my-project

# Install dependencies
pnpm install
```

### 3. Environment Configuration

```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local with your values (if needed)
nano .env.local
```

### 4. Start Development Server

```bash
pnpm dev
```

Navigate to `http://localhost:3000`

## Configuration Files

### `next.config.mjs`
- Image optimization settings
- Security headers
- Internationalization config
- Experimental features

### `tsconfig.json`
- TypeScript compiler options
- Path aliases (`@/*`)
- React JSX configuration

### `tailwind.config.js`
- Tailwind CSS customization
- Design tokens
- Theme configuration

### `.eslintrc.json`
- Code quality rules
- TypeScript linting
- React best practices

### `.prettierrc.json`
- Code formatting standards
- Indentation and quotes
- Line length preferences

## Environment Variables

### Development (`.env.local`)
```env
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Production (Vercel)
Set via Vercel Dashboard → Settings → Environment Variables:
```
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

### Sensitive Variables
Never commit sensitive data:
- Database credentials
- API keys
- JWT secrets
- OAuth tokens

Use `.env.local` for local development only (already in `.gitignore`).

## Database Setup (Optional)

If adding a database:

1. **Choose a database service**:
   - Supabase (PostgreSQL)
   - Neon (PostgreSQL)
   - MongoDB Atlas
   - Firebase

2. **Add credentials to `.env.local`**:
   ```env
   DATABASE_URL=your_database_url
   DIRECT_URL=your_direct_connection_url
   ```

3. **Never commit database credentials**

## API Integration (Optional)

For external API integrations:

1. **Add API URL to `.env.local`**:
   ```env
   NEXT_PUBLIC_API_URL=https://api.example.com
   API_SECRET_KEY=your_secret_key
   ```

2. **Create API route in `app/api/`**:
   ```typescript
   // app/api/route.ts
   export async function GET(request: Request) {
     // Your API logic
   }
   ```

## Deployment

### Vercel (Recommended)

1. **Connect repository**:
   - Push code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository

2. **Configure environment**:
   - Set production environment variables
   - Vercel will auto-detect Next.js

3. **Deploy**:
   - Automatic deployment on push
   - Preview deployments on pull requests

### Self-Hosted (Docker)

```bash
# Build Docker image
docker build -t trusted-guards .

# Run container
docker run -p 3000:3000 trusted-guards
```

## Development Workflow

### 1. Create a Feature Branch

```bash
git checkout -b feature/feature-name
```

### 2. Make Changes

- Edit files in `components/`, `app/`, `lib/`
- Server auto-reloads on save

### 3. Type Checking

```bash
pnpm type-check
```

### 4. Linting

```bash
pnpm lint
```

### 5. Code Formatting

```bash
pnpm format
```

### 6. Commit & Push

```bash
git add .
git commit -m "Add feature description"
git push origin feature/feature-name
```

### 7. Create Pull Request

On GitHub, create PR for code review.

## Debugging

### Browser DevTools

1. Open DevTools (F12)
2. Use Console, Network, Performance tabs
3. Debug client-side issues

### Server Logs

```bash
# Watch logs during development
pnpm dev
```

Look for errors in the terminal.

### VS Code Debugging

Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/.bin/next",
      "args": ["dev"],
      "cwd": "${workspaceFolder}"
    }
  ]
}
```

## Performance Monitoring

### Local Profiling

```bash
# Build and analyze bundle size
pnpm analyze
```

### Production Monitoring

- Use Vercel Analytics
- Monitor Core Web Vitals
- Check deployment logs

## Troubleshooting

### Node Modules Issues

```bash
# Clear and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build Failures

```bash
# Clean build cache
rm -rf .next
pnpm build
```

### Port Already in Use

```bash
# Use different port
pnpm dev -- -p 3001
```

### Language Not Switching

```bash
# Clear browser storage
# 1. Open DevTools (F12)
# 2. Application → Cookies/SessionStorage
# 3. Delete entries
# 4. Hard refresh (Ctrl+Shift+R)
```

## Quick Reference

```bash
# Development
pnpm dev              # Start dev server
pnpm type-check       # Type check
pnpm lint             # Lint code
pnpm format           # Format code

# Production
pnpm build            # Build for production
pnpm start            # Start production server

# Utilities
pnpm analyze          # Analyze bundle size
pnpm clean            # Clean build artifacts
```

## Further Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [shadcn/ui](https://ui.shadcn.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
