"use client";
import { useGlobalContext } from "@/context/GlobalContext";
import { Pickaxe, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";


export default function Home() {
  const [amount, setAmount] = useState<number>(675858568);
  const { formatNumber } = useGlobalContext();
  const [farming, setFarming] = useState<boolean>(false);

  function startFarming() {

  }
  return (
    <div className="h-screen p-3">
      <div>
        <div className="flex items-center justify-center font-black font-serif bg-zinc-800 rounded-full p-3 text-gray-300">
          <p className="font-black text-2xl text-green-500">${formatNumber(amount)}</p>
        </div>
      </div>
      <div onClick={startFarming} className={`fixed left-0 right-0 rounded-lg mx-5 bottom-24 font-black text-lg ${farming ? "bg-zinc-800 text-zinc-500" : "bg-white animate-pulse"}  flex flex-row items-center justify-center p-5 space-x-3`}>
        {
          farming ?
            <>
              <p>Farming</p>
              <Pickaxe />
            </> :
            <>
              <Zap />
              <p>Start farming</p>
            </>
        }
      </div>
    </div>
  );
}
