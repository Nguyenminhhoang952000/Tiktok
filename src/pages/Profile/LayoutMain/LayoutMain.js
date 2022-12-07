import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import styles from './LayoutMain.module.scss';
import ListItem from './ListItem';
const cx = classNames.bind(styles);
function LayoutMain() {
    const lineRef = useRef();
    const postRef = useRef();
    const likeRef = useRef();
    const [isLine, setIsLine] = useState(false);
    useEffect(() => {
        if (isLine) {
            lineRef.current.style = 'transform:translateX(230px)';
            postRef.current.style = 'color: rgba(22, 24, 35, 0.5);';
            likeRef.current.style = 'color: rgba(22, 24, 35, 1);';
        } else {
            lineRef.current.style = 'transform:translateX(0)';
            postRef.current.style = 'color: rgba(22, 24, 35, 1);';
            likeRef.current.style = 'color: rgba(22, 24, 35, 0.5);';
        }
    }, [isLine]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('video-feedtab')}>
                <p ref={postRef} className={cx('post-video')} onClick={(e) => setIsLine(false)}>
                    <span>Videos</span>
                </p>
                <p ref={likeRef} className={cx('like-video')} onClick={(e) => setIsLine(true)}>
                    <span>
                        <FontAwesomeIcon icon={faUnlockKeyhole} />
                    </span>
                    <span>Liked</span>
                </p>
                <div ref={lineRef} className={cx('bottom-line')}></div>
            </div>
            <div className={cx('column-container')}>
                <div className={cx('column-items')}>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
            </div>
        </div>
    );
}

export default LayoutMain;
