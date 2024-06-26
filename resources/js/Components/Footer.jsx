import { FaMobileAlt } from "react-icons/fa";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
} from "react-icons/fa6";

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

const Footer = () => {
    return (
        <div className="dark:bg-gray-900">
            <div className="container">
                <div className="grid md:grid-cols-3 pb-20 pt-5">
                    {/* company details */}
                    <div className="py-8 px-4">
                        <a
                            href="#"
                            className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl
"
                        >
                            ELECTRO-STORE
                        </a>
                        <p className="text-gray-600  dark:text-gray-300  lg:pr-24 pt-3">
                            Projet de fin de formation
                        </p>
                        <p className="text-gray-500 mt-4  dark:text-gray-300">
                            Made with 💖 by MOHAMMED SEBAA
                        </p>
                    </div>

                    {/* Footer links */}
                    <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold sm:text-left mb-3  dark:text-primary">
                                Important Links
                            </h1>
                            <ul className="space-y-3">
                                {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a
                                            href={data.link}
                                            className="text-gray-600 dark:text-gray-300 hover:dark:text-white hover:text-black duration-300"
                                        >
                                            {data.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Address */}
                        <div className="py-8 px-4 col-span-2 sm:col-auto">
                            <h1 className="text-xl font-bold sm:text-left mb-3  dark:text-primary">
                                Address
                            </h1>
                            <div>
                                <div className="flex items-center gap-3  dark:text-gray-300">
                                    <FaLocationArrow />
                                    <p>14 HAY DHAR ENNAIM EL MENZEL 31200</p>
                                </div>
                                <div className="flex items-center gap-3 mt-6  dark:text-gray-300">
                                    <FaMobileAlt />
                                    <p>+212 762 416 046</p>
                                </div>

                                {/* social links */}
                                <div className="flex items-center gap-3 mt-6">
                                    <a
                                        href="https://www.instagram.com/simohammed_sb3?igsh=MXRlMXN1bjh1YWVn"
                                        target="_blanck"
                                    >
                                        <FaInstagram className="text-3xl hover:text-primary duration-300  dark:text-gray-300" />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/MoSEBAR7?mibextid=ZbWKwL"
                                        target="_blanck"
                                    >
                                        <FaFacebook className="text-3xl hover:text-primary duration-200  dark:text-gray-300" />
                                    </a>
                                    <a href="#" target="_blanck">
                                        <FaLinkedin className="text-3xl hover:text-primary duration-200  dark:text-gray-300" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
