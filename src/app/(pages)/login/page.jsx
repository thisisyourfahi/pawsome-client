'use client'
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const userInfo = Object.fromEntries(formData.entries());
    }
    return (
        <div className="space-y-4">
            <h2 className="text-2xl text-center font-bold">Log in to Pawsome</h2>
            <div className="space-y-4">
                <Form className="flex max-w-96 flex-col gap-4 mx-auto" onSubmit={onSubmit}>
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
                    <div className="flex gap-2 justify-center">
                        <Button className={'rounded-sm'} type="submit">
                            <Check />
                            Login
                        </Button>
                        <Button className={'rounded-sm'} type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>
                </Form>

                <div className="text-center">
                    <p className="text-muted">Don&apos;t have an account? <Link href={'/signup'} className="text-blue-500">Sign up</Link></p>
                    <p className="text-muted">Or you can simply Log in with google</p>
                    <Button variant="outline" className={'rounded-sm mt-2'}><FcGoogle />Google</Button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;