import React from "react";
import Content from "../Layouts/Content";
import { Card } from "@material-tailwind/react";
import EditUser from "@/utils/EditUser";
import { Link } from "@inertiajs/react";
import AddUser from "@/utils/AddUser";

export default function User({ user }) {
    console.log(user);
    const TABLE_HEAD_USER = ["No", "Nama", "Email", "Avatar"];

    return (
        <Card className="overflow-scroll h-full w-full">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD_USER.map((head) => (
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
                                <AddUser />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user, index) => {
                        const isLast = index === user.length - 1;
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
                                        {user.name}
                                    </div>
                                </td>
                                <td className={classes}>
                                    <div
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal text-sm"
                                    >
                                        {user.email}
                                    </div>
                                </td>
                                <td className={classes}>
                                    <div
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal text-sm"
                                    >
                                        {user.avatar}
                                    </div>
                                </td>

                                <td
                                    className={classes}
                                    style={{ display: "flex" }}
                                >
                                    <EditUser />
                                    <Link
                                        href={route("delete.user")}
                                        method="post"
                                        data={{
                                            id: user.id,
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
User.layout = (page) => <Content children={page} />;
