import type { Metadata } from 'next'
import { Footer, Header } from '@/components/layout/Chrome'
import { BantuanWhatsApp } from '@/components/publik/BantuanWhatsApp'
import { Icon } from '@/components/ui/Icon'
import { site } from '@/content/site'

export const metadata: Metadata = {
  title: 'Kebijakan privasi',
  description: `Data apa yang disimpan portal SPMB ${site.sekolah} dan siapa yang bisa melihatnya.`,
}

const disimpan = [
  'Nama orang tua, email, dan nomor WhatsApp.',
  'Data ananda yang Anda isi pada formulir pendaftaran.',
  'Bukti transfer dan berkas yang Anda unggah.',
  'Catatan komunikasi dengan panitia SPMB.',
]

const dipakai = [
  'Memproses pendaftaran ananda sampai selesai.',
  'Menghubungi Anda soal jadwal, berkas, dan keputusan.',
  'Menyusun laporan internal sekolah.',
]

const kewenangan = [
  'Panitia SPMB dan kepala sekolah.',
  'Petugas yang membantu bila Anda meminta bantuan.',
]

export default function Privasi() {
  return (
    <>
      <Header lebar="form" />

      <main id="konten" className="mx-auto max-w-form px-5 py-10 md:py-14">
        <p className="kicker text-gold-700">Legal</p>
        <h1 className="mt-2 font-display text-[28px] font-extrabold leading-[1.15] text-ink md:text-[44px]">
          Kebijakan privasi
        </h1>
        <p className="mt-3 text-[19px] leading-[1.6] text-ink">
          Halaman ini menjelaskan data yang kami simpan saat Anda mendaftar.
        </p>

        <div className="mt-10 space-y-10">
          <section aria-labelledby="simpan-judul">
            <h2
              id="simpan-judul"
              className="font-display text-[23px] font-extrabold leading-[1.2] text-ink"
            >
              Data yang kami simpan
            </h2>
            <ul className="mt-4 space-y-3">
              {disimpan.map((baris) => (
                <li key={baris} className="flex gap-3">
                  <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-teal-700" />
                  <span className="text-[17px] text-ink">{baris}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="pakai-judul">
            <h2
              id="pakai-judul"
              className="font-display text-[23px] font-extrabold leading-[1.2] text-ink"
            >
              Untuk apa data dipakai
            </h2>
            <ul className="mt-4 space-y-3">
              {dipakai.map((baris) => (
                <li key={baris} className="flex gap-3">
                  <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-teal-700" />
                  <span className="text-[17px] text-ink">{baris}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="lihat-judul">
            <h2
              id="lihat-judul"
              className="font-display text-[23px] font-extrabold leading-[1.2] text-ink"
            >
              Siapa yang bisa melihat
            </h2>
            <ul className="mt-4 space-y-3">
              {kewenangan.map((baris) => (
                <li key={baris} className="flex gap-3">
                  <Icon name="shield" className="mt-1 h-5 w-5 shrink-0 text-teal-700" />
                  <span className="text-[17px] text-ink">{baris}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[17px] text-ink">
              Data Anda tidak dijual dan tidak dibagikan ke pihak lain tanpa izin.
            </p>
          </section>

          <section aria-labelledby="lama-judul">
            <h2
              id="lama-judul"
              className="font-display text-[23px] font-extrabold leading-[1.2] text-ink"
            >
              Berapa lama data disimpan
            </h2>
            <p className="mt-3 text-[17px] text-ink">
              Data disimpan selama proses pendaftaran berjalan. Setelah itu data diarsipkan sesuai
              aturan {site.yayasan}.
            </p>
          </section>

          <section aria-labelledby="hak-judul">
            <h2
              id="hak-judul"
              className="font-display text-[23px] font-extrabold leading-[1.2] text-ink"
            >
              Hak Anda
            </h2>
            <p className="mt-3 text-[17px] text-ink">
              Anda boleh meminta salinan, perbaikan, atau penghapusan data. Hubungi admin lewat
              WhatsApp {site.whatsapp.label}.
            </p>
          </section>

          <p className="text-[14.5px] leading-[1.5] text-ink-soft">
            Terakhir diperbarui: Oktober 2026.
          </p>
        </div>
      </main>

      <BantuanWhatsApp />
      <Footer />
    </>
  )
}
