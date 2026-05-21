import React from 'react';
import Image from 'next/image';
import animation from '@/assets/pawsomeanimation.svg'
import { Button } from '@heroui/react';
import Link from 'next/link';

const Banner = () => {
    return (
        <div>
            <div>
                <div className='relative w-full h-[60vh]'>
                    <Image src={animation} fill
                        className='object-contain blur-[2px]'
                        alt='Pawsome Banner Animation'></Image>
                    <div className='absolute bottom-1/2 left-0 right-0 flex flex-col gap-4 items-center justify-center'>
                        <Link href={'/all-pets'}>
                            <Button className={'rounded-md bg-[#810B38]'}>Browse All Pets</Button>
                        </Link>
                        <p className='font-bold text-xl'>Pawsome is a community driven platform, where you can adopt pets.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;