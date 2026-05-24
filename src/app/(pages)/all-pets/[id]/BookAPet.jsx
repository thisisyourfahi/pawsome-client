'use client'
import { addAdoption } from '@/api/adoptionServices';
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Input, Label, TextField, Select, ListBox, Button, FieldError } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const BookAPet = ({ pet }) => {
    const router = useRouter();
    const { _id, petName, breed, age, gender, vaccination, location, fee, ownderId } = pet;

    const { data, isPending } = authClient.useSession();
    let user = {};
    if (!isPending) {
        user = data?.user;
    }
    // const user = data?.user;
    
    const onSubmit = async (e) => {
        e.preventDefault();
        const date = e.target.pickupDate.value;

        const adoptionInfo = {
            applicantId: user.id,
            ownerId: ownderId,
            petId: _id,
            pickupDate: date, 
            status: 'Pending'
        }
        const res = await addAdoption(adoptionInfo);
        if (res.ok) {
            toast.success('Adoption request has been placed!');
            router.push('/all-pets')
        } else {
            toast.error('Something went wrong. Please try again.')
            router.refresh()
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="space-y-8">
                <TextField name='petName' isDisabled defaultValue={petName}>
                    <Label>Pet Name</Label>
                    <Input placeholder='Your Pet Name' className={'rounded-sm'}></Input>
                </TextField>

                <div className='grid grid-cols-2 gap-4'>
                    <TextField isDisabled name='age' type='number' defaultValue={age}>
                        <Label>Age</Label>
                        <Input placeholder='Pet Age' className={'rounded-sm'}></Input>
                    </TextField>
                    <TextField isDisabled defaultValue={breed} name='breed' >
                        <Label>Breed</Label>
                        <Input placeholder='Pet Breed' className={'rounded-sm'}></Input>
                    </TextField>
                </div>

                <div className='grid grid-cols-3 gap-4'>
                    <Select isDisabled defaultValue={gender} name="gender" className="w-full" placeholder="Select Gender">
                        <Label>Gender</Label>
                        <Select.Trigger className="rounded-sm">
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover className={'rounded-sm'}>
                            <ListBox>
                                <ListBox.Item className='rounded-sm' id="Male" textValue="Male">
                                    Male
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item className='rounded-sm' id="Female" textValue="Female">
                                    Female
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>

                    <Select isDisabled isReadOnly defaultValue={vaccination} name="vaccination" className="w-full" placeholder="Select Gender">
                        <Label>Vaccination Status</Label>
                        <Select.Trigger className="rounded-sm">
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover className={'rounded-sm'}>
                            <ListBox>
                                <ListBox.Item className='rounded-sm' id="Vaccinated" textValue="Vaccinated">
                                    Vaccinated
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item className='rounded-sm' id="NotVaccinated" textValue="NotVaccinated">
                                    Not Vaccinated
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                    <TextField isDisabled defaultValue={location} name='location' type='text'>
                        <Label>Location</Label>
                        <Input placeholder='Current Location' className={'rounded-sm'}></Input>
                    </TextField>
                    <TextField isDisabled defaultValue={fee} name='fee' type='number'>
                        <Label>Adoption Fee</Label>
                        <Input placeholder='Adoption Fee' className={'rounded-sm'}></Input>
                    </TextField>
                </div>

                <div>
                    <TextField name="pickupDate" type="date" isRequired>
                        <Label>Pick Up Date</Label>
                        <Input type="date" className="rounded-sm" />
                        <FieldError />
                    </TextField>
                </div>

                {/* Buttons */}
                <div className='space-y-2'>
                    <Button className={'rounded-sm w-full'} type="reset" variant="secondary">
                        Reset
                    </Button>
                    <Button
                        variant="outline"
                        type="submit"
                        className="rounded-sm w-full border-[#810B38] text-[#810B38] hover:bg-linear-to-r hover:from-[#ff0062] hover:to-[#A8124A] hover:text-white transition-all duration-200"
                    >
                        <Check />
                        Send Adopt Request
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default BookAPet;