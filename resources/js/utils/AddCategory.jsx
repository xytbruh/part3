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

export default function AddCategory(props) {
    const [title, setTitle] = useState("");
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    const addCategory = () => {
        const data = {
            title,
        };
        router.post("menu-marketplace", data);
        setTitle("");
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
                    <CardBody className="flex flex-col gap-4">
                        <Input
                            label="kategori"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                            size="lg"
                        />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button
                            variant="gradient"
                            onClick={() => addCategory()}
                            color="green"
                            fullWidth
                        >
                            Tambah
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>
        </div>
    );
}
