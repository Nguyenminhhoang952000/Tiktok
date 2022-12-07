import PropTypes from 'prop-types';
import className from 'classnames/bind';
import styles from './SearchLayout.module.scss';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';

const cx = className.bind(styles);
function SearchLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
SearchLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default SearchLayout;
