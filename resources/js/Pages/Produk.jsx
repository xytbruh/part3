import Footer from "@/Layouts/Footer";
import Header from "@/Layouts/Header";
import { Head, Link } from "@inertiajs/react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import React from "react";
import contohImage from "@/img/LogoPartLivinDark.png";
export default function Produk() {
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
                <div className="w-full h-auto bg-white shadow-2xl rounded-t-xl mt-[-50px] relative px-6 py-3 text-black">
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
                    <hr className="border-black mt-3" />
                    <div
                        className="bg-green-100 overflow-hidden "
                        style={{ height: "10vh" }}
                    >
                        <Splide
                            aria-label="My Favorite Images"
                            options={{
                                arrows: false,
                                direction: "ttb",
                                height: "10rem",
                                wheel: true,
                                perPage: 1,
                            }}
                        >
                            <SplideTrack>
                                <SplideSlide>
                                    <img src={contohImage} alt="Image 1" />
                                </SplideSlide>
                            </SplideTrack>
                        </Splide>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
