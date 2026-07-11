import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  Info,
  Lightbulb,
} from 'lucide-react';

const variants = {
  info: {
    icon: Info,
    border: 'border-sky-500/30',
    bg: 'bg-sky-500/5',
    iconColor: 'text-sky-400',
    label: 'Info',
  },
  tip: {
    icon: Lightbulb,
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/5',
    iconColor: 'text-blue-400',
    label: 'Tip',
  },
  success: {
    icon: CheckCircle,
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/5',
    iconColor: 'text-emerald-400',
    label: 'Success',
  },
  warning: {
    icon: AlertTriangle,
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/5',
    iconColor: 'text-amber-400',
    label: 'Warning',
  },
  danger: {
    icon: AlertCircle,
    border: 'border-red-500/30',
    bg: 'bg-red-500/5',
    iconColor: 'text-red-400',
    label: 'Danger',
  },
} as const;

type CalloutVariant = keyof typeof variants;

export function Callout({
  variant = 'info',
  children,
}: {
  variant?: CalloutVariant;
  children: React.ReactNode;
}) {
  const v = variants[variant];
  const Icon = v.icon;

  return (
    <div
      className={`my-8 rounded-xl border ${v.border} ${v.bg} p-5 max-w-[72ch]`}
    >
      <div className='flex items-start gap-3'>
        <Icon size={18} className={`${v.iconColor} mt-0.5 shrink-0`} />
        <div>
          <span
            className={`text-[11px] font-mono ${v.iconColor} tracking-wider uppercase`}
          >
            {v.label}
          </span>
          <div className='mt-1 text-[15px] md:text-[16px] text-gray-300 leading-relaxed'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
