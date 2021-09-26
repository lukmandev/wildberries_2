import {setSubCatalogIsOpen} from "../redux/reducers/menu";
import {useDispatch} from "react-redux";


const CatalogItem = () => {
    const dispatch = useDispatch();

    const setSubCatalog = () => {
        dispatch(setSubCatalogIsOpen(true));
    }
    return (
        <li className="flex justify-start items-center" onClick={setSubCatalog}>
            <img src="./assets/images/clothes.png" className="object-cover" alt="" />
            <a href className="catalog-modal__link">Каталог-1</a>
        </li>
    )
}
// <i className="fas fa-user-alt icon" />
export default CatalogItem;