'use client'
import { updateAPet } from "@/api/petServices";
import { HandPointUp, Rocket } from "@gravity-ui/icons";
import { Button, Card, Input, Label, ListBox, Modal, TextArea, TextField, Select } from "@heroui/react";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const UpdateModal = ({ pet }) => {
    const { _id, petName, species, breed, age, health, image, gender, adoption, vaccination, location, fee, description } = pet;
    
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const petInfo = Object.fromEntries(formData.entries());
        const res = await updateAPet(petInfo, _id)
        if (res.ok) {
            toast.success('Pet information updated!');
            router.push('/dashboard')
        }
    }

    return (
        <Modal>
            <Button
                variant='outline'
                size='sm'
                className='rounded-sm border-[#810B38] text-[#810B38] hover:bg-linear-to-r hover:from-[#ff0062] hover:to-[#A8124A] hover:text-white transition-all duration-200'
            >
                <HandPointUp /> Update
            </Button>
            <Modal.Backdrop className={'bg-linear-to-r hover:to-white/30 hover:from-[#ff0062]/70'}>
                <Modal.Container className={''}>
                    <Modal.Dialog className="max-w-5xl rounded-sm">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Update {petName}</Modal.Heading>
                        </Modal.Header>

                        <Modal.Body>
                            <Card className="mx-auto rounded-sm">
                                <form onSubmit={onSubmit} className="space-y-8">
                                    <TextField name='petName' defaultValue={petName} isRequired>
                                        <Label>Pet Name</Label>
                                        <Input placeholder='Your Pet Name' className={'rounded-sm'}></Input>
                                    </TextField>

                                    <div className='grid grid-cols-2 gap-4'>
                                        <TextField defaultValue={species} name='species' isRequired>
                                            <Label>Species</Label>
                                            <Input placeholder='Dog/Cat/Bird/etc.' className={'rounded-sm'}></Input>
                                        </TextField>
                                        <TextField defaultValue={breed} name='breed' isRequired>
                                            <Label>Breed</Label>
                                            <Input placeholder='Pet Breed' className={'rounded-sm'}></Input>
                                        </TextField>
                                    </div>

                                    <div className='grid grid-cols-2 gap-4'>
                                        <TextField name='age' type='number' defaultValue={age} isRequired>
                                            <Label>Age</Label>
                                            <Input placeholder='Pet Age' className={'rounded-sm'}></Input>
                                        </TextField>
                                        <TextField name='health' type='text' defaultValue={health} isRequired>
                                            <Label>Health Status</Label>
                                            <Input placeholder='Health Status' className={'rounded-sm'}></Input>
                                        </TextField>
                                    </div>
                                    <TextField name='image' type='text' defaultValue={image} isRequired>
                                        <Label>Image URL</Label>
                                        <Input placeholder="https://example.com/image.jpg" className={'rounded-sm'}></Input>
                                    </TextField>

                                    <div className='grid grid-cols-3 gap-4'>
                                        <Select defaultValue={gender} name="gender" isRequired className="w-full" placeholder="Select Gender">
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
                                        <Select defaultValue={adoption} name="adoption" isRequired className="w-full" placeholder="Select Gender">
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
                                        <Select defaultValue={vaccination} name="vaccination" isRequired className="w-full" placeholder="Select Gender">
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
                                        <TextField defaultValue={location} name='location' type='text' isRequired>
                                            <Label>Location</Label>
                                            <Input placeholder='Current Location' className={'rounded-sm'}></Input>
                                        </TextField>
                                        <TextField defaultValue={fee} name='fee' type='number' isRequired>
                                            <Label>Adoption Fee</Label>
                                            <Input placeholder='Adoption Fee' className={'rounded-sm'}></Input>
                                        </TextField>
                                    </div>
                                    <div>
                                        <Label>Description</Label>
                                        <TextArea defaultValue={description}
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
                                            variant="outline"
                                            type="submit"
                                            className="rounded-sm w-full border-[#810B38] text-[#810B38] hover:bg-linear-to-r hover:from-[#ff0062] hover:to-[#A8124A] hover:text-white transition-all duration-200"
                                        >
                                            <HandPointUp />
                                            Update Pet
                                        </Button>
                                    </div>
                                </form>
                            </Card>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default UpdateModal;