import React from 'react';
import Top from '../img/top.svg'
import {validation} from './validate'
import mbbg from '../img/mbbg.svg'
import {onSignInSubmit,getOtpFromUserInput} from './userAuth'
export default function login() {
 
  return <div>
    {/*Left Column for desktop*/}
      <div className='flex flex-row'>
      <div className='bg-[#2455D6] basis-1/2 h-screen flex justify-center items-center'>
              <img src={Top} alt="" className='w-4/5'/>
          </div>
           {/*right Column*/}
          <div className='px-14 grid grid-flow-row gap-0 row-span-2'>
              {/*intro Text*/}
              <div className='grid content-center'>
              <h2 className='font-gilroy font-semibold text-xl'>Let’s Login, Shall we?
              <span className='font-sofiapro font-light opacity-70 block text-lg'>
                A mobile number here and login.<br />Easee-peezee
              </span>
              </h2>
              </div>
              {/*form*/}
              <div className='grid content-start row-span-2'>
                  <form action="" className='max-w-md mr-auto' onSubmit={onSignInSubmit}>
                      <label htmlFor="" className='block py-2'>Phone Number:</label>
                      <input type="tel" name="mobile" id='input' placeholder='Enter Your Number' defaultValue={"+"+91} className='pl-6 pr-44 py-[9px] border-2 rounded-md max-w-md focus:outline-none' onChange={validation}/>
                      <button className=' mt-8 bg-[#4165BF] mx-auto py-[9px] rounded-md text-white disabled:bg-slate-400 transition-colors duration-700 ease-in-out flex items-center justify-center px-[37.9%]  max-w-md' id='recaptcha-container'>
                        <span id='loading' className='hidden'>
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        </span>
                        <span className='hidden' id='tick'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        </span>  
                        <span id='otptext'>
                          Get OTP
                        </span>    
                      </button>
                  </form>
              </div>
          </div>  
      </div>
      {/*For mobile */}
    
  </div>;

}



