"use client";
import DropGame from '@/components/Games/DropGame';
import { useGlobalContext } from '@/context/GlobalContext';
import Image from 'next/image';
import React from 'react';

const Page = () => {
    const { changeActiveGameTab } = useGlobalContext();
    return (
        <div>
            <DropGame />
            <div className='flex flex-col items-center justify-center p-5'>
                <p className='font-black text-xl font-serif text-gray-300'>Game House.</p>
                <p className='text-center font-black text-gray-400'>Play more games to boost your coin portfolio. You spend 1 ticket per game. Go aheard and have some fun.</p>
                <div className='flex flex-row items-center space-x-3 font-bold text-lg text-gray-400'>
                    <p>Your ticket: 1</p>
                    <Image
                        className='h-5 w-5'
                        src={"/images/ticket.png"}
                        width={100}
                        height={100}
                        alt='ticket icon'
                        quality={100}
                    />
                </div>
            </div>
            <div className='flex flex-col items-center p-5'>
                <div className='p-5 rounded-lg bg-gray-600 w-full'>
                    <div>

                    </div>
                    <div className='flex flex-row items-center justify-between text-gray-300'>
                        <p className='font-black text-lg'>Drop Game</p>
                        <button onClick={() => changeActiveGameTab("drop")} className='bg-blue-500 px-5 py-2 rounded-lg font-black shadow-md'>Play</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;