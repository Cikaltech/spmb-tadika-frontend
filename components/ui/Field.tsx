import { Icon } from './Icon'

/** Field dengan label selalu terlihat. Placeholder hanya contoh format, bukan label. */
export function Field({
  id,
  label,
  hint,
  galat,
  wajib = false,
  children,
}: {
  id: string
  label: string
  hint?: string
  galat?: string
  wajib?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
        {wajib && (
          <span className="ml-1 text-coral-700" aria-hidden="true">
            *
          </span>
        )}
        {wajib && <span className="sr-only"> wajib diisi</span>}
      </label>
      {children}
      {hint && !galat && <p className="field-hint">{hint}</p>}
      {galat && (
        <p className="field-error" id={`${id}-galat`}>
          <Icon name="alert" className="mt-0.5 h-4 w-4 shrink-0" />
          {galat}
        </p>
      )}
    </div>
  )
}

export function Input({
  id,
  galat,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { id: string; galat?: boolean }) {
  return (
    <input
      id={id}
      className={`field-input ${galat ? 'border-[1.5px] border-coral-600' : ''}`}
      aria-invalid={galat || undefined}
      aria-describedby={galat ? `${id}-galat` : undefined}
      {...props}
    />
  )
}

export function Textarea({
  id,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { id: string }) {
  return <textarea id={id} className="field-input min-h-[112px]" {...props} />
}
