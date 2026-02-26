import './globals.css'
import { Montserrat, Poppins } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'],
})

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
})

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
      <body>{children}</body>
    </html>
  )
}