import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Link from 'next/link';

const BlogPost = () => {
  return (
    <div id='about' className='w-full p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-10'>
            <div className=''>
                <div className='mb-10'>
                    <div className='mb-10 border-b border-gray-300 my-4'>
                        <p className='uppercase text-xl tracking-widest text-[#49f574]'>
                        Monte Carlo Simulations
                        </p>
                        <p className='italic mb-3'>An Introduction</p>
                    </div>
                    <div className='drop-shadow-2xl p-5'>
                        <Image src="/assets/MonteCarlo.png" width='1000px' height='500px' alt='/' />
                    </div>
                </div>
                <p className='py-2 text-gray-600 font-bold'>Introduction</p>
                <p className='py-2 text-gray-600'>
                I have spent the last 12 years in the fire service working as a
                professional firefighter/paramedic. I have always had a knack for
                technology and working with computers. In 2019 I started working
                with HTML and CSS to make some minor edits on a small business
                website that I was operating. What I thought was just a few small
                edits turned into a love for programming.
                </p>
            </div>
        </div>
    </div>
  );
};

export default BlogPost;
