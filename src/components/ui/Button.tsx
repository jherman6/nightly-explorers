import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "ghost-dark";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-amber-light to-amber-glow text-[#2a1604] shadow-[0_10px_30px_-8px_rgba(196,123,31,0.65)] hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-8px_rgba(196,123,31,0.8)]",
  ghost:
    "bg-moonbeam/5 text-moonbeam border border-moonbeam/35 hover:bg-moonbeam/10 hover:border-moonbeam/60",
  "ghost-dark":
    "bg-transparent text-forest-night border border-forest-night/30 hover:bg-forest-night/5",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[15.5px] font-bold transition-all duration-300 whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed";

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

interface LinkButtonProps extends CommonProps {
  href: string;
}

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: NativeButtonProps) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
