import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-10 border-t border-white/10">
      <div className="flex flex-col items-center gap-4">

        {/* Icons */}
        <div className="flex items-center gap-8 text-3xl">
          {/* X (Twitter) */}
          <a href="#" className="hover:opacity-70 transition">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="AirdropFooterIcon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path></svg>
          </a>

          {/* Telegram */}
          <a href="#" className="hover:opacity-70 transition">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="AirdropFooterIcon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>
          </a>
        </div>

        {/* Terms */}
        <a
          href="#"
          className="text-sm text-white/80 hover:text-white transition"
        >
          Terms of Service
        </a>

        {/* Brand Name */}
        <h2 className="text-lg font-semibold tracking-wide text-cyan-300">
          Kɑɑnch Network
        </h2>

        {/* Copyright */}
        <p className="text-sm text-white/70">
          © 2025 Kaanch Labs. &nbsp; All rights reserved
        </p>
      </div>
    </footer>
  );
}
