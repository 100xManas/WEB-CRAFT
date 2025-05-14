import React from 'react'
import bgimg from '../assets/bghome.jpg' 

const HeroSection = () => {
  return (
    <div className='  h-[45rem] '>


    <div className=' bg-cover bg-center bg-no-repeat w-auto h-full py-8 px-4  mask-b-from-50%' 
     style={{ backgroundImage: `url(${bgimg})` }}
    >

        <div className=' h-full flex flex-col gap-14 sm:gap-60 md:gap-72 xl:gap-96 '>

            <div className='  flex flex-col items-center '   >
               <div className='  '><h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center  mx-auto md:max-w-[40rem] font-semibold  text-stone-500' >Welcome to the next-gen education</h1></div>
               {/* <div className=' bg-yellow-700 '><p>Lorem ipsum dolor sit amet consectetur elementum aliquam massa viverra aliquet sed nisl lorem id non.Lorem lorem Lorem ipsum dolor sit amet consectetur elementum aliquam massa viverra aliquet sed nisl lorem id non.Lorem lorem</p></div> */}
            </div>

            <div className='h-[10rem]'>
              
            </div>

        </div>

    </div>


    </div>
  )
}

export default HeroSection