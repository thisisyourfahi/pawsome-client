import React from 'react';
import DashboardLeft from './DashboardLeft';

const layout = ({children}) => {
    return (
        <div className='flex min-h-screen gap-4'>
            <DashboardLeft ></DashboardLeft>
            
            <div className='flex-1'>
                {children}
            </div>
        </div>
    );
};

export default layout;