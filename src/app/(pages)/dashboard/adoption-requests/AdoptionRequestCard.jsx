import { getASinglePet } from '@/api/petServices';
import React from 'react';
import AcceptRequestModal from './AcceptRequestModal';
import RejectRequestModal from './RejectRequestModal';
import { Button } from '@heroui/react';
import { Ban, Check } from '@gravity-ui/icons';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { getAUser } from '@/api/userServices';

const AdoptionRequestCard = async ({ adoptionInfo }) => {
    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    const pet = await getASinglePet(adoptionInfo.petId, token);
    const requestedBy = await getAUser(adoptionInfo.applicantId);
    const requesPending = adoptionInfo.status === 'Pending'

    return (
        <div>
            <details className="collapse bg-linear-to-r from-[#080808e7] to-[#ff005db6] text-white transition-all duration-200 rounded-sm" name="my-accordion-det-1" open>
                <summary className="flex items-center justify-between collapse-title text-xl">
                    <p>Received Adoption request for <strong>{pet.petName}</strong><small> ({adoptionInfo.status})</small></p>

                    {/* actions */}
                    <div className='flex items-center gap-2'>
                        {
                            requesPending ? <>
                                <AcceptRequestModal pet={pet} adoptionInfo={adoptionInfo} />
                                <RejectRequestModal pet={pet} adoptionId={adoptionInfo._id} />
                            </> : <>
                                <Button isDisabled
                                    variant='outline'
                                    size='sm'
                                    className='rounded-sm bg-white'
                                > <Check />
                                    Accept
                                </Button>
                                <Button isDisabled
                                    variant='outline'
                                    size='sm'
                                    className='rounded-sm bg-white'
                                > <Ban />
                                    Reject
                                </Button>
                            </>
                        }
                    </div>
                </summary>
                <div className="collapse-content">
                    <p>Requested By: {requestedBy.name}</p>
                    <p>Receivable Amount: {pet.fee}$</p>
                    <p>Request Status: {adoptionInfo.status}</p>
                    <p>Pickup Date: <strong>{adoptionInfo.pickupDate}</strong></p>
                </div>
            </details>
        </div>
    );
};

export default AdoptionRequestCard;