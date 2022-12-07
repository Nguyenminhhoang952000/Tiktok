import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountPreview from '~/components/AccountPreview';
import Button from '~/components/Button';
import { Wrapper } from '~/components/Popper';
import styles from './HeaderInfo.module.scss';
const cx = classNames.bind(styles);
function HeaderInfo({ data, offsetx = -52, offsety = 0, isfollow = true, className }) {
    const [isFollow, setIsFollowing] = useState(true);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title', { [className]: className })}>
                <div>
                    <Tippy
                        interactive
                        delay={[700, 0]}
                        offset={[offsetx, offsety]}
                        placement="bottom-start"
                        render={(attrs) => (
                            <div className="box" tabIndex="-1" {...attrs}>
                                <Wrapper>
                                    <AccountPreview data={data} outline footer />
                                </Wrapper>
                            </div>
                        )}
                    >
                        <Link to={`/@${data.nickname}`} className={cx('text')}>
                            <div className={cx('author')}>
                                <h3 className={cx('nickname')}>{data.nickname}</h3>
                                <span className={cx('icon')}>
                                    <FontAwesomeIcon icon={faCheckCircle} />
                                </span>
                            </div>
                            <h4 className={cx('name')}>{data.name}</h4>
                        </Link>
                    </Tippy>
                </div>
                {isfollow &&
                    (isFollow ? (
                        <Button className={cx('outline-btn')} outline onClick={() => setIsFollowing(false)}>
                            Follow
                        </Button>
                    ) : (
                        <Button className={cx('outline-btn')} text onClick={() => setIsFollowing(true)}>
                            Following
                        </Button>
                    ))}
            </div>
        </div>
    );
}

export default HeaderInfo;
