import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <>
      <div className="grid sm:grid-cols-2">
        <div className="relative sm:m-20 sm:mt-32 mt-5">
          <Image
            src={"/Vector 187.png"}
            alt='Pic'
            height={201}
            width={69}
            className='absolute mt-6 h-[100px] w-[40px] sm:h-[201px] sm:w-[69px] ml-[30px] sm:ml-[0px]'
            />
          <p className="sm:text-7xl text-2xl ml-[100px] font-bold text-white ">FRONTEND</p>
          <p className="sm:text-7xl text-2xl font-bold ml-[100px] text-[#00ADB5]">DEVELOPER</p>
          <br />
          <Link
            href={"https://www.linkedin.com/in/hamza-nasir-bb02142b5/"}
            target="_blank"
            className="bg-[#00ADB5] ml-[100px] text-white font-bold p-1 rounded-3xl sm:px-2 "
          >
            Hire me
          </Link>
          <Link href={"https://hackathon-1-beta-drab.vercel.app/"} target="_blank" className="bg-[#0a0a0a] sm:ml-5 ml-2 text-white font-bold p-1 rounded-3xl sm:px-5 px-2">
            Download CV
          </Link>
        </div>
        <div className="relative sm:ml-[50px] mx-5 sm:mx-0">
          <Image
            src={"/doodles mixed round.png"}
            alt="Pic"
            height={514}
            width={514}
            className="absolute sm:mt-20 mt-10"
          />
          <Image
            src={"/Ellipse 3.png"}
            alt="Pic"
            height={24}
            width={348}
            className="absolute sm:mt-[540px] mt-[350px] sm:ml-[100px] ml-[0px]"
          />
          <Image
            src={"/Group 2346.png"}
            alt="Pic"
            height={470}
            width={400}
            className="absolute mt-44 w-[200px] sm:w-[400px] ml-[100px]"
          />
        </div>
      </div>
      <div className="hidden md:block h-[56px] w-[56px] bg-black sm:ml-[400px] mt-[100px]">
        <Link href={"#About"}>
          <Image
            src={"/Group 2347.png"}
            width={21}
            height={36}
            alt="Arrow"
            className="ml-4 pt-2"
          />
        </Link>
      </div>
    </>
  );
}

export default Hero;
