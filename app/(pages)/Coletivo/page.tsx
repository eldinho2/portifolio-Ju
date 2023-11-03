import Image from "next/image";

const Coletivo = () => {
    return (
        <main className="flex font-mon p-10 justify-center items-center md:p-3">
            <div>
                <div className="md:mb-12 mb-12">
                    <h1 className="font-play text-6xl font-semibold py-3 md:text-4xl md:text-center">Trabalho em Grupo:</h1>
                    <div className="flex gap-5 text-lg font-semibold md:flex-col md:justify-center md:items-center">
                        <div className="bg-[#B8CDDB] p-6 w-64 rounded-xl">
                            <h1>aaaaaaaaaaaa</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, rem harum asperiores eveniet quo deleniti, modi sapiente beatae dolore ducimus incidunt dolor expedita. Consequatur, eaque? Id voluptatum ipsam alias earum.</p>
                        </div>
                        <div className="bg-[#F7BB97] p-6 w-64 rounded-xl">
                            <h1>aaaaaaaaaaaa</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, rem harum asperiores eveniet quo deleniti, modi sapiente beatae dolore ducimus incidunt dolor expedita. Consequatur, eaque? Id voluptatum ipsam alias earum.</p>
                        </div>
                        <div className="bg-[#FFD2CC] p-6 w-64 rounded-xl">
                            <h1>aaaaaaaaaaaa</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, rem harum asperiores eveniet quo deleniti, modi sapiente beatae dolore ducimus incidunt dolor expedita. Consequatur, eaque? Id voluptatum ipsam alias earum.</p>
                        </div>
                    </div>
                    <p className="text-center text-lg font-semibold p-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sint officia voluptatum doloremque maiores eius sapiente asperiores debitis voluptatibus hic. Repellendus maxime eos quaerat voluptatem tenetur explicabo fuga vitae dolorem!</p>
                </div>
            </div>
            <div className="mb-20 md:hidden">
                <div className="bg-[#A28B6D] max-w-4xl px-4 pt-4 pb-2">
                    <Image
                        src={'/assets/gatinho5.png'}
                        alt="gatinho"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="bg-[#A28B6D] max-w-4xl px-4 pb-4">
                    <Image
                        src={'/assets/gatinho6.png'}
                        alt="gatinho"
                        width={400}
                        height={400}
                    />
                </div>
                <div className="mt-20">
                    <Image
                        src={'/assets/grupodegatinhos.png'}
                        alt="grupo de gatinhos"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </main>
    )
};

export default Coletivo;