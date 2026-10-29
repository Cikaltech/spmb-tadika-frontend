import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer, Header } from '@/components/layout/Chrome'
import { Icon } from '@/components/ui/Icon'
import { Field, Input } from '@/components/ui/Field'
import { site } from '@/content/site'

export const metadata: Metadata = {
  title: 'Buat akun pendaftaran',
  description: `Buat akun orang tua untuk SPMB ${site.sekolah} tahun ajaran ${site.tahunAjaran}.`,
}

export default function Daftar() {
  return (
    <>
      <Header lebar="form" />

      <main id="konten" className="mx-auto max-w-form px-5 py-10 md:py-14">
        <p className="kicker text-gold-700">Langkah pertama</p>
        <h1 className="mt-2 font-display text-[28px] font-extrabold leading-[1.15] text-ink md:text-[44px]">
          Buat akun orang tua
        </h1>
        <p className="mt-3 text-[19px] leading-[1.6] text-ink">
          Satu akun untuk satu keluarga. Isian bisa dilanjutkan nanti.
        </p>

        <form className="card mt-8 p-6 md:p-8">
          <div className="space-y-6">
            <Field id="nama" label="Nama orang tua" wajib hint="Tulis nama sesuai kartu keluarga.">
              <Input
                id="nama"
                name="nama"
                autoComplete="name"
                placeholder="Contoh: Siti Aminah"
                required
              />
            </Field>

            <Field id="email" label="Email" wajib hint="Kami kirim kode pendaftaran ke email ini.">
              <Input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                inputMode="email"
                placeholder="nama@email.com"
                required
              />
            </Field>

            <Field id="wa" label="Nomor WhatsApp" wajib hint="Admin menghubungi Anda lewat nomor ini.">
              <Input
                id="wa"
                type="tel"
                name="wa"
                autoComplete="tel"
                inputMode="numeric"
                placeholder="0812 3456 7890"
                required
              />
            </Field>

            <Field
              id="sandi"
              label="Kata sandi"
              wajib
              galat="Kata sandi belum cukup panjang. Tambah 3 karakter lagi."
            >
              <Input
                id="sandi"
                type="password"
                name="sandi"
                autoComplete="new-password"
                placeholder="Minimal 8 karakter"
                galat
                required
              />
            </Field>

            <Field id="ulangi" label="Ulangi kata sandi" wajib hint="Tulis ulang kata sandi yang sama.">
              <Input
                id="ulangi"
                type="password"
                name="ulangi"
                autoComplete="new-password"
                placeholder="Minimal 8 karakter"
                required
              />
            </Field>
          </div>

          <button type="submit" className="btn-gold mt-8 w-full">
            <Icon name="arrow-right" className="h-5 w-5" />
            Buat akun
          </button>

          <p className="mt-4 text-[14.5px] leading-[1.5] text-ink-soft">
            Dengan membuat akun, Anda setuju pada{' '}
            <Link
              href="/privasi"
              className="font-bold text-teal-700 underline decoration-2 underline-offset-4"
            >
              kebijakan privasi
            </Link>
            .
          </p>
        </form>

        <div className="mt-6 rounded-card bg-teal-50 p-5">
          <p className="text-[17px] font-bold text-ink">Sudah punya akun?</p>
          <p className="mt-1 text-[17px] text-ink">
            <Link
              href="/masuk"
              className="font-bold text-teal-700 underline decoration-2 underline-offset-4"
            >
              Masuk ke akun Anda
            </Link>{' '}
            untuk melanjutkan pendaftaran.
          </p>
          <a
            href={`https://wa.me/${site.whatsapp.number}`}
            target="_blank"
            rel="noopener"
            className="btn-quiet mt-2"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            Tanya admin lewat WhatsApp
          </a>
        </div>
      </main>

      <Footer />
    </>
  )
}
