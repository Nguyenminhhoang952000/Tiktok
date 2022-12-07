import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Wrapper } from '~/components/Popper';
import AccountPreview from '~/components/AccountPreview';
import styles from './SuggestAccounts.module.scss';
const cx = classNames.bind(styles);
function AccountItem({ data, className }) {
    const handleTippy = (attrs) => (
        <div className="box" tabIndex="-1" {...attrs}>
            <Wrapper>
                <AccountPreview data={data} primary />
            </Wrapper>
        </div>
    );
    return (
        <div>
            <Tippy delay={[700, 0]} offset={[0, 0]} interactive placement="bottom-start" render={handleTippy}>
                <Link to={`/@${data.nickname}`} className={cx('account-item', { [className]: className })}>
                    <img className={cx('avatar')} src={data.src} alt="" />
                    <div className={cx('info')}>
                        <p className={cx('item-info')}>
                            <strong className={cx('nickname')}>{data.nickname}</strong>
                            <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>{data.name}</p>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

export default AccountItem;
