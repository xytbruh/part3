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

export default function EditCategory({ EditCategory }) {
    const [title, setTitle] = useState("");

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
    const editCategory = () => {
        const data = {
            title,
        };
        router.put(`menu-marketplace/update`, data);
        setTitle("");
        setOpen(false);
    };

    return (
        <>
            <button
                className="font-medium bg-blue-500 px-2 mx-1 rounded-md text-black"
                onClick={handleOpen}
            >
                Edit
            </button>
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
                            Edit
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Input
                            label="kategori"
                            onChange={(title) => {
                                setTitle(title.target.value);
                            }}
                            defaultValue={EditCategory.title}
                            size="lg"
                        />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button
                            onClick={() => editCategory()}
                            variant="gradient"
                            fullWidth
                        >
                            Edit
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    );
}
