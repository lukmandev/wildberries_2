import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import Link from 'next/link';

import {setCatalogIsOpen} from "../../../redux/reducers/menu";


const HeaderLogo = () => {
    const dispatch = useDispatch();
    const state = useSelector(allState => allState.menu);

    const openCatalogModal = () => {
        dispatch(setCatalogIsOpen(!state.catalogIsOpen));
    }
    return (
        <div className="header__logo-holder flex">
            <div className="hamburger-menu-holder flex items-center justify-center">
                <div className={classNames('hamburger hamburger--squeeze', {
                    "is-active": state.catalogIsOpen
                })} onClick={openCatalogModal}>
                    <div className="hamburger-box">
                        <div className="hamburger-inner" />
                    </div>
                </div>
            </div>
            <Link href="/">
                <a className="header__logo font-semibold text-white flex items-center">MANAS-soft</a>
            </Link>
        </div>
    )
}

export default HeaderLogo;