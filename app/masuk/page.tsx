import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer, Header } from '@/components/layout/Chrome'
import { Icon } from '@/components/ui/Icon'
import { Field, Input } from '@/components/ui/Field'
import { site } from '@/content/site'

export const metadata: Metadata = {
  title: 'Masuk ke akun',
  description: `Masuk ke akun orang tua SPMB ${site.sekolah}.`,
}

export default function Masuk() {
  return (
    <>
      <Header lebar="form" />

      <main id="konten" className="mx-auto max-w-form px-5 py-10 md:py-14">
        <p className="kicker text-gold-700">Portal orang tua</p>
        <h1 className="mt-2 font-display text-[28px] font-extrabold leading-[1.15] text-ink md:text-[44px]">
          Masuk ke akun
        </h1>
        <p className="mt-3 text-[19px] leading-[1.6] text-ink">
          Pakai email dan kata sandi yang Anda buat saat mendaftar.
        </p>

        <form className="card mt-8 p-6 md:p-8">
          <div className="space-y-6">
            <Field id="email" label="Email" wajib hint="Email yang dipakai saat mendaftar.">
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

            <Field id="sandi" label="Kata sandi" wajib hint="Minimal 8 karakter.">
              <Input
                id="sandi"
                type="password"
                name="sandi"
                autoComplete="current-password"
                placeholder="Kata sandi Anda"
                required
              />
            </Field>
          </div>

          <button type="submit" className="btn-gold mt-8 w-full">
            <Icon name="arrow-right" className="h-5 w-5" />
            Masuk
          </button>
        </form>

        <div className="mt-6 rounded-card bg-teal-50 p-5">
          <p className="text-[17px] font-bold text-ink">Belum punya akun?</p>
          <p className="mt-1 text-[17px] text-ink">
            <Link
              href="/daftar"
              className="font-bold text-teal-700 underline decoration-2 underline-offset-4"
            >
              Daftar di sini
            </Link>{' '}
            untuk membuat akun baru.
          </p>
          <p className="mt-4 text-[17px] font-bold text-ink">Lupa kata sandi?</p>
          <a
            href={`https://wa.me/${site.whatsapp.number}`}
            target="_blank"
            rel="noopener"
            className="btn-quiet mt-1"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            Hubungi admin lewat WhatsApp
          </a>
        </div>
      </main>

      <Footer />
    </>
  )
}
