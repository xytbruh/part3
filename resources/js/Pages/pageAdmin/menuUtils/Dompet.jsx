import React from "react";
import Content from "../Layouts/Content";
import { Card } from "@material-tailwind/react";
import { Link } from "@inertiajs/react";
import AddDompet from "../components/AddDompet";
import EditDompet from "../components/EditDompet";

export default function Dompet({ wallet }) {
    console.log(wallet);
    const TABLE_HEAD = ["No", "Nama", "Bank", "No Rekening"];

    return (
        <Card className="overflow-scroll h-full w-full">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
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
                                <AddDompet />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {wallet.map((wallet, index) => {
                        const isLast = index === wallet.length - 1;
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
                                        {wallet.name}
                                    </div>
                                </td>
                                <td className={classes}>
                                    <div
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal text-sm"
                                    >
                                        {wallet.bank}
                                    </div>
                                </td>
                                <td className={classes}>
                                    <div
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal text-sm"
                                    >
                                        {wallet.norek}
                                    </div>
                                </td>

                                <td
                                    className={classes}
                                    style={{ display: "flex" }}
                                >
                                    <EditDompet wallet={wallet} />
                                    <Link
                                        href={route("delete.dompet")}
                                        method="post"
                                        data={{
                                            id: wallet.id,
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
Dompet.layout = (page) => <Content children={page} />;
