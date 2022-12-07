import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import videos from '~/assets/videos';
import AccountPreview from '~/components/AccountPreview';
import { LoveOutlineIcon, MorebtnIcon } from '~/components/Icons';
import Image from '~/components/Image';
import { Wrapper } from '~/components/Popper';
import styles from './CommentContent.module.scss';

const cx = classNames.bind(styles);
const data = [
    {
        id: 1,
        nickname: 'noteHoang',
        name: 'Nguyen Minh Hoang',
        src: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/73a64a04a844f3729d5e5c2afbd9b34b~c5_100x100.jpeg?x-expires=1669741200&x-signature=0z82nlqZfl%2BD%2FlHZJ5xl4X8KCPU%3D',
        srcvideo: videos.video,
        like: '1234',
        comment: 100,
        share: 100,
        notedescribe: 'Xinh gái - ngoan ngoãn hiền lành và chung thủy',
    },
];
function CommentContent() {
    const [isActive, setIsActive] = useState(false);
    const handleActiveLike = () => {
        setIsActive(!isActive);
    };
    return (
        <div className={cx('wrapper')}>
            <Tippy
                interactive
                delay={[700, 0]}
                offset={[0, 5]}
                placement="bottom-start"
                render={(attrs) => (
                    <div className="box" tabIndex="-1" {...attrs}>
                        <Wrapper className={cx('tippy_avatar')}>
                            <AccountPreview data={data[0]} outline />
                        </Wrapper>
                    </div>
                )}
            >
                <Link to={`/@${data[0].nickname}`}>
                    <Image
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/ebe5760afd33705e547304f03b3a3111.jpeg?x-expires=1670126400&x-signature=uKKiZsvAFmf0GekoXfwDUXo%2B7gs%3D"
                        alt="image"
                        className={cx('user_avatar')}
                    />
                </Link>
            </Tippy>
            <div className={cx('content_container')}>
                <Link to={`/@${data[0].nickname}`}>
                    <Tippy
                        interactive
                        delay={[700, 0]}
                        offset={[-50, 20]}
                        placement="bottom-start"
                        render={(attrs) => (
                            <div className="box" tabIndex="-1" {...attrs}>
                                <Wrapper className={cx('tippy_avatar')}>
                                    <AccountPreview data={data[0]} outline />
                                </Wrapper>
                            </div>
                        )}
                    >
                        <span className={cx('user_text')}>{data[0].nickname}</span>
                    </Tippy>
                </Link>
                <p className={cx('comment_text')}>
                    <span>Thật sự quá bất ngờ</span>
                </p>
                <p className={cx('sub_content')}>
                    <span>2-12</span>
                    <span>Reply</span>
                </p>
            </div>
            <div className={cx('action_container')}>
                <Tippy
                    interactive
                    delay={[100, 100]}
                    placement="bottom-start"
                    render={(attrs) => (
                        <Wrapper className={cx('action_flag')}>
                            <FontAwesomeIcon icon={faFlag} />
                            <span>Report</span>
                        </Wrapper>
                    )}
                >
                    <div className={cx('action_icon')}>
                        <MorebtnIcon />
                    </div>
                </Tippy>
                <div className={cx('action_like')}>
                    <span
                        style={{ color: isActive ? 'rgb(254, 44, 85)' : 'rgba(22, 24, 35, 0.5)' }}
                        onClick={handleActiveLike}
                    >
                        <LoveOutlineIcon className={cx('like-icon')} />
                    </span>
                    <span>2022</span>
                </div>
            </div>
        </div>
    );
}

export default CommentContent;
