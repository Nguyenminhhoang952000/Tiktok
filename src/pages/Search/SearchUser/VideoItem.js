import className from 'classnames/bind';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import videos from '~/assets/videos';
import { PlayMusicIcon } from '~/components/Icons';
import Image from '~/components/Image';
import styles from './SearchUser.module.scss';
const cx = className.bind(styles);
function VideoItem() {
    const videoRef = useRef();
    const handleHoverMusic = () => {
        videoRef.current.play();
        videoRef.current.volume = 0;
    };
    return (
        <div className={cx('item')}>
            <div className={cx('container')} onMouseEnter={handleHoverMusic}>
                <div className={cx('padding-top')}>
                    <div className={cx('video-wrapper')}>
                        <video
                            onPlay={(e) => {
                                e.target.volume = 0;
                            }}
                            ref={videoRef}
                            className={cx('video')}
                            src={videos.video}
                        ></video>
                        <div className={cx('card-footer')}>
                            <div className={cx('time-tag')}>5-12</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('card-desc')}>
                <div className={cx('card-info')}>
                    <div className={cx('card-video-caption')}></div>
                    <div className={cx('play-line')}>
                        <Link to="/@noteHoang">
                            <div className={cx('user-info')}>
                                <Image
                                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1654498222148609.jpeg?x-expires=1670295600&x-signature=Iv1r7KfsOVeAtjdMxhZfSgi%2BcjA%3D"
                                    className={cx('image-card')}
                                    alt="text"
                                />
                                <p>Nopain</p>
                            </div>
                        </Link>
                        <div className={cx('card-like')}>
                            <span className={cx('icon-play')}>
                                <PlayMusicIcon />
                            </span>
                            <strong>1.4M</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
