import BannerItem from "./banner-item/bannerItem";


const Banner = () => {

    return (
        <div className="full-wrapper home-banner home-banner-indentation bg-white">
            <div className="wrapper">
                <div className="home-banner__list w-full grid grid-cols-2">
                    {Array(6).fill(0).map((elem, i) =>  {
                        return <BannerItem key={i} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Banner;