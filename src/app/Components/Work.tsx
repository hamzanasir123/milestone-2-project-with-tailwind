"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const projects = [
  { id: 1, title: 'Initial Portfolio', img : 'https://i.pinimg.com/236x/b8/33/1e/b8331ed0fdac3f2aa57a0aeda171295d.jpg' , link: 'https://hamzanasir123portfolio.vercel.app/' },
  { id: 2, title: 'Resume Builder', img : 'https://i.pinimg.com/736x/96/ee/3a/96ee3a5133c8a49748dab7c0616547a1.jpg' , link: 'https://hackathon-1-beta-drab.vercel.app/' },
  { id: 3, title: 'Colour Picker', img: 'https://i.pinimg.com/736x/98/be/da/98beda8fb6b9d1bf3c81d150421a7ac8.jpg' , link: 'https://colours-rosy.vercel.app/' },
  { id: 4, title: 'Possword Generator', img: 'https://i.pinimg.com/736x/a6/59/a3/a659a35a870f8cc0ad564780024711e8.jpg' , link: 'https://possword-generator.vercel.app/' },
  { id: 5, title: 'Currency Converter', img: 'https://i.pinimg.com/736x/03/b7/55/03b7554cb30c285891ffbc7f80ba8462.jpg' , link: 'https://currency-converter-seven-self.vercel.app/' },
  { id: 6, title: 'UI Ecommerce', img: 'https://i.pinimg.com/736x/5f/08/ac/5f08ac7ecd9cf158bdcd43085837f41f.jpg' , link: 'https://manzeil.vercel.app/' },
  { id: 7, title: 'Tic-Tac-Toe', img: 'https://i.pinimg.com/736x/cd/de/a3/cddea39b17378d5fc6eae06d00c6738d.jpg' , link: 'https://tic-tac-toe-six-lovat-56.vercel.app/' },
  { id: 8, title: 'Rock-Paper-Scissor', img: 'https://i.pinimg.com/736x/41/a9/8f/41a98fb3cef655eb56658464a4112f15.jpg' , link: 'https://rock-paper-scissor-five-rust.vercel.app/' },
];

const assignments = [
  { id: 1, title: 'Assignment 1', img : 'https://i.pinimg.com/736x/6d/3d/44/6d3d44a710fdc4682907bf295eedaf8d.jpg' , link: 'https://class01-assignment.vercel.app/' },
  { id: 2, title: 'Assignment 2', img : 'https://i.pinimg.com/736x/b2/f7/e6/b2f7e662bd33ecacd886f410bd516f86.jpg' , link: 'https://class02-assignment.vercel.app/' },
  { id: 3, title: 'Assignment 3', img : 'https://i.pinimg.com/736x/e8/07/10/e80710011bee126be441233d968ceb51.jpg' , link: 'https://class03-assignment-silk.vercel.app/' },
  { id: 4, title: 'Assignment 4', img : 'https://i.pinimg.com/236x/0e/b0/ac/0eb0acafd3ee2f0d51b86a0c62c0b05f.jpg' , link: '/Next.pptx' },
  { id: 5, title: 'Assignment 5', img : 'https://i.pinimg.com/236x/81/a1/35/81a135f4fe8b4d292e405d6825a56db0.jpg' , link: 'https://class05-assignment-two.vercel.app/' },
];

const milestones = [
  { id: 1, title: 'Milestone 1', img : 'https://i.pinimg.com/736x/1e/6c/30/1e6c30eb67af7eb04da5eee429d80de3.jpg' , link: 'https://milestone01-black.vercel.app/' },
  { id: 2, title: 'Milestone 2 Assignment with CSS', img : 'https://i.pinimg.com/736x/1e/6c/30/1e6c30eb67af7eb04da5eee429d80de3.jpg' , link: 'https://milestone02-assignment-with-css.vercel.app/' },
  { id: 3, title: 'Milestone 2 Assignment with Tailwind', img : 'https://i.pinimg.com/736x/1e/6c/30/1e6c30eb67af7eb04da5eee429d80de3.jpg' , link: 'https://milestone02-assignment-with-tailwind.vercel.app/' },
  { id: 4, title: 'Milestone 2 Project with CSS', img : 'https://i.pinimg.com/736x/1e/6c/30/1e6c30eb67af7eb04da5eee429d80de3.jpg' , link: 'https://milestone02-project-with-css.vercel.app/' },
  { id: 5, title: 'Milestone 2 Project with Tailwind', img : 'https://i.pinimg.com/736x/1e/6c/30/1e6c30eb67af7eb04da5eee429d80de3.jpg' , link: 'https://milestone02-vert.vercel.app/' },
];

const uiux = [
  { id: 1, title: 'Positivus', img : 'https://i.pinimg.com/736x/82/7f/8c/827f8c8170a5842d2560da75249117af.jpg' , link: 'https://positivus-lime.vercel.app/' },
];

