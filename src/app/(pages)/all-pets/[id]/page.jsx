import { getASinglePet } from '@/api/petServices';
import React from 'react';
import PetDetails from './PetDetails';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import PetOwnerAlert from './PetOwnerAlert';
import BookAPet from './BookAPet';

const PetDetailsPage = async ({params}) => {
    const {id} = await params;
    const pet = await getASinglePet(id);

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;
    const userIsTheOwner = pet.ownderId === user.id

    return (
        <div className='flex md:flex-row md:gap-10 gap-4'>
            {/* pet details*/}
            <PetDetails pet={pet} />

            {/* if not user's pet -> adoption form
                if user's pet -> show an warning
            */}
            {
                userIsTheOwner ? <PetOwnerAlert /> : <BookAPet pet={pet} />
            }
        </div>
    );
};

export default PetDetailsPage;