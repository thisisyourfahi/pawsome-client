import { MapPin } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PetCard = ({ pet }) => {
    const { petName, image, adoption, fee, species, location } = pet
    return (
        <div className='animate__animated animate__fadeIn rounded-sm border border-[#810B38] hover:shadow-[0_0_25px_5px_rgba(129,11,56,0.4)] transition-shadow p-2 space-y-4'>
            <div className='relative aspect-square'>
                <Image src={image} fill className='object-cover rounded-sm overflow-hidden' alt={petName}></Image>
            </div>
            <div className='space-y-1'>
                <div className='flex items-center gap-1'>
                    <h3 className='text-xl font-bold'>{petName}</h3>
                    <p className='text-sm text-muted'>{species}</p>
                </div>
                <div className='flex items-center gap-1'>
                    <MapPin />
                    <p>{location}</p>
                </div>
                <div className='flex items-center gap-1'>
                    <p>Adoption Fee: <strong>{fee}$</strong></p>
                </div>

                <div className='flex justify-between items-center'>
                    <Link href={'#'}>
                        <Button variant='outline' size='sm' className='rounded-sm border-[#810B38] text-[#810B38] hover:bg-linear-to-r hover:from-[#ff0062] hover:to-[#A8124A] hover:text-white transition-all duration-200'>View Details</Button>
                    </Link>
                    <Link href={'#'}>
                        <Button
                            variant='outline'
                            size='sm'
                            className='rounded-sm border-[#810B38] text-[#810B38] hover:bg-linear-to-r hover:from-[#ff0062] hover:to-[#A8124A] hover:text-white transition-all duration-200'
                        >
                            Adopt Now
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PetCard;