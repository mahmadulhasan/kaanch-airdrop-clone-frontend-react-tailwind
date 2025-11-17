import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed w-full h-15 bg-gradient-to-t from-[#11111130] to-[#111]  z-[999] backdrop-blur-sm flex flex-row items-center justify-around '>
        <a href="/"><img src="https://airdrop.kaanch.com/Images/kaanch-header-logo.png" alt="" className="lg:w-60 w-50" /> </a>

        <div className="absolute  lg:static flex flex-row top-15 left-0 gap-5 whitespace-nowrap w-full lg:w-fit px-2 overflow-x-auto bg-gradient-to-t from-[#11111130] to-[#111111d1] lg:bg-none backdrop-blur-sm lg:backdrop-blur-none ">
            <a href="/bridge" className='cursor-pointer'><span>BRIDGE</span></a>
            <a href="/leaderboard" className="cursor-pointer"><span>LEADERBOARD</span></a>
            <a href="/earn-point"><span>EARN POINTS</span></a>
            <a href="/earn-point#faq"><span>FAQ</span></a>
            <span>ECOSYSTEM</span>
        </div>

        <div className="flex items-center gap-2 text-cyan-500 py-2 md:px-10 px-5 rounded-md bg-[#262323]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet" aria-hidden="true"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
            <span className="">DOWNLOAD</span>
        </div>
      
    </div>
  )
}

export default Navbar
