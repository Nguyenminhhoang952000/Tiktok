import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import className from 'classnames/bind';
import { useRef, useReducer } from 'react';
import Button from '~/components/Button';
import styles from './Search.module.scss';
import SearchUser from './SearchUser';
import VideoItem from './SearchUser/VideoItem';
import reducer, { initState } from '~/store/reducers/userReducers';
const cx = className.bind(styles);
function Search() {
    // const [state, dispatch] = useReducer(reducer, initState);
    // const { user, users } = state.searchData;
    // console.log(users);
    const nav1Ref = useRef();
    const nav2Ref = useRef();
    const nav3Ref = useRef();
    const lineRef = useRef();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('tab-container')}>
                <div className={cx('tab-list')}>
                    <div className={cx('nav-tab')}>
                        <div className={cx('nav-list')}>
                            <div
                                ref={nav1Ref}
                                className={cx('item-nav')}
                                onMouseMove={(e) => {
                                    lineRef.current.style.left = `${e.target.offsetLeft}px`;
                                    lineRef.current.style.width = `${e.target.offsetWidth}px`;
                                    e.target.style.color = 'rgba(22, 24, 35, 1)';
                                    nav2Ref.current.style.color = 'rgba(22, 24, 35, 0.5)';
                                    nav3Ref.current.style.color = 'rgba(22, 24, 35, 0.5)';
                                }}
                            >
                                Top
                            </div>
                            <div
                                ref={nav2Ref}
                                className={cx('item-nav')}
                                onMouseMove={(e) => {
                                    lineRef.current.style.left = `${e.target.offsetLeft}px`;
                                    lineRef.current.style.width = `${e.target.offsetWidth}px`;
                                    e.target.style.color = 'rgba(22, 24, 35, 1)';
                                    nav1Ref.current.style.color = 'rgba(22, 24, 35, 0.5)';
                                    nav3Ref.current.style.color = 'rgba(22, 24, 35, 0.5)';
                                }}
                            >
                                Accounts
                            </div>
                            <div
                                ref={nav3Ref}
                                className={cx('item-nav')}
                                onMouseMove={(e) => {
                                    lineRef.current.style.left = `${e.target.offsetLeft}px`;
                                    lineRef.current.style.width = `${e.target.offsetWidth}px`;
                                    e.target.style.color = 'rgba(22, 24, 35, 1)';
                                    nav2Ref.current.style.color = 'rgba(22, 24, 35, 0.5)';
                                    nav1Ref.current.style.color = 'rgba(22, 24, 35, 0.5)';
                                }}
                            >
                                Videos
                            </div>
                        </div>
                        <div ref={lineRef} className={cx('nav-line')}></div>
                    </div>
                </div>
            </div>
            <div className={cx('panel-container')}>
                <div className={cx('column-container')}>
                    <div className={cx('search-topitem')}>
                        <div className={cx('block-container')}>
                            <div className={cx('title-container')}>
                                <p className={cx('user-title')}>Accounts</p>
                                <p className={cx('user-seemore')}>
                                    <span>See more</span>
                                    <span>
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </span>
                                </p>
                            </div>
                            {/* User */}
                            <div className={cx('search-user')}>
                                <SearchUser />
                            </div>
                            <div className={cx('search-user')}>
                                <SearchUser />
                            </div>
                            {/* user */}
                            <div className={cx('div-block')}></div>
                        </div>
                        <div className={cx('block-container')}>
                            <div className={cx('title-video')}>
                                <p className={cx('text-video')}>Videos</p>
                            </div>
                        </div>
                        {/* Video */}
                        <div className={cx('item-video')}>
                            <VideoItem />
                        </div>
                        <div className={cx('item-video')}>
                            <VideoItem />
                        </div>
                        <div className={cx('item-video')}>
                            <VideoItem />
                        </div>
                    </div>
                </div>
                <div className={cx('more-container')}>
                    <Button className={cx('more-btn')} Righticon={<FontAwesomeIcon icon={faChevronDown} />}>
                        Load more
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Search;
