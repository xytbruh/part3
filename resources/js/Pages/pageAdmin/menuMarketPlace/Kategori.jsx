import AddKategori from "@/Pages/pageAdmin/components/AddKategori";
import { Head, Link } from "@inertiajs/react";
import { Card } from "@material-tailwind/react";
import React from "react";
import Content from "../Layouts/Content";
import EditKategori from "../components/EditKategori";

export default function Kategori({ category }) {
    const TABLE_HEAD_CATEGORY = ["No", "Kategori", "Image", "Slug"];
    return (
        <>
        <Head title="Kategori" />
            <Card className="overflow-scroll h-full w-full">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD_CATEGORY.map((head) => (
                                <th
                                    key={head}
                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >
                                    <div
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </div>
                                </th>
                            ))}
                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                <div
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    <AddKategori category={category} />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {category.map((category, index) => {
                            const isLast = index === category.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={index}>
                                    <td className={classes}>
                                        <div
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-sm"
                                        >
                                            {index + 1}
                                        </div>
                                    </td>

                                    <td className={classes}>
                                        <div
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-sm"
                                        >
                                            {category.name}
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-sm"
                                        >
                                            <img
                                                src={`/storage/${category.image}`}
                                                width="50"
                                                alt=""
                                            />
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-sm"
                                        >
                                            {category.slug}
                                        </div>
                                    </td>

                                    <td
                                        className={classes}
                                        style={{ display: "flex" }}
                                    >
                                        <EditKategori category={category} />

                                        <Link
                                            href={route("delete.kategori")}
                                            method="post"
                                            data={{
                                                id: category.id,
                                            }}
                                            as="button"
                                            variant="small"
                                            className="font-medium bg-red-500 px-2 mx-1 rounded-md text-black"
                                        >
                                            Hapus
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
        </>
    );
}
Kategori.layout = (page) => <Content children={page} />;
