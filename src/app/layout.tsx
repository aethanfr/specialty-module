import './globals.css'
import { montserrat } from '@/lib/fonts'

export const metadata = {
  title: 'Specialty Module',
  description: 'What is the Specialty Of Us section',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}