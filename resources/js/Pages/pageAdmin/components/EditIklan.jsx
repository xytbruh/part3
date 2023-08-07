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
import { router } from "@inertiajs/react";

export default function EditIklan({ banner }) {
    const handleOpen = () => setOpen((cur) => !cur);
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState(null);

    const id = banner.id;

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            id,
            image,
        };
        router.post("/admin/banner/update", data);
        setImage(null);
        setOpen(false);
    };
    return (
        <div>
            <Button
                className="bg-blue-500 w-full p-2 rounded-md text-white"
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
                            Edit Iklan
                        </Typography>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                        <CardBody className="flex flex-col gap-4">
                            <div>
                                <label htmlFor="">Current Image:</label>
                                {banner.image && (
                                    <img
                                        src={`/storage/${banner.image}`}
                                        className="w-full"
                                        alt=""
                                    />
                                )}
                            </div>
                            <Input
                                label="Image"
                                type="file"
                                onChange={(e) => {
                                    setImage(e.target.files[0]);
                                }}
                                size="lg"
                            />
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button type="submit" variant="gradient" fullWidth>
                                Edit
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </Dialog>
        </div>
    );
}
