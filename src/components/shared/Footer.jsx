import { Envelope, Handset } from '@gravity-ui/icons';
import { Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/pawsome_logo.png'

const Footer = () => {
    return (
        <div className='flex flex-col gap-4 justify-between items-center mt-10 lg:mt-20 p-8'>
            <div>
                <ul className='flex gap-8'>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/about-us'}>About Us</Link></li>
                    <li><Link href={'/all-pets'}>Browse Pets</Link></li>
                </ul>
            </div>
            <div className='flex  items-center gap-4'>
                <div className='flex items-center gap-1'>
                    <Image src={logo} width={40} height={40} alt='pawsome' className='rounded-full'></Image>
                    <h2 className='text-4xl font-bold'>Pawsome</h2>
                </div>
                <Separator orientation='vertical'></Separator>
                <div>
                    <p className='flex items-center gap-1'><Envelope />contact@pawsome.com</p>
                    <p className='flex items-center gap-1'><Handset />+88 01712 079557</p>
                </div>
            </div>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by Pawsome</p>

        </div>
    );
};

export default Footer;