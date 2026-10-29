import Link from 'next/link'
import { site } from '@/content/site'
import { Icon } from '@/components/ui/Icon'

/** Keadaan belum ada pendaftaran. Rata kiri, bukan tengah. design.md bab 6. */
export function EmptyPendaftaran() {
  return (
    <section
      aria-labelledby="judul-kosong"
      className="rounded-card border-[1.5px] border-dashed border-cream-200 bg-white p-6 md:p-8"
    >
      <span
        className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-teal-700"
        aria-hidden="true"
      >
        <Icon name="file" className="h-6 w-6" />
      </span>
      <h2 id="judul-kosong" className="mt-4 text-[23px] font-extrabold">
        Belum ada pendaftaran
      </h2>
      <p className="mt-2 max-w-[46ch] text-[17px] text-ink">
        Mulai pendaftaran ananda untuk tahun ajaran {site.tahunAjaran} sekarang.
      </p>
      <Link href="/daftar" className="btn-gold mt-5">
        <Icon name="arrow-right" className="h-5 w-5" />
        Mulai pendaftaran
      </Link>
    </section>
  )
}
