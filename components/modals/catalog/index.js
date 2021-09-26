


import CatalogModal from './catalogModal';
import SubCatalogModal from './subCatalogModal';
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {setCatalogIsOpen, setSubCatalogIsOpen} from "../../../redux/reducers/menu";



const ModalWrapper = () => {
    const dispatch = useDispatch();
    const state = useSelector(allState => allState.menu);

    const closeModal = () => {
        dispatch(setCatalogIsOpen(false));
        dispatch(setSubCatalogIsOpen(false));
    }
    return (
        <div className={
            classNames(
                "catalog-modal-wrapper fixed left-0 top-0 flex justify-start items-start w-full",
                {
                    active: state.catalogIsOpen
                }
            )
        }>
            <CatalogModal />
            <SubCatalogModal />
            <div className="close-catalog-modal cursor-pointer" onClick={closeModal}>
                <i className="fal fa-times" />
            </div>
        </div>
    )
}

export default ModalWrapper;