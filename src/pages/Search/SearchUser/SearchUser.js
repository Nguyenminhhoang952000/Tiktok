import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './SearchUser.module.scss';
const cx = className.bind(styles);
function SearchUser() {
    return (
        <div className={cx('wrapper')}>
            <Link to="/@noteHoang">
                <div className={cx('search-user--avatar')}>
                    <Image
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1607672965447681.jpeg?x-expires=1670223600&x-signature=o1AHc35khU3Iwv3QXqIXSQzKb5g%3D"
                        alt="hau hoang"
                    />
                </div>
            </Link>
            <Link to="/@noteHoang">
                <div className={cx('search-user--info')}>
                    <p className={cx('user-uniqueid')}>
                        <span>hauhoang</span>
                        <span>
                            <FontAwesomeIcon icon={faCheckCircle} />
                        </span>
                    </p>
                    <div className={cx('sub-title')}>
                        <h2 className={cx('nickname')}>Hậu Hoàng</h2> <span> . </span>
                        <strong className={cx('following-count')}>
                            5.8M
                            <span>Followers</span>
                        </strong>
                    </div>
                    <p className={cx('user-desc')}>
                        <strong>Facebook: Hau Hoang</strong>
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default SearchUser;