function Work() {

  const [activeTab, setActiveTab] = useState('Projects')

  return (
    <>
      <div id="Work" className="bg-custom-image w-full">
        <div className="sm:mx-[30px] ">
          <div className="grid grid-rows-1">
            <div className="mx-10 sm:mt-2 mt-10 mb-4 ">
              <span className="sm:text-[64px] text-[30px] font-bold text-white">
                My recent
              </span>
              <span className="sm:text-[64px] text-[30px] font-bold text-[#00ADB5]">
                {" "}
                works
              </span><br/>
              <button onClick={() => setActiveTab('Projects')} className={`font-semibold px-[32px] py-[10px] rounded-[24px] text-white  mt-[30px] ${activeTab === 'Projects' ? 'bg-[#00ADB5]' : '' }`}>
                Projects
              </button>
              <button onClick={() => setActiveTab('Assignments')} className={`font-semibold px-[32px] py-[10px] rounded-[24px] text-white  mt-[30px] ${activeTab === 'Assignments' ? 'bg-[#00ADB5]' : '' }`}>
                Assignments
              </button>
              <button onClick={() => setActiveTab('Milestones')} className={`font-semibold px-[32px] py-[10px] rounded-[24px] text-white  mt-[30px] ${activeTab === 'Milestones' ? 'bg-[#00ADB5]' : '' }`}>
                Milestones
              </button>
              <button onClick={() => setActiveTab('UI/UX')} className={`font-semibold px-[32px] py-[10px] rounded-[24px] text-white  mt-[30px] ${activeTab === 'UI/UX' ? 'bg-[#00ADB5]' : '' }`}>
                UI/UX
              </button>
              </div>
              <div className="mx-10">
              <div className="relative text-center">
              <div className="flex flex-wrap gap-5">
                {activeTab === 'Projects' &&  projects.map((project) => (
                  <div key={project.id} className="sm:h-[280px] sm:w-[368px] w-[140px] sm:p-5 bg-[#5a5e6483] opacity-75 sm:mt-[20px] rounded-2xl">
                  <Link href={project.link ?? '/'} target="_blank">
                  <p className="felx-wrap m-4 sm:m-0 text-white text-center sm:text-xl  font-semibold sm:pt-2">{project.title}</p>
                  <Image
                  src={project.img ?? 'https://i.pinimg.com/736x/96/ee/3a/96ee3a5133c8a49748dab7c0616547a1.jpg'}
                  alt="Project"
                  height={158}
                  width={206}
                  className="sm:ml-16 w-[90px] sm:w-[206px] ml-6 rounded-md m-4 sm:m-0"
                  />
                  </Link>
                </div>
                ))}
                {activeTab === 'Assignments' &&  assignments.map((project) => (
                  <div key={project.id} className="sm:h-[280px] sm:w-[368px] w-[140px] sm:p-5 bg-[#5a5e6483] opacity-75 sm:mt-[20px] rounded-2xl">
                  <Link href={project.link ?? '/'} target="_blank">
                  <p className="felx-wrap m-4 sm:m-0 text-white text-center sm:text-xl  font-semibold sm:pt-2">{project.title}</p>
                  <Image
                  src={project.img ?? 'https://i.pinimg.com/736x/96/ee/3a/96ee3a5133c8a49748dab7c0616547a1.jpg'}
                  alt="Project"
                  height={158}
                  width={206}
                  className="sm:ml-16 w-[90px] sm:w-[206px] rounded-md m-4 sm:m-0"
                  />
                  </Link>
                </div>
                ))}
                {activeTab === 'Milestones' &&  milestones.map((project) => (
                  <div key={project.id} className="sm:h-[280px] sm:w-[368px] w-[140px] sm:p-5 bg-[#5a5e6483] opacity-75 sm:mt-[20px] rounded-2xl">
                  <Link href={project.link ?? '/'} target="_blank">
                  <p className="felx-wrap m-4 sm:m-0 text-white text-center sm:text-xl  font-semibold sm:pt-2">{project.title}</p>
                  <Image
                  src={project.img ?? 'https://i.pinimg.com/736x/96/ee/3a/96ee3a5133c8a49748dab7c0616547a1.jpg'}
                  alt="Project"
                  height={158}
                  width={206}
                  className="sm:ml-16 w-[90px] sm:w-[206px] rounded-md m-4 sm:m-0"
                  />
                  </Link>
                </div>
                ))}
                {activeTab === 'UI/UX' &&  uiux.map((project) => (
                  <div key={project.id} className="sm:h-[280px] sm:w-[368px] w-[140px] sm:p-5 bg-[#5a5e6483] opacity-75 sm:mt-[20px] rounded-2xl">
                  <Link href={project.link ?? '/'} target="_blank">
                  <p className="felx-wrap m-4 sm:m-0 text-white text-center sm:text-xl  font-semibold sm:pt-2">{project.title}</p>
                  <Image
                  src={project.img ?? 'https://i.pinimg.com/736x/96/ee/3a/96ee3a5133c8a49748dab7c0616547a1.jpg'}
                  alt="Project"
                  height={158}
                  width={206}
                  className="sm:ml-16 w-[90px] sm:w-[206px] rounded-md m-4 sm:m-0"
                  />
                  </Link>
                </div>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
