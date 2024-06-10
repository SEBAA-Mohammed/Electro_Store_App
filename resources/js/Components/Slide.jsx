import Slider from "react-slick";
import Button from "./Button";

export default function Slide({ categories }) {
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
    return (
        <div className="container mt-4">
            <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center ">
                <div className=" container pb-8 sm:pb-0">
                    {/* hero section */}
                    <Slider {...settings}>
                        {categories.map((category) => (
                            <div key={category.id}>
                                <div className="grid grid-cols-1 sm:grid-cols-2">
                                    {/* text content section  */}
                                    <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                        <h1
                                            data-aos="zoom-out"
                                            data-aos-duration="500"
                                            data-aos-once="true"
                                            className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                                        >
                                            {category.label}
                                        </h1>
                                    </div>
                                    {/* image section */}
                                    <div className="order-1 sm:order-2">
                                        <div
                                            data-aos="zoom-in"
                                            data-aos-once="true"
                                            className="relative z-10"
                                        >
                                            {category.image_url ? (
                                                <img
                                                    src={`${baseUrl}${category.image_url}`}
                                                    alt={category.label}
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
