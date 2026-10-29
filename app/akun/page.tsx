import type { Metadata } from 'next'
import { site, rupiah, tahap, bagianFormulir } from '@/content/site'
import { Icon } from '@/components/ui/Icon'
import { Stepper } from '@/components/ui/Stepper'
import { EmptyPendaftaran } from '@/components/akun/EmptyPendaftaran'
import { StatusPendaftaran } from '@/components/akun/StatusPendaftaran'
import { BannerBantuan } from '@/components/akun/BannerBantuan'
import { pendaftaran } from '@/components/akun/data'

export const metadata: Metadata = {
  title: 'Pendaftaran ananda',
  description: 'Status pendaftaran ananda, biaya, dan formulir SPMB Tadika Cikal Mulia.',
}

const sisaKuota = site.biaya.kuotaDiskon - site.biaya.kuotaTerpakai

export default function AkunPage() {
  const adaPendaftaran: boolean = true

  return (
    <div className="mx-auto max-w-[960px] px-5 py-10 md:px-10 md:py-14">
      <p className="kicker text-teal-700">Akun orang tua</p>
      <h1 className="mt-2 text-[28px] font-extrabold leading-[1.15] md:text-[44px]">
        Pendaftaran ananda
      </h1>
      <p className="mt-3 max-w-[56ch] text-[17px] text-ink">
        Halaman ini menunjukkan sampai mana pendaftaran ananda berjalan.
      </p>

      <div className="mt-8">
        {adaPendaftaran ? <StatusPendaftaran /> : <EmptyPendaftaran />}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <section aria-labelledby="judul-biaya" className="rounded-card border border-cream-200 bg-cream-100 p-6">
          <h2 id="judul-biaya" className="kicker text-gold-700">
            Biaya pendaftaran
          </h2>
          <p className="mt-2 font-display text-[34px] font-extrabold leading-none text-ink">
            {rupiah(site.biaya.pendaftaran)}
          </p>
          <p className="mt-1 text-[14.5px] text-ink-soft">Dibayar satu kali saat mendaftar.</p>

          <dl className="mt-5 space-y-3 border-t border-cream-200 pt-4 text-[16px]">
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-ink">Uang pengembangan</dt>
              <dd className="font-display text-[19px] font-bold text-ink">
                {rupiah(site.biaya.pengembanganDiskon)}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-ink">Harga normal</dt>
              <dd className="text-[16px] text-ink-soft line-through">
                {rupiah(site.biaya.pengembanganNormal)}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-ink">Berita transfer</dt>
              <dd className="font-display text-[16px] font-bold text-ink">{pendaftaran.kode}</dd>
            </div>
          </dl>

          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-sun-100 px-3 py-1 text-[14.5px] font-bold text-ink">
            <Icon name="check" className="h-4 w-4" />
            Diskon {site.biaya.diskonPersen}%
          </p>
        </section>

        <section aria-labelledby="judul-kuota" className="card p-6">
          <h2 id="judul-kuota" className="kicker text-teal-700">
            Kuota diskon
          </h2>
          <p className="mt-2 text-[14.5px] font-bold text-ink">Sisa kuota diskon</p>
          <p className="mt-1 font-display text-[23px] font-extrabold text-ink">
            {sisaKuota} dari {site.biaya.kuotaDiskon}
          </p>
          <div
            className="mt-3 h-2 w-full overflow-hidden rounded-full bg-cream-200"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={site.biaya.kuotaDiskon}
            aria-valuenow={sisaKuota}
            aria-label="Sisa kuota diskon uang pengembangan"
          >
            <div
              className="h-full rounded-full bg-teal-700"
              style={{ width: `${(sisaKuota / site.biaya.kuotaDiskon) * 100}%` }}
            />
          </div>
          <p className="mt-2 text-[13.5px] text-ink-soft">
            Diskon berlaku selama kuota tersisa.
          </p>
        </section>
      </div>

      <section aria-labelledby="judul-tahap" className="card mt-6 p-6 md:p-8">
        <h2 id="judul-tahap" className="text-[23px] font-extrabold">
          Tahap pendaftaran
        </h2>
        <p className="mt-1 text-[14.5px] text-ink-soft">Tujuh tahap, berurutan dari atas.</p>
        <ol className="mt-4 space-y-2">
          {tahap.map((t, i) => {
            const sedang = i === pendaftaran.tahapAktif
            return (
              <li
                key={t.id}
                aria-current={sedang ? 'step' : undefined}
                className={`flex items-start gap-3 rounded-field border-[1.5px] px-3 py-2 ${
                  sedang ? 'border-gold-600 bg-gold-100' : 'border-cream-200 bg-white'
                }`}
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[13.5px] font-extrabold ${
                    sedang ? `${t.warna} text-white` : 'bg-cream-100 text-ink-soft'
                  }`}
                  aria-hidden="true"
                >
                  {t.nomor}
                </span>
                <span className="min-w-0">
                  <span
                    className={`block text-[16px] font-bold ${sedang ? 'text-gold-700' : 'text-ink'}`}
                  >
                    {t.nama}
                    {sedang && <span className="ml-2 text-[13.5px] font-bold">Sedang di sini</span>}
                  </span>
                  <span
                    className={`block text-[14.5px] ${sedang ? 'text-gold-700' : 'text-ink-soft'}`}
                  >
                    {t.ringkas}
                  </span>
                </span>
              </li>
            )
          })}
        </ol>
      </section>

      <section aria-labelledby="judul-formulir" className="card mt-6 p-6 md:p-8">
        <h2 id="judul-formulir" className="text-[23px] font-extrabold">
          Formulir 12 bagian
        </h2>
        <p className="mt-1 text-[14.5px] text-ink-soft">
          Formulir terbuka setelah bukti transfer disetujui admin.
        </p>
        <div className="mt-5">
          <Stepper bagian={bagianFormulir} aktif={0} selesai={[]} />
        </div>
      </section>

      <div className="mt-10">
        <BannerBantuan kode={pendaftaran.kode} />
      </div>
    </div>
  )
}
