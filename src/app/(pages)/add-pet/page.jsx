import React from 'react';
import AddPetForm from './AddPetForm';

const AddPetPage = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-5'>
            {/* add a pet form */}
            <div className='md:col-span-3'>
                <AddPetForm />
            </div>

            {/* adoption form */}
            <div className='md:col-span-2'>

            </div>
        </div>
    );
};

export default AddPetPage;