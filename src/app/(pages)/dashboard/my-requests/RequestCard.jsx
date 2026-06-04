import { getASinglePet } from '@/api/petServices';
import React from 'react';
import RequestDeleteModal from './RequestDeleteModal';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { CircleInfo } from '@gravity-ui/icons';

const RequestCard = async ({ adoptionInfo }) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const pet = await getASinglePet(adoptionInfo.petId, token);

    return (
        <div>
            <details className="collapse bg-linear-to-r from-[#921847e7] to-[#ff005db6] text-white transition-all duration-200 rounded-sm" name="my-accordion-det-1" open>
                <summary className="flex items-center justify-between collapse-title text-xl">
                    <p>Adoption request for <strong>{pet.petName}</strong><small> ({adoptionInfo.status})</small></p>
                    <div className='space-x-4'>
                        <Link href={`/all-pets/${adoptionInfo.petId}`}>
                            <Button
                                variant='outline'
                                size='sm'
                                className='rounded-sm border-[#810B38] text-[#810B38] hover:bg-linear-to-r hover:from-[#ff0062] hover:to-[#A8124A] hover:text-white transition-all duration-200'
                            > <CircleInfo />
                                View
                            </Button>
                        </Link>
                        <RequestDeleteModal pet={pet} adoptionId={adoptionInfo._id} />
                    </div>
                </summary>
                <div className="collapse-content">
                    <p>Payable Amount: {pet.fee}$</p>
                    <p>Request Status: {adoptionInfo.status}</p>
                    <p>Pickup Date: <strong>{adoptionInfo.pickupDate}</strong></p>
                </div>
            </details>
        </div>
    );
};

export default RequestCard;