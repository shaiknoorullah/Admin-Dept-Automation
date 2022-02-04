import React from 'react';
import Top from '../img/top.svg'
import{onSignInSubmit,validation} from "./Auth"
// import firebase from "../firebase";


export default function login() {
  //bsdk ye form ka data hai
    // const submit=(e)=>{
    //   e.preventDefault()
    //   const phone=e.target.phone.value;
    //   console.log(phone)
  
  // }
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
              <h2 className='font-gilroy font-semibold text-xl'>Let’s Login, Shall we?
              <span className='font-sofiapro font-light opacity-70 block text-lg'>
                A mobile number here and login.<br />Easee-peezee
              </span>
              </h2>
              </div>
              {/*form*/}
              <div className='grid content-start row-span-2'>
                  <form action="" className='max-w-md mr-auto' onSubmit={onSignInSubmit} >
                      <label htmlFor="" className='block py-2'>Phone Number:</label>
                      <input type="tel" name="mobile" placeholder='Enter Your Number' defaultValue={"+"+91} className='pl-6 pr-44 py-[9px] border-2 rounded-md max-w-md' onChange={validation}/>
                      <button className='block mt-8 bg-[#4165BF] max-w-md mx-auto px-40 py-[9px] rounded-md text-white' id=''>Get OTP</button>
                  </form>
              </div>
          </div>  
      </div>
  </div>;
}



