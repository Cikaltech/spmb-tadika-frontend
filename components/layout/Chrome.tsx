import Link from 'next/link'
import { site } from '@/content/site'

/** Header portal: logo, jenjang, dan tautan bantuan. Bukan navbar pemasaran. */
export function Header({ lebar = 'container' }: { lebar?: 'container' | 'form' }) {
  return (
    <header className="border-b border-cream-200 bg-white">
      <div
        className={`mx-auto flex items-center justify-between gap-4 px-5 py-4 md:px-10 ${
          lebar === 'form' ? 'max-w-form' : 'max-w-container'
        }`}
      >
        <Link href="/" className="flex items-center gap-3" aria-label="Beranda SPMB Tadika Cikal Mulia">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.logoSrc}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg object-contain"
          />
          <span className="leading-tight">
            <span className="block font-display text-[19px] font-bold text-ink">SPMB Tadika</span>
            <span className="block text-[13.5px] text-ink-soft">{site.sekolah}</span>
          </span>
        </Link>

        <nav aria-label="Bantuan">
          <a
            href={`https://wa.me/${site.whatsapp.number}`}
            className="btn-quiet"
            target="_blank"
            rel="noopener"
          >
            Hubungi admin
          </a>
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-teal-800 bg-teal-900 text-white">
      <div className="mx-auto max-w-container px-5 py-10 md:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="max-w-sm">
            <p className="font-display text-[19px] font-bold">{site.sekolah}</p>
            <p className="mt-1 text-[14.5px] text-white/[.87]">{site.tagline}</p>
            <p className="mt-3 text-[14.5px] text-white/[.87]">{site.alamat}</p>
          </div>

          <div>
            <p className="text-[14.5px] font-extrabold text-white">Bantuan</p>
            <ul className="mt-3 space-y-2 text-[16px]">
              <li>
                <a
                  className="text-white/[.87] underline decoration-2 underline-offset-4"
                  href={`https://wa.me/${site.whatsapp.number}`}
                  target="_blank"
                  rel="noopener"
                >
                  WhatsApp admin {site.whatsapp.label}
                </a>
              </li>
              <li>
                <a className="text-white/[.87] underline decoration-2 underline-offset-4" href="/masuk">
                  Masuk ke portal
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[14.5px] font-extrabold text-white">Legal</p>
            <ul className="mt-3 space-y-2 text-[16px]">
              <li>
                <Link className="text-white/[.87] underline decoration-2 underline-offset-4" href="/privasi">
                  Kebijakan privasi
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-[13.5px] text-white/85">
          {site.yayasan}. Tahun ajaran {site.tahunAjaran}, semester {site.semester}.
        </p>
      </div>
    </footer>
  )
}
