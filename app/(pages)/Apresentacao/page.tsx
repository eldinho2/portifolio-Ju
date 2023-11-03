import React from 'react';
import Image from 'next/image';

const Apresentação = () => {
  return (
    <main className='flex flex-col justify-center items-center mt-10 md:mt-3'>
        <h1 className='text-8xl font-play py-3 font-bold md:text-4xl sm:text-lg'>
          Apresentação
        </h1>
        <div className='relative z-[40] mb-[100px]'>
          <div className='bg-[#B8CDDB] max-w-4xl p-4 rounded-xl font-mon font-semibold md:max-w-sm sm:max-w-[200px]'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vel eveniet consequuntur quasi ipsam, expedita maiores quisquam enim excepturi hic, laudantium vitae animi, dolor blanditiis ratione magnam quos doloribus. Cum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repudiandae distinctio praesentium maxime expedita dicta quia minus! Doloremque, quaerat, harum fugit debitis hic nam, vitae fugiat consequatur a eius quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex alias asperiores, cupiditate quaerat commodi excepturi atque dolorem possimus nisi. Mollitia iusto corporis debitis at suscipit delectus voluptatibus sint vel voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa cum nisi debitis, autem accusamus sint omnis suscipit, itaque minus explicabo beatae. Eligendi est quaerat praesentium porro velit? Est, aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat animi nesciunt dolorem. Suscipit deleniti laudantium cumque blanditiis adipisci exercitationem quo minima provident mollitia quas! Accusantium quod cumque vero nulla perspiciatis?</p>
          </div>
          <div className='absolute top-[-126px] left-[-11px] -z-30 md:top-[-72px] sm:top-[-32px]'>
            <Image
              src='/assets/gatinho2.png'
              alt='gatinho'
              width={200}
              height={200}
              className='select-none pointer-events-none md:w-[100px] md:h-[100px] sm:w-[50px] sm:h-[50px]'
            />
          </div>
          <div className='absolute top-[-126px] left-[700px] -z-30 md:left-[290px] md:top-[-72px] sm:top-[-37px] sm:left-[158px]'>
            <Image
              src='/assets/gatinho3.png'
              alt='gatinho'
              width={200}
              height={200}
              className='select-none pointer-events-none md:w-[100px] md:h-[100px] sm:w-[50px] sm:h-[50px]'
            />
          </div>
        </div>
    </main>
  );
};

export default Apresentação;
