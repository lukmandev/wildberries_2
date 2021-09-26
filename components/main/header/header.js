import SearchForm from "./searchForm";
import HeaderActions from "./header-actions/headerActions";
import HeaderLogo from "./headerLogo";


const Header = () => {
    return (
        <header className="full-wrapper header">
            <div className="wrapper">
                <div className="header__top w-full flex justify-between items-center">
                    <div className="header__top-list flex items-center">
                        <span className="current__language flex items-center header__top-link">
                            Kg &nbsp;<img src={require("../../../assets/images/kg.png").default.src} />&nbsp;/ &nbsp;Русский
                    </span>
                        <span className="header__top-link">
                            Бишкек
                        </span>
                        <span className="header__top-link">
                          Бесплатная доставка
                        </span>
                        <span className="header__top-link">
                          Продавцам
                        </span>
                    </div>
                    <div className="header__top-report flex items-center cursor-pointer">
                        <span className="font-normal">Сообщить о проблеме</span>
                        <i className="fas fa-comment-alt-dots" />
                    </div>
                </div>
                <div className="header__bottom flex justify-between items-center">
                    <HeaderLogo />
                    <SearchForm />
                    <HeaderActions />
                </div>
            </div>
        </header>

    )
}

export default Header;