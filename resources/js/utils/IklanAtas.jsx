import { Link, router } from "@inertiajs/react";
import { Card, Input, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import EditIklan from "./EditIklan";

export default function IklanAtas({ data }) {
    console.log(data);
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", image);

        router.post("/admin/banner-iklan/iklan-atas", formData);
        setImage(null);
    };

    const TABLE_HEAD = ["Iklan Atas", ""];

    return (
        <>
            <form onSubmit={handleSubmit} className="mt-3 mb-2 w-full">
                <div className="grid grid-cols-4 gap-3 ">
                    <div className="col-span-3">
                        <Input
                            onChange={(e) => setImage(e.target.files[0])}
                            type="file"
                            size="lg"
                            color="white"
                            label="Iklan Atas"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-green-600 rounded-md text-white"
                    >
                        Tambah
                    </button>
                </div>
            </form>
            <Card className="h-full w-full overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data
                            .filter((item) => item.kategori === "iklan-atas") // Ganti "Iklan Atas" dengan kategori yang sesuai untuk masing-masing komponen
                            .map((banner, i) => (
                                <tr key={i} className="even:bg-blue-gray-50/50">
                                    <td className="p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            <img
                                                src={`/storage/${banner.image}`}
                                                height="100"
                                                width="300"
                                                alt=""
                                            />
                                        </Typography>
                                    </td>

                                    <td className="p-4 border-l-2">
                                       <EditIklan banner={banner}/>

                                        <Link
                                            as="button"
                                            href={route("delete.banner")}
                                            method="post"
                                            data={{
                                                id: banner.id,
                                            }}
                                            className="bg-red-500 text-center w-full text-white rounded-md my-1"
                                        >
                                            DELETE
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </Card>
        </>
    );
}
