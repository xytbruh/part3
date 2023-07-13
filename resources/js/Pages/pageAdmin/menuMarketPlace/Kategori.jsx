import AddCategory from "@/utils/AddCategory";
import EditCategory from "@/utils/EditCategory";
import { Link } from "@inertiajs/react";
import { Card } from "@material-tailwind/react";
import React from "react";

export default function Kategori(props) {
    const TABLE_HEAD_CATEGORY = ["No", "Judul", "Image"];
    return (
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
                                <AddCategory />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.category.map((category, index) => {
                        const isLast = index === props.category.length - 1;
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
                                        {category.title}
                                    </div>
                                </td>
                                <td className={classes}>
                                    <div
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal text-sm"
                                    >
                                        <img
                                            src={`${category.image}`}
                                            width="30"
                                            alt={category.title}
                                        />
                                    </div>
                                </td>

                                <td className={classes}>
                                    <EditCategory EditCategory={category} />
                                    <Link href={route("edit.kategori")} method="get" data={{id : category.id}} as="button">Edit</Link>
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
    );
}
