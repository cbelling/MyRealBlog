import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Link from 'next/link';

const Projects= () => {
  return (
    <div id='projects' className='w-full p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full py-16'>
        <p className='text-xl tracking-widest uppercase text-[#49f574]'>
          Portfolio
        </p>
        <h2 className='py-4'>Check Out My Projects</h2>
        <div className='gap-8'>
          <Link href='/post1'>
          <div className='p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer'>
            <div className='flex flex-row'>
              <div className='m-10 left-0'>
                <Image src={Html} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col justify-center'>
                <h3>Monte Carlo Simulations</h3>
                <p>An introduction to Monte Carlo Simulations</p>
              </div>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
