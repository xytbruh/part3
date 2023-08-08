import React, { useState } from "react";

import Content from "../Layouts/Content";
import { Button, Input, Textarea } from "@material-tailwind/react";
import InputLabel from "@/Components/InputLabel";
import { router } from "@inertiajs/react";

export default function Pengaturan({ setting }) {
    console.log(setting);
    const [title, setTitle] = useState(setting.title);
    const [email, setEmail] = useState(setting.email);
    const [phone, setPhone] = useState(setting.phone);
    const [alamat, setAlamat] = useState(setting.alamat);
    const [description, setDescription] = useState(setting.description);
    const [sosmed, setSosmed] = useState(setting.sosmed);
    const [logo, setLogo] = useState(null);

    const id = setting.id;

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            id,
            title,
            email,
            phone,
            alamat,
            description,
            sosmed,
            logo,
        };

        router.post("/admin/pengaturan/update", data);
    };
    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3">
                <div className="lg:col-span-1 col-span-2">
                    <InputLabel value="Title" />
                    <Input
                        size="lg"
                        type="text"
                        color="white"
                        defaultValue={setting.title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="lg:col-span-1 col-span-2">
                    <InputLabel value="Email" />
                    <Input
                        size="lg"
                        type="email"
                        color="white"
                        defaultValue={setting.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="lg:col-span-1 col-span-2">
                    <InputLabel value="No Telp" />
                    <Input
                        size="lg"
                        type="number"
                        color="white"
                        defaultValue={setting.phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="lg:col-span-1 col-span-2">
                    <InputLabel value="Alamat" />
                    <Input
                        size="lg"
                        color="white"
                        defaultValue={setting.alamat}
                        onChange={(e) => setAlamat(e.target.value)}
                    />
                </div>
                <div className="col-span-2">
                    <InputLabel value="Sosial Media" />
                    <Input
                        size="lg"
                        color="white"
                        defaultValue={setting.sosmed}
                        onChange={(e) => setSosmed(e.target.value)}
                    />
                </div>
                <div className="col-span-2">
                    <InputLabel value="Deskripsi" />
                    <Textarea
                        size="lg"
                        type="text"
                        className="text-white border-t-white border-white focus:border-white focus:border-t-white"
                        defaultValue={setting.description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="lg:col-span-1 col-span-2">
                    <InputLabel value="Logo" />
                    <Input
                        size="lg"
                        color="white"
                        type="file"
                        onChange={(e) => setLogo(e.target.files[0])}
                    />
                </div>
                <div className="lg:col-span-1 col-span-2">
                    <InputLabel value="Simpan" />
                    <Button
                        type="submit"
                        color="green"
                        className="w-full"
                        size="md"
                    >
                        Simpan
                    </Button>
                </div>
            </div>
        </form>
    );
}
Pengaturan.layout = (page) => <Content children={page} />;
