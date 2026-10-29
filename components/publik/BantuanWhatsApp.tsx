import { Icon } from '@/components/ui/Icon'
import { site } from '@/content/site'

/** Banner bantuan, design.md bab 6. Band teal-900, teks putih penuh, tombol emas. */
export function BantuanWhatsApp({ kode }: { kode?: string }) {
  const pesan = kode
    ? `Assalamualaikum, saya ingin bertanya tentang pendaftaran ${kode}.`
    : `Assalamualaikum, saya ingin bertanya tentang SPMB tahun ajaran ${site.tahunAjaran}.`

  return (
    <section aria-labelledby="bantuan-judul" className="mx-auto max-w-container px-5 py-12 md:px-10 md:py-16">
      <div className="rounded-card bg-teal-900 p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2
              id="bantuan-judul"
              className="flex items-center gap-3 font-display text-[23px] font-extrabold leading-[1.2] text-white"
            >
              <Icon name="whatsapp" className="h-6 w-6 shrink-0" />
              Butuh bantuan?
            </h2>
            <p className="mt-2 text-[17px] text-white">
              Admin sekolah siap membantu lewat WhatsApp pada jam kerja.
            </p>
          </div>

          <a
            href={`https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(pesan)}`}
            target="_blank"
            rel="noopener"
            className="btn-gold shrink-0"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            Hubungi admin
          </a>
        </div>
      </div>
    </section>
  )
}
