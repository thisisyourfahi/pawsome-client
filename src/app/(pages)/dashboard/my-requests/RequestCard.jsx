import { getASinglePet } from '@/api/petServices';
import React from 'react';
import RequestDeleteModal from './RequestDeleteModal';

const RequestCard = async ({ adoptionInfo }) => {
    const pet = await getASinglePet(adoptionInfo.petId);

    return (
        <div>
            <details className="collapse bg-linear-to-r from-[#921847e7] to-[#ff005db6] text-white transition-all duration-200 rounded-sm" name="my-accordion-det-1" open>
                <summary className="flex items-center justify-between collapse-title text-xl">
                    <p>Adoption request for <strong>{pet.petName}</strong><small> ({adoptionInfo.status})</small></p>
                    <RequestDeleteModal pet={pet} adoptionId={adoptionInfo._id} />
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