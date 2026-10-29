'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon, type IconName } from '@/components/ui/Icon'
import { site } from '@/content/site'

/**
 * Sidebar panel admin. teal-800, teks putih penuh, DESIGN.md bab 11.
 * Item aktif dibedakan oleh isian teal-900 dan ikon emas, bukan bilah tebal di tepi kiri.
 * Di bawah 768px sidebar menjadi bilah atas: staf jarang membuka panel dari HP.
 */
type Menu = { label: string; icon: IconName; href: string }

const menu: Menu[] = [
  { label: 'Verifikasi', icon: 'check', href: '/admin' },
  { label: 'Wawancara', icon: 'clock', href: '/admin/wawancara' },
]

export function Sidebar() {
  const pathname = usePathname() ?? ''
  const jalur = pathname.replace(/\/+$/, '')

  const aktif = (href: string) =>
    href === '/admin'
      ? jalur === '/admin' || jalur.startsWith('/admin/verifikasi')
      : jalur === href || jalur.startsWith(`${href}/`)

  return (
    <aside className="sticky top-0 z-30 flex items-center gap-3 bg-teal-800 px-3 text-white md:static md:h-screen md:w-60 md:shrink-0 md:flex-col md:items-stretch md:gap-0 md:px-0">
      <div className="min-w-0 shrink-0 md:border-b md:border-teal-700 md:px-5 md:py-5">
        <p className="font-display text-[17px] font-bold leading-tight md:text-[19px]">
          SPMB Tadika
        </p>
        <p className="hidden text-[13.5px] leading-tight text-white md:block">Panel admin</p>
      </div>

      <nav aria-label="Menu admin" className="min-w-0 flex-1 md:px-3 md:py-4">
        <ul className="flex gap-1 overflow-x-auto md:flex-col md:gap-1 md:overflow-visible">
          {menu.map((m) => {
            const dipilih = aktif(m.href)
            return (
              <li key={m.href} className="shrink-0 md:shrink">
                <Link
                  href={m.href}
                  aria-current={dipilih ? 'page' : undefined}
                  className={`flex min-h-[44px] items-center gap-2.5 rounded-field border px-3 text-[14.5px] font-bold transition-colors duration-150 md:min-h-[40px] ${
                    dipilih
                      ? 'border-gold-300/50 bg-teal-900 text-white'
                      : 'border-transparent text-white hover:bg-teal-700'
                  }`}
                >
                  <Icon
                    name={m.icon}
                    className={`h-5 w-5 shrink-0 ${dipilih ? 'text-gold-300' : 'text-white'}`}
                  />
                  <span className="whitespace-nowrap">{m.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="mt-auto hidden border-t border-teal-700 px-5 py-4 md:block">
        <p className="text-[13.5px] leading-snug text-white">{site.sekolah}</p>
        <p className="text-[13.5px] leading-snug text-white">Tahun ajaran {site.tahunAjaran}</p>
      </div>
    </aside>
  )
}
