import {IntlProvider} from "react-intl";
import {useSelector} from "react-redux";
import {useMemo} from "react";

import {wrapper} from '../redux/reducer';
import {messages} from "../intl/messages";

import '../styles/null.css';
import '../styles/global.css';
import '../styles/burger.css';
import '../styles/card.css';
import '../styles/category_product.css';
import '../styles/footer.css';
import '../styles/header.css';
import '../styles/icons.css';
import '../styles/index.css';
import '../styles/catalog-modal.css';


const MyApp = ({ Component, pageProps }) => {
    const locale = useSelector(state => state.main.locale);
    const defaultLocale = useMemo(() => locale, []);
    return (
        <IntlProvider
            locale={locale}
            defaultLocale={defaultLocale}
            messages={messages[locale]}
        >
            <Component {...pageProps} />
        </IntlProvider>
    )
}

export default wrapper.withRedux(MyApp);
