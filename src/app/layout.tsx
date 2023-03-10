import { AnalyticsWrapper } from './components/analytics';
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="bg-gray-900">
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
