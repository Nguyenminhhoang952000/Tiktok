import classNames from 'classnames/bind';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import videos from '~/assets/videos';
import { PlayMusicIcon } from '~/components/Icons';
// import Image from '~/components/Image';
import styles from './LayoutMain.module.scss';
const cx = classNames.bind(styles);
function ListItem() {
    const videoRef = useRef();
    const handleHoverMusic = () => {
        videoRef.current.play();
    };
    return (
        <div className={cx('item')} onMouseEnter={handleHoverMusic}>
            <div className={cx('user-post')}>
                <div className={cx('style-container')}>
                    <div className={cx('wrapper-user')}>
                        <Link to="/@noteHoang/video">
                            {/* End music block image */}

                            {/* <Image
                                className={cx('img-post')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/e549099e59ac487f8c0e5be202d85888_1670049538~tplv-f5insbecw7-1:480:480.jpeg?x-expires=1670086800&x-signature=pwwf1F9GF3rh6h%2BC8trf8EmjsjE%3D"
                                alt="hotgirl"
                            /> */}
                            <video
                                onPlay={(e) => {
                                    e.target.volume = 0;
                                }}
                                ref={videoRef}
                                className={cx('video-user')}
                                src={videos.video}
                            ></video>
                            <div className={cx('card-footer')}>
                                <PlayMusicIcon className={cx('icon-play')} />
                                <strong>8686</strong>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={cx('desc-post')}>
                <Link to="/@noteHoang/video">
                    <div className={cx('tag-card')}>
                        <span>Hi!I'm hotgirl</span>
                        <span>#Hotpick</span>
                        <span>#Cat</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default ListItem;
