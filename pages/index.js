import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import PageLayout from '../components/main/layout/page';


const Home = () => {

    return (
        <PageLayout>
            <Swiper className="COOKOOO">
                <SwiperSlide>
                    <h1>HELLO WORLD</h1>
                </SwiperSlide>
            </Swiper>
            <div>
                <div className="full-wrapper home-slider overflow-hidden bg-white">
                    <div className="wrapper">
                    <div className="swiper overflow-hidden">
                        <div className="swiper-wrapper">
                        <div className="swiper-slide h-full">
                            <img src="./assets/images/slider-1.png" alt="" className="m-0 object-cover w-full h-full" />
                            <div className="slide__info-holder flex flex-col items-center">
                            <h1 className="slide__title font-bold text-white">
                                Дни красоты
                            </h1>
                            <div className="slide__button font-bold text-white">
                                Скидки до 90%
                            </div>
                            </div>
                        </div>
                        <div className="swiper-slide h-full">
                            <img src="./assets/images/slider-1.png" alt="" className="m-0 object-cover w-full h-full" />
                            <div className="slide__info-holder flex flex-col items-center">
                            <h1 className="slide__title font-bold text-white">
                                Дни красоты
                            </h1>
                            <div className="slide__button font-bold text-white">
                                Скидки до 90%
                            </div>
                            </div>
                        </div>
                        <div className="swiper-slide h-full">
                            <img src="./assets/images/slider-1.png" alt="" className="m-0 object-cover w-full h-full" />
                            <div className="slide__info-holder flex flex-col items-center">
                            <h1 className="slide__title font-bold text-white">
                                Дни красоты
                            </h1>
                            <div className="slide__button font-bold text-white">
                                Скидки до 90%
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="swiper-button-prev flex justify-center items-center">
                        <i className="far fa-long-arrow-left" />
                        </div>
                        <div className="swiper-button-next flex justify-center items-center">
                        <i className="far fa-long-arrow-right" />
                        </div>
                        <div className="swiper-pagination flex items-center" />
                    </div>
                    </div>
                </div>
                <div className="full-wrapper product-out product-out-indentation bg-white">
                    <div className="wrapper flex flex-col justify-start items-start">
                    <h1 className="product-out__title font-bold product-out__title-indentation">
                        Хиты продаж
                    </h1>
                    <div className="products__list grid grid-cols-6 w-full items-center justify-between">
                        <div className="card w-full flex justify-start items-start flex-col">
                        <div className="card__top w-full">
                            <img src="./assets/images/product-1.png" alt="" className="w-full h-full object-cover" />
                            <button className="quick-view-button font-normal">
                            Быстрый Просмотр
                            </button>
                            <span className="card__discount font-normal">
                            17 %
                            </span>
                        </div>
                        <div className="card__info w-full flex flex-col items-start justify-start">
                            <div className="card__price-info flex items-center w-full">
                            <span className="card__price font-bold">
                                3 500 сом
                            </span>
                            <span className="card__previous-price font-normal">
                                3500 сом
                            </span>
                            </div>
                            <span className="card__ru-price font-normal w-full">
                            (3860 Р)
                            </span>
                            <span className="card__title w-full">
                            Honor / Фитнес-браслет
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="full-wrapper home-banner home-banner-indentation bg-white">
                    <div className="wrapper">
                    <div className="home-banner__list w-full grid grid-cols-2">
                        <div className="home-banner__item w-full">
                        <img src="./assets/images/home-banner-1.png" alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="home-banner__item w-full">
                        <img src="./assets/images/home-banner-2.png" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="full-wrapper product-out-indentation bg-white">
                    <div className="wrapper">
                    <div className="products__list grid grid-cols-6 w-full items-center justify-between">
                        <div className="card w-full flex justify-start items-start flex-col">
                        <div className="card__top w-full">
                            <img src="./assets/images/product-1.png" alt="" className="w-full h-full object-cover" />
                            <button className="quick-view-button font-normal">
                            Быстрый Просмотр
                            </button>
                            <span className="card__discount font-normal">
                            17 %
                            </span>
                        </div>
                        <div className="card__info w-full flex flex-col items-start justify-start">
                            <div className="card__price-info flex items-center w-full">
                            <span className="card__price font-bold">
                                3 500 сом
                            </span>
                            <span className="card__previous-price font-normal">
                                3500 сом
                            </span>
                            </div>
                            <span className="card__ru-price font-normal w-full">
                            (3860 Р)
                            </span>
                            <span className="card__title w-full">
                            Honor / Фитнес-браслет
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="full-wrapper home-banner home-banner-indentation bg-white">
                    <div className="wrapper">
                    <div className="home-banner__list w-full grid grid-cols-2">
                        <div className="home-banner__item w-full">
                        <img src="./assets/images/home-banner-1.png" alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="home-banner__item w-full">
                        <img src="./assets/images/home-banner-2.png" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="full-wrapper product-out-indentation bg-white">
                    <div className="wrapper">
                    <div className="products__list grid grid-cols-6 w-full items-center justify-between">
                        <div className="card w-full flex justify-start items-start flex-col">
                        <div className="card__top w-full">
                            <img src="./assets/images/product-1.png" alt="" className="w-full h-full object-cover" />
                            <button className="quick-view-button font-normal">
                            Быстрый Просмотр
                            </button>
                            <span className="card__discount font-normal">
                            17 %
                            </span>
                        </div>
                        <div className="card__info w-full flex flex-col items-start justify-start">
                            <div className="card__price-info flex items-center w-full">
                            <span className="card__price font-bold">
                                3 500 сом
                            </span>
                            <span className="card__previous-price font-normal">
                                3500 сом
                            </span>
                            </div>
                            <span className="card__ru-price font-normal w-full">
                            (3860 Р)
                            </span>
                            <span className="card__title w-full">
                            Honor / Фитнес-браслет
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="bg-purple w-full">
                    <div className="full-wrapper popular-brands popular-brands-indentation overflow-hidden bg-white">
                    <div className="wrapper flex flex-col justify-start items-start">
                        <div className="popular-brands__top flex justify-start items-end">
                        <h1 className="popular-brands__title font-bold">
                            Популярные бренды
                        </h1>
                        <div className="see-all font-semibold">
                            Смотреть все
                        </div>
                        </div>
                        <div className="swiper relative w-full overflow-hidden">
                        <div className="popular-brands__list swiper-wrapper">
                            <div className="popular__brand swiper-slide">
                            <button className="brands-category flex justify-center items-center font-normal w-full">
                                Женщинам
                            </button>
                            <ul className="category-brands__list">
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                            </ul>
                            </div>
                            <div className="popular__brand swiper-slide">
                            <button className="brands-category flex justify-center items-center font-normal w-full">
                                Женщинам
                            </button>
                            <ul className="category-brands__list">
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                            </ul>
                            </div>
                            <div className="popular__brand swiper-slide">
                            <button className="brands-category flex justify-center items-center font-normal w-full">
                                Женщинам
                            </button>
                            <ul className="category-brands__list">
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                            </ul>
                            </div>
                            <div className="popular__brand swiper-slide">
                            <button className="brands-category flex justify-center items-center font-normal w-full">
                                Женщинам
                            </button>
                            <ul className="category-brands__list">
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                            </ul>
                            </div>
                            <div className="popular__brand swiper-slide">
                            <button className="brands-category flex justify-center items-center font-normal w-full">
                                Женщинам
                            </button>
                            <ul className="category-brands__list">
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                            </ul>
                            </div>
                            <div className="popular__brand swiper-slide">
                            <button className="brands-category flex justify-center items-center font-normal w-full">
                                Женщинам
                            </button>
                            <ul className="category-brands__list">
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                            </ul>
                            </div>
                            <div className="popular__brand swiper-slide">
                            <button className="brands-category flex justify-center items-center font-normal w-full">
                                Женщинам
                            </button>
                            <ul className="category-brands__list">
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                            </ul>
                            </div>
                            <div className="popular__brand swiper-slide">
                            <button className="brands-category flex justify-center items-center font-normal w-full">
                                Женщинам
                            </button>
                            <ul className="category-brands__list">
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                            </ul>
                            </div>
                            <div className="popular__brand swiper-slide">
                            <button className="brands-category flex justify-center items-center font-normal w-full">
                                Женщинам
                            </button>
                            <ul className="category-brands__list">
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                            </ul>
                            </div>
                            <div className="popular__brand swiper-slide">
                            <button className="brands-category flex justify-center items-center font-normal w-full">
                                Женщинам
                            </button>
                            <ul className="category-brands__list">
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                            </ul>
                            </div>
                            <div className="popular__brand swiper-slide">
                            <button className="brands-category flex justify-center items-center font-normal w-full">
                                Женщинам
                            </button>
                            <ul className="category-brands__list">
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                            </ul>
                            </div>
                            <div className="popular__brand swiper-slide">
                            <button className="brands-category flex justify-center items-center font-normal w-full">
                                Женщинам
                            </button>
                            <ul className="category-brands__list">
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                            </ul>
                            </div>
                            <div className="popular__brand swiper-slide">
                            <button className="brands-category flex justify-center items-center font-normal w-full">
                                Женщинам
                            </button>
                            <ul className="category-brands__list">
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                            </ul>
                            </div>
                            <div className="popular__brand swiper-slide">
                            <button className="brands-category flex justify-center items-center font-normal w-full">
                                Женщинам
                            </button>
                            <ul className="category-brands__list">
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                                <li className="category-brand">
                                <img src="./assets/images/brand-1.png" alt="" className="w-full h-full object-contain" />
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="swiper-button-next absolute right-0 top-0 flex justify-center items-center">
                            <i className="far fa-long-arrow-right" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

        </PageLayout>
    )
}

export default Home;
