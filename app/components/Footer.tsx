import Image from "next/image";

const Footer = () => {
  return (
      <footer className="bg-[#6C99B6] flex justify-evenly w-[100%] h-auto items-center">
        <div className="mb-3">
          <Image
            src="/assets/logoffp.png"
            alt="logoFFP"
            width={100}
            height={100}
            className="md:w-[70px] md:h-[60px]"
          />
        </div>
        <div className="font-edu text-base flex gap-2 font-semibold md:text-base sm:text-xs">
          <p>Discente: Julia de Aguiar Dantas Henrique</p>
          <p>Pedagogia</p>
          <p>Segundo semestre de 2023</p>
        </div>
        <div>
          <Image
            src="/assets/gatinha mulher.png"
            alt="gatina mulher"
            width={40}
            height={40}
            className="md:w-[40px] md:h-[30px]"
          />
        </div>
      </footer>
  );
};

export default Footer;
