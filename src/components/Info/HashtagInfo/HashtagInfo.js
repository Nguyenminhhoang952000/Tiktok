import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './HashtagInfo.module.scss';
const cx = classNames.bind(styles);
function HashtagInfo({ className }) {
    return (
        <div className={cx('wrapper', { [className]: className })}>
            <div className={cx('content')}>
                <span className={cx('caption')}>Có những thứ nên chỉ làm một lần và không có lần hai</span>
                <Link className={cx('hashtag')} to="/settings">
                    <strong>#phongcach</strong>
                </Link>
                <Link className={cx('hashtag')} to="/settings">
                    <strong>#dangyeu</strong>
                </Link>
                <Link className={cx('hashtag')} to="/settings">
                    <strong>#mituot</strong>
                </Link>
                <Link className={cx('hashtag')} to="/settings">
                    <strong>#yeuhoangnhieu</strong>
                </Link>
            </div>
            <h4 className={cx('music')}>
                <Link className={cx('music_note')} to="/">
                    <span className={cx('music_icon')}>
                        <FontAwesomeIcon icon={faMusic} />
                    </span>
                    <span className={cx('name_music')}>Đi để trở về - Sobin Minh Hoàng</span>
                </Link>
            </h4>
        </div>
    );
}

export default HashtagInfo;
