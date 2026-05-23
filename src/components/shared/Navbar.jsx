import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import logo from '@/assets/pawsome_logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { CirclePlus, House, LayoutList } from '@gravity-ui/icons';
import UserDetailsNavTop from './UserDetailsNavTop';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const Navbar = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;

    return (
        <div className='flex justify-between px-20 py-2 border-b border-b-slate-300 mb-10'>
            <Link href={'/'} className='flex items-center gap-1'>
                <Image src={logo} width={30} height={30} alt='pawsome' className='rounded-full'></Image>
                <h2 className='text-xl font-bold'>Pawsome</h2>
            </Link>
            <div className='flex items-center md:gap-8'>
                <Link href={'/'} className='flex items-center gap-1 hover:text-[#FF4081]'>
                    <House /> Home
                </Link>
                <Link href={'/all-pets'} className='flex items-center gap-1 hover:text-[#FF4081]'>
                    <LayoutList /> All Pets
                </Link>
                <Link href={'/add-pet'} className='flex items-center gap-1 hover:text-[#FF4081]'>
                    <CirclePlus /> Add A Pet
                </Link>
            </div>
            <div className='flex items-center gap-4'>
                <ThemeToggle />

                {
                    user ? <>
                        <UserDetailsNavTop user={user} />
                    </> : <>
                        <Link href={'/login'} className='hover:text-[#FF4081]'>Login</Link>
                        <Link href={'/signup'} className='hover:text-[#FF4081]'>Signup</Link>
                    </>
                }

            </div>
        </div>
    );
};

export default Navbar;