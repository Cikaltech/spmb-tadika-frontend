import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer, Header } from '@/components/layout/Chrome'
import { BantuanWhatsApp } from '@/components/publik/BantuanWhatsApp'
import { HitungMundur } from '@/components/publik/HitungMundur'
import { Icon } from '@/components/ui/Icon'
import { rupiah, site, tahap } from '@/content/site'

export const metadata: Metadata = {
  title: `Pendaftaran ${site.tahunAjaran}`,
  description: `Pendaftaran ${site.jenjang.join(' dan ')} ${site.sekolah} tahun ajaran ${site.tahunAjaran}. Daftar dari HP dalam tujuh langkah.`,
}

const sisaKuota = site.biaya.kuotaDiskon - site.biaya.kuotaTerpakai
const persenKuota = Math.round((sisaKuota / site.biaya.kuotaDiskon) * 100)
const tanggalTutup = new Intl.DateTimeFormat('id-ID', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Asia/Jakarta',
}).format(new Date(site.pendaftaranTutup))

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
                Pendaftaran {site.jenjang.join(' dan ')} <span className="text-teal-700">dibuka</span>
              </h1>
              <p className="mt-4 max-w-[46ch] text-[19px] leading-[1.6] text-ink">
                Daftar dari HP. Unggah bukti transfer, isi formulir, lalu pilih jadwal wawancara.
              </p>

              {/* Blok ajakan: menegaskan bahwa langkah pertama adalah buat akun. */}
              <div className="mt-7 rounded-panel border-[1.5px] border-gold-300 bg-gold-100 p-5 md:p-6">
                <p className="flex items-center gap-2 text-[12.5px] font-extrabold uppercase tracking-[0.08em] text-gold-700">
                  <span
                    className="grid h-6 w-6 place-items-center rounded-full bg-gold-600 font-display text-[13.5px] text-white"
                    aria-hidden="true"
                  >
                    1
                  </span>
                  Langkah pertama
                </p>
                <p className="mt-2 font-display text-[19px] font-extrabold leading-[1.25] text-ink md:text-[23px]">
                  Buat akun dulu, baru daftarkan ananda.
                </p>
                <p className="mt-1 text-[16px] leading-[1.5] text-gold-700">
                  Satu akun untuk memantau semua tahap, dari pembayaran sampai pengumuman.
                </p>

                <Link href="/daftar" className="btn-gold mt-4 w-full">
                  <Icon name="arrow-right" className="h-5 w-5" aria-hidden="true" />
                  Buat akun sekarang
                </Link>

                <p className="mt-3 text-center text-[16px] text-ink">
                  Sudah punya akun?{' '}
                  <Link
                    href="/masuk"
                    className="font-bold text-teal-700 underline decoration-2 underline-offset-4 hover:text-teal-800"
                  >
                    Masuk di sini
                  </Link>
                </p>
              </div>

              <p className="mt-4 text-[14.5px] leading-[1.5] text-ink-soft">
                Biaya pendaftaran {rupiah(site.biaya.pendaftaran)}. Semua informasi bisa diakses di
                spmb.tadikacikalmulia.com.
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

              <dl className="mt-5 space-y-3 border-b border-teal-800 pb-5">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-[14.5px] font-bold text-white">Jenjang</dt>
                  <dd className="text-right text-[17px] font-bold text-white">
                    {site.jenjang.join(' dan ')}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-[14.5px] font-bold text-white">Tahun ajaran</dt>
                  <dd className="text-right text-[17px] font-bold text-white">
                    {site.tahunAjaran}, {site.semester}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-[14.5px] font-bold text-white">Biaya pendaftaran</dt>
                  <dd className="text-right font-display text-[19px] font-extrabold text-white">
                    {rupiah(site.biaya.pendaftaran)}
                  </dd>
                </div>
              </dl>

              {/* Kondisi kuota, blok berwarna agar terbaca sekali lihat. */}
              <div className="mt-5 rounded-card bg-gold-100 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[14.5px] font-bold text-gold-700">Sisa kuota diskon</p>
                    <p className="text-[13.5px] leading-[1.5] text-gold-700">
                      Potongan {site.biaya.diskonPersen}% uang pengembangan
                    </p>
                  </div>
                  <p className="shrink-0 font-display text-[28px] font-extrabold leading-none text-gold-700">
                    {sisaKuota}
                    <span className="text-[16px] font-bold">/{site.biaya.kuotaDiskon}</span>
                  </p>
                </div>
                <div
                  className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-white"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={site.biaya.kuotaDiskon}
                  aria-valuenow={sisaKuota}
                  aria-label={`Sisa kuota diskon ${sisaKuota} dari ${site.biaya.kuotaDiskon}`}
                >
                  <div
                    className="h-full rounded-full bg-gold-600 transition-all duration-200 ease-warm"
                    style={{ width: `${persenKuota}%` }}
                  />
                </div>
              </div>

              {/* Hitung mundur penutupan pendaftaran. */}
              <div className="mt-3 rounded-card bg-white p-4">
                <p className="text-[14.5px] font-bold text-ink">Pendaftaran ditutup dalam</p>
                <HitungMundur tutup={site.pendaftaranTutup} />
                <p className="mt-3 border-t border-cream-200 pt-3 text-[13.5px] text-ink-soft">
                  Ditutup {tanggalTutup}.
                </p>
              </div>

              <p className="mt-5 text-[14.5px] leading-[1.5] text-white">
                Sekolah: {site.sekolah}. Alamat: {site.alamat}.
              </p>
            </aside>
          </div>
        </section>

        {/* Tujuh langkah, satu keluarga warna per tahap. design.md 2.3. */}
        <section aria-labelledby="langkah-judul" className="border-y border-cream-200 bg-white">
          <div className="mx-auto max-w-container px-5 py-12 md:px-10 md:py-16">
            <h2
              id="langkah-judul"
              className="font-display text-[23px] font-extrabold leading-[1.2] text-ink md:text-[34px]"
            >
              Tujuh langkah pendaftaran
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
