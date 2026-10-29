import { site } from '@/content/site'
import { Icon } from '@/components/ui/Icon'

/** Band bantuan WhatsApp di area akun. design.md bab 6. */
export function BannerBantuan({ kode }: { kode?: string }) {
  const pesan = kode
    ? `Halo admin SPMB, saya ingin bertanya tentang pendaftaran ${kode}.`
    : 'Halo admin SPMB, saya ingin bertanya tentang pendaftaran.'
  const tautan = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(pesan)}`

  return (
    <section aria-labelledby="judul-bantuan" className="rounded-panel bg-teal-900 p-6 md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="flex items-start gap-4">
          <span
            className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-teal-800 text-gold-300"
            aria-hidden="true"
          >
            <Icon name="whatsapp" className="h-6 w-6" />
          </span>
          <div className="min-w-0">
            <h2
              id="judul-bantuan"
              className="font-display text-[19px] font-extrabold leading-[1.2] text-white"
            >
              Ada yang belum jelas?
            </h2>
            <p className="mt-1 max-w-[46ch] text-[16px] leading-[1.5] text-white">
              Tanya admin lewat WhatsApp {site.whatsapp.label}.
            </p>
          </div>
        </div>

        <a href={tautan} className="btn-gold w-full shrink-0 md:w-auto" target="_blank" rel="noopener">
          <Icon name="whatsapp" className="h-5 w-5" aria-hidden="true" />
          Hubungi admin
        </a>
      </div>
    </section>
  )
}
