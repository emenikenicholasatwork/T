"use client";
import React from 'react';
import { BookmarkCheck, House, Pickaxe, Users, Wallet } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer: React.FC = () => {
    const pathname = usePathname();
    return (
        <footer className='flex flex-row w-full fixed bottom-0 justify-between px-3 font-extrabold'>
            <Link href={"/"} className={`duration-100 transition-all ${pathname === '/' ? 'text-blue-500' : 'text-gray-500'} flex flex-col items-center`}>
                <House strokeWidth={3} />
                <p>Home</p>
            </Link>
            <Link href={"/task"} className={`duration-100 ${pathname === '/task' ? 'text-red-500' : 'text-gray-500'} flex flex-col items-center`}>
                <BookmarkCheck />
                <p>Task</p>
            </Link>
            <Link href={"/mine"} className={`duration-100 ${pathname === '/mine' ? 'text-pink-500' : 'text-gray-500'} flex flex-col items-center`}>
                <Pickaxe />
                <p>Mine</p>
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