import React from 'react'
import Nav from '../fisrt/Nav'
import '../fisrt/heder.css'
import Footer from '../fisrt/Footer'
import './login.css'

export default function Login() {
  return (
    <div className='h-[140vh] w-[100%] ' id='bg_image2'>
        <Nav login={false}/>
        <div className='absolute w-[100%] h-[140vh] bg-black opacity-[.4] -z-999'></div>
        <div className='h-[100vh] w-[100%]
        flex items-center justify-center'>
            <div className='bg-[rgba(0,0,0,.7)] 
            relative rounded-lg w-[80vw] md:w-[50vw] h-[80vh] z-999 flex flex-col items-center'>
                <h1 className='text-white font-bold text-2xl mr-[30%] mt-[10%]'>Sign In</h1>
            <input placeholder="Email or Phone Number" id="login-input" type="text"  />
          
           <input placeholder="Password" id="login-input" type="text" />
           <button id="login-input" className='!bg-red-600'>Sign In</button>
                            
            </div>
        </div>
        <hr></hr>
        <Footer blur={true} />
    </div>
  )
}
