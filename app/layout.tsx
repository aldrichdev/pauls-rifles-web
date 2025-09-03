import './globals.css'
import AppWrapper from './components/AppWrapper'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  title: "=PRC= Paul's Rifle Clan",
  description: 'Home of the =PRC= clan of Call of Duty 1',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <AppWrapper>{children}</AppWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
