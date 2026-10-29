'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon, type IconName } from '@/components/ui/Icon'
import { site } from '@/content/site'

/** Sidebar panel admin: teal-800 240px, teks putih penuh. design.md bab 11. */
type Menu = { label: string; icon: IconName; href?: string }

const menu: Menu[] = [
  { label: 'Verifikasi', icon: 'check', href: '/admin' },
  { label: 'Pendaftar', icon: 'file' },
  { label: 'Wawancara', icon: 'clock', href: '/admin/wawancara' },
  { label: 'Pengaturan', icon: 'shield' },
]

export function Sidebar() {
  const pathname = usePathname() ?? ''
  const jalur = pathname.replace(/\/+$/, '')

  const aktif = (href: string) =>
    href === '/admin'
      ? jalur === '/admin' || jalur.startsWith('/admin/verifikasi')
      : jalur === href || jalur.startsWith(`${href}/`)

  return (
    <aside className="flex flex-col bg-teal-800 text-white md:sticky md:top-0 md:h-screen md:w-60 md:shrink-0">
      <div className="border-b border-teal-700 px-4 py-4">
        <p className="font-display text-[19px] font-bold leading-tight">SPMB Tadika</p>
        <p className="text-[13.5px] leading-tight">Panel admin</p>
      </div>

      <nav aria-label="Menu admin" className="px-2 py-3">
        <ul className="flex flex-wrap gap-1 md:flex-col">
          {menu.map((m) => {
            const dipilih = m.href ? aktif(m.href) : false
            return (
              <li key={m.label} className="min-w-0">
                {m.href ? (
                  <Link
                    href={m.href}
                    aria-current={dipilih ? 'page' : undefined}
                    className={`flex min-h-[40px] items-center gap-3 rounded-field border-l-4 px-3 text-[14.5px] font-bold transition-colors duration-150 ${
                      dipilih
                        ? 'border-gold-300 bg-teal-900 text-white'
                        : 'border-transparent text-white hover:bg-teal-700'
                    }`}
                  >
                    <Icon name={m.icon} className="h-5 w-5 shrink-0" />
                    <span>{m.label}</span>
                    {dipilih && <Icon name="arrow-right" className="ml-auto h-4 w-4 shrink-0" />}
                  </Link>
                ) : (
                  <span className="flex min-h-[40px] items-center gap-3 rounded-field border-l-4 border-transparent px-3 text-[14.5px] font-bold text-white">
                    <Icon name={m.icon} className="h-5 w-5 shrink-0" />
                    <span>{m.label}</span>
                    <span className="ml-auto rounded-full bg-teal-700 px-2 py-0.5 text-[12.5px] font-bold text-white">
                      Segera
                    </span>
                  </span>
                )}
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="mt-auto border-t border-teal-700 px-4 py-4">
        <p className="text-[13.5px]">{site.sekolah}</p>
        <p className="text-[13.5px]">Tahun ajaran {site.tahunAjaran}</p>
      </div>
    </aside>
  )
}
