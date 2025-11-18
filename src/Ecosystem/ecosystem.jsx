import React from "react";

const Ecosystem = () => {
  return (
    <main className=" flex flex-col gap-10 pt-30 md:pt-0 pb-30 ">
      <div className="relative flex flex-col gap-5 h-screen items-center justify-center">
        <center className="text-6xl">Where Ideas Meet Innovation</center>
        <center className="text-6xl">The Kaanch DApp Ecosystem</center>
        <center>The Center Community</center>

        <center className="">
          {" "}
          <span className="py-1 px-3 rounded-md text-lg bg-[radial-gradient(circle,rgba(5,252,228,0.55)_0%,rgba(66,66,66,1)_100%)] hover:bg-[radial-gradient(circle,rgba(5,252,228,1)_0%,rgba(43, 39, 39, 1)_100%)]">
            Add Your Dapp
          </span>
        </center>

        <video
          src="https://asset-cdn.kaanch.com/compressed/projectVid2.mp4"
          loop
          autoPlay
          preload="auto"
          muted
          className="absolute -z-10 top-0 right-0  h-screen"
        ></video>
      </div>

      <div className="flex flex-col gap-2 min-[1440px]:px-60 md:px-25 px-5">
        <div className="w-full bg-[#151515] flex gap-1 items-center text-amber-300 rounded-md py-2 px-5">
          <img alt="" class="h-[25px]" src="https://airdrop.kaanch.com/Images/warning.png"/>
          <span className="text-sm text-amber-300">
            Warning. These are third-party applications and interacting with
            them carries risks. Please DYOR and do not engage in activities you
            are unfamiliar with.
          </span>
        </div>

        <div className="w-full bg-[#151515] rounded-xl flex md:flex-row flex-col gap-5 justify-center p-5">
          <img
            src="https://kaanchswap.com/og.png"
            alt=""
            className="rounded-xl min-[1440px]:max-h-[350px] md:h-[50vw]"
          />
          <div className="flex flex-col items-center gap-1">
            <img
              src="https://pbs.twimg.com/profile_images/1678313558268862464/D6M_XMll_400x400.jpg"
              alt=""
              className="h-[150px] w-[150px] rounded-xl"
            />
            <center>Kaanch Swap</center>
            <center className="text-sm text-light">
              KaanchSwap | Swap, Trade & Earn on Kaanch Network.
            </center>
            <div className="flex gap-1">
              <span className=" bg-gray-800 p-1 rounded-full">🔗</span>
              <svg
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="XIcon"
                className="h-[30px] bg-gray-800 p-2 rounded-full"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
              <svg
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="TelegramIcon"
                className="h-[30px] bg-gray-800 p-2 rounded-full"
              >
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <div class="relative bg-[#111] rounded-xl p-4 border border-gray-800 text-white flex flex-col items-center gap-4 shadow-lg">
            <div class="absolute px-5 top-5 w-full flex justify-between">
              <span class="px-3 py-1 bg-cyan-400 text-black text-xs rounded-md font-semibold">
                TOOL
              </span>
              <span class="px-3 py-1 bg-cyan-400 text-black text-xs rounded-md font-semibold">
                LIVE
              </span>
            </div>

            <img
              src="https://imagedelivery.net/Hmjne07Y1S81LRfiFynxGA/8cc78bb1-2022-47e5-0d04-4b4d84f9ab00/public"
              alt="Kaanch Banner"
              class="  w-full rounded-lg object-cover"
            />

            <div class="-mt-10">
              <img
                src="https://imagedelivery.net/Hmjne07Y1S81LRfiFynxGA/8cc78bb1-2022-47e5-0d04-4b4d84f9ab00/public"
                alt="Kaanch Small Logo"
                class="w-14 h-14 rounded-lg border-3 border-gray-700 shadow-md"
              />
            </div>

            <div class="text-center px-2">
              <h2 class="text-lg font-semibold tracking-wide">
                KAANCH DOMAIN NAME SERVICE
              </h2>
              <p class="text-[12px] text-gray-300 mt-1 leading-relaxed">
                KAANCH DOMAINS : YOUR IDENTITY ACROSS ALL YOUR KAANCH NETWORK
                AND DECENTRALISED WEBSITE.
              </p>
            </div>

            <div class="flex items-center justify-center gap-5 mt-2 text-gray-400 text-xl">
              <i class="ri-link"></i>
              <i class="ri-close-circle-line"></i>
              <i class="ri-telegram-fill"></i>
              <i class="ri-gamepad-line"></i>
            </div>
          </div>
          <div class="relative bg-[#111] rounded-xl p-4 border border-gray-800 text-white flex flex-col items-center gap-4 shadow-lg">
            <div class="absolute px-5 top-5 w-full flex justify-between">
              <span class="px-3 py-1 bg-cyan-400 text-black text-xs rounded-md font-semibold">
                TOOL
              </span>
              <span class="px-3 py-1 bg-cyan-400 text-black text-xs rounded-md font-semibold">
                LIVE
              </span>
            </div>

            <img
              src="https://imagedelivery.net/Hmjne07Y1S81LRfiFynxGA/8cc78bb1-2022-47e5-0d04-4b4d84f9ab00/public"
              alt="Kaanch Banner"
              class="  w-full rounded-lg object-cover"
            />

            <div class="-mt-10">
              <img
                src="https://imagedelivery.net/Hmjne07Y1S81LRfiFynxGA/8cc78bb1-2022-47e5-0d04-4b4d84f9ab00/public"
                alt="Kaanch Small Logo"
                class="w-14 h-14 rounded-lg border-3 border-gray-700 shadow-md"
              />
            </div>

            <div class="text-center px-2">
              <h2 class="text-lg font-semibold tracking-wide">
                KAANCH DOMAIN NAME SERVICE
              </h2>
              <p class="text-[12px] text-gray-300 mt-1 leading-relaxed">
                KAANCH DOMAINS : YOUR IDENTITY ACROSS ALL YOUR KAANCH NETWORK
                AND DECENTRALISED WEBSITE.
              </p>
            </div>

            <div class="flex items-center justify-center gap-5 mt-2 text-gray-400 text-xl">
              <i class="ri-link"></i>
              <i class="ri-close-circle-line"></i>
              <i class="ri-telegram-fill"></i>
              <i class="ri-gamepad-line"></i>
            </div>
          </div>
          <div class="relative bg-[#111] rounded-xl p-4 border border-gray-800 text-white flex flex-col items-center gap-4 shadow-lg">
            <div class="absolute px-5 top-5 w-full flex justify-between">
              <span class="px-3 py-1 bg-cyan-400 text-black text-xs rounded-md font-semibold">
                TOOL
              </span>
              <span class="px-3 py-1 bg-cyan-400 text-black text-xs rounded-md font-semibold">
                LIVE
              </span>
            </div>

            <img
              src="https://imagedelivery.net/Hmjne07Y1S81LRfiFynxGA/8cc78bb1-2022-47e5-0d04-4b4d84f9ab00/public"
              alt="Kaanch Banner"
              class="  w-full rounded-lg object-cover"
            />

            <div class="-mt-10">
              <img
                src="https://imagedelivery.net/Hmjne07Y1S81LRfiFynxGA/8cc78bb1-2022-47e5-0d04-4b4d84f9ab00/public"
                alt="Kaanch Small Logo"
                class="w-14 h-14 rounded-lg border-3 border-gray-700 shadow-md"
              />
            </div>

            <div class="text-center px-2">
              <h2 class="text-lg font-semibold tracking-wide">
                KAANCH DOMAIN NAME SERVICE
              </h2>
              <p class="text-[12px] text-gray-300 mt-1 leading-relaxed">
                KAANCH DOMAINS : YOUR IDENTITY ACROSS ALL YOUR KAANCH NETWORK
                AND DECENTRALISED WEBSITE.
              </p>
            </div>

            <div class="flex items-center justify-center gap-5 mt-2 text-gray-400 text-xl">
              <i class="ri-link"></i>
              <i class="ri-close-circle-line"></i>
              <i class="ri-telegram-fill"></i>
              <i class="ri-gamepad-line"></i>
            </div>
          </div>
          <div class="relative bg-[#111] rounded-xl p-4 border border-gray-800 text-white flex flex-col items-center gap-4 shadow-lg">
            <div class="absolute px-5 top-5 w-full flex justify-between">
              <span class="px-3 py-1 bg-cyan-400 text-black text-xs rounded-md font-semibold">
                TOOL
              </span>
              <span class="px-3 py-1 bg-cyan-400 text-black text-xs rounded-md font-semibold">
                LIVE
              </span>
            </div>

            <img
              src="https://imagedelivery.net/Hmjne07Y1S81LRfiFynxGA/8cc78bb1-2022-47e5-0d04-4b4d84f9ab00/public"
              alt="Kaanch Banner"
              class="  w-full rounded-lg object-cover"
            />

            <div class="-mt-10">
              <img
                src="https://imagedelivery.net/Hmjne07Y1S81LRfiFynxGA/8cc78bb1-2022-47e5-0d04-4b4d84f9ab00/public"
                alt="Kaanch Small Logo"
                class="w-14 h-14 rounded-lg border-3 border-gray-700 shadow-md"
              />
            </div>

            <div class="text-center px-2">
              <h2 class="text-lg font-semibold tracking-wide">
                KAANCH DOMAIN NAME SERVICE
              </h2>
              <p class="text-[12px] text-gray-300 mt-1 leading-relaxed">
                KAANCH DOMAINS : YOUR IDENTITY ACROSS ALL YOUR KAANCH NETWORK
                AND DECENTRALISED WEBSITE.
              </p>
            </div>

            <div class="flex items-center justify-center gap-5 mt-2 text-gray-400 text-xl">
              <i class="ri-link"></i>
              <i class="ri-close-circle-line"></i>
              <i class="ri-telegram-fill"></i>
              <i class="ri-gamepad-line"></i>
            </div>
          </div>
          <div class="relative bg-[#111] rounded-xl p-4 border border-gray-800 text-white flex flex-col items-center gap-4 shadow-lg">
            <div class="absolute px-5 top-5 w-full flex justify-between">
              <span class="px-3 py-1 bg-cyan-400 text-black text-xs rounded-md font-semibold">
                TOOL
              </span>
              <span class="px-3 py-1 bg-cyan-400 text-black text-xs rounded-md font-semibold">
                LIVE
              </span>
            </div>

            <img
              src="https://imagedelivery.net/Hmjne07Y1S81LRfiFynxGA/8cc78bb1-2022-47e5-0d04-4b4d84f9ab00/public"
              alt="Kaanch Banner"
              class="  w-full rounded-lg object-cover"
            />

            <div class="-mt-10">
              <img
                src="https://imagedelivery.net/Hmjne07Y1S81LRfiFynxGA/8cc78bb1-2022-47e5-0d04-4b4d84f9ab00/public"
                alt="Kaanch Small Logo"
                class="w-14 h-14 rounded-lg border-3 border-gray-700 shadow-md"
              />
            </div>

            <div class="text-center px-2">
              <h2 class="text-lg font-semibold tracking-wide">
                KAANCH DOMAIN NAME SERVICE
              </h2>
              <p class="text-[12px] text-gray-300 mt-1 leading-relaxed">
                KAANCH DOMAINS : YOUR IDENTITY ACROSS ALL YOUR KAANCH NETWORK
                AND DECENTRALISED WEBSITE.
              </p>
            </div>

            <div class="flex items-center justify-center gap-5 mt-2 text-gray-400 text-xl">
              <i class="ri-link"></i>
              <i class="ri-close-circle-line"></i>
              <i class="ri-telegram-fill"></i>
              <i class="ri-gamepad-line"></i>
            </div>
          </div>
          <div class="relative bg-[#111] rounded-xl p-4 border border-gray-800 text-white flex flex-col items-center gap-4 shadow-lg">
            <div class="absolute px-5 top-5 w-full flex justify-between">
              <span class="px-3 py-1 bg-cyan-400 text-black text-xs rounded-md font-semibold">
                TOOL
              </span>
              <span class="px-3 py-1 bg-cyan-400 text-black text-xs rounded-md font-semibold">
                LIVE
              </span>
            </div>

            <img
              src="https://imagedelivery.net/Hmjne07Y1S81LRfiFynxGA/8cc78bb1-2022-47e5-0d04-4b4d84f9ab00/public"
              alt="Kaanch Banner"
              class="  w-full rounded-lg object-cover"
            />

            <div class="-mt-10">
              <img
                src="https://imagedelivery.net/Hmjne07Y1S81LRfiFynxGA/8cc78bb1-2022-47e5-0d04-4b4d84f9ab00/public"
                alt="Kaanch Small Logo"
                class="w-14 h-14 rounded-lg border-3 border-gray-700 shadow-md"
              />
            </div>

            <div class="text-center px-2">
              <h2 class="text-lg font-semibold tracking-wide">
                KAANCH DOMAIN NAME SERVICE
              </h2>
              <p class="text-[12px] text-gray-300 mt-1 leading-relaxed">
                KAANCH DOMAINS : YOUR IDENTITY ACROSS ALL YOUR KAANCH NETWORK
                AND DECENTRALISED WEBSITE.
              </p>
            </div>

            <div class="flex items-center justify-center gap-5 mt-2 text-gray-400 text-xl">
              <i class="ri-link"></i>
              <i class="ri-close-circle-line"></i>
              <i class="ri-telegram-fill"></i>
              <i class="ri-gamepad-line"></i>
            </div>
          </div>

          <link
            href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
            rel="stylesheet"
          ></link>
        </div>
      </div>
    </main>
  );
};

export default Ecosystem;
