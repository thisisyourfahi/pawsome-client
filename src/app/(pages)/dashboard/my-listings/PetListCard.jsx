import { CircleInfo, HandPointUp, TrashBin } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import UpdateModal from './UpdateModal';

const PetListCard = ({ pet }) => {
    const { _id, petName, species, breed, age, image, gender, vaccination} = pet

    return (
        <div className='flex justify-between items-center p-4 rounded-sm border border-[#810b38]'>
            <div className='flex items-center gap-4'>
                <div className='relative aspect-square w-40'>
                    <Image src={image} fill className='object-cover rounded-sm overflow-hidden' alt={petName}></Image>
                </div>
                <div className='space-y-2'>
                    <div className='flex items-center gap-4'>
                        <div className='w-fit flex items-center gap-2 py-1 px-4 rounded-sm border border-[#810B38] text-[#810B38] hover:bg-linear-to-r hover:from-[#ff0062] hover:to-[#A8124A] hover:text-white transition-all duration-200'>
                            <h3 className='text-xl font-bold '>{petName}</h3>
                            <p className='text-muted'>{species}</p>
                        </div>
                        <p className=' py-1 px-4 border border-[#810B38] text-[#810B38] hover:bg-linear-to-r hover:from-[#ff0062] hover:to-[#A8124A] hover:text-white transition-all duration-200 rounded-sm'>Vaccination: <strong>{vaccination}</strong></p>
                    </div>
                    <div className='space-y-2'>
                        <p className='text-sm py-1 px-4 rounded-sm border border-[#810B38] text-[#810B38] hover:bg-linear-to-r hover:from-[#ff0062] hover:to-[#A8124A] hover:text-white transition-all duration-200'>Breed: <strong>{breed}</strong></p>
                        <p className='text-sm py-1 px-4 rounded-sm border border-[#810B38] text-[#810B38] hover:bg-linear-to-r hover:from-[#ff0062] hover:to-[#A8124A] hover:text-white transition-all duration-200'>Age: <strong>{age} years old</strong></p>
                        <p className='text-sm py-1 px-4 border border-[#810B38] text-[#810B38] hover:bg-linear-to-r hover:from-[#ff0062] hover:to-[#A8124A] hover:text-white transition-all duration-200 rounded-sm'>Gender: <strong>{gender}</strong></p>
                    </div>
                </div>
            </div>

            {/* details, update, delete */}
            <div className='flex flex-col gap-4 justify-center items-center'>
                <Link href={`/all-pets/${_id}`}>
                    <Button variant='outline' size='sm' className='rounded-sm border-[#810B38] text-[#810B38] hover:bg-linear-to-r hover:from-[#ff0062] hover:to-[#A8124A] hover:text-white transition-all duration-200'> <CircleInfo /> Details</Button>
                </Link>
                
                <UpdateModal pet={pet} />

                <Button
                    variant='outline'
                    size='sm'
                    className='rounded-sm border-[#810B38] text-[#810B38] hover:bg-linear-to-r hover:from-[#ff0062] hover:to-[#A8124A] hover:text-white transition-all duration-200'
                > <TrashBin />
                    Delete
                </Button>

            </div>
        </div>
    );
};

export default PetListCard;