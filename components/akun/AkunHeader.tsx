import Link from 'next/link'
import { site } from '@/content/site'
import { KodePendaftaran } from './KodePendaftaran'
import { pendaftaran } from './data'

/** Navbar area akun: lengket, kode pendaftaran di desktop, tombol keluar. design.md bab 6. */
export function AkunHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-cream-200 bg-white">
      <div className="mx-auto flex min-h-[64px] max-w-container items-center justify-between gap-4 px-5 py-3 md:min-h-[72px] md:px-10">
        <Link
          href="/akun"
          className="flex items-center gap-3"
          aria-label={`Akun orang tua SPMB ${site.sekolah}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.logoSrc}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg object-contain"
          />
          <span className="leading-tight">
            <span className="block font-display text-[19px] font-bold text-ink">Portal SPMB</span>
            <span className="block text-[13.5px] text-ink-soft">{site.sekolah}</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <span className="hidden md:inline-flex">
            <KodePendaftaran kode={pendaftaran.kode} salin={false} />
          </span>
          <Link
            href="/masuk"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-teal-700 px-5 text-[16px] font-bold text-teal-700 transition-colors duration-200 ease-warm hover:bg-teal-50"
          >
            Keluar
          </Link>
        </div>
      </div>
    </header>
  )
}
