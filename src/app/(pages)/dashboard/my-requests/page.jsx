import { getAllRequestsOfAUser } from '@/api/adoptionServices';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';
import NoRequests from './NoRequests';
import RequestCard from './RequestCard';

const MyRequests = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;
    const adoptions = await getAllRequestsOfAUser(user.id)

    return (
        <div className='bg-gray-200 p-4 min-h-screen rounded-sm'>
            {
                adoptions.length > 0 ? <div className='space-y-4'>
                    {
                        adoptions.map(adoption => <RequestCard key={adoption._id} adoptionInfo={adoption} />)
                    }
                </div> : <>
                    <NoRequests />
                </>
            }
        </div>
    );
};

export default MyRequests;