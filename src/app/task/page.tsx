"use client";
import { Player } from '@lottiefiles/react-lottie-player';
import { ChevronRight } from 'lucide-react';
import { SiTon, SiYoutube } from 'react-icons/si';
import React from 'react';
import { FaInstagram, FaTelegram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

const tasks = [
    {
        "id": 1,
        "icon": <SiYoutube className='h-10 w-10' />,
        "name": "Subscribe the youtube channel",
        "reward": 200
    }, {
        "id": 2,
        "icon": <FaTelegram className='h-10 w-10' />,
        "name": "Join the Telegram channel",
        "reward": 300
    }, {
        "id": 3,
        "icon": <FaInstagram className='h-10 w-10' />,
        "name": "Follow the Instagram account",
        "reward": 300
    }, {
        "id": 4,
        "icon": <FaSquareXTwitter className='h-10 w-10' />,
        "name": "Follow the Twitter account",
        "reward": 300
    }, {
        "id": 5,
        "icon": <SiYoutube className='h-10 w-10' />,
        "name": "Follow the Twitter account",
        "reward": 300
    }, {
        "id": 6,
        "icon": <FaTelegram className='h-10 w-10' />,
        "name": "Follow the Twitter account",
        "reward": 300
    }, {
        "id": 7,
        "icon": <FaInstagram className='h-10 w-10' />,
        "name": "Follow the Twitter account",
        "reward": 300
    }, {
        "id": 8,
        "icon": <FaSquareXTwitter className='h-10 w-10' />,
        "name": "Follow the Twitter account",
        "reward": 300
    }, {
        "id": 9,
        "icon": <FaTelegram className='h-10 w-10' />,
        "name": "Follow the Twitter account",
        "reward": 300
    }, {
        "id": 10,
        "icon": <FaInstagram className='h-10 w-10' />,
        "name": "Follow the Twitter account",
        "reward": 300
    }, {
        "id": 11,
        "icon": <SiTon className='h-10 w-10' />,
        "name": "Connect Ton Wallet",
        "reward": 500
    },
];

const Page = () => {
    return (
        <div className='h-screen text-white p-3 flex flex-col space-y-5'>
            <p className='font-black text-center text-2xl text-gray-300'>MISSIONS</p>
            <Link href={"/dailyReward"} className='flex flex-row items-center justify-between text-gray-300 px-2 rounded-lg bg-gray-500/20'>
                <div className='flex flex-row items-center space-x-4'>
                    <Player
                        autoplay
                        loop
                        src={"/animations/coin_animation.json"}
                        style={{ height: '100px', width: '100px' }}
                    />
                    <div>
                        <p className='font-black text-lg'>Daily reward</p>
                        <p>until 08:24:39</p>
                    </div>
                </div>
                <ChevronRight />
            </Link>
            <div className='flex flex-col space-y-4'>
                <p className='font-black text-3xl font-serif text-gray-300'>Tasks</p>
                <div className='bg-gray-500/20 p-2 rounded-md flex flex-col space-y-5'>
                    {
                        tasks.map((task) => (
                            <div key={task.id} className='flex flex-row items-center w-full justify-between'>
                                <div className='flex flex-row space-x-4 items-center text-gray-300'>
                                    {task.icon}
                                    <div className='flex flex-col text-gray-300'>
                                        <p className='line-clamp-1'>{task.name}</p>
                                        <p className='font-black'>+${task.reward}</p>
                                    </div>
                                </div>
                                <div className='bg-blue-500 p-2 px-5 rounded-md animate-pulse'>
                                    <p>Go</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='pb-28 w-full flex justify-center'>
                <p className='font-black font-serif text-2xl align-text-top text-gray-400'>--End of Tasks--</p>
            </div>
        </div>
    );
};

export default Page;