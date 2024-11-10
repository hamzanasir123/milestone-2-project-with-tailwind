import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
    <>
    <div id='Contact' className='grid sm:grid-cols-2 h-screen '>
    <div className="relative sm:m-20  mt-32">
          <p className="sm:text-5xl text-3xl sm:ml-[100px] ml-[20px] font-bold text-white ">Got a project in</p>
          <p className="sm:text-6xl text-4xl font-bold ml-[20px] sm:ml-[100px] text-[#00ADB5]">mind?</p>
          <Image
            src={"/Vector 186 (1).png"}
            alt='Pic'
            height={169}
            width={112}
            className='absolute mt-6 '
            />
            <Image
            src={"/Ellipse 3.png"}
            alt='Pic'
            height={24}
            width={190}
            className='absolute sm:ml-[195px] ml-[100px] sm:mt-[340px] mt-[240px]'
            />
          <Image 
          src={"/Group 2372.png"}
          alt='Pic'
            height={348}
            width={255}
            className='absolute sm:ml-[200px] h-[250px] sm:h-[348px] sm:w-[255px] w-[200px] ml-[100px]'
          />
            <div className="hidden md:block h-[56px] w-[56px] bg-black mt-[300px]">
        <Link href={"#Footer"}>
          <Image
            src={"/Group 2347.png"}
            width={21}
            height={36}
            alt="Arrow"
            className="ml-4 pt-2"
          />
        </Link>
      </div>
        </div>
        <div className='relative  sm:mt-32 mt-[300px]'>
        <Image
                src={"/keyboard.png"}
                alt='pic'
                height={63}
                width={139}
                className='absolute ml-[70px]'
                />
            <div className='grid sm:grid-cols-2 sm:h-[96px] sm:w-[600px] w-[400px] ml-[40px]'>
                <div>
                <label className='text-white mr-10 font-semibold '>Your Name</label>
                <input type='text' placeholder=' Name' className='mt-2 h-[59px] w-[288px] rounded-xl bg-[#5a5e6483] opacity-75'/>
                </div>
                <div>
                <label className='text-white mr-10 font-semibold '>Your Email</label>
                <input type='email' placeholder=' Email' className='mt-2 h-[59px] w-[288px] rounded-xl bg-[#5a5e6483] opacity-75'/>
                </div>
            </div>
            <div className='ml-[40px]'>
            <label className='text-white mr-10 font-semibold '>Your Message</label>
            <textarea placeholder=' Write message...' className='mt-2 h-[280px] sm:w-[600px] w-[300px] rounded-xl bg-[#5a5e6483] opacity-75'/>
            </div>
            <button className='relative h-[47px] ml-[76px] sm:ml-[37px] w-[232px] rounded-xl mt-4 bg-[#00ADB5] text-white font-semibold'>
                <Image
                src={"/send.png"}
                alt='pic'
                height={24}
                width={24}
                className='absolute ml-[30px] mt-[2px]'
                />
                Send message
            </button>
            <Image
                src={"/mail.png"}
                alt='pic'
                height={49}
                width={68}
                className='absolute ml-[280px]'
                />
        </div>
    </div>
    </>
  )
}

export default Contact