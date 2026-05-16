import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
};

export default function Button({
  href,
  children,
  variant = "gold",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled,
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-[0.12em] uppercase transition-all duration-200 rounded-full";

  const variants = {
    gold: "bg-gold hover:bg-gold-light text-cream",
    outline: "border border-gold/60 hover:border-gold text-cream hover:bg-gold/5",
    ghost: "text-cream/70 hover:text-cream",
  };

  const sizes = {
    sm: "text-[10px] px-4 py-2",
    md: "text-[11px] px-6 py-3",
    lg: "text-[12px] px-8 py-4",
  };

  const classes = clsx(base, variants[variant], sizes[size], disabled && "opacity-50 cursor-not-allowed", className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
