import styles from './ContentItem.module.scss';
import classNames from 'classnames/bind';
import HeaderInfo from '~/components/Info/HeaderInfo/HeaderInfo';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import Image from '~/components/Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from '~/components/AccountPreview';
import { Link } from 'react-router-dom';
import HashtagInfo from '~/components/Info/HashtagInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import 'tippy.js/dist/tippy.css';
import {
    ShareEmbedIcon,
    ShareFacebookIcon,
    ShareMessageIcon,
    SharePhoneIcon,
    ShareTwitterIcon,
} from '~/components/Icons';
import Button from '~/components/Button';
import CommentList from './CommentList';
const cx = classNames.bind(styles);
const shareItems = [
    {
        icon: <ShareEmbedIcon />,
        title: 'Share to Linkedln',
        href: 'https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Furl%3Dhttps%253A%252F%252Fwww.tiktok.com%252F%2540manhthangstore999%252Fvideo%252F7152838575178976538%253Fis_from_webapp%253D1%2526sender_device%253Dpc%2526web_id%253D7163896173466584577',
    },
    {
        icon: <ShareFacebookIcon />,
        title: 'Share to Reddit',
        href: 'https://www.reddit.com/submit?url=https%3A%2F%2Fwww.tiktok.com%2F%40manhthangstore999%2Fvideo%2F7152838575178976538%3Fis_from_webapp%3D1%26sender_device%3Dpc%26web_id%3D7163896173466584577',
    },
];
function ContentItem({ data }) {
    const [isActive, setIsActive] = useState(true);
    const handleActiveLike = () => {
        setIsActive(!isActive);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info_container')}>
                <div className={cx('div-info_container')}>
                    <div className={cx('img_avatar')}>
                        <Link to={`/@${data.nickname}`}>
                            <HeadlessTippy
                                interactive
                                delay={[700, 0]}
                                offset={[0, 5]}
                                placement="bottom-start"
                                render={(attrs) => (
                                    <div className="box" tabIndex="-1" {...attrs}>
                                        <PopperWrapper>
                                            <AccountPreview data={data} outline footer />
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <Image src={data.src} alt="Dương Quỳnh" className={cx('avatar')} />
                            </HeadlessTippy>
                        </Link>
                    </div>
                    <HeaderInfo data={data} className={cx('info_video')} />
                </div>
                <div className={cx('hashtag')}>
                    <HashtagInfo data={data} className={cx('hashtag_music')} />
                    <div className={cx('actions')}>
                        <div className={cx('action_flex')}>
                            <button className={cx('action-btn')}>
                                <span
                                    className={cx('icon')}
                                    style={{ color: isActive ? 'rgb(254, 44, 85)' : 'black' }}
                                    onClick={handleActiveLike}
                                >
                                    <FontAwesomeIcon icon={faHeart} />
                                </span>
                                <strong>{data.like}</strong>
                            </button>
                            <button className={cx('action-btn')}>
                                <span className={cx('icon')}>
                                    <FontAwesomeIcon icon={faCommentDots} />
                                </span>
                                <strong>{data.comment}</strong>
                            </button>
                        </div>
                        <div className={cx('share-group')}>
                            <Link to="/">
                                <Tippy content="Embed">
                                    <div className={cx('share-icon')}>
                                        <ShareEmbedIcon />
                                    </div>
                                </Tippy>
                            </Link>
                            <Link to="/">
                                <Tippy content="Send to friends">
                                    <div className={cx('share-icon')}>
                                        <ShareMessageIcon />
                                    </div>
                                </Tippy>
                            </Link>
                            <div>
                                <Tippy content="Share to Facebook">
                                    <a
                                        href="https://www.facebook.com/login.php?skip_api_login=1&api_key=113869198637480&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fapp_id%3D113869198637480%26display%3Dpopup%26sdk%3Djoey%26u%3Dhttps%253A%252F%252Fwww.tiktok.com%252F%2540amauryguichon%252Fvideo%252F7168498929485679918%253Fis_from_webapp%253D1%2526sender_device%253Dpc%2526web_id%253D7163896173466584577&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D113869198637480%26connect%3D0%23_%3D_&display=popup&locale=en_GB"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <div className={cx('share-icon')}>
                                            <ShareFacebookIcon />
                                        </div>
                                    </a>
                                </Tippy>
                            </div>
                            <div>
                                <Tippy interactive content="Share to WhatsApp">
                                    <a
                                        href="https://wa.me/?text=https%3A%2F%2Fwww.tiktok.com%2F%40amauryguichon%2Fvideo%2F7168498929485679918%3Fis_from_webapp%3D1%26sender_device%3Dpc%26web_id%3D7163896173466584577"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <div className={cx('share-icon')}>
                                            <SharePhoneIcon />
                                        </div>
                                    </a>
                                </Tippy>
                            </div>
                            <div>
                                <Tippy content="Twitter">
                                    <a
                                        href="https://twitter.com/intent/tweet?refer_source=https%3A%2F%2Fwww.tiktok.com%2F%40amauryguichon%2Fvideo%2F7168498929485679918%3Fis_from_webapp%3D1%26sender_device%3Dpc%26web_id%3D7163896173466584577&text=https%3A%2F%2Fwww.tiktok.com%2F%40amauryguichon%2Fvideo%2F7168498929485679918%3Fis_from_webapp%3D1%26sender_device%3Dpc%26web_id%3D7163896173466584577"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <div className={cx('share-icon')}>
                                            <ShareTwitterIcon />
                                        </div>
                                    </a>
                                </Tippy>
                            </div>
                            <div>
                                <HeadlessTippy
                                    interactive
                                    delay={[0, 300]}
                                    offset={[15, 0]}
                                    placement="bottom-start"
                                    render={(attrs) => (
                                        <div className="box" tabIndex="-1" {...attrs}>
                                            <PopperWrapper className={cx('share-info')}>
                                                {/* fix id */}
                                                {shareItems.map((item, index) => (
                                                    <Button
                                                        text
                                                        key={index}
                                                        Lefticon={item.icon}
                                                        className={cx('share-button')}
                                                    >
                                                        {item.title}
                                                    </Button>
                                                ))}
                                            </PopperWrapper>
                                        </div>
                                    )}
                                >
                                    <div className={cx('share-icon')}>
                                        <FontAwesomeIcon icon={faShare} />
                                    </div>
                                </HeadlessTippy>
                            </div>
                        </div>
                    </div>
                    <div className={cx('copy_link')}>
                        <p className={cx('test-link')}>
                            https://www.tiktok.com/@khaimobile92/video/7144583070614555930?is_from_webapp=1&sender_device=pc&web_id=7163896173466584577
                        </p>
                        <button className={cx('link-btn')}>Copy link</button>
                    </div>
                </div>
            </div>
            <div className={cx('comment-list_container')}>
                <CommentList />
                <CommentList />
                <CommentList />
            </div>
            <div className={cx('bottom-comment_container')}>
                <div className={cx('comment_container')}>
                    <div className={cx('layout_container')}>
                        <input type="text" placeholder="Add comment..." className={cx('input_text')} />
                    </div>
                    <div className={cx('post_btn')}>Post</div>
                </div>
            </div>
        </div>
    );
}

export default ContentItem;
