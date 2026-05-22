import { getAllPets } from '@/api/petServices';
import PetCard from '@/components/shared/PetCard';
import React from 'react';

const AllPetsPage = async () => {
    const allPets = await getAllPets();
    console.log('all pets:', allPets)
    return (
        <div>
            <div>
                <h2 className='text-2xl font-bold'>All Pets</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    allPets.map(pet => <PetCard key={pet._id} pet={pet} />)
                }
            </div>
        </div>
    );
};

export default AllPetsPage;