import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Partners from "@/Components/Partners";
import Button from "@/Components/Button";

export default function Products({ products, categories }) {
    const baseUrl = "http://127.0.0.1:8000/storage/";

    return (
        <>
            <Navbar categories={categories} />
            <div className="mb-10 mt-16">
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
