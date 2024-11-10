import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <>
    <div id='Footer' className='m-20 mt-[500px] sm:mt-[100px]'>
    <hr/>
    <br/>
        <div className='flex flex-wrap px-20 text-center justify-center gap-7 items-center '>
            <Link href={""}>
            <Image
            src={"/Frame 20.png"}
            alt='Home'
            height={47}
            width={108}
            />
            </Link>
            <Link href={"#About"}>
            <Image
            src={"/Frame 21.png"}
            alt='About'
            height={47}
            width={108}
            />
            </Link>
            <Link href={"#Contact"}>
            <Image
            src={"/Frame 22.png"}
            alt='Contact'
            height={47}
            width={108}
            />
            </Link>
        </div>
        <div className='flex flex-wrap justify-center'>
        <Link href={"https://www.facebook.com/profile.php?id=100013306129157&mibextid=kFxxJD"} target='_blank'>
            <Image
            src={"/Frame 24.png"}
            alt='Facebook'
            height={48}
            width={48}
            />
            </Link>
            <Link href={"https://www.instagram.com/hamzaking9531/profilecard/?igsh=NDU1ZHo0M3I4NDg="} target='_blank'>
            <Image
            src={"/Frame 26.png"}
            alt='Insta'
            height={48}
            width={48}
            />
            </Link>
            <Link href={""}>
            <Image
            src={"/Frame 27.png"}
            alt='Twitter'
            height={48}
            width={48}
            />
            </Link>
            <Link href={"https://www.facebook.com/profile.php?id=100013306129157&mibextid=kFxxJD"}>
            <Image
            src={"/Frame 25.png"}
            alt='Youtube'
            height={48}
            width={48}
            />
            </Link>
        </div>
        <div className='flex flex-wrap text-white sm:justify-end justify-center'>
            <Link href={"/Privicy-Policy"} className='underline'>Terms of service - </Link>
            <Link href={"/Privicy-Policy"} className='underline'>Privacy policy</Link>
        </div>
    </div>
    </>
  )
}

export default Footer