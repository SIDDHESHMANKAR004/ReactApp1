import React, { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", as: Component = "div", threshold = 0.12 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Component ref={ref} className={`${className} ${visible ? "is-visible" : ""}`.trim()}>
      {children}
    </Component>
  );
}
