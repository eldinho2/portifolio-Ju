import Image from "next/image"
import {AiFillStar} from "react-icons/ai"
import Wave from "./Wave"

const Header = () => {
    return (
        <header className="bg-[#6C99B6] flex justify-around">
            <div className="">
                <Image
                    src={"/assets/UERJ LOGO.png"}
                    alt="UERJ Logo"
                    width={60}
                    height={60}
                />
            </div>
            <div className="flex align-middle justify-center items-center gap-5">
                <div className="flex items-center gap-1 group hover:text-yellow-500 hover:underline">
                    <div className="flex items-center gap-1">
                        <AiFillStar />
                        <p>Apresentação</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 group hover:text-yellow-500 hover:underline">
                    <div className="flex items-center gap-1">
                        <AiFillStar />
                        <p>Matemática Problematizada</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 group hover:text-yellow-500 hover:underline">
                    <div className="flex items-center gap-1">
                        <AiFillStar />
                        <p>Coletivo</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 group hover:text-yellow-500 hover:underline">
                    <div className="flex items-center gap-1">
                        <AiFillStar />
                        <p>Frações</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 group hover:text-yellow-500 hover:underline">
                    <div className="flex items-center gap-1">
                        <AiFillStar />
                        <p>Preconceitos e a Matemática</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 group hover:text-yellow-500 hover:underline">
                    <div className="flex items-center gap-1">
                        <AiFillStar />
                        <p>considerações Finais</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;