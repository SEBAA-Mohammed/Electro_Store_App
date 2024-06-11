import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Partners from "@/Components/Partners";
import Button from "@/Components/Button";
import { Head } from "@inertiajs/react";
import Heading from "@/Components/Heading";

export default function Products({ products, categories }) {
    const baseUrl = "http://127.0.0.1:8000/storage/";
    const product = products[0];
    return (
        <>
            <Head title={product.category.label}></Head>
            <Navbar categories={categories} />
            <div className="container mt-4 mb-40">
                <div className="overflow-hidden rounded-3xl min-h-[450px] sm:min-h-[550px] hero-bg-color flex justify-center items-center ">
                    <div className=" container pb-8 sm:pb-0">
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            {/* text content section  */}
                            <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                <h1
                                    data-aos="zoom-out"
                                    data-aos-duration="500"
                                    data-aos-once="true"
                                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                                >
                                    {product.category.label}
                                </h1>
                            </div>
                            {/* image section */}
                            <div className="order-1 sm:order-2">
                                <div
                                    data-aos="zoom-in"
                                    data-aos-once="true"
                                    className="relative z-10"
                                >
                                    {product.category ? (
                                        <img
                                            src={`${baseUrl}${product.category.image_url}`}
                                            alt={product.label}
                                            className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                                        />
                                    ) : (
                                        <p>No image available</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Heading
                title={"Checkout our best deals"}
                subtitle={product.category.label}
            ></Heading>

            <div className="mb-10 mt-40">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
                    {/* card section */}
                    {products.map((product) => (
                        <div
                            data-aos="fade-up"
                            className="group"
                            key={product.id}
                        >
                            <div className="relative">
                                <img
                                    src={`${baseUrl}${product.images[0].image_url}`}
                                    alt={product.label}
                                    className="h-[180px] w-[260px] object-cover rounded-md"
                                />
                                {/* hover button */}
                                <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                                    <Button
                                        text={"Add to cart"}
                                        bgColor={"bg-primary"}
                                        textColor={"text-white"}
                                    />
                                </div>
                            </div>
                            <div className="leading-7">
                                <h2 className="font-semibold dark:text-white">
                                    {product.label}
                                </h2>
                                <h2 className="font-bold dark:text-white">
                                    ${product.price_bt}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Partners />
            <Footer />
        </>
    );
}
