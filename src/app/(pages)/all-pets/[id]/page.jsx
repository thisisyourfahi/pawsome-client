import { getASinglePet } from '@/api/petServices';
import React from 'react';
import PetDetails from './PetDetails';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import PetOwnerAlert from './PetOwnerAlert';
import BookAPet from './BookAPet';
import { getAUser } from '@/api/userServices';
import AlreadyAdoptedAlert from './AlreadyAdoptedAlert';

const PetDetailsPage = async ({ params }) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const { id } = await params;
    const pet = await getASinglePet(id, token);

    const { adoption } = await pet;
    const availableForAdoption = adoption === 'Available';

    const owner = await getAUser(pet.ownderId)

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;
    const userIsTheOwner = pet.ownderId === user.id

    return (
        <div className='flex flex-col md:flex-row md:gap-10 gap-4 px-4 md:px-0'>
            {/* pet details*/}
            <PetDetails pet={pet} />

            {/* if not user's pet -> adoption form
                if user's pet -> show an warning
            */}
            {
                userIsTheOwner ? <PetOwnerAlert /> :
                    availableForAdoption ? <>
                        <BookAPet owner={owner} pet={pet} />
                    </> : <>
                        <AlreadyAdoptedAlert />
                    </>
            }
        </div>
    );
};

export default PetDetailsPage;