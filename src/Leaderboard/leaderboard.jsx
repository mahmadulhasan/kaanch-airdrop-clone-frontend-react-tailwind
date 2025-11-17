import React from "react";

const Leaderboard = () => {
  return (
    <main className="w-full flex flex-col gap-5 py-30 px-10 items-center justify-center">
      <img
        src="https://airdrop.kaanch.com/Images/airdropBannerSmall2s.png"
        alt=""
        className="w-full lg:h-80 md:h-60  rounded-xl"
      />

      <div className="w-full flex items-center justify-between">
        <span className="md:text-3xl text-2xl font-semibold">
          LEADERBOARD POINT
        </span>
        <span className="p-0 m-0 whitespace-nowrap">
          Meet our top contributors
        </span>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-between px-10 rounded-xl bg-[#111]">
        <div className="flex flex-col gap-5 border-b border-b-cyan-500 border-dotted md:border-none py-7">
          <span>Connect your wallet to see your point</span>
          <center className="bg-white text-black py-3  rounded-md">
            Connect Wallet
          </center>
        </div>
        <div className="flex flex-col gap-5  py-7">
          <span>Total Value Locked</span>
          <center className="md:text-5xl text-3xl font-bold">$1</center>
        </div>
      </div>
      <div className="w-full flex flex-col  p-10 rounded-xl bg-[#111] ">
        <div className="w-full flex justify-end items-center">
          <span className="text-cyan-500 text-xl">
            18/07/2025, 04:05:04 PM:{" "}
            <span className="text-black py-1 px-3 rounded-md bg-cyan-500 text-sm whitespace-nowrap">
              Refresh last time
            </span>
          </span>
        </div>
        <div className="w-full flex flex-wrap items-cnter justify-between py-5">
          <span className="text-light text-xl">TOP CONTRIBUTORS</span>
          <span className="text-xs text-light">
            Points are updated every 24Hours
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
        </div>
      </div>
    </main>
  );
};

export default Leaderboard;
