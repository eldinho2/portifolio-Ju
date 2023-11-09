'use client';
import { ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  children: ReactNode;
  direction?: "up" | "down";
}

const Footer = ({ children, direction }: Props) => {
  const referencia = useRef<HTMLInputElement>(null);
  const [didScroll, setDidScroll] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const delta = 1;
  const navbarHeight = 10;

  useEffect(() => {
    const element = referencia.current;
  
    window.addEventListener("scroll", () => {
      setDidScroll(true);
    });

    const hasScrolled = () => {
      const st = window.scrollY;

      if (Math.abs(lastScrollTop - st) <= delta) {
        return;
      }

      if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down

        element?.classList.remove(direction === "up" ? "opacity-0" : "opacity-1");
        element?.classList.add(direction === "up" ? "opacity-1" : "opacity-0");
        element?.classList.add("ease-in-out");
        element?.classList.add("transition-all");
      } else {
        // Scroll Up
        if (st + window.innerHeight < document.documentElement.scrollHeight) {
          element?.classList.remove(direction === "up" ? "opacity-1" : "opacity-0");
          element?.classList.add(direction === "up" ? "opacity-0" : "opacity-1");
          element?.classList.add("ease-in-out");
          element?.classList.add("transition-all");
        }
      }

      setLastScrollTop(st);
    };

    if (didScroll) {
      hasScrolled();
      setDidScroll(false);
    }

    return () => {
      window.removeEventListener("scroll", () => {
        setDidScroll(true);
      });
    };
  }, [didScroll, direction, lastScrollTop, navbarHeight]);

  return <div ref={referencia}>{children}</div>;
};

export default Footer;
