import { cn } from '@/lib/utils'

const variants = {
  good: 'bg-green-100 text-green-800 border border-green-200',
  neutral: 'bg-gray-100 text-gray-700 border border-gray-200',
  bad: 'bg-red-100 text-red-800 border border-red-200',
  default: 'bg-gray-100 text-gray-700 border border-gray-200',
  category: 'bg-blue-50 text-blue-700 border border-blue-200',
  beginner: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  intermediate: 'bg-amber-50 text-amber-700 border border-amber-200',
  advanced: 'bg-rose-50 text-rose-700 border border-rose-200',
  middle: 'bg-amber-50 text-amber-700 border border-amber-200',
  senior: 'bg-purple-50 text-purple-700 border border-purple-200',
}

export function Badge({ className, variant = 'default', ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
