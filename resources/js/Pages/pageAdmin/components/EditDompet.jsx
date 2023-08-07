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

export default function EditDompet({ wallet }) {
    const handleOpen = () => setOpen((cur) => !cur);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState(wallet.name);
    const [bank, setBank] = useState(wallet.bank);
    const [norek, setNorek] = useState(wallet.norek);

    const id = wallet.id;

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            id,
            name,
            bank,
            norek,
        };
        router.post("/admin/dompet/update", data);
        setName("");
        setBank("");
        setNorek("");
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
                            Edit Dompet
                        </Typography>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                        <CardBody className="flex flex-col gap-4">
                            <Input
                                label="Atas Nama"
                                type="text"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                defaultValue={wallet.name}
                                size="lg"
                            />
                            <Input
                                label="Bank"
                                type="text"
                                onChange={(e) => {
                                    setBank(e.target.value);
                                }}
                                defaultValue={wallet.bank}
                                size="lg"
                            />
                            <Input
                                label="Bank"
                                type="text"
                                onChange={(e) => {
                                    setNorek(e.target.value);
                                }}
                                defaultValue={wallet.norek}
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
