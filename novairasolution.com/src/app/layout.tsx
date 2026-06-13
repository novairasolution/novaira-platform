import type { Metadata } from "next";
import Script from "next/script";
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";

export const metadata: Metadata = {
  title: "Novaira Global",
  description: "Novaira Global Corporate Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/logo.png" type="image/png" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{__html: `
          tailwind.config = {
            darkMode: 'class',
            theme: {
              extend: {
                fontFamily: { sans: ['Inter', 'sans-serif'] },
                colors: {
                  primary: '#4F46E5',
                  secondary: '#0F172A',
                  accent: '#F8FAFC'
                }
              }
            }
          }
        `}} />
        <style type="text/tailwindcss" dangerouslySetInnerHTML={{__html: `
          @layer components {
            .glass-nav {
              @apply fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl transition-all duration-300;
            }
            .modern-input {
              @apply w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-4 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm;
            }
            select.modern-input {
              @apply appearance-none cursor-pointer;
              background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
              background-position: right 1rem center;
              background-repeat: no-repeat;
              background-size: 1.5em 1.5em;
            }
          }
        `}}></style>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="text-gray-800 antialiased overflow-x-hidden">
        <NextTopLoader color="#4F46E5" showSpinner={true} />
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload"></Script>
        {children}
      </body>
    </html>
  );
}

