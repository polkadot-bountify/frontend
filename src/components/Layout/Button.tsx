import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';
import type { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-3 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none',
};

const variantStyles = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    blue: 'bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
    white:
      'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
    pink: 'bg-pink-600 text-white hover:bg-pink-500 active:bg-pink-800 active:text-pink-100 focus-visible:outline-pink-600',
  },
  outline: {
    slate:
      'ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    blue: '',
    white:
      'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white',
    pink: '',
  },
};

type Variant = keyof typeof variantStyles;
type Colour = keyof typeof variantStyles[Variant];

type ButtonProps = CustomButtonProps | CustomLinkProps;

type CustomLinkProps = {
  variant?: Variant;
  color?: Colour;
  className?: string;
  href: string;
} & LinkProps;

type CustomButtonProps = {
  variant?: Variant;
  color?: Colour;
  className?: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({
  variant = 'solid',
  color = 'slate',
  className,
  ...props
}: ButtonProps): JSX.Element {
  className = clsx(
    'transition-colors',
    baseStyles[variant],
    variantStyles[variant][color],
    className
  );
  if ('href' in props) {
    return <Link className={className} {...props} />;
  }
  return <button className={className} {...props} />;
}
