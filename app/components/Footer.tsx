'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
    const referencia = useRef<HTMLInputElement>(null);

    const [didScroll, setDidScroll] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const delta = 5;
    const navbarHeight = 60; // Defina a altura do seu cabeçalho
  
    useEffect(() => {
      const footer = referencia.current;
  
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
          footer?.classList.remove("opacity-0");
          footer?.classList.add("opacity-1");
          footer?.classList.add("ease-in-out");
          footer?.classList.add("transition-all");
        } else {
          // Scroll Up
          if (st + window.innerHeight < document.documentElement.scrollHeight) {
            footer?.classList.remove("opacity-1");
            footer?.classList.add("opacity-0");
            footer?.classList.add("ease-in-out");
            footer?.classList.add("transition-all");
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
    }, [didScroll, lastScrollTop, navbarHeight]);

    return (
        <footer ref={referencia} className="bg-[#6C99B6] max-h-24 flex justify-evenly items-center fixed bottom-0 left-0 right-0 z-[100] opacity-1 mx-auto transition-all ease-in-out duration-500">
            <div className="mb-3">
                <Image src="/assets/logoffp.png" alt="logoFFP" width={160} height={160} className="md:w-[100px] md:h-[70px]" />
            </div> 
            <div className="font-edu text-xl font-semibold md:text-base sm:text-xs">
                <p>Discente: Julia de Aguiar Dantas Henrique</p>
                <p>
                Pedagogia
                </p>
                <p>
                Segundo semestre de 2023
                </p>
            </div>
            <div>
                <Image src="/assets/gatinha mulher.png" alt="gatina mulher" width={70} height={70} className="md:w-[90px] md:h-[80px]" />
            </div>
        </footer>
    )
};

export default Footer;
