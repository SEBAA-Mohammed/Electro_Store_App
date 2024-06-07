import { Link, Head } from "@inertiajs/react";

export default function Navbar() {
    return (
        <div className="bg-white dark:bg-gray-900 drak:text-white duration-200 relative z-40">
            <div className="py-4">
                <div className="container">
                    <div>
                        <a
                            href="#"
                            className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
                        >
                            Electro-Store
                        </a>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
