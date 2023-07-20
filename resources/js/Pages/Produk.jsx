import Footer from "@/Layouts/Footer";
import Header from "@/Layouts/Header";
import { Head, Link } from "@inertiajs/react";
import React, { useState } from "react";
export default function Produk() {
    const [klikAlamat, setKlikAlamat] = useState("");

    return (
        <>
            <Head />
            <Header />
            <section className="bg-gray-800 container mx-auto">
                <div className="w-full ">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31691.263161581228!2d108.20679750289898!3d-6.841604762007977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f2f59c5f0748d%3A0x401e8f1fc28cbc0!2sMajalengka%2C%20Kec.%20Majalengka%2C%20Kabupaten%20Majalengka%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1687406691584!5m2!1sid!2sid"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        loading="lazy"
                        title="ajsjs"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="w-full h-[40vh] bg-white shadow-2xl rounded-t-xl mt-[-50px] relative px-6 py-3 text-black">
                    <div className="flex justify-between">
                        <div>
                            <h1 className="h3 font-bold ">
                                Lorem ipsum dolor sit amet
                            </h1>
                        </div>
                        <div>
                            <Link className="border border-green-400 rounded-full px-2 py-1 text-green-400 hover:border-transparent hover:text-white hover:bg-green-400 transition duration-300">
                                Edit
                            </Link>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit</p>
                    <input
                        type="text"
                        defaultValue={klikAlamat}
                        className="form-control mx-auto w-full"
                        readOnly
                    />
                    <hr className="border-black my-3" />
                    <div
                        className="bg-green-100 overflow-hidden "
                        style={{ height: "10vh" }}
                    >
                        <div className="h-16 w-full carousel carousel-vertical  rounded-box">
                            <div
                                onClick={() => setKlikAlamat("Majalengka")}
                                className="carousel-item h-full cursor-pointer justify-center items-center mx-auto text-center"
                            >
                                <div>
                                    <h1>Majalengka</h1>
                                    <p>Lorem, ipsum dolor sit amet csadsad</p>
                                </div>
                            </div>
                            <div
                                onClick={() => setKlikAlamat("Kadipaten")}
                                className="carousel-item h-full cursor-pointer justify-center items-center mx-auto text-center"
                            >
                                <div>
                                    <h1>Kadipaten</h1>
                                    <p>Lorem, ipsum dolor sit amet csadsad</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
