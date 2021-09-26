import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";


const SubCatalogModal = () => {
    const dispatch = useDispatch();
    const state = useSelector(allState => allState.menu);
    return (
        <div className={
            classNames("subcatalog-modal grid grid-cols-10 items-start", {
                hidden: !state.subCatalogIsOpen
            })
        }>
            <div className="grid grid-cols-2 left justify-start col-span-6 items-start">
                <div className="subcatalog__item-holder">
                <span className="subcatalog__item-title">
                    Одежда
                </span>
                <ul className="subcatalog__list">
                    <li><a href className="subcatalog__list-link">LINK 1</a></li>
                    <li><a href className="subcatalog__list-link">LINK 2</a></li>
                    <li><a href className="subcatalog__list-link">LINK 3</a></li>
                    <li><a href className="subcatalog__list-link">LINK 4</a></li>
                </ul>
                </div>
                <div className="subcatalog__item-holder">
                <span className="subcatalog__item-title">
                    Одежда
                </span>
                <ul className="subcatalog__list">
                    <li><a href className="subcatalog__list-link">LINK 1</a></li>
                    <li><a href className="subcatalog__list-link">LINK 2</a></li>
                    <li><a href className="subcatalog__list-link">LINK 3</a></li>
                    <li><a href className="subcatalog__list-link">LINK 4</a></li>
                </ul>
                </div>
                <div className="subcatalog__item-holder">
                <span className="subcatalog__item-title">
                    Одежда
                </span>
                <ul className="subcatalog__list">
                    <li><a href className="subcatalog__list-link">LINK 1</a></li>
                    <li><a href className="subcatalog__list-link">LINK 2</a></li>
                    <li><a href className="subcatalog__list-link">LINK 3</a></li>
                    <li><a href className="subcatalog__list-link">LINK 4</a></li>
                </ul>
                </div>
                <div className="subcatalog__item-holder">
                <span className="subcatalog__item-title">
                    Одежда
                </span>
                <ul className="subcatalog__list">
                    <li><a href className="subcatalog__list-link">LINK 1</a></li>
                    <li><a href className="subcatalog__list-link">LINK 2</a></li>
                    <li><a href className="subcatalog__list-link">LINK 3</a></li>
                    <li><a href className="subcatalog__list-link">LINK 4</a></li>
                </ul>
                </div>
            </div>
            <div className="right col-span-4">
                <img src={require('../../../assets/images/product-1.png').default.src} alt="" className="object-cover" />
            </div>
        </div>
    )
}


export default SubCatalogModal;