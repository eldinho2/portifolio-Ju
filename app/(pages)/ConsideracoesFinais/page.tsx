import Image from "next/image";

const ConsideracoesFinais = () => {
  return (
    <main className="flex justify-center items-center flex-col mt-28 mb-11">
      <section className="bg-[#F7BB97] z-100 relative max-w-5xl p-4 text-center rounded-lg md:max-w-xs md:my-14 sm:w-72 sm:my-10  ">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-play font-bold text-5xl md:text-3xl sm:text-2xl">
            Considerações Finais
          </h1>
          <p className="text-lg font-semibold md:text-base sm:text-base">
            O semestre foi intenso, mas valioso. Sinto que experimentei uma
            transformação significativa e absorvi conhecimento de maneiras
            inesperadas. Confesso que, ao contrário do meu irmão, não sou
            entusiasta da matemática, talvez devido à abordagem tradicional que
            tive durante toda minha educação ou a uma possível aversão
            intrínseca. <br /> No entanto, ao longo das aulas, pude realizar
            reflexões profundas e aprender de forma significativa. Minha meta
            atual é atuar na pedagogia social e na Educação de Jovens e Adultos.
            Ambas as áreas, assim como muitas outras, frequentemente são
            negligenciadas e deixadas à margem, inclusive nos contextos
            matemáticos, perpetuando uma estrutura de opressão contínua em
            relação aos alunos. Para alguém que aspira trabalhar nesse campo, a
            oportunidade de aprofundar meus conhecimentos sobre a matemática
            problematizadora e desconstruir anos de opressão não foi e não é uma
            tarefa simples, mas sem dúvida, esta disciplina desempenhou um papel
            crucial nesse processo. <br /> Ao refletir sobre tudo que absorvi e
            aprendi, me sinto mais preparada para romper com o ciclo da
            matemática não problematizadora e opressiva. Esta matéria me deu
            aprendizagens valiosos, me dando ferramentas para desafiar as
            estruturas tradicionais e promover uma abordagem mais inclusiva e
            significativa no ensino da matemática. Acredito que, ao incorporar
            esses aprendizados em minha prática futura, poderei contribuir para
            a construção de um ambiente educacional mais justo e libertador.{" "}
            <br />
          </p>
          <span className="text-lg font-bold md:text-base sm:text-base">
            &ldquo;A educação é a arma mais poderosa que você pode usar para
            mudar o mundo.&ldquo; - Nelson Mandela&ldquo;
          </span>
        </div>
        <div className="absolute -z-10 pt-14 top-[-155px] left-[100px] sm2:top-[-130px] sm2:left-[1px] md:top-[-120px] md:left-[26px]">
          <Image
            src="/assets/gato de oculos.png"
            alt="gato"
            width={100}
            height={100}
            className="sm2:h-20 sm2:w-20 md:h-16 md:w-16"
          />
        </div>
        <div className="pt-1 absolute -z-10 top-[-155px] left-[400px] sm2:top-[-110px] sm2:left-[80px] md:top-[-110px] md:left-[96px]">
          <Image
            src="/assets/gangue de cachorros.jpg"
            alt="gangue"
            width={200}
            height={200}
            className="sm2:h-28 sm2:w-28 md:h-28 md:w-28"
          />
        </div>
        <div className="pt-1 absolute -z-10 top-[-119px] left-[821px] sm2:top-[-75px] sm2:left-[210px] md:top-[-80px] md:left-[230px]">
          <Image
            src="/assets/engravatado.png"
            alt="gangue"
            width={115}
            height={115}
            className="sm2:h-20 sm2:w-20 md:h-20 md:w-20"
          />
        </div>
      </section>
    </main>
  );
};

export default ConsideracoesFinais;
