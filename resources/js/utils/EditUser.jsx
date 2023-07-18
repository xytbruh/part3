import React, { useState } from "react";
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

export default function EditUser() {
    const handleOpen = () => setOpen((cur) => !cur);
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Button
                className="font-medium bg-blue-500 px-2 mx-1 rounded-md text-black"
                onClick={handleOpen}
            >
                Edit
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
                        color="blue"
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography variant="h3" color="white">
                            Edit User
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Input label="kategori" type="text" size="lg" />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button type="submit" variant="gradient" fullWidth>
                            Edit
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>
        </div>
    );
}
