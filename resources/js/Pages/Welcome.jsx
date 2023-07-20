import Footer from "@/Layouts/Footer";
import Header from "@/Layouts/Header";
import { Head, Link } from "@inertiajs/react";
import {
    PiBatteryCharging,
    PiBowlFood,
    PiStorefrontDuotone,
    PiToilet,
    PiVan,
} from "react-icons/pi";
import { FaHotel } from "react-icons/fa";
export default function Welcome({ auth, category }) {
    console.log(category);
    const kategori = [
        { nama: "Part Wc", icon: <PiToilet /> },
        { nama: "Part Charger", icon: <PiBatteryCharging /> },
        { nama: "Part Makan", icon: <PiBowlFood /> },
        { nama: "Part Hotel", icon: <FaHotel /> },
        { nama: "Part Tour", icon: <PiVan /> },
        { nama: "Part Toko", icon: <PiStorefrontDuotone /> },
    ];
    console.log(kategori);
    return (
        <>
            <Head title="Welcome" />
            <Header />

            <section className="bg-base-100">
                <div className="h-auto pb-20 md:pb-20 px-3 md:px-[18vh] mx-auto">
                    <div className="w-full ">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31691.263161581228!2d108.20679750289898!3d-6.841604762007977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f2f59c5f0748d%3A0x401e8f1fc28cbc0!2sMajalengka%2C%20Kec.%20Majalengka%2C%20Kabupaten%20Majalengka%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1687406691584!5m2!1sid!2sid"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            loading="lazy"
                            title="ajsjs"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="grid grid-cols-3 lg:grid-cols-6 gap-5 py-5">
                        {kategori.map(({ nama, icon }, i) => (
                            <div
                                key={i}
                                className="p-2 bg-gray-300 rounded-md text-center items-center justify-center"
                            >
                                <Link href={route("produk")}>
                                    <div className="text-center">{icon}</div>
                                    <span className="text-xs lg:text-base text-blue-gray-800">
                                        {nama}
                                    </span>
                                </Link>
                            </div>
                        ))}
                        {/* {category.map((kategori, index) => (
                            <div
                                key={index}
                                className="p-2 bg-gray-300  rounded-md text-center items-center  justify-center"
                            >
                                <Link
                                    href={route("kategori.detail", {
                                        id: kategori.id,
                                    })}
                                >
                                    <img
                                        src={kategori.image}
                                        className="md:object-scale-down h-auto"
                                        alt=""
                                    />
                                    <span className="text-xs lg:text-base text-blue-gray-800">
                                        {kategori.name}
                                    </span>
                                </Link>
                            </div>
                        ))} */}
                    </div>
                </div>
            </section>
            <Footer user={auth.user} />
        </>
    );
}
