import {useDispatch} from "react-redux";
import {setActive} from "../../redux/reducers/product-preview-modal";
import Link from 'next/link';


const Card = ({data}) => {
    const dispatch = useDispatch();


    const openPreviewModal = () => {
        dispatch(setActive(true));
    }
    return (
        <div className="card w-full flex justify-start items-start flex-col">
            <div className="card__top w-full">
                <img src="./assets/images/product-1.png" alt="" className="w-full h-full object-cover" />
                <button className="quick-view-button font-normal" onClick={openPreviewModal}>
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
                <Link href={`/product/${"123"}`}>
                    <a className="card__title w-full">
                        Honor / Фитнес-браслет
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Card;