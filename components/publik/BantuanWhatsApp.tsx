import { Icon } from '@/components/ui/Icon'
import { site } from '@/content/site'

/** Banner bantuan. design.md bab 6: band teal-900, teks putih penuh, tombol emas. */
export function BantuanWhatsApp({ kode }: { kode?: string }) {
  const pesan = kode
    ? `Assalamualaikum, saya ingin bertanya tentang pendaftaran ${kode}.`
    : `Assalamualaikum, saya ingin bertanya tentang SPMB tahun ajaran ${site.tahunAjaran}.`
  const tautan = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(pesan)}`

  return (
    <section aria-labelledby="bantuan-judul" className="mx-auto max-w-container px-5 py-12 md:px-10 md:py-16">
      <div className="rounded-panel bg-teal-900 p-6 md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="flex items-start gap-4">
            <span
              className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-teal-800 text-gold-300"
              aria-hidden="true"
            >
              <Icon name="whatsapp" className="h-6 w-6" />
            </span>
            <div className="min-w-0">
              <h2
                id="bantuan-judul"
                className="font-display text-[19px] font-extrabold leading-[1.2] text-white md:text-[23px]"
              >
                Butuh bantuan?
              </h2>
              <p className="mt-1 max-w-[46ch] text-[16px] leading-[1.5] text-white md:text-[17px]">
                Admin sekolah siap membantu lewat WhatsApp{' '}
                <span className="whitespace-nowrap tabular-nums">{site.whatsapp.label}</span>{' '}
                <span className="whitespace-nowrap">pada jam kerja</span>{' '}
                <span className="whitespace-nowrap tabular-nums">{site.whatsapp.jamKerja}</span>.
              </p>
            </div>
          </div>

          <a href={tautan} target="_blank" rel="noopener" className="btn-gold w-full shrink-0 md:w-auto">
            <Icon name="whatsapp" className="h-5 w-5" aria-hidden="true" />
            Hubungi admin
          </a>
        </div>
      </div>
    </section>
  )
}
