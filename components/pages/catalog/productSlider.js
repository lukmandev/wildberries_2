import Card from "../../card/card";


const ProductSlider = ({title, products}) => {

    const outProducts = () => {
        return Array(10).fill(0).map((elem) => {
            return (
                <div className="swiper-slide">
                    <Card />
                </div>
            );
        })
    }

    return (
        <div className="full-wrapper padding category-products-padding product-out bg-white">
            <div className="wrapper flex flex-col justify-start items-start">
                <h1 className="product-out__title font-bold product-out__title-indentation">
                    HELLO WORLD
                </h1>
                <div className="category-products__list swiper-container w-full overflow-hidden">
                    <div className="swiper relative">
                        <div className="swiper-wrapper">
                            {outProducts()}
                        </div>
                        <div className="swiper-button-next flex justify-center items-center absolute right-0">
                            <i className="far fa-long-arrow-right" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSlider;