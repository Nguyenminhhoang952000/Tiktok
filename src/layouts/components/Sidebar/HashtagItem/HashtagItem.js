import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faArrowRightToBracket, faGear, faMoon, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './HashtagItem.module.scss';
const cx = classNames.bind(styles);
const hashTags = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'suthatla',
        to: '/@hoang',
    },
    {
        icon: <FontAwesomeIcon icon={faTiktok} />,
        title: 'mackedoi',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faVideo} />,
        title: 'sansangthaydoi',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Yêu Đơn Phương Là Gì (MEE Remix)',
        to: '/settings',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Về Nghe Mẹ Ru',
    },
    {
        icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
        title: 'Thiên Thần Tình Yêu',
        to: '/logout',
    },
];
function HashtagItem({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <div className={cx('hashtag-items')}>
                {hashTags.map((hashTag, index) => (
                    <Button key={index} to={hashTag.to} className={cx('hashtag-btn')} Lefticon={hashTag.icon} rounded>
                        <p>{hashTag.title}</p>
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default HashtagItem;
