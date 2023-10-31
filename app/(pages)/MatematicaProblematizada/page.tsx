import React from 'react';
import Image from 'next/image';

const MatematicaProblematizada = () => {
  return (
    <main className='flex justify-evenly items-center mt-10'>
      <div className='flex flex-col max-w-xl'>
        <h1 className='text-center text-4xl font-play font-semibold'>Matemática Problematizada</h1>
        <p className='mt-4 text-xl font-mon'>
ga at id numquam sapiente cumque hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit perferendis quis neque ab dolore illo id. Ex aliquid dolorem inventore molestias quibusdam, dolores placeat quos culpa amet enim ipsa neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, alias ex blanditiis impedit totam saepe aspernatur cum reprehenderit! Consequatur reprehenderit nesciunt vitae culpa dolorem. Labore culpa repellendus nostrum voluptates deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis id nemo libero mollitia, in repudiandae dolorum odio ea quae voluptas esse sequi culpa, illo optio laborum consequatur. Voluptate, in provident.</p>
      </div>
      <div className='flex flex-col justify-center items-center max-w-xl'>
        <Image
          src='/assets/gatinho4.png'
          alt='gatinho4'
          width={280}
          height={280}
         />
        <p className='text-xl font-mon'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi at illo nisi, dolore ea omnis odio doloribus iste dignissimos nemo perspiciatis, adipisci unde ipsam. Alias cum est quidem quam pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sapiente ratione maiores suscipit rem excepturi ut amet sed tempora non? Excepturi vero officiis aliquid amet, necessitatibus maiores ut assumenda corrupti!</p>
      </div>
    </main>
  );
};

export default MatematicaProblematizada;
