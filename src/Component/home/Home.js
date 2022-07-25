import React from 'react'
import Logo from '../fisrt/Logo.svg'
import MediumCard from './MediumCard'
import Scroll from './Scroll'
import './home.css'

export default function Home() {
   const cardData = [
    {
        img: 'https://wallpapercave.com/wp/wp1839584.jpg',
        title: 'title'
    },
    {
        img: 'https://wallpapercave.com/wp/wp1854629.png',
        title: 'title'
    },
    {
        img: 'https://wallpapercave.com/wp/wp6581266.jpg',
        title: 'title'
    },
    {
        img: 'https://wallpapercave.com/wp/wp6581266.jpg',
        title: 'title'
    },
    {
        img: 'https://wallpapercave.com/wp/wp6581266.jpg',
        title: 'title'
    },
   ]
    return (
            <>
            <div className='bg-black'>

        <div >

            <nav className=' bg-gradient-to-b from-black to-gray-900  flex items-center justify-between h-[10vh]'>
                <ul className='flex items-center text-white ml-8'>
                    <img src={Logo} className='w-[25%] sm:w-[10%] ' />
                    <li className='ml-4 hidden sm:inline'>Home</li>
                    <li className='ml-4 hidden sm:inline'>Trending</li>
                    <li className='ml-4 hidden sm:inline'>Movies</li>
                    <li className='ml-4 hidden sm:inline'>My List</li>
                </ul>

                <div className='text-white mt-4 mr-8'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-8 " fill="none" viewdiv="0 0 24 24" stroke="white" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                    </div>
            </nav>

            <div className='relative h-[40vh] sm:h-[75vh] w-[100%] overflow-hidden z-10'>
            <div className='w-[100%] h-[75vh] absolute  bg-gradient-to-t from-black to-transparent-500 z-40 '></div>
            <div className='absolute w-[40%] md:w-[30%] sm:left-[10%] md:top-[25%] top-[30%] left-[10%] z-50'>
                <h1 className='text-white font-semibold text-xl md:text-3xl '>The Witcher</h1>
                <p className=' text-green-300 text-md md:text-base' id='glow'>94% liked</p>
                <p className='hidden sm:block text-white font-light text-xs md:text-sm xl:text-xl'>The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.Witchers are once-normal humans who got mutated by a combination of medieval science and magic, which made them superhuman.</p>
                   
            </div>
                <img src='https://wallpapercave.com/wp/wp1854629.png' width='100%' />
            </div>
           
        </div>
            <Scroll cardData={cardData} />
            <Scroll cardData={cardData} />
            <Scroll cardData={cardData} />
            <Scroll cardData={cardData} />
            </div>
            </>
    )
}
