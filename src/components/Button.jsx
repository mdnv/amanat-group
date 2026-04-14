import clsx from "clsx";

function Button({ children, secondary = false, className = "", ...props }) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-all duration-300",
        secondary
          ? "bg-white/70 text-[var(--color-primary)] ring-1 ring-[rgba(115,92,0,0.18)] backdrop-blur-md hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,17,58,0.06)]"
          : "bg-[var(--color-primary)] text-white hover:-translate-y-0.5 hover:bg-[var(--color-primary-container)] hover:shadow-[0_20px_40px_rgba(0,17,58,0.12)]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
