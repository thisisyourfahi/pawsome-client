import { auth } from '@/lib/auth';
import { Bars, Sliders } from '@gravity-ui/icons';
import { Avatar, Card } from '@heroui/react';
import { headers } from 'next/headers';
import React from 'react';

const DashboardPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;
    console.log('dashboard:', user);

    return (
        <div className='bg-gray-200 p-4 min-h-screen rounded-sm flex justify-center items-center'>
            <Card className="animate__bounceInUp animate__animated shadow-none rounded-sm bg-gray-300 mx-auto md:w-125 py-10">
                <h2 className='text-2xl text-center'>Welcom to your Dashboard, <strong>{user?.name}</strong>!</h2>
                <Avatar className='w-40 h-40 rounded-full mx-auto'>
                    <Avatar.Image className='object-cover' src={user?.image} alt={user?.name} referrerPolicy="no-referrer" />
                    <Avatar.Fallback className='text-7xl'>{user?.name[0]}</Avatar.Fallback>
                </Avatar>
                <h2 className='text-3xl font-semibold text-center'>{user?.name}</h2>
                <p className='text-muted text-center'>{user?.email}</p>
            </Card>
        </div>
    );
};

export default DashboardPage;