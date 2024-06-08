import Navbar from "@/Components/Navbar";
import Slide from "@/Components/Slide";
import Services from "@/Components/Services";
import Banner from "@/Components/Banner";
import Blogs from "@/Components/Blogs";
import Partners from "@/Components/Partners";
import Footer from "@/Components/Footer";
import { Link, Head } from "@inertiajs/react";

export default function Welcome({ categories, bestproducts }) {
    const BannerData = {
        discount: "30% OFF",
        title: "Fine Smile",
        date: "10 Jan to 28 Jan",
        image: "http://127.0.0.1:8000/storage/products/headphone.png",
        title2: "Air Solo Bass",
        title3: "Winter Sale",
        title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
        bgColor: "#f42c37",
    };

    const BannerData2 = {
        discount: "30% OFF",
        title: "Happy Hours",
        date: "14 Jan to 28 Jan",
        image: "http://127.0.0.1:8000/storage/products/smartwatch2.png",
        title2: "Smart Solo",
        title3: "Winter Sale",
        title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
        bgColor: "#2dcc6f",
    };

    return (
        <>
            <Head title="Home" />
            <Navbar categories={categories} />
            <Slide bestproducts={bestproducts} />
            <Banner data={BannerData} />
            <Services />
            <Banner data={BannerData2} />
            <Blogs />
            <Partners />
            <Footer />
        </>
    );
}
