import { faChevronDown, faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './VideoItem.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper } from '~/components/Popper';
import {
    ShareEmbedIcon,
    ShareFacebookIcon,
    ShareMessageIcon,
    SharePhoneIcon,
    ShareTwitterIcon,
} from '~/components/Icons';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
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
function Action({ data }) {
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
    const [isActive, setIsActive] = useState(true);
    const [isShare, setIsShare] = useState(true);
    const handleActiveLike = () => {
        setIsActive(!isActive);
    };
    return (
        <div className={cx('action')}>
            <button className={cx('action-btn', { active: isActive })}>
                <span
                    className={cx('icon')}
                    style={{ color: isActive ? 'rgb(254, 44, 85)' : 'black' }}
                    onClick={handleActiveLike}
                >
                    <FontAwesomeIcon icon={faHeart} />
                </span>
                <div className={cx('loader')}></div>
                <strong>{data.like}</strong>
            </button>
            <button className={cx('action-btn')}>
                <Link to={`/@${data.nickname}/video`}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faCommentDots} />
                    </span>
                    <strong>{data.comment}</strong>
                </Link>
            </button>
            <HeadlessTippy
                interactive
                // visible
                delay={[0, 300]}
                offset={[-25, 2]}
                onHidden={() => setIsShare(true)}
                placement="bottom-start"
                render={(attrs) => (
                    <div className="box" tabIndex="-1" {...attrs}>
                        <Wrapper className={cx('share-info')}>
                            {/* fix id */}
                            <div className={cx('info_overflow')}>
                                {(isShare ? shareItems : shareItemAll).map((item, index) => (
                                    <Button text key={index} Lefticon={item.icon} className={cx('share-button')}>
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
                <button className={cx('action-btn')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faShare} />
                    </span>
                    <strong>{data.share}</strong>
                </button>
            </HeadlessTippy>
        </div>
    );
}

export default Action;
