


import CatalogModal from './catalogModal';
import SubCatalogModal from './subCatalogModal';



const ModalWrapper = () => {

    return (
        <div className="catalog-modal-wrapper fixed left-0 top-0 flex justify-start items-start w-full">
            <CatalogModal />
            <SubCatalogModal />
            <div className="close-catalog-modal">
                <i className="fal fa-times" />
            </div>
        </div>
    )
}

export default ModalWrapper;