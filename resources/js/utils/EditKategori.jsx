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

export default function EditKategori({ category }) {
    const handleOpen = () => setOpen((cur) => !cur);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState(category.name);
    const [image, setImage] = useState(null);

    const handleSubmit = () => {
        const data = {
            name,
            image,
        };
        router.post("/admin/kategori/update", data);
        setName("");
        setImage(null);
        setOpen(false);
    };
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
                            Edit Kategori
                        </Typography>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                        <CardBody className="flex flex-col gap-4">
                            <Input
                                label="kategori"
                                type="text"
                                onChange={(name) => {
                                    setName(name.target.value);
                                }}
                                defaultValue={category.name}
                                size="lg"
                            />
                            <div>
                                <label htmlFor="">Current Image:</label>
                                {category.image && (
                                    <img
                                        src={`/storage/${category.image}`}
                                        width="50"
                                        alt=""
                                    />
                                )}
                            </div>
                            <Input
                                label="Image"
                                type="file"
                                onChange={(image) => {
                                    setImage(image.target.files[0]);
                                }}
                                size="lg"
                            />
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button
                                onClick={() => handleSubmit()}
                                type="submit"
                                variant="gradient"
                                fullWidth
                            >
                                Edit
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </Dialog>
        </div>
    );
}
