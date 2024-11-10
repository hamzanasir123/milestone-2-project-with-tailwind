import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <>
    <div id='About' className='grid grid-cols-2'>
        <div className='relative mx-32 my-24 '>
        <Image src={"/Vector 141.png"} alt='pic' width={61} height={46} className='absolute'/>
        <br/>
        <br/>
        <br/>
        <Image src={"/lightbulb.png"} alt='pic' width={57} height={88} className='absolute ml-[400px] '/>
        <span className="text-5xl inline font-bold text-white ">About</span>
        <span className="text-5xl font-bold text-[#00ADB5]">me</span>
        <br/>
        <br/>
        <p className='text-white'>I am a passionate Frontend Developer with a knack for crafting dynamic, user-friendly interfaces. With expertise in HTML, CSS, Typescript, JavaScript, and frameworks like React and Nextjs, I love turning design ideas into responsive, high-performing web applications. My goal is to create seamless digital experiences that blend aesthetics with functionality. I thrive on solving complex challenges, learning new technologies, and staying on top of industry trends. Driven by curiosity and creativity, I am committed to building efficient, accessible, and engaging solutions. Lets connect and bring innovative ideas to life!</p>
        <Image src={"/Vector 186.png"} alt='pic' width={112} height={169} className='absolute ml-[60px]'/>
        <div className="h-[56px] w-[56px] bg-black ml-[270px] mt-[100px]">
        <Link href={"#Work"}>
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
        <div className='relative my-24' >
        <Image
            src={"/doodle items.png"}
            alt="Pic"
            height={499}
            width={565}
            className="absolute mt-20  "
          />
          <Image
            src={"/Ellipse 3.png"}
            alt="Pic"
            height={24}
            width={348}
            className="absolute mt-[535px] ml-[120px]"
          />
          <Image
            src={"/Group 62.png"}
            alt="Pic"
            height={353}
            width={412}
            className="absolute mt-[200px]  ml-[100px]"
          />
          <Image
            src={"/Group 2350.png"}
            alt="Pic"
            height={46}
            width={37}
            className="absolute mt-[210px] ml-[200px]"
          />
        </div>
    </div>
    </>
  )
}

export default About