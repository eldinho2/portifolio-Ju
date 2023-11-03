"use client";

import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import HamburguerMenu from "./HamburguerMenu";
import { useEffect, useRef, useState } from "react";

function Header() {
  const referencia = useRef<HTMLInputElement>(null);

  const [didScroll, setDidScroll] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const delta = 5;
  const navbarHeight = 60; // Defina a altura do seu cabeçalho

  useEffect(() => {
    const header = referencia.current;

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
        header?.classList.add("opacity-0");
        header?.classList.remove("opacity-1");
        header?.classList.add("ease-in-out");
        header?.classList.add("transition-all");
      } else {
        // Scroll Up
        if (st + window.innerHeight < document.documentElement.scrollHeight) {
          header?.classList.add("opacity-1");
          header?.classList.remove("opacity-0");
          header?.classList.add("ease-in-out");
          header?.classList.add("transition-all");
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
    <header
      ref={referencia}
      className="bg-[#6C99B6] flex items-center fixed w-screen justify-around h-16 mx-auto transition-all ease-in-out duration-500 z-50"
    >
      <Link href="/">
        <div className="cursor-pointer">
          <Image
            src={"/assets/UERJ LOGO.png"}
            alt="UERJ Logo"
            width={60}
            height={60}
          />
        </div>
      </Link>
      <div className="flex align-middle justify-center items-center gap-5 select-none sm2:hidden sm:hidden md:hidden md:text-sm lg:text-xs">
        <div className="flex items-center gap-1 group hover:text-yellow-500 hover:underline">
          <div className="flex items-center gap-1 cursor-pointer">
            <AiFillStar />
            <Link href="/">Início</Link>
          </div>
        </div>
        <div className="flex items-center gap-1 group hover:text-yellow-500 hover:underline">
          <div className="flex items-center gap-1 cursor-pointer">
            <AiFillStar />
            <Link href="/Apresentacao">Apresentação</Link>
          </div>
        </div>
        <div className="flex items-center gap-1 group hover:text-yellow-500 hover:underline">
          <div className="flex items-center gap-1 cursor-pointer">
            <AiFillStar />
            <Link href="/MatematicaProblematizada">
              Matemática Problematizada
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-1 group hover:text-yellow-500 hover:underline">
          <div className="flex items-center gap-1 cursor-pointer">
            <AiFillStar />
            <Link href="/Coletivo">Coletivo</Link>
          </div>
        </div>
        <div className="flex items-center gap-1 group hover:text-yellow-500 hover:underline">
          <div className="flex items-center gap-1 cursor-pointer">
            <AiFillStar />
            <Link href="/Fracoes">Frações</Link>
          </div>
        </div>
        <div className="flex items-center gap-1 group hover:text-yellow-500 hover:underline">
          <div className="flex items-center gap-1 cursor-pointer">
            <AiFillStar />
            <Link href="/PreconceitosEAMatematica">
              Preconceitos e a Matemática
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-1 group hover:text-yellow-500 hover:underline">
          <div className="flex items-center gap-1 cursor-pointer">
            <AiFillStar />
            <Link href="/ConsideracoesFinais">Considerações Finais</Link>
          </div>
        </div>
      </div>
      <HamburguerMenu />
    </header>
  );
}

export default Header;
