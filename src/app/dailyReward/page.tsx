import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { AiFillDollarCircle } from 'react-icons/ai';
import { PiCoinsDuotone } from 'react-icons/pi';

const rewards = [
    {
        "id": 1,
        "day": "Day 1",
        "reward": "85K",
        "amount": 85000
    }, {
        "id": 2,
        "day": "Day 2",
        "reward": "142K",
        "amount": 142000
    }, {
        "id": 3,
        "day": "Day 3",
        "reward": "200K",
        "amount": 200000
    }, {
        "id": 4,
        "day": "Day 4",
        "reward": "500K",
        "amount": 500000
    }, {
        "id": 5,
        "day": "Day 5",
        "reward": "1M",
        "amount": 1000000
    }, {
        "id": 6,
        "day": "Day 6",
        "reward": "2M",
        "amount": 2000000
    }, {
        "id": 7,
        "day": "Day 7",
        "reward": "3M",
        "amount": 3000000
    }, {
        "id": 8,
        "day": "Day 8",
        "reward": "4M",
        "amount": 4000000
    }, {
        "id": 9,
        "day": "Day 9",
        "reward": "5M",
        "amount": 5000000
    }, {
        "id": 10,
        "day": "Day 10",
        "reward": "5.5M",
        "amount": 5500000
    }, {
        "id": 11,
        "day": "Day 11",
        "reward": "6M",
        "amount": 6000000
    }, {
        "id": 12,
        "day": "Day 12",
        "reward": "8M",
        "amount": 8000000
    }, {
        "id": 13,
        "day": "Day 13",
        "reward": "10M",
        "amount": 10000000
    }, {
        "id": 14,
        "day": "Day 14",
        "reward": "15M",
        "amount": 15000000
    }, {
        "id": 15,
        "day": "Day 15",
        "reward": "30M",
        "amount": 30000000
    }, {
        "id": 16,
        "day": "Day 16",
        "reward": "35M",
        "amount": 35000000
    }, {
        "id": 17,
        "day": "Day 17",
        "reward": "40M",
        "amount": 40000000
    }, {
        "id": 18,
        "day": "Day 18",
        "reward": "50M",
        "amount": 50000000
    }, {
        "id": 19,
        "day": "Day 19",
        "reward": "60M",
        "amount": 60000000
    }, {
        "id": 20,
        "day": "Day 20",
        "reward": "100M",
        "amount": 100000000
    }, {
        "id": 21,
        "day": "Day 21",
        "reward": "130M",
        "amount": 130000000
    }, {
        "id": 22,
        "day": "Day 22",
        "reward": "140M",
        "amount": 140000000
    }, {
        "id": 23,
        "day": "Day 23",
        "reward": "150M",
        "amount": 150000000
    }, {
        "id": 24,
        "day": "Day 24",
        "reward": "200M",
        "amount": 200000000
    }, {
        "id": 25,
        "day": "Day 25",
        "reward": "220M",
        "amount": 220000000
    }, {
        "id": 26,
        "day": "Day 26",
        "reward": "250M",
        "amount": 250000000
    }, {
        "id": 27,
        "day": "Day 27",
        "reward": "300M",
        "amount": 300000000
    }, {
        "id": 28,
        "day": "Day 28",
        "reward": "500M",
        "amount": 500000000
    },
];

const Page = () => {
    return (
        <div className='h-screen p-3 flex flex-col space-y-10'>
            <div className='flex flex-row items-center justify-between text-gray-300'>
                <Link href={'/task'}>
                    <ChevronLeft />
                </Link>
                <p className='font-black text-lg font-serif'>Claim Your Rewards</p>
            </div>
            <div className='text-gray-300 text-center font-bold font-serif '>
                <p>Big rewards ahead if only you keep on keeping up</p>
                <p>Missing a day will make you automatically start fresh from day one.</p>
            </div>
            <div className='grid grid-cols-3 grid-flow-row gap-5 '>
                {
                    rewards.map((reward) => (
                        <div key={reward.id} className='text-gray-200 bg-slate-500/30 p-3 flex flex-col items-center justify-center rounded-md space-y-2'>
                            <p>{reward.day}</p>
                            <AiFillDollarCircle className='w-10 h-10 text-green-500' />
                            <p className='font-black animate-pulse '>{reward.reward}</p>
                        </div>
                    ))
                }
            </div>
            <div className='pb-28 w-full flex justify-center'>
                <p className='font-black font-serif text-2xl align-text-top text-gray-400'>--End of Rewards--</p>
            </div>
        </div>
    );
};

export default Page;