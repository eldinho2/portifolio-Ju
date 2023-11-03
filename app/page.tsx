import Image from "next/image";
import Wave from "./components/Wave";

export default function Home() {
  return (
    <main className="overflow-hidden">
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
            <h1 className="font-play text-7xl md:text-6xl sm:text-4xl">Portifólio</h1>
            <h2 className="font-play text-7xl md:text-6xl sm:text-4xl">de</h2>
            <h1 className="font-play text-7xl md:text-6xl sm:text-4xl">Matemática II</h1>
          </div>
        </div>
      </section>
      <section className="font-play font-medium text-2xl flex justify-center gap-8 md:items-center">
        <div className="md:text-lg ml-4">
          <div className="flex gap-2">
            <p>Discente:</p>
            <p>Julia de Aguiar Dantas Henrique</p>
          </div>
          <div>
            <p>Universidade Federal do Rio de Janeiro / FFP</p>
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
        <div className="select-none pointer-events-none">
          <Image
            src="/assets/gatinho1.png"
            alt="gatinho"
            width={400}
            height={400}
            className="select-none pointer-events-none md:w-[200px] md:h-[150px]"
          />
        </div>
      </section>
    </main>
  );
}
