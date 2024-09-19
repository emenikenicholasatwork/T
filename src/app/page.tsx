"use client";
import { useGlobalContext } from "@/context/GlobalContext";
import { Pickaxe, Zap } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";


export default function Home() {
  const [amount, setAmount] = useState<number>(675858568);
  const { formatNumber } = useGlobalContext();
  const [farming, setFarming] = useState<boolean>(false);
  const [waitingClaim, setWaitingClaim] = useState<boolean>(false);


  return (
    <div className="h-screen p-3">
      <div>
        <div className="flex items-center justify-center font-black font-serif bg-zinc-800 rounded-full p-3 text-gray-300">
          <p className="font-black text-2xl text-green-500">${formatNumber(amount)}</p>
        </div>
      </div>
      <div>
        <p className="font-black text-xl text-gray-400 font-serif">Mini Games</p>
        <div>
          <div className="bg-gray-200 rounded-xl p-5 w-[70%] relative">
            <div className="flex items-center justify-center">
              <Image
                className="animate-spin"
                src={"/images/flower.png"}
                alt="flower icon"
                quality={100}
                width={50}
                height={50}
              />
            </div>
            <div className="absolute right-2 top-2 flex flex-row items-center justify-center">
              <p>5</p>
              <Image
                className="w-6 h-6"
                src={"/images/ticket.png"}
                alt="ticket image"
                width={100}
                height={100}
                quality={100}
              />
            </div>
            <div className="flex flex-row items-center justify-between">
              <p>Drop Game</p>
              <button className="px-5 py-2 font-black bg-blue-500 text-white rounded-md">Play</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
