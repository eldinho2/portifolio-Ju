import React from "react";
import Image from "next/image";
import Link from "next/link";

const Fracoes = () => {
  return (
    <main className="h-full">
      <section className="flex justify-center items-center mt-10 md:mt-3 md:flex-col sm:flex-col">
        <div className="flex flex-col max-w-xl">
          <h1 className="text-center text-4xl font-play font-bold sm:text-2xl">
            Frações
          </h1>
          <p className="mt-4 text-xl font-mon font-semibold md:text-base md:p-4 sm:text-base sm:p-2">
            Se colocarmos na Wikipedia &lsquo;o que é fração&lsquo;, a seguinte
            resposta aparece &lsquo; Fração é um modo de expressar uma
            quantidade a partir de uma razão de dois números inteiros. A palavra
            fração vem do latim fractus e significa &lsquo;partido&lsquo;,
            dividido ou quebrado&lsquo;. Mas a fração, vai fundamentada além
            disso, vai na relação parte todo, surge de necessidade humana de
            medir, comparar e se localizar. <br /> Na matemática, as frações são
            uma representação das partes de um todo, indicando a divisão desse
            todo em partes iguais. Cada fração é composta por dois elementos: o
            numerador, que representa o número de partes consideradas, e o
            denominador, que representa o total de partes que compõem o todo.
            Dessa forma, as frações expressam quantidades fracionárias,
            proporcionando uma maneira eficiente de descrever porções
            específicas de um inteiro.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center max-w-xl gap-9">
          <Image
            src="/assets/pizza.png"
            alt="pizza"
            width={380}
            height={380}
            className="md:h-[200px] md:w-[300px] sm:h-[150px] sm:w-[200px]"
          />
          <Image
            src="/assets/gatoachorrogato.png"
            alt="gatinho"
            width={400}
            height={400}
            className="md:h-[200px] md:w-[300px] sm:h-[150px] sm:w-[200px]"
          />
        </div>
      </section>
      <section className="flex justify-center items-center gap-10 my-10 sm:flex-col sm2:flex-col md:flex-col md:gap-3 md:p-4">
        <div>
          <Link
            href={
              "https://www.youtube.com/watch?v=M4CvnsO5YD4&ab_channel=DivulgandoVideos"
            }
            target="_blank"
            className="group"
          >
            <div className="bg-[#6C99B6] hover:bg-[#4c6b81] my-3 rounded-xl px-4 text-center text-xl md:text-base sm:text-sm">
            Video camelo - Link
            </div>
          </Link>
          <div className="relative">
            <Image
              src="/assets/gatonocamelo.png"
              alt="gatonocamelo"
              width={300}
              height={300}
            />
            <div className="absolute top-[188px] right-[-44px] md:top-[60px] md:right-[-10px] sm:top-[51px] sm:right-[-23px]">
              <Image
                src="/assets/gatonocamelo2.png"
                alt="gatonocamelo"
                width={120}
                height={120}
                className="md:w-[50px] md:h-[50px] w-[50px] h-[50px]"
              />
            </div>
          </div>
        </div>
        <div className="max-w-2xl text-xl font-mon font-semibold pl-2 md:text-base sm:text-sm">
          <p>
            Com o vídeo &lsquo;O Homem que Calculava&lsquo; podemos discutir se
            a divisão foi coerente, abordando questões como metade, terça parte,
            nona parte, unidade inteira, dividir o que não está inteiro, tornar
            as partes semelhantes para somar e explorar frações equivalentes.{" "}
            <br /> No video, Beremiz, ao enfrentar a divisão de 35 camelos entre
            três irmãos com frações incomuns (1/2, 1/3, 1/9), percebe que não
            formam uma unidade inteira. Ele resolve o problema ao completar a
            unidade inteira, tornando as partes semelhantes. Ao pensar em dois
            camelos como uma unidade, totalizando 36 camelos, a divisão se torna
            mais simples. O primeiro irmão fica com metade (18 camelos), o
            segundo com a terça parte (12 camelos) e o terceiro com a nona parte
            (4 camelos). Beremiz demonstra habilidade matemática ao encontrar
            uma solução coerente e vantajosa para todos. Com acesso a um video
            como esse, podemos usar em sala de aula e levantar questões a partir
            do videos, gerando um gatilho e discusão inicial intrigantes aos
            alunos.
          </p>
        </div>
      </section>
      <section className="flex justify-center items-center gap-4 my-10 md:mb-11 md:gap-2 sm:gap-0">
        <div>
          <p className="max-w-xl text-xl font-mon font-semibold md:text-base md:p-4 sm:text-sm sm:p-4">
            Abordar a divisão de frações utilizando dobraduras é uma estratégia
            visual e lúdica. Ao dobrar uma folha de papel A4, representamos
            frações, tornando o conceito mais tangível. Por exemplo, ao dobrar a
            folha ao meio e novamente, obtemos partes que representam frações
            como 1/2 e 1/4. Ao sobrepor essas partes, visualizamos a divisão. A
            parte não coberta representa o resultado da divisão de frações. Essa
            abordagem, além de concreta, transforma a matemática em uma
            atividade prática e interativa, facilitando a compreensão,
            especialmente para crianças. O uso de dobraduras torna o processo
            envolvente, estimulando a curiosidade e promovendo uma compreensão
            duradoura do conceito.
          </p>
        </div>
        <div className="">
          <div>
            <Link
              href={
                "https://www.youtube.com/watch?v=Pv36xzb-zBU&embeds_referring_euri=https%3A%2F%2Fsites.google.com%2F&source_ve_path=MjM4NTE&feature=emb_title&ab_channel=RoseliceParmegiani "
              }
              target="_blank"
              className="group"
            >
              <div className="bg-[#6C99B6] hover:bg-[#4c6b81] my-3 rounded-xl px-4 text-center text-xl md:text-base sm:text-sm">
                Fração e Dobraduras - Link
              </div>
            </Link>
          </div>
          <Link
            href={
              "https://www.youtube.com/watch?v=Pv36xzb-zBU&embeds_referring_euri=https%3A%2F%2Fsites.google.com%2F&source_ve_path=MjM4NTE&feature=emb_title&ab_channel=RoseliceParmegiani "
            }
            target="_blank"
            className="group"
          >
            <div className="flex gap-4 mb-20 sm:flex-col md:flex-col">
              <Image
                src="/assets/bolodepapel.png"
                alt="bolodepapel"
                width={300}
                height={300}
              />
              <Image
                src="/assets/papel.png"
                alt="papel"
                width={300}
                height={300}
              />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Fracoes;
