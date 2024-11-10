import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <>
      <div className="grid grid-cols-2 ">
        <div className="relative m-20 mt-32">
          <Image
            src={"/Vector 187.png"}
            alt='Pic'
            height={201}
            width={69}
            className='absolute mt-6 '
            />
          <p className="text-7xl ml-[100px] font-bold text-white ">FRONTEND</p>
          <p className="text-7xl font-bold ml-[100px] text-[#00ADB5]">DEVELOPER</p>
          <br />
          <br />
          <Link
            href={"https://www.linkedin.com/in/hamza-nasir-bb02142b5/"}
            target="_blank"
            className="bg-[#00ADB5] ml-[100px] text-white font-bold p-1 rounded-3xl px-2"
          >
            Hire me
          </Link>
          <Link href={"https://hackathon-1-beta-drab.vercel.app/"} target="_blank" className="bg-[#0a0a0a] ml-5 text-white font-bold p-1 rounded-3xl px-5">
            Download CV
          </Link>
        </div>
        <div className="relative ml-[50px]">
          <Image
            src={"/doodles mixed round.png"}
            alt="Pic"
            height={514}
            width={514}
            className="absolute mt-20 "
          />
          <Image
            src={"/Ellipse 3.png"}
            alt="Pic"
            height={24}
            width={348}
            className="absolute mt-[520px]"
          />
          <Image
            src={"/Group 2346.png"}
            alt="Pic"
            height={470}
            width={400}
            className="absolute mt-40"
          />
        </div>
      </div>
      <div className="h-[56px] w-[56px] bg-black ml-[400px] mt-[100px]">
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
