import Header from "../header/header";
import Footer from "../footer";
import ModalWrapper from '../../modals/catalog/index';


const PageLayout = ({children}) => {

    return (
        <>
            <Header />
            <ModalWrapper />
                {children}
            <Footer />
        </>
    )
}


export default PageLayout;