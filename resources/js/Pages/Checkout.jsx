import { useCart } from "@/Contexts/cart-context";
import Navbar from "@/Components/Navbar";
import Partners from "@/Components/Partners";
import Footer from "@/Components/Footer";
import Heading from "@/Components/Heading";
import { Link, Head } from "@inertiajs/react";
import { useState } from "react";

export default function Checkout({ categories, auth }) {
    const { items } = useCart();
    let total = 0;
    let totalbt = 0;

    items.map((item) => {
        {
            totalbt += item.price_bt;
            total += item.price_bt + item.price_bt * item.tva;
        }
    });
    const baseUrl = "http://127.0.0.1:8000/storage/";

    const [orderPopup, setOrderPopup] = useState(false);

    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
    };

    return (
        <>
            <Head title="Checkout" />
            <Navbar
                categories={categories}
                auth={auth}
                handleOrderPopup={handleOrderPopup}
            />
            <div className="mt-20">
                <Heading
                    title={"Checkout page"}
                    subtitle={"Place your order now"}
                />
            </div>
            <div className="mt-10">
                {items.map((item) => (
                    <div
                        className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto"
                        key={item.id}
                    >
                        <div className=" lg:grid grid-cols-2 py-6">
                            <div className="font-normal text-xl leading-8 text-gray-500 dark:text-white">
                                Product
                            </div>
                            <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                                <span className="w-full max-w-[200px] text-center dark:text-white">
                                    TVA
                                </span>
                                <span className="w-full max-w-[200px] text-center dark:text-white">
                                    Price
                                </span>
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                            <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                                <div className="img-box">
                                    <img
                                        src={`${baseUrl}${item.images[0].image_url}`}
                                        alt={item.label}
                                        className="xl:w-[140px]"
                                    />
                                </div>
                                <div className="pro-data w-full max-w-sm ">
                                    <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center dark:text-white">
                                        {item.label}
                                    </h5>
                                    <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center dark:text-white">
                                        {item.category.label}
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                                <h6 class="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center dark:text-white">
                                    20%{" "}
                                    <span class="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap"></span>
                                </h6>
                                <div class="flex items-center w-full mx-auto justify-center"></div>
                                <h6 class="text-primary font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                                    ${item.price_bt}
                                </h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="bg-gray-50 rounded-xl p-6 w-9/12 ml-44 mb-8 max-lg:max-w-xl max-lg:mx-auto dark:bg-gray-900 ">
                <div className="flex items-center justify-between w-full mb-6">
                    <p className="font-normal text-xl leading-8 text-gray-400">
                        Sub Total
                    </p>
                    <h6 className="font-semibold text-xl leading-8 text-gray-900 dark:text-white">
                        {totalbt}
                    </h6>
                </div>
                <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                    <p className="font-normal text-xl leading-8 text-gray-400">
                        TVA
                    </p>
                    <h6 className="font-semibold text-xl leading-8 text-gray-900 dark:text-white">
                        20%
                    </h6>
                </div>
                <div className="flex items-center justify-between w-full py-6">
                    <p className="font-manrope font-medium text-2xl leading-9 text-gray-900 dark:text-white">
                        Total
                    </p>
                    <h6 className="font-manrope font-medium text-2xl leading-9 text-primary">
                        {total}
                    </h6>
                </div>
            </div>
            <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
                <button className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-primary font-semibold text-lg text-white flex transition-all duration-500 hover:bg-gray-800">
                    Continue to Payment
                    <svg
                        className="ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="22"
                        viewBox="0 0 23 22"
                        fill="none"
                    >
                        <path
                            d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998"
                            stroke="white"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
            <Partners />
            <Footer />
        </>
    );
}
