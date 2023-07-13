import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";
import Content from "../Layouts/Content";
import { router } from "@inertiajs/react";

export default function KategoriEdit({ category }) {
    console.log(category);
    const [title, setTitle] = useState(category.title);
    const [image, setImage] = useState(null);

    const handleSubmit = () => {
        const data = {
            title,
            image,
        };
        router.put(`/admin/menu-marketplace/update`, data);
    };
    return (
        <Content>
            <Input
                label="kategori"
                onChange={(title) => {
                    setTitle(title.target.value);
                }}
                defaultValue={category.title}
                size="lg"
            />
            <div>
                <label>Current Image:</label>
                {category.image && (
                    <img
                        src={category.image}
                        alt={category.title}
                        style={{ width: "100px" }}
                    />
                )}
            </div>
            <Input
                label="New Image"
                type="file"
                accept="image/*"
                onChange={(image) => {
                    setImage(image.target.files[0]);
                }}
                size="lg"
            />
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
