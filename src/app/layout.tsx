import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'GlobalX Innovation Labs | Inspiring, Empowering & Connecting Innovators',
  description: 'The official website for GlobalX Investments Limited. Making innovations happen across STEAM education, green transitions, and corporate digital transformation.',
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
