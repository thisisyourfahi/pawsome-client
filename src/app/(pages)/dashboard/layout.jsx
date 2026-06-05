import React from 'react';
import DashboardLeft from './DashboardLeft';

const layout = ({children}) => {
    return (
        <div className='flex flex-col md:flex-row md:min-h-screen gap-4 px-4 md:px-0'>
            <DashboardLeft ></DashboardLeft>
            
            <div className='flex-1'>
                {children}
            </div>
        </div>
    );
};

export default layout;