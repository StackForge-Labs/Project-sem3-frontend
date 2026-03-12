<div align="center">

# 🚀 NextApp

### Nền tảng web hiện đại được xây dựng với Next.js 15 & React 19

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

[Demo](https://your-demo.vercel.app) • [Tài liệu](./PROJECT_STRUCTURE.md) • [Docker](./DOCKER.md)

</div>

---

## ✨ Tính năng

- ⚡ **Next.js 15** - App Router, Server Components, Server Actions
- ⚛️ **React 19** - Hooks mới nhất, Form Actions, Optimistic Updates
- 🎨 **Tailwind CSS 4** - Utility-first CSS framework
- 📘 **TypeScript** - Type safety với strict mode
- 🐳 **Docker** - Production-ready containerization
- 🎯 **ESLint** - Code quality và consistency
- 🚀 **Vercel** - Deploy tự động với zero config

## 🛠️ Tech Stack

### Core
- **Framework:** Next.js 16.1.6
- **UI Library:** React 19.2.3
- **Language:** TypeScript 5.x
- **Styling:** Tailwind CSS 4.x

### Utilities
- **Class Merging:** clsx + tailwind-merge
- **Font Optimization:** next/font (Geist Sans & Mono)
- **Image Optimization:** next/image

### Development
- **Linting:** ESLint 9.x + eslint-config-next
- **Type Checking:** TypeScript strict mode
- **Package Manager:** npm

### Deployment
- **Containerization:** Docker + Docker Compose
- **Platform:** Vercel / AWS / GCP / DigitalOcean

## 📁 Cấu trúc dự án

```
src/
├── app/                    # App Router - Routes & Layouts
│   ├── layout.tsx         # Root layout với metadata
│   ├── page.tsx           # Homepage
│   ├── loading.tsx        # Loading UI (Suspense)
│   ├── error.tsx          # Error boundary
│   ├── not-found.tsx      # 404 page
│   └── globals.css        # Global styles
│
├── components/            # React Components
│   ├── ui/               # Base UI components (Button, Input...)
│   └── features/         # Feature-specific components
│
├── lib/                  # Utilities & Configurations
│   ├── utils.ts          # Helper functions (cn, formatDate...)
│   ├── fonts.ts          # Font configurations
│   └── env.ts            # Environment validation
│
├── types/                # TypeScript Types & Interfaces
├── hooks/                # Custom React Hooks
├── actions/              # Server Actions
└── constants/            # App-wide constants
```

> 📖 Xem chi tiết: [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)

## 🚀 Bắt đầu

### Yêu cầu

- Node.js 20.x trở lên
- npm hoặc yarn hoặc pnpm

### Cài đặt

```bash
# Clone repository
git clone <repository-url>
cd next

# Cài đặt dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Chạy development server
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

### Scripts

```bash
npm run dev      # Chạy development server
npm run build    # Build production
npm run start    # Chạy production server
npm run lint     # Chạy ESLint
```

## 🐳 Docker

### Development với Docker

```bash
# Build image
make build

# Start container
make up

# Xem logs
make logs

# Stop container
make down
```

> 📖 Xem chi tiết: [DOCKER.md](./DOCKER.md)

## 📝 Quy tắc code

### TypeScript
- ✅ Strict mode - Không dùng `any`
- ✅ Explicit return types cho functions
- ✅ Interface cho objects, Type cho unions

### React
- ✅ Server Components by default
- ✅ `'use client'` chỉ khi cần thiết
- ✅ Components < 150 lines
- ✅ Semantic HTML & Accessibility

### Styling
- ✅ Tailwind CSS utility classes
- ✅ `cn()` utility cho conditional classes
- ✅ Mobile-first responsive design

### Code Quality
- ✅ Self-documenting code
- ✅ Early returns để giảm nesting
- ✅ Extract magic numbers thành constants

## 🏗️ Kiến trúc

### Server Components First
Mặc định sử dụng React Server Components để tối ưu performance. Chỉ thêm `'use client'` khi cần:
- Browser APIs (window, localStorage)
- Event handlers
- React hooks (useState, useEffect...)

### Server Actions
Sử dụng Server Actions cho mutations thay vì API routes:
```typescript
// actions/user.ts
'use server';

export async function createUser(data: FormData) {
  // Server-side logic
}
```

### Type Safety
Result pattern cho error handling:
```typescript
type Result<T> = 
  | { success: true; data: T }
  | { success: false; error: Error };
```

## 🎨 UI Components

### Button Component
```tsx
import { Button } from '@/components/ui';

<Button variant="primary" size="lg">
  Click me
</Button>
```

### Variants
- `primary` - Blue gradient
- `secondary` - Gray
- `outline` - Border only

## 🌍 Environment Variables

```bash
# .env.local
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

> ⚠️ Không commit file `.env.local` vào git

## 📦 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker
```bash
# Build production image
docker build -t nextapp .

# Run container
docker run -p 3000:3000 nextapp
```

### Manual
```bash
# Build
npm run build

# Start
npm start
```

## 🤝 Contributing

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Mở Pull Request

### Commit Convention
```
feat: thêm tính năng mới
fix: sửa bug
docs: cập nhật documentation
style: format code
refactor: refactor code
test: thêm tests
chore: cập nhật dependencies
```

## 📄 License

MIT License - xem [LICENSE](./LICENSE) để biết thêm chi tiết.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Vercel](https://vercel.com/) - Deployment platform
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Unsplash](https://unsplash.com/) - Free images

---

<div align="center">

**[⬆ Về đầu trang](#-nextapp)**

Made with ❤️ by Your Team

</div>
