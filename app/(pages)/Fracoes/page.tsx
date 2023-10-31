import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Fracoes = () => {
  return (
    <main className='h-full'>
      <section className='flex justify-center items-center mt-10'>
        <div className='flex flex-col max-w-xl'>
            <h1 className='text-center text-4xl font-play font-bold'>Frações</h1>
            <p className='mt-4 text-xl font-mon font-semibold'>
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
            />
            <Image
            src='/assets/gatinho7.png'
            alt='gatinho'
            width={150}
            height={150}
            className='object-cover'
            />
        </div>
      </section>
      <section className='flex justify-center items-center gap-10 my-10'>
        <div>
            <Link href={"https://www.youtube.com/watch?v=M4CvnsO5YD4&ab_channel=DivulgandoVideos"} target='_blank' className='group'>
              <div className='bg-[#6C99B6] hover:bg-[#4c6b81] my-3 rounded-xl px-4 text-center text-xl'>
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
                <div className='absolute top-[188px] right-[-44px]'>
                <Image
                    src='/assets/gatonocamelo2.png'
                    alt='gatonocamelo'
                    width={120}
                    height={120}
                />
                </div>
            </div>
        </div>
        <div className='max-w-2xl text-xl font-mon font-semibold'>
            <h1>Lorem ipsum dolor sit amevoluptate in mollitia asperiores accusantium recusandae fugiat, aliquam ullam repellat aliquid ad a nesciunt cumque. Quam placeat eum dicta nostrum.</h1>
        </div>
      </section>
      <section className='flex justify-center items-center gap-4 my-10'>
        <div>
          <p className='max-w-xl text-xl font-mon font-semibold'>
          DOBRADURAS
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <div>
          <Link href={"https://www.youtube.com/watch?v=Pv36xzb-zBU&embeds_referring_euri=https%3A%2F%2Fsites.google.com%2F&source_ve_path=MjM4NTE&feature=emb_title&ab_channel=RoseliceParmegiani "} target='_blank' className='group'>
                <div className='bg-[#6C99B6] hover:bg-[#4c6b81] my-3 rounded-xl px-4 text-center text-xl'>
                Fração e Dobraduras
                </div>
          </Link>
          </div>
          <Link href={"https://www.youtube.com/watch?v=Pv36xzb-zBU&embeds_referring_euri=https%3A%2F%2Fsites.google.com%2F&source_ve_path=MjM4NTE&feature=emb_title&ab_channel=RoseliceParmegiani "} target='_blank' className='group'>
          <div className='flex gap-4'>
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
