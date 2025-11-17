import React, { useState } from "react";

const Bridge = () => {
  const [slot, setSlot] = useState(1);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [value1, setValue1] = useState("ETHERIUM");
  const [clicked, setClicked] = useState(false);

  return (
    <main className="w-full flex flex-col gap-5 py-30 items-center justify-center">
      <center className="text-2xl md:text-4xl font-bold">Bridge</center>
      <div className="w-[90%] max-w-[800px] flex flex-col gap-5 px-5 py-10 rounded-xl bg-[#1b1f1e]  ">
        <div className="w-full p-2  border rounded-xl ">
          <div className=" relative w-full flex gap-0 items-center">
            <div
              className="w-full rounded-md  text-center p-2 cursor-pointer z-10"
              onClick={() => setSlot(1)}
            >
              DEPOSITE
            </div>
            <div
              className="w-full rounded-md  text-center p-2 cursor-pointer z-10"
              onClick={() => setSlot(2)}
            >
              WITHDWRAL
            </div>
            <div
              className="absolute bg-[#06f7f71a] w-1/2 h-full rounded-md border-blue  transform transition-all duration-500 "
              style={{ left: `${(slot - 1) * 50}%` }}
            ></div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span>SELECT TOKEN AND NETWORK</span>
          <span className="text-xs text-light">
            Select a token from the dropdown to see available bridge options
          </span>
        </div>

        <div className="flex lg:flex-row flex-col gap-2">
          <div className="relative w-full">
            <button
              onClick={() => setOpen(!open)}
              className="w-full bg-[#111827] text-white px-4 py-3 rounded-xl flex items-center justify-between border border-gray-700 hover:border-gray-500 transition"
            >
              <span>{value1}</span>
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
                class="lucide lucide-chevrons-up-down-icon lucide-chevrons-up-down"
              >
                <path d="m7 15 5 5 5-5" />
                <path d="m7 9 5-5 5 5" />
              </svg>
            </button>

            {open && (
              <div className="absolute mt-2 w-full bg-[#1f2937] border border-gray-700 rounded-xl shadow-xl p-2 z-20">
                <ul>
                  <li
                    className="p-2 hover:bg-gray-600 rounded-lg"
                    onClick={() => setValue1("ETHERIUM")}
                  >
                    Ethereum
                  </li>
                  <li
                    className="p-2 hover:bg-gray-600 rounded-lg"
                    onClick={() => setValue1("POLYGON")}
                  >
                    Polygon
                  </li>
                  <li
                    className="p-2 hover:bg-gray-600 rounded-lg"
                    onClick={() => setValue1("BASE")}
                  >
                    Base
                  </li>
                  <li
                    className="p-2 hover:bg-gray-600 rounded-lg"
                    onClick={() => setValue1("OPTIMISM")}
                  >
                    Optimism
                  </li>
                  <li
                    className="p-2 hover:bg-gray-600 rounded-lg"
                    onClick={() => setValue1("BNB CHAIN")}
                  >
                    BNB Chain
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative w-full">
            <button
              onClick={() => setOpen2(!open2)}
              className="w-full bg-[#111827] text-white px-4 py-3 rounded-xl flex items-center justify-between border border-gray-700 hover:border-gray-500 transition"
            >
              <span>{value1}</span>
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
                class="lucide lucide-chevrons-up-down-icon lucide-chevrons-up-down"
              >
                <path d="m7 15 5 5 5-5" />
                <path d="m7 9 5-5 5 5" />
              </svg>
            </button>

            {open2 && (
              <div className="absolute mt-2 w-full bg-[#1f2937] border border-gray-700 rounded-xl shadow-xl p-2 z-20">
                <ul>
                  <li
                    className="p-2 hover:bg-gray-600 rounded-lg"
                    onClick={() => setValue1("ETHERIUM")}
                  >
                    Ethereum2
                  </li>
                  <li
                    className="p-2 hover:bg-gray-600 rounded-lg"
                    onClick={() => setValue1("POLYGON")}
                  >
                    Polygon
                  </li>
                  <li
                    className="p-2 hover:bg-gray-600 rounded-lg"
                    onClick={() => setValue1("BASE")}
                  >
                    Base
                  </li>
                  <li
                    className="p-2 hover:bg-gray-600 rounded-lg"
                    onClick={() => setValue1("OPTIMISM")}
                  >
                    Optimism
                  </li>
                  <li
                    className="p-2 hover:bg-gray-600 rounded-lg"
                    onClick={() => setValue1("BNB CHAIN")}
                  >
                    BNB Chain
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <span className="font-bold">Kaanch Bridge (Usually takes ~1 min)</span>

        <div className="flex flex-col gap-1">
          <div className="w-full flex items-center justify-between text-xs text-light">
            <span>Total Amount</span>
            <span>Balance : 0</span>
          </div>
          <div className="flex w-full border rounded-md p-2 gap-2">
            <input
              type="text"
              className="outline-none w-full"
              placeholder="Enter Amount"
            />
            <span className="border rounded-md px-1 text-sm flex items-center">
              MAX
            </span>
          </div>
          <span className="text-xs text-light">
            Minimum amount for transactions: 0.00001 ETH
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <div
            className="flex gap-3"
            onClick={() => {
              setClicked(!clicked);
            }}
          >
            <input
              type="checkbox"
              name=""
              id=""
              checked={clicked}
              onChange={() => setClicked(!clicked)}
            />
            <span className="font-semibold">Recipient address (optional)</span>
          </div>
          {clicked && (
            <input
              type="text"
              placeholder="Enter Your Wallet Address"
              className="w-full py-1 px-2 border rounded-md"
            />
          )}
        </div>
        <span className="bg-cyan-500 w-full text-center py-1 rounded-xl text-black">
          Connect to Wallet
        </span>
      </div>
      <div className="w-[90%] max-w-[800px] flex flex-col gap-5 px-5 py-10 rounded-xl bg-[#1b1f1e]  ">
        <div className="flex gap-3 items-center text-light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-exclamation-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
          </svg>
          <span className="">
            Any assets deposited to Kaanch Network can take up to 21 days to
            withdraw back to other chain.
          </span>
        </div>
      </div>
    </main>
  );
};

export default Bridge;
