import { faPause, faPlay, faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Action from './Action';
import styles from './VideoItem.module.scss';
const cx = classNames.bind(styles);
function VideoItem({ data }) {
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
        console.log(e.target.volume);
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
            <div className={cx('video')}>
                <Link to={`/@${data.nickname}/video`} className={cx('video_item')}>
                    <video
                        ref={inputRefVideo}
                        onEnded={(e) => {
                            e.target.play();
                        }}
                        onPlay={() => setIsPlay(false)}
                        onPause={(e) => setIsPlay(true)}
                        onTimeUpdate={handleTimeUpdate}
                        className={cx('video-poster')}
                        src={data.srcvideo}
                    ></video>
                </Link>
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
                    <div className={cx('time')}>{`${currentNumber.timemm.slice(-2)}:${currentNumber.timess.slice(
                        -2,
                    )}/${currentNumber.allTimemm.slice(-2)}:${currentNumber.allTimess.slice(-2)}`}</div>
                </div>
                {isPlay ? (
                    <div className={cx('video-play')}>
                        <FontAwesomeIcon
                            icon={faPlay}
                            onClick={() => {
                                setIsPlay(false);
                                inputRefVideo.current.play();
                            }}
                        />
                    </div>
                ) : (
                    <div className={cx('video-play')}>
                        <FontAwesomeIcon
                            icon={faPause}
                            onClick={() => {
                                setIsPlay(true);
                                inputRefVideo.current.pause();
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
            <Action data={data} />
        </div>
    );
}

export default VideoItem;
