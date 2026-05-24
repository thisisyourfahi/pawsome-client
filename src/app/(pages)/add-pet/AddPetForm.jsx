'use client'
import { addPet } from '@/api/petServices';
import { authClient } from '@/lib/auth-client';
import { Button, FieldError, Input, Label, ListBox, TextArea, TextField, Select, Card } from '@heroui/react';
import React from 'react';
import { toast } from 'react-toastify';

const AddPetForm = () => {
    const {data, isPending} = authClient.useSession();
    const user = data?.user;

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const petInfo = Object.fromEntries(formData.entries());
        petInfo.ownderId = user?.id;

        // sending request to server
        const response = await addPet(petInfo); 
        if (response.ok) {
            toast.success(`${petInfo.petName} has been added successfully`);
            e.target.reset()
        }
    }
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Add Destination</h2>
            <Card className="max-w-7xl mx-auto rounded-sm">
                <form onSubmit={onSubmit} className="space-y-8">
                    <TextField name='petName' isRequired>
                        <Label>Pet Name</Label>
                        <Input placeholder='Your Pet Name' className={'rounded-sm'}></Input>
                    </TextField>

                    <div className='grid grid-cols-2 gap-4'>
                        <TextField name='species' isRequired>
                            <Label>Species</Label>
                            <Input placeholder='Dog/Cat/Bird/etc.' className={'rounded-sm'}></Input>
                        </TextField>
                        <TextField name='breed' isRequired>
                            <Label>Breed</Label>
                            <Input placeholder='Pet Breed' className={'rounded-sm'}></Input>
                        </TextField>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                        <TextField name='age' type='number' isRequired>
                            <Label>Age</Label>
                            <Input placeholder='Pet Age' className={'rounded-sm'}></Input>
                        </TextField>
                        <TextField name='health' type='text' isRequired>
                            <Label>Health Status</Label>
                            <Input placeholder='Health Status' className={'rounded-sm'}></Input>
                        </TextField>
                    </div>
                    <TextField name='image' type='text' isRequired>
                        <Label>Image URL</Label>
                        <Input placeholder="https://example.com/image.jpg" className={'rounded-sm'}></Input>
                    </TextField>

                    <div className='grid grid-cols-3 gap-4'>
                        <Select name="gender" isRequired className="w-full" placeholder="Select Gender">
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
                        <Select name="adoption" isRequired className="w-full" placeholder="Select Gender">
                            <Label>Adoption Status</Label>
                            <Select.Trigger className="rounded-sm">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover className={'rounded-sm'}>
                                <ListBox>
                                    <ListBox.Item className='rounded-sm' id="Adopted" textValue="Adopted">
                                        Adopted
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item className='rounded-sm' id="Available" textValue="Available">
                                        Available
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                        <Select name="vaccination" isRequired className="w-full" placeholder="Select Gender">
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
                        <TextField name='location' type='text' isRequired>
                            <Label>Location</Label>
                            <Input placeholder='Current Location' className={'rounded-sm'}></Input>
                        </TextField>
                        <TextField name='fee' type='number' isRequired>
                            <Label>Adoption Fee</Label>
                            <Input placeholder='Adoption Fee' className={'rounded-sm'}></Input>
                        </TextField>
                    </div>
                    <div>
                        <Label>Description</Label>
                        <TextArea
                            name='description'
                            aria-label="Quick project update"
                            className="h-20 w-full"
                            placeholder="Share a few words about your pet..."
                        />
                    </div>

                    {/* Buttons */}
                    <div className='space-y-2'>
                        <Button className={'rounded-sm w-full'} type="reset" variant="secondary">
                            Reset
                        </Button>
                        <Button
                            type="submit"
                            className="rounded-sm w-full bg-[#810B38]"
                        >
                            Add Pet
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default AddPetForm;