import { MapPin } from '@gravity-ui/icons';
import { Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const PetDetails = ({ pet }) => {
    const { _id, petName, species, breed, age, health, image, gender, adoption, vaccination, location, fee, description } = pet

    return (
        <div className='max-w-200 mx-auto p-4 space-y-4 border border-[#810b38]'>
            {/* image */}
            <div className='relative aspect-square'>
                <Image src={image} fill alt={petName} className='object-cover rounded-sm' />
                {
                    adoption === 'Available' ? <>
                        <div className="absolute top-2 right-2 badge badge-success rounded-sm font-bold">Available For Adoption</div>
                    </> : <>
                        <div className="absolute top-2 right-2 badge badge-error rounded-sm font-bold">Adopted</div>
                    </>
                }
            </div>

            {/* name, species, breed, age, gender, adoption */}
            <div className='space-y-2'>
                <div className='flex items-center gap-2 py-1 px-4 rounded-sm border border-[#810B38] text-[#810B38] hover:bg-linear-to-r hover:from-[#ff0062] hover:to-[#A8124A] hover:text-white transition-all duration-200'>
                    <h3 className='text-3xl font-bold '>{petName}</h3>
                    <p className='text-muted'>{species}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='py-1 px-4 rounded-sm border border-[#810B38] text-[#810B38] hover:bg-linear-to-r hover:from-[#ff0062] hover:to-[#A8124A] hover:text-white transition-all duration-200'>Breed: <strong>{breed}</strong></p>
                    <p className=' py-1 px-4 rounded-sm border border-[#810B38] text-[#810B38] hover:bg-linear-to-r hover:from-[#ff0062] hover:to-[#A8124A] hover:text-white transition-all duration-200'>Age: <strong>{age} years old</strong></p>
                    <p className=' py-1 px-4 border border-[#810B38] text-[#810B38] hover:bg-linear-to-r hover:from-[#ff0062] hover:to-[#A8124A] hover:text-white transition-all duration-200 rounded-sm'>Gender: <strong>{gender}</strong></p>
                </div>
                <div className='flex gap-8'>
                    <p className=' py-1 px-4 border border-[#810B38] text-[#810B38] hover:bg-linear-to-r hover:from-[#ff0062] hover:to-[#A8124A] hover:text-white transition-all duration-200 rounded-sm'>Health: <strong>{health}</strong></p>
                    <p className=' py-1 px-4 border border-[#810B38] text-[#810B38] hover:bg-linear-to-r hover:from-[#ff0062] hover:to-[#A8124A] hover:text-white transition-all duration-200 rounded-sm'>Vaccination: <strong>{vaccination}</strong></p>
                </div>
                <div className='flex gap-8'>
                    <p className=' py-1 px-4 border border-[#810B38] text-[#810B38] hover:bg-linear-to-r hover:from-[#ff0062] hover:to-[#A8124A] hover:text-white transition-all duration-200 rounded-sm'>Adoption Fee: <strong>{fee}$</strong></p>
                    <p className=' py-1 px-4 border border-[#810B38] text-[#810B38] hover:bg-linear-to-r hover:from-[#ff0062] hover:to-[#A8124A] hover:text-white transition-all duration-200 rounded-sm flex items-center gap-4'><MapPin /> <strong>{location}</strong></p>
                </div>
                <p className=' py-1 px-4 border border-[#810B38] text-[#810B38] hover:bg-linear-to-r hover:from-[#ff0062] hover:to-[#A8124A] hover:text-white transition-all duration-200 rounded-sm'>About The Dog: <br /> <strong>{description}</strong></p>
            </div>

            {/* vaccitination, fee, location, , description */}
            <div>

            </div>
        </div>
    );
};

export default PetDetails;