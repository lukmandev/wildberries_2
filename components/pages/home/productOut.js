

const ProductOut = ({title, data}) => {
    const outData = () => {
        if(data)
    }
    return (
        <div className="full-wrapper product-out product-out-indentation bg-white">
            <div className="wrapper flex flex-col justify-start items-start">
                {title && (
                    <h1 className="product-out__title font-bold product-out__title-indentation">
                        Хиты продаж
                    </h1>
                )}
                <div className="products__list grid grid-cols-6 w-full items-center justify-between">

                </div>
            </div>
        </div>
    )
}

export default ProductOut;