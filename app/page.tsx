import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer, Header } from '@/components/layout/Chrome'
import { BantuanWhatsApp } from '@/components/publik/BantuanWhatsApp'
import { Icon } from '@/components/ui/Icon'
import { rupiah, site, tahap } from '@/content/site'

export const metadata: Metadata = {
  title: `Pendaftaran ${site.tahunAjaran}`,
  description: `Pendaftaran ${site.jenjang.join(' dan ')} ${site.sekolah} tahun ajaran ${site.tahunAjaran}. Daftar dari HP dalam enam langkah.`,
}

const sisaKuota = site.biaya.kuotaDiskon - site.biaya.kuotaTerpakai
const persenKuota = Math.round((sisaKuota / site.biaya.kuotaDiskon) * 100)

export default function Beranda() {
  return (
    <>
      <Header />

      <main id="konten">
        {/* Hero asimetris: teks di kiri, panel fakta di kanan. */}
        <section aria-labelledby="judul-beranda" className="mx-auto max-w-container px-5 pb-12 pt-10 md:px-10 md:pb-16 md:pt-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
            <div className="rise">
              <p className="kicker text-gold-700">SPMB tahun ajaran {site.tahunAjaran}</p>
              <h1
                id="judul-beranda"
                className="mt-3 font-display text-[28px] font-extrabold leading-[1.15] text-ink md:text-[44px]"
              >
                Pendaftaran {site.jenjang.join(' dan ')} dibuka
              </h1>
              <p className="mt-4 max-w-[46ch] text-[19px] leading-[1.6] text-ink">
                Daftar dari HP. Unggah bukti transfer, isi formulir, lalu pilih jadwal wawancara.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/daftar" className="btn-gold">
                  <Icon name="arrow-right" className="h-5 w-5" />
                  Daftar
                </Link>
                <Link href="/masuk" className="btn-secondary">
                  Masuk
                </Link>
              </div>

              <p className="mt-4 text-[14.5px] leading-[1.5] text-ink-soft">
                Biaya pendaftaran {rupiah(site.biaya.pendaftaran)}. Akun dipakai untuk memantau status.
              </p>
            </div>

            <aside
              aria-labelledby="ringkas-judul"
              className="rise rounded-panel bg-teal-900 p-6 md:p-8"
            >
              <h2
                id="ringkas-judul"
                className="font-display text-[23px] font-extrabold leading-[1.2] text-white"
              >
                Ringkas pendaftaran
              </h2>
              <dl className="mt-5 space-y-5">
                <div>
                  <dt className="text-[14.5px] font-bold text-white">Jenjang</dt>
                  <dd className="mt-1 text-[19px] font-bold leading-[1.4] text-white">
                    {site.jenjang.join(' dan ')}
                  </dd>
                </div>
                <div>
                  <dt className="text-[14.5px] font-bold text-white">Tahun ajaran</dt>
                  <dd className="mt-1 text-[19px] font-bold leading-[1.4] text-white">
                    {site.tahunAjaran}, semester {site.semester}
                  </dd>
                </div>
                <div>
                  <dt className="text-[14.5px] font-bold text-white">Biaya pendaftaran</dt>
                  <dd className="mt-1 font-display text-[23px] font-extrabold leading-[1.2] text-white">
                    {rupiah(site.biaya.pendaftaran)}
                  </dd>
                </div>
              </dl>
              <p className="mt-6 text-[14.5px] leading-[1.5] text-white">
                Sekolah: {site.sekolah}. Alamat: {site.alamat}.
              </p>
            </aside>
          </div>
        </section>

        {/* Enam langkah, satu keluarga warna per tahap. design.md 2.3. */}
        <section aria-labelledby="langkah-judul" className="border-y border-cream-200 bg-white">
          <div className="mx-auto max-w-container px-5 py-12 md:px-10 md:py-16">
            <h2
              id="langkah-judul"
              className="font-display text-[23px] font-extrabold leading-[1.2] text-ink md:text-[34px]"
            >
              Enam langkah pendaftaran
            </h2>
            <p className="mt-2 max-w-[60ch] text-[17px] text-ink-soft">
              Urutannya tetap. Anda bisa berhenti dan melanjutkan kapan saja.
            </p>

            <ol className="mt-8 divide-y divide-cream-200 border-y border-cream-200">
              {tahap.map((t) => (
                <li key={t.id} className="flex gap-4 py-5">
                  <span
                    aria-hidden="true"
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-[19px] font-extrabold text-white ${t.warna}`}
                  >
                    {t.nomor}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-[19px] font-bold leading-[1.25] text-ink">
                      <span className="sr-only">Langkah {t.nomor}: </span>
                      {t.nama}
                    </h3>
                    <p className="mt-1 text-[17px] text-ink-soft">{t.ringkas}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Blok biaya: satu panel, nominal besar, badge diskon, sisa kuota. */}
        <section aria-labelledby="biaya-judul" className="mx-auto max-w-container px-5 py-12 md:px-10 md:py-16">
          <div className="max-w-form">
            <p className="kicker text-gold-700">Biaya</p>
            <h2
              id="biaya-judul"
              className="mt-2 font-display text-[23px] font-extrabold leading-[1.2] text-ink md:text-[34px]"
            >
              Biaya pendaftaran dan uang pengembangan
            </h2>
            <p className="mt-2 text-[17px] text-ink">
              Bayar biaya pendaftaran dulu. Uang pengembangan dibayar setelah bukti diverifikasi.
            </p>

            <div className="mt-6 rounded-card bg-cream-100 p-6 md:p-8">
              <dl className="space-y-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <dt className="text-[17px] font-bold text-ink">Biaya pendaftaran</dt>
                  <dd className="font-display text-[23px] font-extrabold text-ink">
                    {rupiah(site.biaya.pendaftaran)}
                  </dd>
                </div>

                <div className="border-t border-cream-200 pt-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <dt className="text-[17px] font-bold text-ink">Uang pengembangan</dt>
                    <dd className="text-right">
                      <span className="block text-[14.5px] font-bold text-ink-soft line-through">
                        {rupiah(site.biaya.pengembanganNormal)}
                      </span>
                      <span className="block font-display text-[34px] font-extrabold leading-[1.15] text-ink">
                        {rupiah(site.biaya.pengembanganDiskon)}
                      </span>
                    </dd>
                  </div>
                  <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-sun-500 px-3 py-1.5 text-[14.5px] font-extrabold text-ink">
                    <Icon name="check" className="h-4 w-4" />
                    Diskon {site.biaya.diskonPersen} persen
                  </p>
                </div>
              </dl>

              <div className="mt-6 border-t border-cream-200 pt-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-[14.5px] font-bold text-ink">Sisa kuota diskon</p>
                  <p className="font-display text-[23px] font-extrabold text-ink">
                    {sisaKuota} dari {site.biaya.kuotaDiskon}
                  </p>
                </div>
                <div
                  role="progressbar"
                  aria-label={`Sisa kuota diskon ${sisaKuota} dari ${site.biaya.kuotaDiskon}`}
                  aria-valuemin={0}
                  aria-valuemax={site.biaya.kuotaDiskon}
                  aria-valuenow={sisaKuota}
                  className="mt-3 h-2 w-full rounded-full bg-cream-200"
                >
                  <div className="h-2 rounded-full bg-teal-700" style={{ width: `${persenKuota}%` }} />
                </div>
                <p className="mt-2 text-[13.5px] leading-[1.5] text-ink-soft">
                  Harga normal berlaku setelah kuota diskon habis.
                </p>
              </div>
            </div>

            <p className="mt-4 text-[14.5px] leading-[1.5] text-ink-soft">
              Transfer hanya ke rekening {site.yayasan}. Tanya admin bila ragu.
            </p>
          </div>
        </section>

        <BantuanWhatsApp />
      </main>

      <Footer />
    </>
  )
}
