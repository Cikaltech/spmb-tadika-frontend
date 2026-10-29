import { site } from '@/content/site'
import { Icon } from '@/components/ui/Icon'

/** Band bantuan WhatsApp. Tidak bisa ditutup. design.md bab 6. */
export function BannerBantuan({ kode }: { kode?: string }) {
  const pesan = kode
    ? `Halo admin SPMB, saya ingin bertanya tentang pendaftaran ${kode}.`
    : 'Halo admin SPMB, saya ingin bertanya tentang pendaftaran.'

  return (
    <section aria-labelledby="judul-bantuan" className="rounded-card bg-teal-900 p-6 text-white md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <Icon name="whatsapp" className="mt-0.5 h-6 w-6 shrink-0" />
          <div>
            <h2 id="judul-bantuan" className="text-[23px] font-extrabold text-white">
              Ada yang belum jelas?
            </h2>
            <p className="mt-1 text-[17px] text-white">Admin SPMB siap membantu lewat WhatsApp.</p>
          </div>
        </div>
        <a
          href={`https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(pesan)}`}
          className="btn-gold shrink-0"
          target="_blank"
          rel="noopener"
        >
          <Icon name="whatsapp" className="h-5 w-5" />
          Hubungi admin
        </a>
      </div>
    </section>
  )
}
