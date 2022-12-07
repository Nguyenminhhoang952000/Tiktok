import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import FollowingItem from './FollowingItem';
const cx = classNames.bind(styles);
function Following() {
    return (
        <div className={cx('wrapper')}>
            <FollowingItem />
            <FollowingItem />
        </div>
    );
}

export default Following;
