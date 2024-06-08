import { Link, Head } from "@inertiajs/react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

import DarkMode from "./DarkMode";

export default function Navbar({ categories }) {
    console.log(categories);
    return (
        <div className="bg-white dark:bg-gray-900 drak:text-white duration-200 relative z-40">
            <div className="py-4">
                <div className="container flex justify-between items-center">
                    {/* Logo and Links section */}
                    <div className="flex  items-center gap-4">
                        <a
                            href="/"
                            className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
                        >
                            Electro-Store
                        </a>
                        <div className="hidden lg:block">
                            <ul className="flex items-center gap-4">
                                {categories.map((category) => (
                                    <li key={category.id}>
                                        <Link
                                            href={route(
                                                "productsByCategory",
                                                category.id
                                            )}
                                            className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                                        >
                                            {" "}
                                            {category.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* NavBar right section */}
                    <div className="flex justify-between items-center gap-4 ">
                        {/* serch bar section  */}
                        <div className="relative group hidden sm:block">
                            <input
                                type="text"
                                placeholder="Search"
                                className="search-bar"
                            />
                            <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary  dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
                        </div>
                        {/* order btn section  */}
                        <Link className="relative p-3 ">
                            <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
                            <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs ">
                                5
                            </div>
                        </Link>
                        {/* dark mode section  */}
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
