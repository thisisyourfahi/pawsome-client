import { Ban } from '@gravity-ui/icons';
import React from 'react';

const EmptyList = () => {
    return (
        <div className='bg-gray-200 p-4 min-h-screen rounded-sm flex justify-center items-center'>
            <p></p>
            <div className='bg-linear-to-r to-gray-500/20 from-[#ff0062]/70 p-10 rounded-sm space-y-2'>
                <Ban className='w-10 h-10 mx-auto' />
                <p className='text-center text-xl font-bold'>You haven&apos;t added any pet yet.</p>
            </div>
        </div>
    );
};

export default EmptyList;