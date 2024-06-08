import Slider from "react-slick";
import Button from "./Button";

export default function Slide({ bestproducts }) {
    const baseUrl = "http://127.0.0.1:8000/storage/";

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocuse: true,
    };
    console.log(bestproducts);
    return (
        <div className="container mt-4">
            <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center ">
                <div className=" container pb-8 sm:pb-0">
                    {/* hero section */}
                    <Slider {...settings}>
                        {bestproducts.map((product) => (
                            <div key={product.id}>
                                <div className="grid grid-cols-1 sm:grid-cols-2">
                                    {/* text content section  */}
                                    <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                        <h1
                                            data-aos="zoom-out"
                                            data-aos-duration="500"
                                            data-aos-once="true"
                                            className="text-2xl sm:text-6xl lg:text-2xl font-bold"
                                        >
                                            {product.description}
                                        </h1>
                                        <h1
                                            data-aos="zoom-out"
                                            data-aos-duration="500"
                                            data-aos-once="true"
                                            className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                                        >
                                            {product.label}
                                        </h1>
                                        <h1
                                            data-aos="zoom-out"
                                            data-aos-duration="500"
                                            data-aos-once="true"
                                            className="text-5xl Uppercase text-white dark:text:white/5 sm:text-[80px] md:text-[80px] xl:text-[120px] font-bold"
                                        >
                                            {product.label}
                                        </h1>
                                        <div
                                            data-aos="fade-up"
                                            data-aos-offset="0"
                                            data-aos-duration="500"
                                            data-aos-delay="300"
                                        >
                                            <Button
                                                text="Shop Now"
                                                bgColor="bg-primary"
                                                textColor="text-white"
                                            />
                                        </div>
                                    </div>
                                    {/* image section */}
                                    <div className="order-1 sm:order-2">
                                        <div
                                            data-aos="zoom-in"
                                            data-aos-once="true"
                                            className="relative z-10"
                                        >
                                            {product.images &&
                                            product.images.length > 0 ? (
                                                <img
                                                    src={`${baseUrl}${product.images[0].image_url}`}
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
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
