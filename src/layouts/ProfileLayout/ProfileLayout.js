import PropTypes from 'prop-types';
import className from 'classnames/bind';
import styles from './ProfileLayout.module.scss';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';

const cx = className.bind(styles);
function Profile({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header className={cx('header_profile')} />
            <div className={cx('container')}>
                <Sidebar className={cx('profile_container')} />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
Profile.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Profile;
