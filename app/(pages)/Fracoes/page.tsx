import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Fracoes = () => {
  return (
    <main className='h-full'>
      <section className='flex justify-center items-center mt-10 md:mt-3 md:flex-col'>
        <div className='flex flex-col max-w-xl'>
            <h1 className='text-center text-4xl font-play font-bold'>Frações</h1>
            <p className='mt-4 text-xl font-mon font-semibold md:text-base md:p-4'>
                O QUE É FRAÇÃO
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div className='flex flex-col justify-center items-center max-w-xl gap-9'>
            <Image
            src='/assets/pizza.png'
            alt='pizza'
            width={380}
            height={380}
            className='md:h-[200px] md:w-[300px]'
            />
            <Image
            src='/assets/gatoachorrogato.png'
            alt='gatinho'
            width={400}
            height={400}
            className='md:h-[200px] md:w-[300px]'
            />
        </div>
      </section>
      <section className='flex justify-center items-center gap-10 my-10 md:gap-3 md: p-4'>
        <div>
            <Link href={"https://www.youtube.com/watch?v=M4CvnsO5YD4&ab_channel=DivulgandoVideos"} target='_blank' className='group'>
              <div className='bg-[#6C99B6] hover:bg-[#4c6b81] my-3 rounded-xl px-4 text-center text-xl md:text-base'>
                  Video Do Camelo
              </div>
            </Link>
            <div className='relative'>
                <Image
                    src='/assets/gatonocamelo.png'
                    alt='gatonocamelo'
                    width={300}
                    height={300}
                />
                <div className='absolute top-[188px] right-[-44px] md:top-[60px] md:right-[-10px]'>
                <Image
                    src='/assets/gatonocamelo2.png'
                    alt='gatonocamelo'
                    width={120}
                    height={120}
                    className='md:w-[50px] md:h-[50px] w-[50px] h-[50px]'
                />
                </div>
            </div>
        </div>
        <div className='max-w-2xl text-xl font-mon font-semibold md:text-base'>
            <h1>Lorem ipsum dolor sit amevoluptate in mollitia asperiores accusantium recusandae fugiat, aliquam ullam repellat aliquid ad a nesciunt cumque. Quam placeat eum dicta nostrum.</h1>
        </div>
      </section>
      <section className='flex justify-center items-center gap-4 my-10 md:mb-11 md:gap-2'>
        <div>
          <p className='max-w-xl text-xl font-mon font-semibold md:text-base md:p-4'>
          DOBRADURAS
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className=''>
          <div>
          <Link href={"https://www.youtube.com/watch?v=Pv36xzb-zBU&embeds_referring_euri=https%3A%2F%2Fsites.google.com%2F&source_ve_path=MjM4NTE&feature=emb_title&ab_channel=RoseliceParmegiani "} target='_blank' className='group'>
                <div className='bg-[#6C99B6] hover:bg-[#4c6b81] my-3 rounded-xl px-4 text-center text-xl md:text-base'>
                Fração e Dobraduras
                </div>
          </Link>
          </div>
          <Link href={"https://www.youtube.com/watch?v=Pv36xzb-zBU&embeds_referring_euri=https%3A%2F%2Fsites.google.com%2F&source_ve_path=MjM4NTE&feature=emb_title&ab_channel=RoseliceParmegiani "} target='_blank' className='group'>
          <div className='flex gap-4 mb-20'>
            <Image
                src='/assets/bolodepapel.png'
                alt='bolodepapel'
                width={300}
                height={300}
            />
            <Image
                src='/assets/papel.png'
                alt='papel'
                width={300}
                height={300}
            />
          </div>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Fracoes;
