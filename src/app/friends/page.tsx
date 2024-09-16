"use client";
import { Player } from '@lottiefiles/react-lottie-player';
import { Copy, Share2 } from 'lucide-react';
import React from 'react';

const Page = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center text-white font-black'>
                <p className='text-center text-2xl'>Earn more by inviting friends</p>
                <Player
                    autoplay
                    loop
                    src='/animations/share_link_animation.json'
                    style={{ height: '300px', width: '300px' }} />
                <div className='w-full flex flex-row items-center justify-center space-x-10'>
                    <div className='flex flex-row items-center space-x-2 bg-blue-600 p-3 rounded-lg'>
                        <Copy />
                        <p>Copy link</p>
                    </div>
                    <div className='flex flex-row items-center space-x-2 bg-red-600 p-3 rounded-lg'>
                        <Share2 />
                        <p>Share link</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;