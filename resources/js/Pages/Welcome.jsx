import Navbar from "@/Components/Navbar";
import Slide from "@/Components/Slide";
import Services from "@/Components/Services";
import Banner from "@/Components/Banner";
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

    return (
        <>
            <Head title="Home" />
            <Navbar categories={categories} />
            <Slide bestproducts={bestproducts} />
            <Services />
            <Banner data={BannerData} />
        </>
    );
}
