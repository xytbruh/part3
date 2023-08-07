import React, { useEffect, useState } from "react";
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
} from "@material-tailwind/react";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";

export default function AddUser() {
    const handleOpen = () => setOpen((cur) => !cur);
    const [open, setOpen] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("user"));
        setOpen(false);
    };
    return (
        <div>
            <Button
                className="font-medium bg-green-500 px-2 mx-1 rounded-md text-black"
                onClick={handleOpen}
            >
                Tambah
            </Button>
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardHeader
                        variant="gradient"
                        color="green"
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography variant="h3" color="white">
                            Add User
                        </Typography>
                    </CardHeader>
                    <form onSubmit={submit}>
                        <CardBody className="flex flex-col gap-4">
                            <div>
                                <Input
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    autoComplete="name"
                                    onChange={handleOnChange}
                                    label="name"
                                />

                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    autoComplete="username"
                                    onChange={handleOnChange}
                                    label="email"
                                />

                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    label="password"
                                    value={data.password}
                                    autoComplete="new-password"
                                    onChange={handleOnChange}
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <Input
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    autoComplete="new-password"
                                    onChange={handleOnChange}
                                    label="password confirmation"
                                />

                                <InputError
                                    message={errors.password_confirmation}
                                    className="mt-2"
                                />
                            </div>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button
                                type="submit"
                                variant="gradient"
                                disabled={processing}
                                fullWidth
                            >
                                Add
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </Dialog>
        </div>
    );
}
