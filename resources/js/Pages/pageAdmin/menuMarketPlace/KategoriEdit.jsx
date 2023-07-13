import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";
import Content from "../Layouts/Content";
import { router } from "@inertiajs/react";

export default function KategoriEdit({ category }) {
    const [name, setName] = useState(category.name);
    const [parent, setParent] = useState(category.name);

    const handleSubmit = () => {
        const data = {
            name,
            parent,
        };
        router.put((`/admin/menu-marketplace/edit`, category.id), data);
    };
    return (
        <Content>
            <Input
                label="kategori"
                onChange={(name) => {
                    setName(name.target.value);
                }}
                defaultValue={category.name}
                size="lg"
            />
            <div className="flex w-full flex-col gap-6 py-3">
                <select
                    className="bg-transparent rounded-md"
                    value={parent}
                    onChange={(e) => {
                        setParent(e.target.value);
                    }}
                >
                    <option className="bg-transparent text-black " value="">
                        None
                    </option>

                    <option className="bg-transparent text-black ">
                        {category.name}
                    </option>
                </select>
            </div>
            <Button
                onClick={() => handleSubmit()}
                type="submit"
                variant="gradient"
                fullWidth
            >
                Edit
            </Button>
        </Content>
    );
}
