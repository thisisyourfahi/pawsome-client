import { getAllPetsOfAuser } from '@/api/petServices';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';
import PetListCard from './PetListCard';
import EmptyList from './EmptyList';

const MyListings = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;
    const allPetsOfAUser = await getAllPetsOfAuser(user.id)

    return (
        <div className='bg-gray-200 p-4 min-h-screen rounded-sm space-y-4'>
            {
                allPetsOfAUser.length > 0 ? <>
                    {
                        allPetsOfAUser.map(pet => <PetListCard key={pet._id} pet={pet} />)
                    }
                </> : <><EmptyList /></>
            }
        </div>
    );
};

export default MyListings;