import React from "react";
import Heading from "./Heading";

const BlogData = [
    {
        title: "How to choose perfect smartwatch",
        subtitle:
            "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
        published: "Jan 20, 2024 by Dilshad",
        image: "http://127.0.0.1:8000/storage/blogs/blog-1.jpg",
        aosDelay: "0",
    },
    {
        title: "How to choose perfect gadget",
        subtitle:
            "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
        published: "Jan 20, 2024 by Satya",
        image: "http://127.0.0.1:8000/storage/blogs/blog-2.jpg",
        aosDelay: "200",
    },
    {
        title: "How to choose perfect VR headset",
        subtitle:
            "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
        published: "Jan 20, 2024 by Sabir",
        image: "http://127.0.0.1:8000/storage/blogs/blog-3.jpg",
        aosDelay: "400",
    },
];
const Blogs = () => {
    return (
        <div className="my-12">
            <div className="container">
                {/* Header section */}
                <Heading title="Recent News" subtitle={"Explore Our Blogs"} />

                {/* Blog section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
                    {/* Blog card */}
                    {BlogData.map((data) => (
                        <div
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            key={data.title}
                            className="bg-white dark:bg-gray-900"
                        >
                            {/* image section */}
                            <div className="overflow-hidden rounded-2xl mb-2">
                                <img
                                    src={data.image}
                                    alt=""
                                    className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                                />
                            </div>
                            {/* content section */}
                            <div className="space-y-2">
                                <p className="text-xs text-gray-500  dark:text-gray-500">
                                    {data.published}
                                </p>
                                <p className="font-bold line-clamp-1 dark:text-white">
                                    {data.title}
                                </p>
                                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                                    {data.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
