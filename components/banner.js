import BannerItem from "./banner-item/banner-item";


const Banner = () => {

    const outData = () => {
        return Array(10).fill(0).map((elem) => {
            return <BannerItem />
        });
    }
    return (
        <div className="category-product-banner padding w-full grid grid-cols-3">
            {outData()}
        </div>
    )
}

export default Banner;