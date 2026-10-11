import Link from 'next/link'
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type ArrowLinkProps = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'light' | 'ghost-light' | 'text'
  className?: string
  size?: 'md' | 'lg'
}

export function ArrowLink({ href, children, variant = 'primary', className, size = 'md' }: ArrowLinkProps) {
  if (variant === 'text') {
    return (
      <Link
        href={href}
        className={cn(
          'group inline-flex items-center gap-2 text-sm font-semibold text-forest underline-offset-[6px] hover:underline',
          className,
        )}
      >
        {children}
        <ArrowUpRight
          className="size-4 transition-transform duration-300 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>
    )
  }

  const styles = {
    primary: 'bg-forest text-ivory hover:bg-charcoal',
    outline: 'border border-forest/25 text-forest hover:border-forest hover:bg-forest hover:text-ivory',
    light: 'bg-ivory text-forest hover:bg-mint',
    'ghost-light': 'border border-ivory/30 text-ivory hover:bg-ivory hover:text-forest',
  }[variant]

  return (
    <Link
      href={href}
      className={cn(
        'group relative inline-flex items-center gap-3 rounded-full font-semibold tracking-tight transition-colors duration-300 ease-expo',
        size === 'lg' ? 'h-14 pl-7 pr-2 text-base' : 'h-12 pl-6 pr-1.5 text-sm',
        styles,
        className,
      )}
    >
      <span>{children}</span>
      <span
        className={cn(
          'relative grid place-items-center overflow-hidden rounded-full',
          size === 'lg' ? 'size-10' : 'size-9',
          variant === 'primary' ? 'bg-ivory/12' : variant === 'light' ? 'bg-forest/8' : 'bg-current/8',
        )}
        aria-hidden="true"
      >
        <ArrowUpRight className="size-4 transition-transform duration-500 ease-expo group-hover:-translate-y-6 group-hover:translate-x-6" />
        <ArrowUpRight className="absolute size-4 -translate-x-6 translate-y-6 transition-transform duration-500 ease-expo group-hover:translate-x-0 group-hover:translate-y-0" />
      </span>
    </Link>
  )
}

export function Eyebrow({
  children,
  index,
  className,
  tone = 'dark',
}: {
  children: React.ReactNode
  index?: string
  className?: string
  tone?: 'dark' | 'light'
}) {
  return (
    <p
      className={cn(
        'text-eyebrow flex items-center gap-3',
        tone === 'dark' ? 'text-forest' : 'text-mint',
        className,
      )}
    >
      {index && <span className="font-serif text-base normal-case italic tracking-normal opacity-70">{index}</span>}
      <span className={cn('h-px w-8', tone === 'dark' ? 'bg-forest/40' : 'bg-mint/50')} aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}

export function PendingBadge({ children = 'Pending verification', className }: { children?: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-dashed border-sage px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink-muted',
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-sage" aria-hidden="true" />
      {children}
    </span>
  )
}

export function Breadcrumbs({ items, className }: { items: { label: string; href?: string }[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-ink-muted">
        <li>
          <Link href="/" className="hover:text-forest">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className="size-3" aria-hidden="true" />
            {item.href ? (
              <Link href={item.href} className="hover:text-forest">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-forest">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function Italic({ children }: { children: React.ReactNode }) {
  return <em className="font-serif font-normal italic tracking-[-0.01em]">{children}</em>
}
