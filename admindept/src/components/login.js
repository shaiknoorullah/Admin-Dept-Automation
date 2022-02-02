import React from 'react';
import Bg from '../img/bg.svg'

export default function login() {
  return <div>
      <div className='absolute px-4 text-white h-full '>
      <div className='text-center w-1/2 font-gilroy font-semibold text-lg'>
      Made for students, By the students.
      </div>
      <div className='w-1/2 text-center font-sofiapro font-light text-[#cfddff]'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam nunc, rhoncus nibh vitae at nulla ultricies. Tempor, in integer egestas adipiscing pharetra vestibulum
      </div>
      </div>
      <div>
      <img src={Bg} alt=""  className='h-screen'/>
      </div>
  </div>;
}

