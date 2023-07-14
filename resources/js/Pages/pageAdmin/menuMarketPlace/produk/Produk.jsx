import AddProduct from "@/utils/AddProduct";
import { Link } from "@inertiajs/react";
import { Card } from "@material-tailwind/react";
import React from "react";
import Content from "../../Layouts/Content";

export default function Produk(props) {
    console.log(props)
    const TABLE_HEAD_PRODUCT = ["No", "Kategori", "Parent", "Created At"];
    return (
        <Card className="overflow-scroll h-full w-full">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD_PRODUCT.map((head) => (
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
                                <AddProduct />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* {product.map((product, index) => {
                        const isLast = index === product.length - 1;
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
                                        {product.name}
                                    </div>
                                </td>
                                <td className={classes}>
                                    <div
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal text-sm"
                                    >
                                        {product.parent}
                                    </div>
                                </td>

                                <td className={classes}>
                                    <div
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal text-sm"
                                    >
                                        {product.created_at}
                                    </div>
                                </td>

                                <td className={classes}>
                                    <Link
                                        href={route("edit.kategori", product.id)}
                                        as="button"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        href={route("delete.kategori")}
                                        method="post"
                                        data={{
                                            id: product.id,
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
                    })} */}
                </tbody>
            </table>
        </Card>
    );
}
Product.layout = (page) => <Content children={page} />;
