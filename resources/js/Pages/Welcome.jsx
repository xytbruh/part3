import Footer from "@/Layouts/Footer";
import Header from "@/Layouts/Header";
import { Head } from "@inertiajs/react";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <Header />
           
            <section className="h-screen">
                <div className="w-full px-3 py-3">
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
                <div className="px-3">
                    <div className="grid grid-cols-3 gap-5">
                        <div className="p-8 bg-primary rounded-md flex items-center justify-center">
                            1
                        </div>
                        <div className="p-8 bg-primary rounded-md flex items-center justify-center">
                            2
                        </div>
                        <div className="p-8 bg-primary rounded-md flex items-center justify-center">
                            3
                        </div>
                        <div className="p-8 bg-primary rounded-md flex items-center justify-center">
                            4
                        </div>
                        <div className="p-8 bg-primary rounded-md flex items-center justify-center">
                            5
                        </div>
                        <div className="p-8 bg-primary rounded-md flex items-center justify-center">
                            6
                        </div>
                    </div>
                </div>
            </section>
            <Footer user={props.auth.user} />
        </>
    );
}
