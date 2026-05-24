'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const DashboardLeft = () => {
    const pathName = usePathname();

    return (
        <div className='w-60 bg-gray-200 p-4 pr-0 rounded-sm'>
            <nav className="flex flex-col gap-3">
                <Link href="/dashboard/my-listings" className={`hover:bg-gray-300 p-2 rounded-l-sm ${pathName === '/dashboard/my-listings' && 'bg-linear-to-r from-[#ff0062] to-[#A8124A] text-white transition-all duration-200'}`}>
                    My Listings
                </Link>

                <Link href="/dashboard/adoption-requests"
                    className={`hover:bg-gray-300 p-2 rounded-l-sm ${pathName === '/dashboard/adoption-requests' && 'bg-linear-to-r from-[#ff0062] to-[#A8124A] text-white transition-all duration-200'}`}
                >
                    Adoption Requests
                </Link>

                <Link href="/dashboard/my-requests"
                    className={`hover:bg-gray-300 p-2 rounded-l-sm ${pathName === '/dashboard/my-requests' && 'bg-linear-to-r from-[#ff0062] to-[#A8124A] text-white transition-all duration-200'}`}
                >
                    My Requests
                </Link>
                
            </nav>
        </div >
    );
};

export default DashboardLeft;