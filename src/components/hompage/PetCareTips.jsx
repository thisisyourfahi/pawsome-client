import Image from 'next/image';
import React from 'react';
import dental from '@/assets/dental_hygiene.png'
import parasite from '@/assets/parasite.png'
import nutrition from '@/assets/nutrition.png'

const PetCareTips = () => {
    return (
        <div className='max-w-4xl mx-auto space-y-4'>
            <p className='text-3xl font-bold'>Pet Care Tips</p>

            <div className='space-y-4'>
                <div className='flex items-center gap-4 border border-[#810B38] p-4 rounded-sm'>
                    <Image className='rounded-sm' src={dental} width={400} height={100} alt='Pet Care Tips'></Image>
                    <div>
                        <h2 className='text-2xl font-bold'>Master Dental Hygiene</h2>
                        <p>Failing to care for your pet’s teeth can lead to periodontal disease, which affects their overall health. Start brushing early using pet-specific toothpaste to keep their pearly whites healthy and pain-free.</p>
                    </div>
                </div>
                <div className='flex items-center gap-4 border border-[#810B38] p-4 rounded-sm'>
                    <Image className='rounded-sm' src={parasite} width={400} height={100} alt='Pet Care Tips'></Image>
                    <div>
                        <h2 className='text-2xl font-bold'>Prioritize Year-Round Parasite Prevention</h2>
                        <p>Fleas, ticks, and heartworms are more than just nuisances; they transmit serious diseases. Consult your veterinarian to select the best year-round preventative medication for your pet’s lifestyle and region.</p>
                    </div>
                </div>
                <div className='flex items-center gap-4 border border-[#810B38] p-4 rounded-sm'>
                    <Image className='rounded-sm' src={nutrition} width={400} height={100} alt='Pet Care Tips'></Image>
                    <div>
                        <h2 className='text-2xl font-bold'>Maintain Optimal Nutrition and Hydration</h2>
                        <p>Providing a balanced diet essential for your pet&apos;s life stage is crucial, but keeping fresh water accessible at all times is equally vital. Proper hydration supports digestion, circulation, and kidney function, ensuring they feel their best.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PetCareTips;