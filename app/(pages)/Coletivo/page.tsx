import Image from "next/image";

const Coletivo = () => {
  return (
    <main className="flex font-mon p-10 justify-center items-center md:p-3">
      <div>
        <div className="md:mb-12 mb-12">
          <h1 className="font-play text-6xl font-semibold py-3 md:text-4xl md:text-center sm:text-2xl sm:text-center">
            Trabalho em Grupo:
          </h1>
          <div className="flex gap-5 text-lg font-semibold md:flex-col md:justify-center md:items-center sm:justify-center sm:items-center sm:flex-col sm:text-base">
            <div className="bg-[#B8CDDB] p-6 w-80 rounded-xl sm:w-72 sm:p-2">
              <p>
                Durante essa aula, tivemos uma dinamica diferente: O professor
                no fez trabalhar em grupo. Ele gerou perguntas que levavam a
                questionamentos e debates em sala e em grupo, alguns como, “QUEM
                É MAIS IMPORTANTE: PIAGET OU VIGOTSKY?” e “O QUE SIGNIFICA SER
                PROFESSORA NOS ANOS INICIAIS?”. Ele abordou os conceitos de
                trabalhar cooperativamente e colaborativamente, usando o foguete
                de 4 estágios.
              </p>
            </div>
            <div className="bg-[#F7BB97] p-6 w-80 rounded-xl sm:w-72  sm:p-2">
              <p>
                No trabalho colaborativo, o processo é mais aberto e os membros
                da equipe interagem para atingir um objetivo compartilhado. Já,
                no trabalho cooperativo, o processo é mais focado no líder e
                monitorado diretamente por ele.
              </p>
            </div>
            <div className="bg-[#FFD2CC] p-6 w-80 rounded-xl sm:w-72  sm:p-2">
              <h1 className="font-bold text-xl">Tipos de Estágio</h1>
              <div className="flex flex-col gap-3 mt-4">
                <ul className="flex flex-col gap-4">
                  <li>Estágio 1: Concessão = Tempo de fala</li>
                  <li>Estágio 2: Escutar</li>
                  <li>
                    Estágio 3: Reflexão = Pensando sobre as falas e as escutas
                  </li>
                  <li>
                    Estágio 4: Todos devem contribuir = Colaboração de cada
                    integrante com as reflexões que foram geradas no coletivo.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-center text-lg font-semibold p-6 sm:text-base max-w-7xl">
            O trabalho em grupo, por vezes desafiador, é uma experiência crucial
            no desenvolvimento acadêmico e profissional. Nem sempre
            compartilhamos afinidades com nossos colegas, e divergências de
            pensamento podem surgir. No entanto, é fundamental reconhecer a
            importância de trabalhar cooperativamente e colaborativamente para
            alcançar objetivos comuns. Utilizando o modelo do foguete de 4
            estágios, a dinâmica se inicia com a etapa de concessão, concedendo
            tempo para cada participante expressar suas ideias. Segue-se pela
            fase de escuta atenta, onde a compreensão das diferentes
            perspectivas é valorizada. Na etapa de reflexão, cada membro do
            grupo pondera sobre as contribuições, e, por fim, na fase de
            colaboração, todos são incentivados a contribuir para a construção
            coletiva. Essa abordagem promove um ambiente propício para debates
            saudáveis, permitindo a expressão de pensamentos conflitantes e
            diversos, enriquecendo a experiência e fomentando o aprendizado
            mútuo.
          </p>
        </div>
      </div>
      <div className="mb-20 md:hidden sm:hidden">
        <div className="bg-[#A28B6D] max-w-4xl px-4 pt-4 pb-2">
          <Image
            src={"/assets/gatinho5.png"}
            alt="gatinho"
            width={300}
            height={300}
          />
        </div>
        <div className="bg-[#A28B6D] max-w-4xl px-4 pb-4">
          <Image
            src={"/assets/gatinho6.png"}
            alt="gatinho"
            width={300}
            height={300}
          />
        </div>
        <div className="mt-20">
          <Image
            src={"/assets/grupodegatinhos.png"}
            alt="grupo de gatinhos"
            width={300}
            height={300}
          />
        </div>
      </div>
    </main>
  );
};

export default Coletivo;
