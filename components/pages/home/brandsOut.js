import BrandItem from "./brandItem";
import {useEffect} from "react";
import {Navigation, Swiper} from "swiper";


Swiper.use(Navigation);

const BrandsOut = () => {


    useEffect(() => {
        new Swiper('.popular-brands .swiper', {
            slidesPerView: 10,
            spaceBetween: 20,
            speed: 400,
            clickable: true,
            navigation: {
                nextEl: '.swiper-button-next',
            },
        });
    }, []);
    return (
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
                            {Array(15).fill(0).map((elem, i) => {
                                return <BrandItem key={i} />
                            })}
                        </div>
                        <div className="swiper-button-next cursor-pointer absolute right-0 top-0 flex justify-center items-center">
                            <i className="far fa-long-arrow-right" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandsOut;