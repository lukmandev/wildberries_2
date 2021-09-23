import Link from 'next/link';
import {FormattedMessage} from "react-intl";

const HeaderActionLink = ({link, icon, title}) => {
    return (
        <Link href={link}>
            <a className="header__action flex cursor-pointer flex-col items-center">
                <div className="action__icon">
                    <i className={icon} />
                </div>
                <span className="action__title">
                    <FormattedMessage id={title} />
                </span>
            </a>
        </Link>
    )
}

export default HeaderActionLink;