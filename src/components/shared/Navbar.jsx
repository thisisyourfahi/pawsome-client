import React from 'react';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
    return (
        <div className='flex justify-between px-20 py-2 border-b border-b-slate-300 mb-10'>
            <div>
                <p>Navbar</p>
            </div>
            <div>
                <ThemeToggle />
            </div>
        </div>
    );
};

export default Navbar;