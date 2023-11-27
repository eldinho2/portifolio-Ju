import Image from "next/image";
import Wave from "./components/Wave";

import {FadeIn, FadeFromRigth}  from './components/Animations'


export default function Home(){
  return (
    <main className="overflow-hidden h-screen">
      <section className="relative">
        <div className="flex">
          {Array.from({ length: 65 }, (_, i) => (
            <div className="w-1/2 md:w-1/3 lg:w-1/4" key={i}>
              <Wave height={Math.floor(Math.random() * (280 - 350) + 350)} />
            </div>
          ))}
        </div>
        <div className="text-center absolute inset-0 flex items-center justify-center mb-24">
          <div>
            <FadeIn time={0.1} className="font-play text-7xl md:text-6xl sm:text-4xl">
              Portifólio
            </FadeIn>
            <FadeIn time={0.2} className="font-play text-7xl md:text-6xl sm:text-4xl">de</FadeIn>
            <FadeIn time={0.3} className="font-play text-7xl md:text-6xl sm:text-4xl">
              Matemática II
            </FadeIn>
          </div>
        </div>
      </section>
      <section className="font-play font-medium text-2xl flex justify-center gap-8 md:items-center sm:flex-col md:flex-col">
        <FadeIn>
          <div>
            <div className="flex gap-2">
              <p>Discente:</p>
              <p>Julia de Aguiar Dantas Henrique</p>
            </div>
            <div>
              <p>Universidade Estadual do Rio de Janeiro / FFP</p>
            </div>
            <div className="flex gap-2">
              <p>Curso: </p>
              <p>Pedagogia</p>
            </div>
            <div className="flex gap-2">
              <p>Docente:</p>
              <p>Fábio Menezes</p>
            </div>
            <div>
              <p>Segundo semestre de 2023</p>
            </div>
          </div>
        </FadeIn>
        <FadeFromRigth className="select-none h-[250px] pointer-events-none">
          <Image
            src="/assets/gatinho1.png"
            alt="gatinho"
            width={300}
            height={300}
            className="select-none pointer-events-none md:w-[200px] md:h-[150px]"
          />
        </FadeFromRigth>
      </section>
    </main>
  );
}
