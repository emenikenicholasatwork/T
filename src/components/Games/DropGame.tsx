import { useGlobalContext } from '@/context/GlobalContext';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const DropGame = () => {
    const { activeGameTab } = useGlobalContext();
    const [playing, setPlaying] = useState<boolean>(false);
    function start() {
        setPlaying(true);
    }
    return (
        <div className={`z-20 fixed w-full bottom-0 bg-black ${activeGameTab === "drop" ? "h-screen" : "h-0"}`}>
            <div className='text-gray-300 flex flex-row items-center p-5'>
                <ArrowLeft />
                <div className='flex flex-row items-center justify-center space-x-2 w-full'>
                    <p className='font-black text-2xl font-serif'>Drop Game</p>
                    <Image
                        className='w-7 h-7 animate-bounce'
                        src={"/images/flower.png"}
                        alt='flower image'
                        width={100}
                        height={100}
                        quality={100}
                    />
                </div>
            </div>
            {!playing && <div className='h-full w-full bottom-0 top-1/2 left-1/2 px-5 flex items-center justify-center animate-pulse'><button className='font-black text-xl bg-gray-200 rounded-lg w-full p-4 font-serif'>Start</button></div>}
        </div>
    );
};

export default DropGame;