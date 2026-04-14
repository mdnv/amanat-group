import clsx from "clsx";

function SectionHeading({
  label,
  title,
  description,
  align = "left",
  invert = false,
}) {
  return (
    <div
      className={clsx(
        "mb-10 max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {label ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-secondary)]">
          {label}
        </p>
      ) : null}
      <h2
        className={clsx(
          "font-display text-4xl leading-[0.95] sm:text-5xl",
          invert ? "text-white" : "text-[var(--color-ink)]",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={clsx(
            "mt-5 max-w-2xl text-base leading-7",
            invert ? "text-white/74" : "text-[var(--color-muted)]",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
