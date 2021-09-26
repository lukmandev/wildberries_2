import {useEffect} from "react";
import {Navigation, Swiper} from "swiper";



Swiper.use(Navigation);


const MainSlider = () => {

    useEffect(() => {
        new Swiper('.home-slider .swiper', {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 400,
            effect: 'fade',
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
        });
    }, []);
    return (
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
                    <div className="swiper-button-prev cursor-pointer flex justify-center items-center">
                        <i className="far fa-long-arrow-left" />
                    </div>
                    <div className="swiper-button-next cursor-pointer flex justify-center items-center">
                        <i className="far fa-long-arrow-right" />
                    </div>
                    <div className="swiper-pagination flex items-center" />
                </div>
            </div>
        </div>
    )
}

export default MainSlider;