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

export default function AddDompet() {
    const handleOpen = () => setOpen((cur) => !cur);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [bank, setBank] = useState("");
    const [norek, setNorek] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("bank", bank);
        formData.append("norek", norek);

        router.post("/admin/dompet", formData);
        setName("");
        setBank("");
        setNorek("");
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
                            Tambah Bank
                        </Typography>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                        <CardBody className="flex flex-col gap-4">
                            <Input
                                label="Atas Nama"
                                value={name}
                                type="text"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                size="lg"
                            />
                            <Input
                                label="Bank"
                                value={bank}
                                type="text"
                                onChange={(e) => {
                                    setBank(e.target.value);
                                }}
                                size="lg"
                            />
                            <Input
                                label="No Rekening"
                                value={norek}
                                type="number"
                                onChange={(e) => {
                                    setNorek(e.target.value);
                                }}
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
