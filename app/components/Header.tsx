import Image from "next/image"
import {AiFillStar} from "react-icons/ai"

const Header = () => {
    return (
        <header className="bg-[#6C99B6] flex justify-around h-16">
            <div className="cursor-pointer">
                <Image
                    src={"/assets/UERJ LOGO.png"}
                    alt="UERJ Logo"
                    width={60}
                    height={60}
                />
            </div>
            <div className="flex align-middle justify-center items-center gap-5">
                <div className="flex items-center gap-1 group hover:text-yellow-500 hover:underline">
                    <div className="flex items-center gap-1 cursor-pointer">
                        <AiFillStar />
                        <p>Apresentação</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 group hover:text-yellow-500 hover:underline">
                    <div className="flex items-center gap-1 cursor-pointer">
                        <AiFillStar />
                        <p>Matemática Problematizada</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 group hover:text-yellow-500 hover:underline">
                    <div className="flex items-center gap-1 cursor-pointer">
                        <AiFillStar />
                        <p>Coletivo</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 group hover:text-yellow-500 hover:underline">
                    <div className="flex items-center gap-1 cursor-pointer">
                        <AiFillStar />
                        <p>Frações</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 group hover:text-yellow-500 hover:underline">
                    <div className="flex items-center gap-1 cursor-pointer">
                        <AiFillStar />
                        <p>Preconceitos e a Matemática</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 group hover:text-yellow-500 hover:underline">
                    <div className="flex items-center gap-1 cursor-pointer">
                        <AiFillStar />
                        <p>considerações Finais</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;