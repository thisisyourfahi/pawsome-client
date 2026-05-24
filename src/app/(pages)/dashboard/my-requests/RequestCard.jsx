import { getASinglePet } from '@/api/petServices';
import React from 'react';

const RequestCard = async ({ adoptionInfo }) => {
    console.log('adoption info:', adoptionInfo)
    const pet = await getASinglePet(adoptionInfo.petId);

    return (
        <div>
            <details className="collapse bg-linear-to-r from-[#921847e7] to-[#ff005db6] text-white transition-all duration-200 rounded-sm" name="my-accordion-det-1" open>
                <summary className="collapse-title text-xl">Adoption request for <strong>{pet.petName}</strong></summary>
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