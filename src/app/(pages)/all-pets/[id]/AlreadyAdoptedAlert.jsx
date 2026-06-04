import { Thunderbolt } from '@gravity-ui/icons';
import React from 'react';

const AlreadyAdoptedAlert = () => {
    return (
        <div className='max-w-100 flex justify-center items-center rounded-sm'>
            <div className='bg-linear-to-r to-gray-500/20 from-[#ff0062]/70 p-10 rounded-sm space-y-2'>
                <Thunderbolt className='w-10 h-10 mx-auto' />
                <p className='text-center text-xl font-bold'>This pet has already been adopted!</p>
            </div>
        </div>
    );
};

export default AlreadyAdoptedAlert;