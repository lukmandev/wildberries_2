import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import PageLayout from '../components/main/layout/page';
import PreviewProductModal from "../components/modals/preview-product/previewProductModal";
import ProductOut from "../components/pages/home/productOut";
import BrandsOut from "../components/pages/home/brandsOut";
import MainSlider from "../components/pages/home/mainSlider";
import Banner from "../components/pages/home/banner";


const Home = () => {

    return (
        <PageLayout>
            <PreviewProductModal />
            <MainSlider />
            <ProductOut title="Хиты продаж" />
            <Banner />
            <ProductOut title="Хиты продаж" />
            <Banner />
            <ProductOut />
            <BrandsOut />
        </PageLayout>
    )
}

export default Home;
