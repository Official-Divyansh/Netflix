import React from 'react'
import MediumCard from './MediumCard'

export default function Scroll({cardData}) {
  return (
    <>
        <h1 className='text-white  font-semibold text-2xl'>Trending</h1>
            <div className='flex space-x-3 overflow-scroll scrollbar-hide overflow-y-hidden mt-10 '>

            {
                cardData.map((item, index)=>{
                    return <MediumCard
                    key={index}
                    img={item.img}  />
                })
            }
            </div>
    </>
  )
}
