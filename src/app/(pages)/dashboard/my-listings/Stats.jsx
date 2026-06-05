import { getAllPetsOfAuser } from '@/api/petServices';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const Stats = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    const user = session?.user;
    const pets = await getAllPetsOfAuser(user.id, token)
    const available = await pets.filter(pet => pet.adoption === 'Available');
    console.log(available);
    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className='bg-linear-to-r to-gray-500/20 from-[#ff0062]/70 p-10 rounded-sm space-y-2 text-center'>
                <p className='text-2xl font-bold'>{pets.length}</p>
                <p>Total Listings</p>
            </div>
            <div className='bg-linear-to-r to-gray-500/20 from-[#ff0062]/70 p-10 rounded-sm space-y-2 text-center'>
                <p className='text-2xl font-bold'>{available.length}</p>
                <p>Available</p>
            </div>
            <div className='bg-linear-to-r to-gray-500/20 from-[#ff0062]/70 p-10 rounded-sm space-y-2 text-center'>
                <p className='text-2xl font-bold'>{pets.length - available.length}</p>
                <p>Adopted</p>
            </div>
        </div>
    );
};

export default Stats;