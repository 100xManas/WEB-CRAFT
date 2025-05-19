import React from 'react'

const Email = () => {
  return (
    <div className='flex justify-center items-center'>
         <form action="" className='w-[200px] sm:w-[300px] md:w-[400px] flex bg-white rounded-xl overflow-hidden boxShadow '>
            <input type="email" placeholder='Enter your email' required className='border-none px-4 py-3 md:text-2xl sm:text-xl  outline-none w-[110px] sm:w-[200px] md:w-[250px]'/>
            <button className='bg-[#8b0000] text-white border-none py-3 px-5 md:text-2xl sm:text-xl  sm:font-bold cursor-pointer w-[90px] sm:w-[100px] md:w-[150px]' type='submit'>Subscribe</button>
    </form>
    </div>
  )
}

export default Email
