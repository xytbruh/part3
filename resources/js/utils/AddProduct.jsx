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

export default function AddProduct({ product }) {
    const handleOpen = () => setOpen((cur) => !cur);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [parent, setParent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("parent", parent);

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
                                label="Nama Kategori"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                size="lg"
                            />
                            <div className="flex w-72 flex-col gap-6">
                                <select
                                    value={parent}
                                    onChange={(e) => {
                                        setParent(e.target.value);
                                    }}
                                >
                                    <option value="">None</option>
                                    {/* {product.map((product, index) => (
                                        <>
                                            <option key={index}>
                                                {product.name}
                                            </option>
                                        </>
                                    ))} */}
                                </select>
                            </div>
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
