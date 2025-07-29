
import { FaInstagram, FaGithub, FaLinkedin, FaDiscord, FaDownload } from "react-icons/fa";

import { useRouter } from 'next/navigation';
export default function HeroSection() {


  const router = useRouter();
  return (
    <section className="flex flex-col md:flex-row items-center justify-around md:h-[100vh] py-15 gap-8">
      <div className="space-y-5 max-w-lg">
        <h5 className="text-gray-300 text-sm">Hi I am</h5>
        <h2 className="text-5xl font-bold
        bg-gradient-to-r from-[#f77c0a] via-[#eb4949] to-[#f97316] transparent bg-clip-text text-transparent">Gaurav Kumar</h2>
        <h1 className="text-4xl font-bold">
          <span className="text-orange-500 ">Web </span> Developer | Tech Enthusiast | UI/UX Designer
        </h1>

        <div className="flex gap-8 text-xl mt-10 ">
          <a className="hover:scale-140 hover:text-orange-500 transition-transform " href="https://github.com/Gauravlodhi530" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a className="hover:scale-140 hover:text-orange-500 transition-transform" href="https://www.linkedin.com/in/gaurav-lodhi9090/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a className="hover:scale-140 hover:text-orange-500 transition-transform " href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <FaDiscord />

          </a>
          <a className="hover:scale-140 hover:text-orange-500 transition-transform" href="https://www.instagram.com/_alone__boy__530/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>


        <div className="flex gap-4 mt-4">
          <button onClick={() => router.push('/contact')} className="bg-gradient-to-r from-[#db2777] via-[#ef4444] to-[#f97316] font-bold px-4 py-2 rounded hover:scale-105 transition-transform">Hire Me</button>

          <a
            href="/Gaurav_Kumar_Resume.pdf"
            download
            className="flex items-center gap-2 text-white px-4 py-2 border rounded hover:bg-gray-700 transition ml-3 hover:scale-105"
          >
            <FaDownload />
            Download Resume
          </a>
        </div>

        <div className="flex gap-6 mt-6 text-sm w-full max-w-100 bg-gray-700/80 p-5">
          <div><strong className="text-orange-500 text-xl">5+</strong><p>Experiences</p> <hr className="border-gray-400 " /></div>
          <div><strong className="text-orange-500 text-xl">20+</strong><p>Project done</p> <hr className="border-gray-400" /></div>
          <div><strong className="text-orange-500 text-xl">80+</strong><p>Happy Clients</p> <hr className="border-gray-400" /></div>
        </div>
      </div>

      <div className="mt-8
       md:mt-5">
        <img src="profile photo.jpg" alt="Profile" className="rounded-full w-86 h-85 object-cover bg-red-600" />
      </div>


    </section>
  )
}