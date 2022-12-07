import styles from './Video.module.scss';
import classNames from 'classnames/bind';
import ContentItem from './ContentItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { faClose, faPlay, faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import config from '~/config';
import { ArrowLeftIcon, ArrowRightIcon, LogoIconCircle } from '~/components/Icons';
import videos from '~/assets/videos';
const cx = classNames.bind(styles);
const data = [
    {
        id: 1,
        nickname: 'noteHoang',
        name: 'Nguyen Minh Hoang',
        src: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/73a64a04a844f3729d5e5c2afbd9b34b~c5_100x100.jpeg?x-expires=1669741200&x-signature=0z82nlqZfl%2BD%2FlHZJ5xl4X8KCPU%3D',
        srcvideo: videos.video,
        like: '32.4k',
        comment: 100,
        share: 100,
        notedescribe: 'Xinh gái - ngoan ngoãn hiền lành và chung thủy',
    },
];
function Video() {
    const seekbarRef = useRef();
    const seekbarVolume = useRef();
    const inputRefVideo = useRef();
    const inputVolume = useRef();
    const [isPlay, setIsPlay] = useState(true);
    const [isVolume, setIsVolume] = useState(true);
    const [valueRange, setValueRange] = useState(0);
    const [currentNumber, setCurrentNumber] = useState({
        timemm: '00',
        timess: '00',
        allTimemm: '00',
        allTimess: '00',
    });
    const [volume, setVolume] = useState(1);

    const handleTimeUpdate = (e) => {
        const videoDuration = e.target.duration;
        const videoCurrent = e.target.currentTime;
        const videoScale = videoCurrent / videoDuration;
        seekbarRef.current.style = `transform:scaleX(${videoScale}) translateY(-50%)`;
        seekbarVolume.current.style = `transform:scaleX(${e.target.volume}) translateY(-50%)`;
        // Fix sau ( bug volume)
        if (e.target.volume === 0 && isVolume) {
            e.target.volume = 0.5;
        }
        e.target.volume = isVolume ? e.target.volume : 0;
        setVolume(e.target.volume);
        setCurrentNumber((prev) => ({
            ...prev,
            timemm: `0${Math.floor(videoCurrent / 60)}`,
            timess: `0${Math.floor(videoCurrent) % 60}`,
            allTimemm: `0${Math.floor(videoDuration / 60)}`,
            allTimess: `0${Math.floor(videoDuration) % 60}`,
        }));
        setValueRange(Math.floor(videoScale * 100));
    };
    const handleChangeInput = (e) => {
        const durationVideo = inputRefVideo.current.duration;
        inputRefVideo.current.currentTime = (e.target.value * durationVideo) / 100;
    };
    const handleVolume = (e) => {
        e.target.value === 0 && setIsVolume(false);
        e.target.value = isVolume ? e.target.value : 0;
        inputRefVideo.current.volume = e.target.value;
        seekbarVolume.current.style = `transform:scaleX(${e.target.value}) translateY(-50%)`;
        setVolume(isVolume ? e.target.value : 0);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('video-container')}>
                <div className={cx('blur-background')} style={{ backgroundImage: `url(${data[0].src})` }}></div>
                <div className={cx('video-wrapper')}>
                    <div className={cx('video')}>
                        <video
                            ref={inputRefVideo}
                            onClick={(e) => {
                                isPlay ? inputRefVideo.current.play() : inputRefVideo.current.pause();
                                setIsPlay(!isPlay);
                            }}
                            onEnded={(e) => {
                                e.target.play();
                            }}
                            onPlay={() => setIsPlay(false)}
                            onPause={(e) => setIsPlay(true)}
                            onTimeUpdate={handleTimeUpdate}
                            className={cx('video-poster')}
                            src={data[0].srcvideo}
                        ></video>
                        <div className={cx('seekbar-control')}>
                            <div className={cx('inputLine')}>
                                <input
                                    type="range"
                                    step="1"
                                    min="0"
                                    max="100"
                                    value={valueRange}
                                    className={cx('progress')}
                                    onInput={handleChangeInput}
                                />
                                <div ref={seekbarRef} className={cx('seekbar')}></div>
                            </div>
                            <div className={cx('time')}>{`${currentNumber.timemm.slice(
                                -2,
                            )}:${currentNumber.timess.slice(-2)}/${currentNumber.allTimemm.slice(
                                -2,
                            )}:${currentNumber.allTimess.slice(-2)}`}</div>
                        </div>
                        {isPlay && (
                            <div className={cx('video-play')}>
                                <FontAwesomeIcon
                                    icon={faPlay}
                                    onClick={() => {
                                        setIsPlay(false);
                                        inputRefVideo.current.play();
                                    }}
                                />
                            </div>
                        )}
                        <div className={cx('voice-control')} ref={inputVolume}>
                            <Tippy
                                interactive
                                offset={[10, 5]}
                                placement="top-start"
                                render={(attrs) => (
                                    <div className={cx('volume-control')}>
                                        <input
                                            type="range"
                                            value={volume}
                                            step="0.005"
                                            min="0"
                                            max="1"
                                            className={cx('volume-input')}
                                            onInput={handleVolume}
                                        />
                                        <div ref={seekbarVolume} className={cx('seek-volume')}></div>
                                    </div>
                                )}
                            >
                                {isVolume ? (
                                    <div className={cx('video-sound')}>
                                        <FontAwesomeIcon
                                            icon={faVolumeHigh}
                                            onClick={() => {
                                                setIsVolume(false);
                                                setVolume(0);
                                                seekbarVolume.current.style = `transform:scaleX(0) translateY(-50%)`;
                                            }}
                                        />
                                    </div>
                                ) : (
                                    <div className={cx('video-sound', { visible: true })}>
                                        <FontAwesomeIcon
                                            icon={faVolumeXmark}
                                            onClick={() => {
                                                setIsVolume(true);
                                                seekbarVolume.current.style = `transform:scaleX(${inputRefVideo.current.volume}) translateY(-50%)`;
                                                setVolume(inputRefVideo.current.volume);
                                            }}
                                        />
                                    </div>
                                )}
                            </Tippy>
                        </div>
                    </div>
                </div>
                <Link to={config.routes.home}>
                    <button className={cx('close')}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </Link>
                <LogoIconCircle className={cx('logo')} />
                <div className={cx('report')}>
                    <span className={cx('report-icon')}>
                        <FontAwesomeIcon icon={faFlag} />
                    </span>
                    Report
                </div>
                <div className={cx('arrow-left')}>
                    <ArrowLeftIcon />
                </div>
                <div className={cx('arrow-right')}>
                    <ArrowRightIcon />
                </div>
            </div>

            <div className={cx('content-container')}>
                <ContentItem data={data[0]} />
            </div>
        </div>
    );
}

export default Video;
