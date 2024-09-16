import { Loader } from 'lucide-react';
import React from 'react';

const loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="relative w-24 h-24">
                <div className="absolute border-4 border-t-transparent border-blue-500 rounded-full w-full h-full animate-spin"></div>
                <div className="absolute border-4 border-t-transparent border-red-500 rounded-full w-16 h-16 top-4 left-4 animate-spin-reverse"></div>
                <div className="absolute border-4 border-t-transparent border-yellow-500 rounded-full w-8 h-8 top-8 left-8 animate-spin"></div>
            </div>
        </div>
    );
};

export default loading;