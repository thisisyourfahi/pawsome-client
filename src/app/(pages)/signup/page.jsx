'use client'
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userInfo = Object.fromEntries(formData.entries());
        console.log(userInfo);
    }
    return (
        <div className="space-y-4">
            <h2 className="text-center text-2xl font-bold">Join Pawsome Today</h2>
            <div className="space-y-4">
                <Form className="flex max-w-96 flex-col gap-4 mx-auto" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="name"
                        type="text"

                    >
                        <Label>Name</Label>
                        <Input className={'rounded-sm'} placeholder="Fahiyan Shah Chand" />
                        <FieldError />
                    </TextField>

                    <TextField
                        name="image"
                        type="text"

                    >
                        <Label>Image URL</Label>
                        <Input className={'rounded-sm'} placeholder="https://example.com/image.jpg" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input className={'rounded-sm'} placeholder="mail.fahiyan@gmail.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input className={'rounded-sm'} placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2">
                        <Button className={'rounded-sm'} type="submit">
                            <Check />
                            Submit
                        </Button>
                        <Button className={'rounded-sm'} type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>
                </Form>
                <div className="text-center">
                    <p className="text-muted">Alreadery have an account? <Link href={'/login'} className="text-blue-500">Log in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;