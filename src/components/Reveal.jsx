import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

function Reveal({ children, className = "", delay = 0 }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={clsx(
        "transition-all duration-1000 ease-out",
        visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Reveal;
