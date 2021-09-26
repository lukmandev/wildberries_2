import {Navigation, Swiper} from "swiper";
import {useEffect} from "react";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {setActive} from "../../../redux/reducers/product-preview-modal";


Swiper.use(Navigation);

const PreviewProductModal = () => {
    const dispatch = useDispatch();
    const state = useSelector(allState => allState.productPreviewModal);
    useEffect(() => {
        new Swiper('.preview-modal .swiper', {
            direction: 'vertical',
            slidesPerView: 4,
            spaceBetween: 10,
            speed: 400,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
        });
    }, []);

    const closeModal = () => {
        dispatch(setActive(false));
    }

    const closeOnRequest = (e) => {
        if(!e.target.closest('.preview-modal')){
            dispatch(setActive(false));
        }
    }
    return (
        <div className={classNames(
            "preview-modal-wrapper fixed left-0 top-0 w-screen h-screen flex justify-center items-center",
            {
                active: state.isActive
            }
        )}
            onClick={closeOnRequest}
        >
            <div className="preview-modal-scroll absolute left-0 top-0 w-full h-full justify-center items-center flex " style={{overflow: 'hidden', height: '1200px'}}>
                <div className="preview-modal relative flex w-full flex-col justify-start items-start bg-white w-full">
                    <h1 className="preview-modal__title block font-bold text-black">
                        Raven
                    </h1>
                    <div className="preview-modal__top w-full flex justify-start items-center">
                        <span className="vendor-code flex">
                          Артикул: <span className="text-black">12052242</span>
                        </span>
                        <div className="reviews-holder flex">
                            <div className="rating-wrap">
                                <div className="rating-value">
                                    1
                                </div>
                                <div className="rating">
                                    <div className="rating__active">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                    <div className="rating__body">
                                        <i className="fal fa-star rating-item" data-rating="{1}" />
                                        <i className="fal fa-star rating-item" data-rating="{2}" />
                                        <i className="fal fa-star rating-item" data-rating="{3}" />
                                        <i className="fal fa-star rating-item" data-rating="{4}" />
                                        <i className="fal fa-star rating-item" data-rating="{5}" />
                                    </div>
                                    <div className="rating__items-copy">
                                        <i className="fal fa-star" />
                                        <i className="fal fa-star" />
                                        <i className="fal fa-star" />
                                        <i className="fal fa-star" />
                                        <i className="fal fa-star" />
                                    </div>
                                </div>
                            </div>
                            <span className="reviews-title preview-modal__top-title">
                                    3614 отзывов
                                  </span>
                            <span className="sold-count preview-modal__top-title">
                                Купили более 13 000 раз
                              </span>
                        </div>
                    </div>
                    <div className="preview-modal-body w-full grid items-start">
                        <div className="preview-modal-left w-full grid justify-between items-center">
                            <div className="slider swiper  overflow-hidden grid grid-cols-1 relative">
                                <div className="swiper-button-prev cursor-pointer flex justify-center items-center">
                                    <i className="far fa-long-arrow-up" />
                                </div>
                                <div className="swiper-wrapper flex flex-col items-start justify-start">
                                    <div className="swiper-slide">
                                        <div className="slider-video flex justify-center items-center">
                                            <i className="fas fa-play text-white" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="slider-img">
                                            <img src="./assets/images/preview-modal.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="slider-img">
                                            <img src="./assets/images/preview-modal.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="slider-img">
                                            <img src="./assets/images/preview-modal.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="slider-img">
                                            <img src="./assets/images/preview-modal.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="slider-img">
                                            <img src="./assets/images/preview-modal.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="slider-img">
                                            <img src="./assets/images/preview-modal.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="slider-img">
                                            <img src="./assets/images/preview-modal.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="slider-img">
                                            <img src="./assets/images/preview-modal.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-button-next flex cursor-pointer justify-center items-center">
                                    <i className="far fa-long-arrow-down" />
                                </div>
                            </div>
                            <div className="current-image">
                                <img src="./assets/images/preview-modal-big.png" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="preview-modal-right w-full flex flex-col items-start justify-start">
                            <div className="price-holder flex items-start">
            <span className="current-price font-extrabold text-black">
              3 600 сом
            </span>
                                <span className="previous-price font-bold relative">
              4 500 сом
            </span>
                            </div>
                            <span className="other-currency-price font-bold">
            3 260 р
          </span>
                            <span className="product-composition font-medium">
            Состав: <span className="text-black">хлопок 80%, полиэстер 20%</span>
          </span>
                            <div className="actions-to-product-holder w-full flex justify-between items-center">
                                <button className="add-to-cart text-white font-bold relative">
                                    <div className="loading-block flex justify-center items-center absolute left-0 top-0 w-full h-full">
                                        <i className="fas fa-spinner-third" />
                                    </div>
                                    Добавить в корзину
                                </button>
                                <button className="add-to-wishlist flex justify-center items-center">
                                    <i className="fal fa-heart" />
                                </button>
                            </div>
                            <div className="advantages-out grid grid-cols-2 justify-between items-start">
                                <div className="advantages__item flex items-center">
                                    <img src="./assets/images/box.svg" alt="" />
                                    <span className="text-black font-bold">Бесплатная доставка</span>
                                </div>
                                <div className="advantages__item flex items-center">
                                    <img src="./assets/images/primerka.png" alt="" />
                                    <span className="text-black font-bold">Примерка</span>
                                </div>
                                <div className="advantages__item flex items-center">
                                    <img src="./assets/images/return.svg" alt="" />
                                    <span className="text-black font-bold">21 день на возврат</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-tags w-full justify-start flex items-center flex-wrap">
                        <div className="product__tag whitespace-nowrap font-medium cursor-pointer">
                            Худи женские
                        </div>
                        <div className="product__tag whitespace-nowrap font-medium cursor-pointer">
                            Одежда женская
                        </div>
                    </div>
                    <div className="see-more-info-holder w-full flex justify-center items-center">
                        <a className="see-more-btn font-bold">
                            БОЛЬШЕ ИНФОРМАЦИИ О ТОВАРЕ
                        </a>
                    </div>
                    <div className="close-modal absolute cursor-pointer" onClick={closeModal}>
                        <i className="far fa-times" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviewProductModal;