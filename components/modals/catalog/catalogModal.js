import {useSelector} from "react-redux";
import {setSubCatalogIsOpen} from "../../../redux/reducers/menu";
import CatalogItem from "../../catalogItem";


const CatalogModal = () => {
    return (
        <div className="catalog-modal">
            <ul className="catalog-modal__list grid grid-cols-1">
                {Array(10).fill(0).map((elem, i) => {
                    return <CatalogItem key={i} />
                })}
            </ul>
        </div>
    )
}


export default CatalogModal;