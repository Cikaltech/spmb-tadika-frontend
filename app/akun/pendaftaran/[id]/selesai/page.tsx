import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/content/site'
import { Icon } from '@/components/ui/Icon'
import { BannerBantuan } from '@/components/akun/BannerBantuan'
import { pendaftaran } from '@/components/akun/data'

export const metadata: Metadata = {
  title: 'Kirim formulir',
  description: 'Ringkasan dan pengiriman formulir pendaftaran SPMB Tadika Cikal Mulia.',
}

export function generateStaticParams() {
  return [{ id: pendaftaran.kode }]
}

export default function SelesaiPage() {
  return (
    <div className="mx-auto max-w-form px-5 py-10 md:px-10 md:py-14">
      <Link
        href={`/akun/pendaftaran/${pendaftaran.kode}/formulir`}
        className="inline-flex min-h-[44px] items-center text-[16px] font-bold text-teal-700 underline decoration-2 underline-offset-4 hover:text-teal-800"
      >
        Kembali ke formulir
      </Link>

      <h1 className="mt-4 text-[28px] font-extrabold leading-[1.15] md:text-[44px]">
        Kirim formulir
      </h1>
      <p className="mt-3 text-[17px] text-ink">
        Periksa ringkasan di bawah sebelum mengirim formulir ananda.
      </p>

      <section aria-labelledby="judul-ringkasan" className="card mt-8 p-6 md:p-8">
        <h2 id="judul-ringkasan" className="text-[23px] font-extrabold">
          Ringkasan
        </h2>
        <dl className="mt-4 border-y border-cream-200 text-[17px]">
          <div className="flex items-baseline justify-between gap-4 border-b border-cream-200 py-3">
            <dt className="text-ink-soft">Nama ananda</dt>
            <dd className="text-right font-bold text-ink">{pendaftaran.anak}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4 border-b border-cream-200 py-3">
            <dt className="text-ink-soft">Jenjang</dt>
            <dd className="text-right font-bold text-ink">{pendaftaran.jenjang}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4 border-b border-cream-200 py-3">
            <dt className="text-ink-soft">Kode pendaftaran</dt>
            <dd className="text-right font-display font-bold text-ink">{pendaftaran.kode}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4 py-3">
            <dt className="text-ink-soft">Bagian terisi</dt>
            <dd className="text-right font-bold text-ink">
              {pendaftaran.bagianTerisi} dari 12
            </dd>
          </div>
        </dl>
        <p className="mt-4 text-[14.5px] text-ink-soft">
          Tahun ajaran {site.tahunAjaran}. Sisa satu bagian, yaitu pengiriman di halaman ini.
        </p>
      </section>

      <section
        aria-labelledby="judul-peringatan"
        className="mt-6 rounded-card border-[1.5px] border-coral-600 bg-coral-100 p-6"
      >
        <div className="flex items-start gap-3">
          <Icon name="alert" className="mt-0.5 h-6 w-6 shrink-0 text-coral-700" />
          <div>
            <h2 id="judul-peringatan" className="text-[19px] font-extrabold text-coral-700">
              Formulir tidak bisa diubah setelah dikirim
            </h2>
            <p className="mt-1 text-[16px] text-coral-700">
              Periksa semua isian. Hubungi admin bila ada yang perlu diperbaiki.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-6">
        <label
          htmlFor="persetujuan"
          className="flex min-h-[44px] cursor-pointer items-start gap-3 rounded-field border-[1.5px] border-cream-200 bg-white p-4 text-[17px] font-bold text-ink"
        >
          <input
            id="persetujuan"
            name="persetujuan"
            type="checkbox"
            className="mt-1 h-6 w-6 shrink-0 accent-teal-700"
            aria-describedby="alasan-persetujuan"
          />
          <span>Semua isian benar dan siap dikirim</span>
        </label>
        <p id="alasan-persetujuan" className="mt-2 text-[14.5px] text-ink-soft">
          Centang pernyataan di atas sebelum menekan tombol kirim.
        </p>
      </div>

      <button type="button" className="btn-gold mt-6 w-full sm:w-auto">
        <Icon name="check" className="h-5 w-5" />
        Kirim formulir
      </button>

      <div className="mt-10">
        <BannerBantuan kode={pendaftaran.kode} />
      </div>
    </div>
  )
}
