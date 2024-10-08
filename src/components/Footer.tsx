"use client";
import React from 'react';
import { BookmarkCheck, Gamepad, House, Users, Wallet } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer: React.FC = () => {
    const pathname = usePathname();
    return (
        <footer className='flex flex-row w-full fixed bottom-0 justify-between p-3 rounded-t-lg font-extrabold bg-black/95'>
            <Link href={"/"} className={`duration-100 transition-all ${pathname === '/' ? 'text-blue-500' : 'text-gray-500'} flex flex-col items-center`}>
                <House strokeWidth={3} />
                <p>Home</p>
            </Link>
            <Link href={"/task"} className={`duration-100 ${pathname === '/task' ? 'text-red-500' : 'text-gray-500'} flex flex-col items-center`}>
                <BookmarkCheck />
                <p>Task</p>
            </Link>
            <Link href={"/game"} className={`duration-100 ${pathname === '/game' ? 'text-pink-500' : 'text-gray-500'} flex flex-col items-center`}>
                <Gamepad />
                <p>Games</p>
            </Link>
            <Link href={"/friends"} className={`duration-100 ${pathname === '/friends' ? 'text-yellow-500' : 'text-gray-500'} flex flex-col items-center`}>
                <Users />
                <p>Friends</p>
            </Link>
            <Link href={"/wallet"} className={`duration-100 ${pathname === '/wallet' ? 'text-green-500' : 'text-gray-500'} flex flex-col items-center`}>
                <Wallet />
                <p>Wallet</p>
            </Link>
        </footer>
    );
};

export default Footer;