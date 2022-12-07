import className from 'classnames/bind';
import styles from './Profile.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLink, faShare, faChevronDown, faBan } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { MessagesIcon, MorebtnIcon } from '~/components/Icons';
import { Link } from 'react-router-dom';
import LayoutMain from './LayoutMain';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { Wrapper } from '~/components/Popper';
import {
    ShareEmbedIcon,
    ShareFacebookIcon,
    ShareMessageIcon,
    SharePhoneIcon,
    ShareTwitterIcon,
} from '~/components/Icons';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
const shareItems = [
    {
        icon: <ShareEmbedIcon />,
        title: 'Embed',
        to: '/',
    },
    {
        icon: <ShareMessageIcon />,
        title: 'Send to friends',
        href: 'https://www.facebook.com/login.php?skip_api_login=1&api_key=113869198637480&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fapp_id%3D113869198637480%26display%3Dpopup%26sdk%3Djoey%26u%3Dhttps%253A%252F%252Fwww.tiktok.com%252F%2540amauryguichon%252Fvideo%252F7168498929485679918%253Fis_from_webapp%253D1%2526sender_device%253Dpc%2526web_id%253D7163896173466584577&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D113869198637480%26connect%3D0%23_%3D_&display=popup&locale=en_GB',
    },
    {
        icon: <ShareFacebookIcon />,
        title: 'Share to Facebook',
        href: 'https://www.facebook.com/login.php?skip_api_login=1&api_key=113869198637480&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fapp_id%3D113869198637480%26display%3Dpopup%26sdk%3Djoey%26u%3Dhttps%253A%252F%252Fwww.tiktok.com%252F%2540amauryguichon%252Fvideo%252F7168498929485679918%253Fis_from_webapp%253D1%2526sender_device%253Dpc%2526web_id%253D7163896173466584577&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D113869198637480%26connect%3D0%23_%3D_&display=popup&locale=en_GB',
    },
    {
        icon: <SharePhoneIcon />,
        title: 'Share to WhatsApp',
        href: 'https://wa.me/?text=https%3A%2F%2Fwww.tiktok.com%2F%40amauryguichon%2Fvideo%2F7168498929485679918%3Fis_from_webapp%3D1%26sender_device%3Dpc%26web_id%3D7163896173466584577',
    },
    {
        icon: <ShareTwitterIcon />,
        title: 'Twitter',
        href: 'https://twitter.com/intent/tweet?refer_source=https%3A%2F%2Fwww.tiktok.com%2F%40amauryguichon%2Fvideo%2F7168498929485679918%3Fis_from_webapp%3D1%26sender_device%3Dpc%26web_id%3D7163896173466584577&text=https%3A%2F%2Fwww.tiktok.com%2F%40amauryguichon%2Fvideo%2F7168498929485679918%3Fis_from_webapp%3D1%26sender_device%3Dpc%26web_id%3D7163896173466584577',
    },
];
const cx = className.bind(styles);
function Profile() {
    const shareItemAll = [
        ...shareItems,
        {
            icon: <ShareFacebookIcon />,
            title: 'Share to Facebook',
            href: 'https://twitter.com/intent/tweet?refer_source=https%3A%2F%2Fwww.tiktok.com%2F%40amauryguichon%2Fvideo%2F7168498929485679918%3Fis_from_webapp%3D1%26sender_device%3Dpc%26web_id%3D7163896173466584577&text=https%3A%2F%2Fwww.tiktok.com%2F%40amauryguichon%2Fvideo%2F7168498929485679918%3Fis_from_webapp%3D1%26sender_device%3Dpc%26web_id%3D7163896173466584577',
        },
        {
            icon: <ShareTwitterIcon />,
            title: 'Twitter',
            href: 'https://twitter.com/intent/tweet?refer_source=https%3A%2F%2Fwww.tiktok.com%2F%40amauryguichon%2Fvideo%2F7168498929485679918%3Fis_from_webapp%3D1%26sender_device%3Dpc%26web_id%3D7163896173466584577&text=https%3A%2F%2Fwww.tiktok.com%2F%40amauryguichon%2Fvideo%2F7168498929485679918%3Fis_from_webapp%3D1%26sender_device%3Dpc%26web_id%3D7163896173466584577',
        },
        {
            icon: <ShareEmbedIcon />,
            title: 'Embed',
            to: '/',
        },
        {
            icon: <ShareEmbedIcon />,
            title: 'Embed',
            to: '/',
        },
        {
            icon: <ShareEmbedIcon />,
            title: 'Embed',
            to: '/',
        },
        {
            icon: <ShareEmbedIcon />,
            title: 'Embed',
            to: '/',
        },
        {
            icon: <ShareEmbedIcon />,
            title: 'Embed',
            to: '/',
        },
    ];
    const [isShare, setIsShare] = useState(true);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('share-layout--profile')}>
                <div className={cx('header-layout--profile')}>
                    <div className={cx('share-info')}>
                        <Image className={cx('img-info')} src="" alt="Quynhsin" />
                        <div className={cx('title-info')}>
                            <h2>
                                <span>Quynhdy</span>
                                <span className={cx('icon-check')}>
                                    <FontAwesomeIcon icon={faCheckCircle} />
                                </span>
                            </h2>
                            <h1>Dương Quỳnh</h1>
                            <Button className={cx('profile-btn')} primary>
                                Follow
                            </Button>
                        </div>
                    </div>
                    <h2 className={cx('count-info')}>
                        <div className={cx('number-info')}>
                            <strong>22</strong>
                            <span>Following</span>
                        </div>
                        <div className={cx('number-info')}>
                            <strong>4.5M</strong>
                            <span>Followers</span>
                        </div>
                        <div className={cx('number-info')}>
                            <strong>85.7M</strong>
                            <span>Likes</span>
                        </div>
                    </h2>
                    <h2>INSTA:cobecony FB: Dương Hoàng Sinh viên sưu phạm Khóa K71 </h2>
                    <div className={cx('share-link')}>
                        <Link target="_blank" to="/">
                            <span>
                                <FontAwesomeIcon icon={faLink} />
                            </span>
                            <span>beacons.ai/noteHoang2000</span>
                        </Link>
                    </div>
                    <Tippy
                        interactive
                        // visible
                        delay={[0, 300]}
                        offset={[30, 8]}
                        onHidden={() => setIsShare(true)}
                        placement="bottom-end"
                        render={(attrs) => (
                            <div className="box" tabIndex="-1" {...attrs}>
                                <Wrapper className={cx('share-info--tippy')}>
                                    {/* fix id */}
                                    <div className={cx('info_overflow')}>
                                        {(isShare ? shareItems : shareItemAll).map((item, index) => (
                                            <Button
                                                text
                                                key={index}
                                                Lefticon={item.icon}
                                                className={cx('share-button')}
                                            >
                                                {item.title}
                                            </Button>
                                        ))}
                                    </div>
                                    {isShare && (
                                        <div className={cx('share-right')} onClick={() => setIsShare(!isShare)}>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>
                                    )}
                                </Wrapper>
                            </div>
                        )}
                    >
                        <div className={cx('action-profile')}>
                            <FontAwesomeIcon icon={faShare} />
                        </div>
                    </Tippy>
                    <Tippy
                        interactive
                        // visible
                        delay={[0, 300]}
                        offset={[30, 8]}
                        onHidden={() => setIsShare(true)}
                        placement="bottom-end"
                        render={(attrs) => (
                            <div className="box" tabIndex="-1" {...attrs}>
                                <Wrapper className={cx('share-btn')}>
                                    {/* fix id */}
                                    <div className={cx('info_btn')}>
                                        <Button text Lefticon={<MessagesIcon />} className={cx('share-action--btn')}>
                                            Send message
                                        </Button>
                                        <div className={cx('line-button')}></div>
                                        <Button
                                            text
                                            Lefticon={<FontAwesomeIcon icon={faFlag} />}
                                            className={cx('share-action--btn')}
                                        >
                                            Report
                                        </Button>
                                        <div className={cx('line-button')}></div>

                                        <Button
                                            text
                                            Lefticon={<FontAwesomeIcon icon={faBan} />}
                                            className={cx('share-action--btn')}
                                        >
                                            Block
                                        </Button>
                                    </div>
                                </Wrapper>
                            </div>
                        )}
                    >
                        <div className={cx('more-btn')}>
                            <MorebtnIcon />
                        </div>
                    </Tippy>
                </div>
                <div className={cx('layout-main')}>
                    <LayoutMain />
                </div>
            </div>
        </div>
    );
}
export default Profile;
