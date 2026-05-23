import { getASinglePet } from '@/api/petServices';
import React from 'react';
import PetDetails from './PetDetails';

const PetDetailsPage = async ({params}) => {
    const {id} = await params;
    const pet = await getASinglePet(id);
    return (
        <div >
            {/* pet details*/}
            <PetDetails pet={pet} />

            {/* if not user's pet -> adoption form
                if user's pet -> show an warning
            */}
        </div>
    );
};

export default PetDetailsPage;