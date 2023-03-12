import { AnalyticsWrapper } from './components/analytics';
import Sidebar from './components/sidebar';
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className='bg-neutral-900 text-gray-100'>
        <div className='flex h-screen'>
            <div className='w-1/6 p-2'>
                <Sidebar />
            </div>
            <div className='p-8'>
                {children}
            </div>
            <AnalyticsWrapper />
        </div>
      </body>
    </html>
  )
}
