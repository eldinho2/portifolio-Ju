"use client";

import React from "react";
import Image from "next/image";
import {
  FadeIn,
  FadeFromLeft,
  FadeFromRigth,
} from "@/app/components/Animations";
import { useRef } from "react";
import { useInView } from "framer-motion";

const MatematicaProblematizada = () => {
  return (
    <main className="flex justify-evenly items-center flex-col mt-10 md:mt-3 md:p-10 md:mb-11 mb-11">
      <FadeIn className="flex flex-col max-w-5xl">
        <h1 className="text-center text-4xl font-play font-bold md:text-4xl sm:text-2xl">
          Matemática Problematizada
        </h1>
        <p className="mt-4 text-xl font-mon font-semibold sm:text-lg sm:p-2 text-left sm:text-center">
          A matemática por muito tempo, foi algo certo, concreto e imutável, mas
          por que é assim? No artigo &ldquo; QUE MATEMÁTICA PARA A FORMAÇÃO DE
          PROFESSORES? POR UMA MATEMÁTICA PROBLEMATIZADA&rdquo; de Vitor
          Giraldo, podemos ter uma ideia do motivo: &ldquo;argumentos baseados
          em aspectos tais como tradição – “sempre foi assim, então deve
          continuar sendo assim” –, experiência – “quando eu estudei era assim,
          então deve continuar sendo assim” –, ou preferência – “eu acho isso
          muito legal, então tem que ser assim”. Pode ser surpreendente o fato
          de que uma discussão tão complexa e com tantos desdobramentos nas
          sociedades contemporâneas seja abordada com base em argumentos tão
          “pouco rigorosos”, especialmente por pessoas cujas atividades
          profissionais envolvem os rigores da pesquisa acadêmica. Tais
          argumentações parecem desconsiderar as complexidades das questões
          envolvidas na formação de professores, seus pressupostos e suas
          implicações, que as caracterizam como objetos de investigação.&rdquo;
        </p>
        <p className="mt-4 text-xl font-mon font-semibold sm:text-lg sm:p-2 text-left sm:text-center">
          Com isso, podemos concluir que, argumentos &ldquo;rasos&rdquo; como
          tradição, preferência ou experiencia, desconsiderando diversos
          fatores, fazem com que o ciclo da matemática não problematizadora se
          perpetue.
        </p>
      </FadeIn>
      <div className="flex flex-col justify-center items-center max-w-5xl">
        <FadeIn>
          <Image
            src="/assets/gatinho4.png"
            alt="gatinho4"
            width={280}
            height={280}
          />
        </FadeIn>
        <FadeFromRigth onView>
        <h1 className="text-center my-4 text-4xl font-play font-bold md:text-4xl sm:text-2xl">
          Afinal, o que é matemática <p className="inline italic">não</p>{" "}
          problematizadora e o que é matemática problematizadora?
        </h1>
        </FadeFromRigth>
        <FadeIn onView time={0.4}>
          <p className="mt-4 text-xl font-mon font-semibold sm:text-lg sm:p-2 text-left sm:text-center">
            A Matemática Não Problematizadora refere-se a uma abordagem
            tradicional de ensino que se concentra principalmente na transmissão
            de fórmulas e procedimentos sem enfatizar a compreensão profunda dos
            conceitos.
          </p>
          <p className="mt-4 text-xl font-mon font-semibold sm:text-lg sm:p-2 text-left sm:text-center">
            Já a matemática problematizada é uma abordagem de ensino que vai
            além da visão tradicional de uma disciplina &ldquo;exata e
            inquestionável&rdquo;. Em vez de focar apenas em fórmulas e
            procedimentos, essa metodologia busca envolver os alunos em
            situações desafiadoras, nas quais eles são estimulados a questionar,
            explorar e resolver problemas de forma ativa. O cerne dessa
            abordagem reside na desconstrução da ideia de que a matemática é um
            conjunto de regras imutáveis, promovendo a compreensão dos conceitos
            por meio da resolução de desafios contextualizados. A matemática
            problematizadora não apenas ensina os conceitos matemáticos, mas
            também desenvolve habilidades críticas, criativas e autônomas nos
            alunos, preparando-os para enfrentar problemas do mundo real com
            confiança e compreensão mais profunda.
          </p>
        </FadeIn>
        <FadeFromLeft onView>
        <h1 className="text-center my-4 text-4xl font-play font-bold md:text-4xl sm:text-2xl">
          Qual a importância da matemática problematizadora na formação docente?
        </h1>
        </FadeFromLeft>
        <FadeIn onView time={0.4}>
          <Image
            src="/assets/GATO PROF.jpg"
            alt="gatinhoPROF"
            width={280}
            height={280}
            className=""
          />
        </FadeIn>
        <FadeIn onView time={0.4}>
          <p className="mt-4 text-xl font-mon font-semibold sm:text-lg sm:p-2 text-left sm:text-center">
            A importância da matemática problematizada na formação de docentes
            reside na preparação de educadores para um ensino mais envolvente e
            significativo. Ao explorar possibilidades matemáticas em contextos
            históricos e sociais, essa abordagem estimula a participação ativa
            dos alunos na resolução de desafios, promovendo uma compreensão mais
            profunda da matéria. Diferentemente da matemática não
            problematizada, que segue uma abordagem linear e exata, a matemática
            problematizada desafia verdades inquestionáveis, desnaturalizando
            conceitos e incentivando a busca por significados que façam sentido
            para os estudantes.
          </p>
        </FadeIn>
        <FadeIn onView time={0.4}>
          <p className="mt-4 text-xl font-mon font-semibold sm:text-lg sm:p-2 text-left sm:text-center">
            Ao trabalhar com atividades que permitem respostas abertas e
            reconhecendo verdades provisórias, valoriza a autonomia e o
            protagonismo dos pensamentos matemáticos. Assim, essa abordagem não
            apenas ensina a disciplina, mas também promove habilidades críticas,
            criativas e autônomas nos alunos, preparando-os para enfrentar
            desafios complexos no mundo real.
          </p>
        </FadeIn>
        <FadeIn onView time={0.4}>
          <Image
            src="/assets/silly-cat.gif"
            alt="gatinhoPROF"
            width={280}
            height={280}
            className="my-4"
          />
        </FadeIn>
      </div>
    </main>
  );
};

export default MatematicaProblematizada;
