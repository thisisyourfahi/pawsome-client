import { getAllPets } from '@/api/petServices';
import PetCard from '@/components/shared/PetCard';
import React from 'react';

const AllPetsPage = async () => {
    const allPets = await getAllPets();
    return (
        <div className='space-y-4 px-4 md:px-0'>
            <h2 className='text-2xl font-bold'>All Pets ({allPets.length})</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    allPets.map(pet => <PetCard key={pet._id} pet={pet} />)
                }
            </div>
        </div>
    );
};

export default AllPetsPage;