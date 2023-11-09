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
            <div className="bg-[#F7BB97] p-6 w-80 rounded-xl sm:w-72  ssm:p-2">
              <p>
                No trabalho colaborativo, o processo é mais aberto e os membros
                da equipe interagem para atingir um objetivo compartilhado. Já,
                no trabalho cooperativo, o processo é mais focado no líder e
                monitorado diretamente por ele.
              </p>
            </div>
            <div className="bg-[#FFD2CC] p-6 w-96 rounded-xl sm:w-72  sm:p-2">
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
          <p className="opacity-0 text-center text-lg font-semibold p-6 sm:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            sint officia voluptatum doloremque maiores eius sapiente asperiores
            debitis voluptatibus hic. Repellendus maxime eos quaerat voluptatem
            tenetur explicabo fuga vitae dolorem!
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
            width={400}
            height={400}
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
