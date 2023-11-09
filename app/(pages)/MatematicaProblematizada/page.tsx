import React from "react";
import Image from "next/image";

const MatematicaProblematizada = () => {
  return (
    <main className="flex justify-evenly items-center flex-col mt-10 md:mt-3 md:p-10 md:mb-11 mb-11">
      <div className="flex flex-col max-w-5xl">
        <h1 className="text-center text-4xl font-play font-bold md:text-4xl sm:text-2xl">
          Matemática Problematizada
        </h1>
        <p className="mt-4 text-xl font-mon font-semibold sm:text-lg sm:p-2 text-left sm:text-center">
          A matemática por muito tempo, foi algo certo, concreto e imutável, tal
          como falado no artigo &ldquo;QUE MATEMÁTICA PARA A FORMAÇÃO DE
          PROFESSORES? POR UMA MATEMÁTICA PROBLEMATIZADA&rdquo; de Vitor
          Giraldo, &ldquo;argumentos baseados em aspectos tais como tradição –
          “sempre foi assim, então deve continuar sendo assim” –, experiência –
          “quando eu estudei era assim, então deve continuar sendo assim” –, ou
          preferência – “eu acho isso muito legal, então tem que ser assim”.
          Pode ser surpreendente o fato de que uma discussão tão complexa e com
          tantos desdobramentos nas sociedades contemporâneas seja abordada com
          base em argumentos tão &ldquo;pouco rigorosos&rdquo;, especialmente
          por pessoas cujas atividades profissionais envolvem os rigores da
          pesquisa acadêmica. Tais argumentações parecem desconsiderar as
          complexidades das questões envolvidas na formação de professores, seus
          pressupostos e suas implicações, que as caracterizam como objetos de
          investigação.&rdquo;.
        </p>
        <p className="mt-4 text-xl font-mon font-semibold sm:text-lg sm:p-2 text-left sm:text-center">
          A matemática problematizada é uma abordagem de ensino que vai além da
          visão tradicional de uma disciplina &ldquo;exata e
          inquestionável&ldquo;. Ela busca criar sentido para o mundo, afetar
          positivamente as pessoas e proporcionar um sentido libertador ao
          aprendizado matemático. Essa abordagem envolve a descoberta e criação
          de padrões, sendo um instrumento para o desenvolvimento de diversas
          áreas científicas e sociais, além de servir como linguagem para
          comunicação.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center max-w-5xl">
        <Image
          src="/assets/gatinho4.png"
          alt="gatinho4"
          width={280}
          height={280}
        />
        <p className="mt-4 text-xl font-mon font-semibold sm:text-lg sm:p-2 text-left sm:text-center">
          A importância da matemática problematizada na formação de docentes
          reside na preparação de educadores para um ensino mais envolvente e
          significativo. Ao explorar possibilidades matemáticas em contextos
          históricos e sociais, essa abordagem estimula a participação ativa dos
          alunos na resolução de desafios, promovendo uma compreensão mais
          profunda da matéria. Diferentemente da matemática não problematizada,
          que segue uma abordagem linear e exata, a matemática problematizada
          desafia verdades inquestionáveis, desnaturalizando conceitos e
          incentivando a busca por significados que façam sentido para os
          estudantes.
        </p>
        <p className="mt-4 text-xl font-mon font-semibold sm:text-lg sm:p-2 text-left sm:text-center">
          Ao trabalhar com atividades que permitem respostas abertas e
          reconhecendo verdades provisórias, valoriza a autonomia e o
          protagonismo dos pensamentos matemáticos. Assim, essa abordagem não
          apenas ensina a disciplina, mas também promove habilidades críticas,
          criativas e autônomas nos alunos, preparando-os para enfrentar
          desafios complexos no mundo real.
        </p>
      </div>
    </main>
  );
};

export default MatematicaProblematizada;
