import React from 'react'
import Email from './Email'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
     <div>
      <div className='bg-[#F8F9FD] h-fit sm:m-16 m-4 grid grid-cols-1'>
        <div>
          <h1 className='font-bold text-xl md:text-4xl sm:text-2xl text-center mb-6'>Subscribe to our newsletter</h1>
          <Email/>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
          <section class=" py-16 px-6 md:px-12 lg:px-24">
           <div class="max-w-5xl mx-auto text-center">
             <h2 class="text-2xl sm:text-4xl font-bold text-gray-800 mb-6">ABOUT US</h2>
             <p class="text-lg text-gray-600 mb-8">
               Established in 1995, XYZ College is dedicated to providing quality education and fostering academic excellence.
               With a diverse range of undergraduate and postgraduate programs, our mission is to empower students with
               knowledge, skills, and values to shape the future.
             </p>
           </div>
          </section>
          <section className=" py-12 px-6 md:px-12 lg:px-24">
             <div className="max-w-6xl mx-auto">
               <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">QUICK LINKS</h2>
               <div class=" grid grid-cols-1 gap-6">
                 <a href="#" className="text-gray-700  hover:underline">Admissions</a>
                 <a href="#" className="text-gray-700 hover:underline">Academic Calendar</a>
                 <a href="#" className="text-gray-700  hover:underline">Departments</a>
                 <a href="#" className="text-gray-700  hover:underline">Library</a>
                 <a href="#" className="text-gray-700  hover:underline">Examinations</a>
                 <a href="#" className="text-gray-700  hover:underline">Placements</a>
                 <a href="#" className="text-gray-700  hover:underline">Hostel</a>
                 <a href="#" className="text-gray-700  hover:underline">Contact Us</a>
               </div>
             </div>
           </section>
           <section className=" py-12 px-6 md:px-12 lg:px-24">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">GET IN TOUCH</h2>
               <p className='text-gray-800'><CiLocationOn /> F-2 Chandaka Industrial Estate in front of infocity,Infocity Chandarasekharput, Bhubaneswar, Odisha - 751024</p>
               <br />
              <p className='text-gray-800'><MdOutlineEmail />xyz@collage.ac.in </p>
              <br />
               <p className='text-gray-800'><CiPhone /> +1234567890 </p>
            </div>
             <div className='flex mt-4 gap-3 relative top-5 '>
               <div className='h-[50px] w-[50px] border flex justify-center items-center text-3xl bg-[#8b0000] text-white'>
                  <CiLinkedin />
               </div>
               <div className='h-[50px] w-[50px] border flex justify-center items-center text-3xl bg-[#8b0000] text-white'>
                <CiFacebook />
               </div>
                <div className='h-[50px] w-[50px] border flex justify-center items-center text-3xl bg-[#8b0000] text-white'>
                  <FaWhatsapp />
                </div>
                <div className='h-[50px] w-[50px] border flex justify-center items-center text-3xl bg-[#8b0000] text-white'>
                  <FaInstagram />
                </div>
             </div>
           </section>
        </div>
        <div className='w-full h[2px] border-b-2 mb-10 border-gray-700'></div>
    </div>
     </div>
  )
}

export default Footer
