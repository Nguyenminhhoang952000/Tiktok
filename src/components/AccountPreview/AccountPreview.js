import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';
const cx = classNames.bind(styles);
function AccountPreview({ data, primary = false, outline = false, footer = false, ...propsPass }) {
    const props = {
        primary,
        outline,
        ...propsPass,
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src={data.src} alt="" />
                <Button className={cx('preview-btn')} {...props}>
                    Follow
                </Button>
            </div>
            <div className={cx('info')}>
                <Link target="_blank" to={`/@${data.nickname}`} className={cx('item-info')}>
                    <strong className={cx('nickname')}>{data.nickname}</strong>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                </Link>
                <Link target="_blank" to={`/@${data.nickname}`} className={cx('name')}>
                    {data.name}
                </Link>
            </div>
            <div className={cx('parameter')}>
                <p className={cx('parameter_info')}>
                    <span className={cx('number')}>7.2M</span>
                    <span className={cx('text')}>Followers</span>
                </p>
                <p className={cx('parameter_info')}>
                    <span className={cx('number')}>242.3M</span>
                    <span className={cx('text')}>Likes</span>
                </p>
            </div>
            {footer && (
                <div className={cx('footer')}>
                    <p>{data.notedescribe}</p>
                </div>
            )}
        </div>
    );
}

export default AccountPreview;
