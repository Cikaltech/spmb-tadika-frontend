import { Footer } from '@/components/layout/Chrome'
import { AkunHeader } from '@/components/akun/AkunHeader'

export default function AkunLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <AkunHeader />
      <main id="konten" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
