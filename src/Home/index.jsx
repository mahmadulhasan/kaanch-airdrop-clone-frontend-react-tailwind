import React, { useEffect, useState } from "react";
import "./index.css";
import OTPInput from "react-otp-input";

const Index = () => {
  const [otp, setOtp] = useState("");
  const [download, setDownload] = useState(true);
  useEffect(()=>{
    if(download){
      document.body.style.overflow="hidden"
    }else{
      document.body.style.overflow="auto"
    }
  },[download])

  return (
    <main className="w-full min-h-screen flex items-center justify-center relative">
      <div className="home"></div>
      <div
        className={`absolute z-1000 flex items-center justify-center backdrop-blur-xs ${
          download ? "top-0 left-0 w-full h-screen " : "hidden"
        }`}
      >
        <div className="relative py-10 px-20 bg-[#181717] rounded-xl">
          <div className="flex items-center gap-2 text-cyan-500 py-2 md:px-10 px-5 rounded-md bg-[#262323]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-wallet"
              aria-hidden="true"
            >
              <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
              <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
            </svg>
            <span className="">DOWNLOAD</span>
          </div>
          <div
            className="absolute -top-4 -right-4"
            onClick={() => setDownload(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width=""
              height=""
              fill="currentColor"
              class="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
              className="h-10 w-10"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
            </svg>
          </div>
        </div>
      </div>

      <div
        className="
        relative overflow-hidden 
        flex flex-col items-center gap-6 
        rounded-2xl px-10 py-20
        bg-[#020303e8]
        backdrop-blur-xl
        w-[90%] max-w-[400px]
      "
      >
        {/* Glow border */}
        <div className="card-glow"></div>

        {/* Blob animation */}
        <svg className="svgRefferal" viewBox="0 0 200 200">
          <path
            fill="#16a6a6"
            className="path"
            d="M56.8,-23.9C61.7,-3.2,45.7,18.8,26.5,31.7C7.2,44.6,-15.2,48.2,-35.5,36.5C-55.8,24.7,-73.9,-2.6,-67.6,-25.2C-61.3,-47.7,-30.6,-65.6,-2.4,-64.8C25.9,-64.1,51.8,-44.7,56.8,-23.9Z"
            transform="translate(100 100)"
          />
        </svg>

        {/* LOGO */}
        <img
          src="/public/kaanch-header-logo.png"
          alt=""
          className="w-44 mt-3"
        />

        <span className="text-center text-white font-bold opacity-80 text-[15px]">
          Enter your invite code to claim your airdrop
        </span>

        {/* OTP */}
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={5}
          inputStyle={{}}
          containerStyle={{}}
          renderSeparator={<span className="mx-2"></span>}
          renderInput={(props) => (
            <input
              {...props}
              className="
                w-[55px] h-[50px]
                text-center text-xl font-bold
                bg-[#030303]
                rounded-lg
                border border-cyan-400
                text-white
                outline-none
                focus:border-cyan-300
                transition-all
              "
              style={{ width: "50px" }}
            />
          )}
        />

        {/* BUTTON */}
        <button
          className="
            py-3 w-[310px] bg-white 
            text-black font-bold rounded-md 
            hover:scale-105 transition-all
          "
        >
          ENTER YOUR CODE
        </button>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent mt-3 "></div>

        {/* Footer */}
        <div className="flex flex-col gap-1 pb-3">
          <center className="text-white opacity-70">Already Registered?</center>
          <center className="text-cyan-400 cursor-pointer hover:underline">
            Login with Your Wallet
          </center>
        </div>
      </div>
    </main>
  );
};

export default Index;
