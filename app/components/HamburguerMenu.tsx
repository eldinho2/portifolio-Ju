"use client";
import { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

export default function HamburguerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return () => {
        document.body.style.overflow = 'auto';
    };
}, [isOpen]);

  const closedMenu = "h-[3px] bg-black w-6";
  return (
    <>
      <div
        onClick={handleOpen}
        className="relative hidden flex-col gap-[5px] cursor-pointer select-none sm2:flex sm:flex md:flex"
      >
        <span
          className={
            isOpen ? `${closedMenu} translate-y-2 rotate-45` : closedMenu
          }
        ></span>
        <span
          className={isOpen ? `${closedMenu} opacity-0` : closedMenu}
        ></span>
        <span
          className={
            isOpen ? `${closedMenu} -translate-y-2 -rotate-45` : closedMenu
          }
        ></span>
      </div>
      {isOpen && (
        <div onClick={handleOpen} className="absolute flex flex-col justify-center gap-2 w-full h-screen top-[8%] left-0 p-2 pb-44 z-[99] bg-[#6C99B6] select-none overflow-hidden">
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
      )}
    </>
  );
}
