import React from "react";
import Image from "next/image";
import {FadeIn}  from '@/app/components/Animations'

const Apresentação = () => {
  return (
    <FadeIn className="flex justify-center items-center flex-col h-screen">
        <h1 className="text-8xl font-play py-3 font-bold mb-2 md:text-4xl sm:text-lg">
          Apresentação
        </h1>
        <div className="relative z-[40] mb-[100px]">
          <div className="bg-[#77a0b9] max-w-4xl p-4 rounded-xl font-mon font-semibold md:max-w-sm sm:max-w-[300px]">
            <p>
              Este portfólio é uma jornada pela disciplina de Matemática, Conteúdo
              e Método II, ministrada pelo Prof. Dr. Fábio Menezes na Faculdade de
              Formação de Professores durante o segundo semestre de 2023. Vamos
              explorar como essa abordagem desafia o convencional, destacando sua
              importância na formação de professores. Abordaremos dinâmicas de
              grupo, frações (além da definição técnica) com uma pitada de camelos
              e, para finalizar, uma estratégia visual e lúdica: a divisão de
              frações usando dobraduras. Vamos juntos explorar como esses
              elementos contribuem para uma matemática mais envolvente e preparada
              para os desafios reais!
            </p>
          </div>
          <div className="absolute top-[-126px] left-[-11px] -z-30 md:top-[-72px] sm:top-[-32px]">
            <Image
              src="/assets/gatinho2.png"
              alt="gatinho"
              width={200}
              height={200}
              className="select-none pointer-events-none md:w-[100px] md:h-[100px] sm:w-[50px] sm:h-[50px]"
            />
          </div>
          <div className="absolute top-[-126px] left-[700px] -z-30 md:left-[290px] md:top-[-72px] sm:top-[-37px] sm:left-[240px]">
            <Image
              src="/assets/gatinho3.png"
              alt="gatinho"
              width={200}
              height={200}
              className="select-none pointer-events-none md:w-[100px] md:h-[100px] sm:w-[50px] sm:h-[50px]"
            />
          </div>
        </div>
    </FadeIn>
  );
};

export default Apresentação;
