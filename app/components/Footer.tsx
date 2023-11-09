import Image from "next/image";
import FadeOnScroll from "./FadeOnScroll";

const Footer = () => {
  return (
    <FadeOnScroll direction={"up"}>
      <footer className="bg-[#6C99B6] max-h-24 flex justify-evenly items-center fixed bottom-0 left-0 right-0 z-[100] opacity-1 mx-auto transition-all ease-in-out duration-500">
        <div className="mb-3">
          <Image
            src="/assets/logoffp.png"
            alt="logoFFP"
            width={160}
            height={160}
            className="md:w-[100px] md:h-[70px]"
          />
        </div>
        <div className="font-edu text-xl font-semibold md:text-base sm:text-xs">
          <p>Discente: Julia de Aguiar Dantas Henrique</p>
          <p>Pedagogia</p>
          <p>Segundo semestre de 2023</p>
        </div>
        <div>
          <Image
            src="/assets/gatinha mulher.png"
            alt="gatina mulher"
            width={70}
            height={70}
            className="md:w-[90px] md:h-[80px]"
          />
        </div>
      </footer>
    </FadeOnScroll>
  );
};

export default Footer;
