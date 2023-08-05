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
    Textarea,
} from "@material-tailwind/react";
import { router } from "@inertiajs/react";

export default function EditProduk({ product }) {
    const handleOpen = () => setOpen((cur) => !cur);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [image, setImage] = useState(null);

    const id = product.id;

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            id,
            name,
            description,
            image,
        };
        router.post("/admin/produk/update", data);
        setName("");
        setDescription("");
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
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                defaultValue={product.name}
                                size="lg"
                            />
                            <Textarea
                                type="text"
                                defaultValue={product.description}
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                }}
                            />
                            <div>
                                <label htmlFor="">Current Image:</label>
                                {product.image && (
                                    <img
                                        src={`/storage/${product.image}`}
                                        width="50"
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
