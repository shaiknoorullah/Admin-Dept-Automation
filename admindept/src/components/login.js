import React from 'react';
import Top from '../img/top.svg'

export default function login() {
  return <div>
    {/*Left Column*/}
      <div className='flex flex-row'>
      <div className='bg-[#2455D6] basis-1/2 h-screen flex justify-center items-center'>
              <img src={Top} alt="" className='w-4/5'/>
          </div>
           {/*right Column*/}
          <div className='px-14 grid grid-flow-row gap-0 row-span-2'>
              {/*intro Text*/}
              <div className='grid content-center'>
              <h2 className='font-gilroy font-semibold text-2xl'>Let’s Login, Shall we?
              <span className='font-sofiapro font-light opacity-70 block text-lg'>
                A mobile number here and login.<br />Easee-peezee
              </span>
              </h2>
              </div>
              {/*form*/}
              <div className='grid content-start row-span-2'>
                  <form action="" className='max-w-md mr-auto'>
                      <label htmlFor="" className='block py-2'>Phone Number:</label>
                      <input type="tel" placeholder='Enter Your Number' id="phone"className='pl-6 pr-44 py-[9px] border-2 rounded-md max-w-md'/>
                      <button className='block mt-8 bg-[#4165BF] max-w-md mx-auto px-40 py-[9px] rounded-md text-white'>Get OTP</button>
                  </form>
              </div>
          </div>  
      </div>
  </div>;
}

