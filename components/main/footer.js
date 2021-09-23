


const Footer = () => {

    return (
        <footer className="full-wrapper footer bg-purple">
            <div className="wrapper flex flex-col justify-start items-center">
                <nav className="footer__nav w-full grid grid-cols-5 items-start">
                    <div className="footer__item">
                        <div className="footer__item-nav">
          <span className="nav-title">
            Покупатель
          </span>
                            <ul className="nav-list">
                                <li>
                                    <a href className="nav-link">
                                        Как сделать заказ
                                    </a>
                                </li>
                                <li>
                                    <a href className="nav-link">
                                        Способы оплаты
                                    </a>
                                </li>
                                <li>
                                    <a href className="nav-link">
                                        Доставка
                                    </a>
                                </li>
                                <li>
                                    <a href className="nav-link">
                                        Возврат товара
                                    </a>
                                </li>
                                <li>
                                    <a href className="nav-link">
                                        Возврат днежных средств
                                    </a>
                                </li>
                                <li>
                                    <a href className="nav-link">
                                        Правила продажи
                                    </a>
                                </li>
                                <li>
                                    <a href className="nav-link">
                                        Правила пользования торговой площадкой
                                    </a>
                                </li>
                                <li>
                                    <a href className="nav-link">
                                        Вопросы и ответы
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__item footer__item-indentation">
                        <div className="footer__item-nav">
          <span className="nav-title">
            Партнерам
          </span>
                            <ul className="nav-list">
                                <li>
                                    <a href className="nav-link">
                                        Продавцам
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__item-nav">
          <span className="nav-title">
            Наши проекты
          </span>
                            <ul className="nav-list">
                                <li>
                                    <a href className="nav-link">
                                        ЗОЖ и спорт
                                    </a>
                                </li>
                                <li>
                                    <a href className="nav-link">
                                        Детям
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__item">
                        <div className="footer__item-nav">
          <span className="nav-title">
            Компания
          </span>
                            <ul className="nav-list">
                                <li>
                                    <a href className="nav-link">
                                        О нас
                                    </a>
                                </li>
                                <li>
                                    <a href className="nav-link">
                                        Реквизиты
                                    </a>
                                </li>
                                <li>
                                    <a href className="nav-link">
                                        Пресс-центр
                                    </a>
                                </li>
                                <li>
                                    <a href className="nav-link">
                                        Контакты
                                    </a>
                                </li>
                                <li>
                                    <a href className="nav-link">
                                        Bug Bounty
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__item">
                        <div className="footer__item-nav">
          <span className="nav-title">
            Мы в соцсетях
          </span>
                            <ul className="nav-list">
                                <li>
                                    <a href className="nav-link">
                                        Вконтакте
                                    </a>
                                </li>
                                <li>
                                    <a href className="nav-link">
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href className="nav-link">
                                        Одноклассники
                                    </a>
                                </li>
                                <li>
                                    <a href className="nav-link">
                                        YouTube
                                    </a>
                                </li>
                                <li>
                                    <a href className="nav-link">
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__item">
                        <div className="footer__item-nav">
          <span className="nav-title">
            Мобильное устройства
          </span>
                            <ul className="nav-list nav-list-indentation">
                                <li>
                                    <a className="flex">
                                        <img
                                            className="footer__item-img object-contain"
                                            src={require('../../assets/images/google-play.png').default.src}
                                            alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a className="flex">
                                        <img
                                            className="footer__item-img object-contain apple-store"
                                            src={require('../../assets/images/apple-store.png').default.src}
                                            alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href className="nav-link">
                                        Перейти на мобильную версию сайта
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="footer__copyright text-center flex flex-col items-center justify-start">
                    <p className="footer__copyright-title font-normal">2004-2021 © Wildberries — модный интернет-магазин одежды, обуви и аксессуаров.</p>
                    <span className="footer__copyright-title font-normal">Все права защищены.</span>
                    <a href className="footer__copyright-title font-normal">Проверка совместимости</a>
                </div>
            </div>
        </footer>

    )
}

export default Footer;