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

export default function AddCategory() {
    const handleOpen = () => setOpen((cur) => !cur);
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("image", image);

        router.post("/admin/menu-marketplace", formData);
        setOpen(false);
    };
    return (
        <div>
            <Button className="bg-green-500" onClick={handleOpen}>
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
                            Tambah Kategori
                        </Typography>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                        <CardBody className="flex flex-col gap-4">
                            <Input
                                label="kategori"
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                }}
                                size="lg"
                            />
                            <Input
                                label="Image"
                                type="file"
                                accept="image/*"
                                onChange={(e) => setImage(e.target.files[0])}
                                size="lg"
                            />
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button
                                variant="gradient"
                                type="submit"
                                color="green"
                                fullWidth
                            >
                                Tambah
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </Dialog>
        </div>
    );
}
