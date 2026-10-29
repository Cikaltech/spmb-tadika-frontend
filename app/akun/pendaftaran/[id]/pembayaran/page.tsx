import type { Metadata } from 'next'
import Link from 'next/link'
import { site, rupiah } from '@/content/site'
import { Field, Textarea } from '@/components/ui/Field'
import { Icon } from '@/components/ui/Icon'
import { KotakUnggah } from '@/components/akun/KotakUnggah'
import { BannerBantuan } from '@/components/akun/BannerBantuan'
import { pendaftaran } from '@/components/akun/data'

export const metadata: Metadata = {
  title: 'Unggah bukti transfer',
  description: 'Instruksi transfer biaya pendaftaran dan unggah bukti transfer SPMB.',
}

export function generateStaticParams() {
  return [{ id: pendaftaran.kode }]
}

const tautanAdmin = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(
  `Halo admin SPMB, mohon kirim nomor rekening tujuan untuk pendaftaran ${pendaftaran.kode}.`,
)}`

export default function PembayaranPage() {
  return (
    <div className="mx-auto max-w-form px-5 py-10 md:px-10 md:py-14">
      <Link
        href="/akun"
        className="inline-flex min-h-[44px] items-center text-[16px] font-bold text-teal-700 underline decoration-2 underline-offset-4 hover:text-teal-800"
      >
        Kembali ke akun
      </Link>

      <h1 className="mt-4 text-[28px] font-extrabold leading-[1.15] md:text-[44px]">
        Unggah bukti transfer
      </h1>
      <p className="mt-3 text-[17px] text-ink">
        Bayar biaya pendaftaran, lalu kirim bukti transfernya di halaman ini.
      </p>

      <section aria-labelledby="judul-instruksi" className="card mt-8 p-6 md:p-8">
        <h2 id="judul-instruksi" className="text-[23px] font-extrabold">
          Instruksi transfer
        </h2>

        <dl className="mt-4 border-y border-cream-200">
          <div className="flex items-baseline justify-between gap-4 border-b border-cream-200 py-3">
            <dt className="text-[16px] text-ink-soft">Penerima</dt>
            <dd className="text-right text-[17px] font-bold text-ink">{site.yayasan}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4 border-b border-cream-200 py-3">
            <dt className="text-[16px] text-ink-soft">Nominal</dt>
            <dd className="text-right font-display text-[28px] font-extrabold text-ink">
              {rupiah(site.biaya.pendaftaran)}
            </dd>
          </div>
          <div className="flex items-baseline justify-between gap-4 py-3">
            <dt className="text-[16px] text-ink-soft">Berita transfer</dt>
            <dd className="text-right font-display text-[17px] font-bold text-ink">
              {pendaftaran.kode}
            </dd>
          </div>
        </dl>

        <p className="mt-4 text-[14.5px] text-ink-soft">
          Tulis kode pendaftaran pada berita transfer. Admin jadi lebih cepat memeriksa.
        </p>
        <p className="mt-3 text-[16px] text-ink">Nomor rekening tujuan dikirim admin lewat WhatsApp.</p>
        <a href={tautanAdmin} className="btn-quiet mt-1" target="_blank" rel="noopener">
          <Icon name="whatsapp" className="h-5 w-5" />
          Minta nomor rekening
        </a>
      </section>

      <section aria-labelledby="judul-bukti" className="card mt-6 p-6 md:p-8">
        <h2 id="judul-bukti" className="text-[23px] font-extrabold">
          Bukti transfer
        </h2>
        <p className="mt-1 text-[14.5px] text-ink-soft">
          Siapkan berkas JPG, PNG, atau PDF. Ukuran maksimal 3 MB.
        </p>

        <div className="mt-4">
          <KotakUnggah id="bukti-transfer" />
        </div>

        <div className="mt-6">
          <Field
            id="catatan"
            label="Catatan untuk admin"
            hint="Tulis nama pengirim bila berbeda dari nama orang tua."
          >
            <Textarea
              id="catatan"
              name="catatan"
              rows={3}
              placeholder="Contoh: transfer dari rekening kakak ananda."
            />
          </Field>
        </div>

        <button type="button" className="btn-gold mt-6 w-full sm:w-auto">
          <Icon name="upload" className="h-5 w-5" />
          Kirim bukti transfer
        </button>
      </section>

      <section
        aria-labelledby="judul-contoh-galat"
        className="mt-6 rounded-card border-[1.5px] border-dashed border-cream-200 bg-white p-6"
      >
        <h2 id="judul-contoh-galat" className="kicker text-coral-700">
          Contoh keadaan galat
        </h2>
        <p className="mt-2 text-[14.5px] text-ink-soft">
          Begini tampilan kotak unggah bila berkas tidak memenuhi syarat.
        </p>
        <div className="mt-4">
          <KotakUnggah
            id="contoh-bukti"
            galat="Berkas lebih dari 3 MB. Perkecil berkas lalu unggah lagi."
          />
        </div>
      </section>

      <div className="mt-10">
        <BannerBantuan kode={pendaftaran.kode} />
      </div>
    </div>
  )
}
