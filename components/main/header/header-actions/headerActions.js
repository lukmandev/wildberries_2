import HeaderActionLink from "./headerActionLink";
import {headerActions} from "../../../../constants/header/header-actions";


const HeaderActions = () => {

    return (
        <>
            <HeaderActionLink icon={headerActions.address} title="headerActions__address" link="/cart" />
            <HeaderActionLink icon={headerActions.signin} title="headerActions__signin" link="/signin" />
            <HeaderActionLink icon={headerActions.cart} title="headerActions__cart" link="/cart" />
        </>
    )
}

export default HeaderActions;