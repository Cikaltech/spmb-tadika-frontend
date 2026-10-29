import type { Metadata } from 'next'
import Link from 'next/link'
import { bagianFormulir } from '@/content/site'
import { Field, Input, Textarea } from '@/components/ui/Field'
import { Icon } from '@/components/ui/Icon'
import { Stepper } from '@/components/ui/Stepper'
import { BannerBantuan } from '@/components/akun/BannerBantuan'
import { pendaftaran } from '@/components/akun/data'

export const metadata: Metadata = {
  title: 'Formulir pendaftaran',
  description: 'Formulir dua belas bagian data ananda SPMB Tadika Cikal Mulia.',
}

export function generateStaticParams() {
  return [{ id: pendaftaran.kode }]
}

const AKTIF = 2

export default function FormulirPage() {
  return (
    <div className="mx-auto max-w-form px-5 pb-14 md:px-10">
      <div className="pt-10 md:pt-14">
        <Link
          href="/akun"
          className="inline-flex min-h-[44px] items-center text-[16px] font-bold text-teal-700 underline decoration-2 underline-offset-4 hover:text-teal-800"
        >
          Kembali ke akun
        </Link>
        <h1 className="mt-4 text-[28px] font-extrabold leading-[1.15] md:text-[44px]">
          Formulir pendaftaran
        </h1>
        <p className="mt-3 text-[17px] text-ink">
          Isi dua belas bagian. Jawaban tersimpan otomatis saat Anda pindah bagian.
        </p>
      </div>

      <div className="card mt-6 p-5 md:p-6">
        <Stepper bagian={bagianFormulir} aktif={AKTIF} selesai={[0, 1]} />
      </div>

      <section aria-labelledby="judul-bagian" className="card mt-6 p-6 md:p-8">
        <p className="kicker text-teal-700">
          Bagian {AKTIF + 1} dari {bagianFormulir.length}
        </p>
        <h2 id="judul-bagian" className="mt-1 text-[23px] font-extrabold">
          {bagianFormulir[AKTIF]}
        </h2>
        <p className="mt-1 text-[14.5px] text-ink-soft">
          Data ini dipakai guru untuk memantau kondisi ananda di sekolah.
        </p>

        <div className="mt-6 space-y-6">
          <Field
            id="golongan-darah"
            label="Golongan darah"
            hint="Contoh: O. Tulis belum tahu bila belum diperiksa."
          >
            <Input id="golongan-darah" name="golongan-darah" />
          </Field>

          <Field
            id="alergi"
            label="Riwayat alergi"
            hint="Sebutkan makanan atau obat yang memicu alergi."
          >
            <Textarea id="alergi" name="alergi" rows={3} />
          </Field>

          <Field id="penyakit" label="Riwayat penyakit" hint="Tulis tidak ada bila tidak ada.">
            <Textarea id="penyakit" name="penyakit" rows={3} />
          </Field>

          <Field id="berat" label="Berat badan" hint="Dalam kilogram. Contoh: 18.">
            <Input id="berat" name="berat" inputMode="numeric" />
          </Field>

          <Field id="tinggi" label="Tinggi badan" hint="Dalam sentimeter. Contoh: 112.">
            <Input id="tinggi" name="tinggi" inputMode="numeric" />
          </Field>

          <Field
            id="catatan-kesehatan"
            label="Catatan kesehatan lain"
            hint="Tulis hal lain yang perlu guru ketahui."
          >
            <Textarea id="catatan-kesehatan" name="catatan-kesehatan" rows={3} />
          </Field>
        </div>
      </section>

      <div className="mt-6 border-t border-cream-200 pt-6">
        <p className="text-[14.5px] text-ink-soft" aria-live="polite">
          Tersimpan otomatis 12.03
        </p>
        <div className="mt-4 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button type="button" className="btn-secondary">
            Sebelumnya
          </button>
          <button type="button" className="btn-gold">
            <Icon name="arrow-right" className="h-5 w-5" />
            Simpan dan lanjut
          </button>
        </div>
      </div>

      <div className="mt-10">
        <BannerBantuan kode={pendaftaran.kode} />
      </div>
    </div>
  )
}
