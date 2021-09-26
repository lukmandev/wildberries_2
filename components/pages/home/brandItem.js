

const BrandItem = () => {

    return (
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
    )
}

export default BrandItem;