import React from "react";
import Content from "../Layouts/Content";
import { Head, Link } from "@inertiajs/react";
import BreadCrumbs from "@/Components/BreadCrumbs";

export default function Kategori(props) {
    console.log(props);
    return (
        <Content>
            <Head title={props.title} />
            <BreadCrumbs title={props.title} />

            <div className=" overflow-x-auto">
                <button className="float-right mx-12 bg-green-300 p-2 rounded-md text-base-300">
                    Tambah
                </button>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Judul</th>
                            <th>Foto</th>
                            <th>Author</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.myCategory && props.myCategory.length > 0 ? (
                            props.myCategory.map((category, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="whitespace-nowrap">
                                            {i + 1}
                                        </td>
                                        <td className="whitespace-nowrap">
                                            {category.title}
                                        </td>
                                        <td className="whitespace-nowrap">
                                            <img
                                                src={category.image}
                                                width="50"
                                                alt=""
                                            />
                                        </td>
                                        <td className="whitespace-nowrap">
                                            {category.author}
                                        </td>
                                        <td>
                                            <button className="btn btn-ghost text-base-300 btn-xs bg-primary mr-1">
                                                Edit
                                            </button>
                                            <Link
                                                href={route("delete.kategori")}
                                                method="post"
                                                data={{ id: category.id }}
                                                as="button"
                                                className="btn btn-ghost text-base-300 btn-xs bg-red-600"
                                            >
                                                Delete
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <p>Kamu belum Punya Kategori</p>
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Judul</th>
                            <th>Foto</th>
                            <th>Author</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </Content>
    );
}
