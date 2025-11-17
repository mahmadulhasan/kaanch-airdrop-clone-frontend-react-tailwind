import React from "react";
import Timecount from "./timecount";
import Faq from "./faq";

const Earnpoint = () => {
  return (
    <div className="flex flex-col gap-10 pt-30 md:pt-0 pb-30 lg:px-30 md:px-15 px-5">
      <div className="relative w-full flex flex-col md:flex-row items-center justify-center md:h-screen px-5 md:px-10 lg:px-20 gap-10 md:gap-0">
        {/* LEFT TEXT SECTION */}
        <div className="w-full flex flex-col gap-4 z-10 lg:max-w-[450px] md:max-w-[380px]">
          <span className="lg:text-8xl md:text-6xl text-6xl font-extrabold text-cyan-300 leading-none text-ibm">
            KAANCH
          </span>

          <span className="md:text-[2.8vw] lg:text-[2.4vw] text-[5vw] font-semibold md:whitespace-nowrap leading-tight">
            Unleashing the Power of Decentralization
          </span>

          <span className="md:text-[1.6vw] lg:text-[1.1vw] text-[4vw] font-extralight leading-tight">
            Join the Kaanch Network as an early contributor and earn rewards
            through the Kaanch Points Program.
          </span>

          {/* BUTTON */}
          <div className="flex items-center mt-8">
            <div className="relative">
              {/* Main Button */}
              <button
                className="px-10 py-3 rounded-md text-black font-semibold 
          bg-gradient-to-r from-cyan-400 to-blue-900 
          shadow-[0_0_25px_rgba(0,255,255,0.3)]"
              >
                EARN POINTS
              </button>

              {/* Reflection */}
              <div
                className="absolute left-0 right-0 top-full translate-y-2 opacity-40 scale-y-[-1]
          overflow-hidden rounded-md"
              >
                <button
                  className="px-10 py-3 rounded-md text-black font-semibold 
            bg-gradient-to-r from-cyan-400 to-blue-900"
                >
                  EARN POINTS
                </button>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT VIDEO SECTION */}
        <div className="w-full flex justify-center md:justify-end">
          <video
            src="https://asset-cdn.kaanch.com/airdrop-asset/kaanchairdrop.mp4"
            loop
            autoPlay
            muted
            preload="auto"
            className="w-full max-w-[500px] md:max-w-[380px] lg:max-w-[500px] "
          ></video>
        </div>

        {/* DOWN ARROW */}
        <div
          className="absolute md:bottom-10 bottom-20 flex justify-center w-full"
          onClick={() => {
            window.scrollBy({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        >
          <img
            src="/public/down.png"
            alt=""
            className="z-50 h-[100px] w-[60px] bounce"
          />
        </div>
      </div>

      <div
        className="bg-white pt-10 pb-20 lg:px-10 px-5 flex flex-col gap-10 text-black rounded-xl"
        style={{
          "clip-path":
            "polygon(0 0, 92% 0, 100% 11%, 100% 100%, 7% 100%, 0 87%)",
        }}
      >
        <span className="lg:text-6xl md:text-5xl text-3xl font-bold text-ibm">
          Shape Blockchain Innovation:
        </span>{" "}
        <span className="lg:text-6xl md:text-5xl text-3xl font-bold text-ibm text-cyan-400">
          KAANCH Points Program
        </span>
        <div className="flex md:flex-row flex-col gap-5  justify-between w-full ">
          <span className="font-semibold md:w-1/2 text-[22px]">
            KAANCH is driving the development of high-throughput, sustainable
            blockchains and actively invites your collaboration to achieve this
            vision.
          </span>
          <span className="md:w-1/2 text-[18px]">
            Join the Kaanch Points Program, earn rewards, and qualify for
            exclusive benefits as we progress towards the Kaanch Listing at CEX.
            Points earned can be converted to tokens at the time of listing.
            Let's shape the future of blockchain together.
          </span>
        </div>
        <a href="#faq">
          <button className="bg-linear-to-r from-indigo-700 via-purple-700 to-pink-700 w-fit border-deepblue rounded-md text-lg text-white py-3 md:px-10 px-7 whitespace-nowrap font-bold">
            Go To FAQ
          </button>
        </a>
      </div>

      <div className="flex flex-col gap-10 items-center justify-center">
        <div className="flex flex-col gap-5">
          <span className="text-[32px] text-center">How it works</span>
          <span className="lg:text-[75px] md:text-[55px] text-[40px] text-center">
            Earn Points, Unlock Rewards, and Contribute to the{" "}
            <span className="font-[900] text-cyan-300"> Kaanch </span>
            Network
          </span>
        </div>

        <div className=" relative flex flex-col md:gap-20 gap-10">
          <div className="absolute hidden md:flex left-[25%] min-[1440px]:left-[20%] -z-10 bottom-3">
            <img
              src="https://airdrop.kaanch.com/Images/line.png"
              className="h-full"
              alt=""
            />
          </div>
          <div className="flex md:flex-row flex-col items-center justify-between gap-10">
            <video
              src="https://asset-cdn.kaanch.com/airdrop-asset/brigeAsset3.mp4"
              loop
              autoPlay
              muted
              preload="auto"
              className="max-w-[400px]"
            ></video>
            <div className="max-w-[500px] flex flex-col gap-2">
              <span className="text-3xl md:text-6xl">
                {" "}
                <span className="text-cyan-400">Connect </span> Your Wallet
              </span>
              <span>
                {" "}
                <span className="text-cyan-400"></span>Access the Points Portal
                and connect your Kaanch wallet to get started.
              </span>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center justify-between gap-10">
            <video
              src="https://asset-cdn.kaanch.com/airdrop-asset/earnPoint3.mp4"
              loop
              autoPlay
              muted
              preload="auto"
              className="max-w-[400px]"
            ></video>
            <div className="max-w-[500px] flex flex-col gap-2">
              <span className="text-3xl md:text-6xl">
                {" "}
                <span className="text-cyan-400">Bridge</span> and Stake Your
                Assets
              </span>
              <span>
                {" "}
                <span className="text-cyan-400"></span>Bridge your assets to the
                Kaanch Network, then stake or use them within the Kaanch DApp to
                start earning rewards. Active participation in the network
                increases your Kaanch Points.
              </span>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center justify-between gap-10">
            <video
              src="https://asset-cdn.kaanch.com/airdrop-asset/convertPoint3.mp4"
              loop
              autoPlay
              muted
              preload="auto"
              className="max-w-[400px]"
            ></video>
            <div className="max-w-[500px] flex flex-col gap-2">
              <span className="text-3xl  md:text-6xl">
                {" "}
                <span className="text-cyan-400">Earn</span> Points Daily
              </span>
              <span>
                {" "}
                <span className="text-cyan-400"></span>Accumulate Kaanch Points
                every day based on the dollar-equivalent value of your staked or
                locked assets. The longer your assets remain in the network, the
                more points you earn.
              </span>
            </div>
          </div>

          <div className="flex md:flex-row flex-col items-center justify-between gap-10">
            <video
              src="https://asset-cdn.kaanch.com/airdrop-asset/connectWallet3.mp4"
              loop
              autoPlay
              muted
              preload="auto"
              className="max-w-[400px]"
            ></video>
            <div className="max-w-[500px] flex flex-col gap-2">
              <span className="text-3xl md:text-6xl">
                {" "}
                <span className="text-cyan-400">Convert</span> Points to Kaanch
                Tokens at Listing{" "}
              </span>
              <span>
                {" "}
                <span className="text-cyan-400"></span>Redeem your Kaanch Points
                for Kaanch Tokens when they are listed.
              </span>
            </div>
          </div>

          <div className="flex w-full md:justify-end">
            <button className="bg-linear-to-r from-indigo-700 via-purple-700 to-pink-700 w-fit border-deepblue rounded-md text-lg text-white py-3 md:px-10 px-7 whitespace-nowrap font-bold">
              Earn Kaanch Points
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-3 py-5">
        <span className="text-3xl md:text-6xl">
          Meet Our <br />{" "}
          <span className="text-cyan-400"> Top Contributors</span>
        </span>
        <span className="text-light text-xl">
          Discover the leaders driving innovation on the Kaanch Network and join
          them in shaping the future of blockchain technology.
        </span>
      </div>
      <div className="w-full ">
        <table className="w-full text-sm">
          {/* TABLE HEAD */}
          <thead>
            <tr className="bg-[#222] text-white rounded-md">
              <th className="p-2 text-left font-medium">Address</th>
              <th className="p-2 text-left font-medium">Rank</th>
              <th className="p-2 text-right font-medium">Points Earned</th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>
            <tr className="border-b border-gray-900">
              <td className="p-3 flex items-center gap-1">🔴 0xAB2..C41e9</td>
              <td className="p-3">1</td>
              <td className="p-3 text-right">&#x25C6; 69</td>
            </tr>

            <tr className="border-b border-gray-900">
              <td className="p-3 flex items-center gap-1">🔴 0xAB2..C41e9</td>
              <td className="p-3">2</td>
              <td className="p-3 text-right">&#x25C6; 69</td>
            </tr>

            <tr className="border-b border-gray-900">
              <td className="p-3 flex items-center gap-1">🔴 0xAB2..C41e9</td>
              <td className="p-3">3</td>
              <td className="p-3 text-right">&#x25C6; 69</td>
            </tr>

            <tr className="border-b border-gray-900">
              <td className="p-3 flex items-center gap-1">🔴 0xAB2..C41e9</td>
              <td className="p-3">4</td>
              <td className="p-3 text-right">&#x25C6; 69</td>
            </tr>

            <tr className="border-b border-gray-900">
              <td className="p-3 flex items-center gap-1">🔴 0xAB2..C41e9</td>
              <td className="p-3">5</td>
              <td className="p-3 text-right">&#x25C6; 69</td>
            </tr>
          </tbody>
        </table>
        <div className="flex w-full justify-center py-10">
          <button className="bg-linear-to-r from-indigo-700 via-purple-700 to-pink-700 w-fit border-deepblue rounded-md text-lg text-white py-3 md:px-10 px-7 whitespace-nowrap font-bold">
            See Top Contributors
          </button>
        </div>
      </div>

      <Faq />

      <div className="flex flex-col gap-1 w-full items-center justify-center text-center">
        <video
          src="https://asset-cdn.kaanch.com/airdrop-asset/countDown.mp4"
          loop
          autoPlay
          muted
          preload="auto"
          className="max-w-[400px]"
        ></video>

        <Timecount />

        <span className="text-sm">Since Kaanch Point Program launch</span>
        {/* BUTTON */}
        <div className="flex items-center mt-8">
          <div className="relative">
            {/* Main Button */}
            <button
              className="px-10 py-3 rounded-md text-black font-semibold 
          bg-gradient-to-r from-cyan-400 to-blue-900 
          shadow-[0_0_25px_rgba(0,255,255,0.3)]"
            >
              EARN POINTS
            </button>

            {/* Reflection */}
            <div
              className="absolute left-0 right-0 top-full translate-y-2 opacity-40 scale-y-[-1]
          overflow-hidden rounded-md"
            >
              <button
                className="px-10 py-3 rounded-md text-black font-semibold 
            bg-gradient-to-r from-cyan-400 to-blue-900"
              >
                EARN POINTS
              </button>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnpoint;
