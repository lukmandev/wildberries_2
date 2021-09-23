import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import {wrapper} from '../../redux/reducer';

import Card from "../../components/card/card";
import ProductSlider from "../../components/pages/catalog/productSlider";
import Banner from "../../components/banner";
import PageLayout from "../../components/main/layout/page";


const Catalog = () => {



    return (
        <PageLayout>
            <div className="w-full full-wrapper category-product-wrapper">
                <main className="category-product-content full-wrapper">
                    <div className="wrapper grid grid-cols-10">
                        <div className="category-product-left w-full col-span-3">
                            <span className="category-product-navigation font-normal">
                              Главная / Женщинам
                            </span>
                            <h1 className="current-category-title font-bold">
                                Женщинам
                            </h1>
                            <div className="categories-list-holder">
                                <h4 className="font-bold">Категории</h4>
                                <ul className="categories-list">
                                    <li><a href className="categories-list__link">Категория1</a></li>
                                    <li><a href className="categories-list__link">Категория2</a></li>
                                    <li><a href className="categories-list__link">Категория3</a></li>
                                    <li><a href className="categories-list__link">Категория4</a></li>
                                    <li><a href className="categories-list__link">Категория5</a></li>
                                    <li><a href className="categories-list__link">Категория6</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="category-product-right w-full col-span-7">
                            <div className="category-product-slider swiper w-full overflow-hidden flex flex-col items-center">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img src="./assets/images/category-product-slider-1.png" alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="./assets/images/category-product-slider-1.png" alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="./assets/images/category-product-slider-1.png" alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="./assets/images/category-product-slider-1.png" alt="" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="swiper-pagination flex items-center">
                                </div>
                            </div>
                            <div className="category-product-banner padding w-full grid grid-cols-3">
                                <div className="banner__item w-full">
                                    <img src="./assets/images/banner-item.png" className="w-full h-full object-cover" alt="" />
                                </div>
                                <div className="banner__item w-full">
                                    <img src="./assets/images/banner-item.png" className="w-full h-full object-cover" alt="" />
                                </div>
                                <div className="banner__item w-full">
                                    <img src="./assets/images/banner-item.png" className="w-full h-full object-cover" alt="" />
                                </div>
                                <div className="banner__item w-full">
                                    <img src="./assets/images/banner-item.png" className="w-full h-full object-cover" alt="" />
                                </div>
                                <div className="banner__item w-full">
                                    <img src="./assets/images/banner-item.png" className="w-full h-full object-cover" alt="" />
                                </div>
                                <div className="banner__item w-full">
                                    <img src="./assets/images/banner-item.png" className="w-full h-full object-cover" alt="" />
                                </div>
                            </div>
                            <div className="full-wrapper padding category-products-padding product-out bg-white">
                                <div className="wrapper flex flex-col justify-start items-start">
                                    <h1 className="product-out__title font-bold product-out__title-indentation">
                                        Одежда
                                    </h1>
                                    <div className="category-products__list swiper-container w-full overflow-hidden">
                                        <div className="swiper relative">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <Card />
                                                </div>
                                            </div>
                                            <div className="swiper-button-next flex justify-center items-center absolute right-0">
                                                <i className="far fa-long-arrow-right" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Banner />
                            <ProductSlider />
                        </div>
                    </div>
                </main>
            </div>

        </PageLayout>
    )
}

Catalog.getInitialProps = wrapper.getInitialPageProps(store => (ctx) => {
    return {
        cool: ctx.asPath
    }
});


export default Catalog;