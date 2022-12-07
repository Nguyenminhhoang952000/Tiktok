import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Menu({ children, items = [], onChange }) {
    const [history, setHistory] = useState([{ data: items }]);
    const currentItem = history[history.length - 1];
    const renderItems = () => {
        return currentItem.data.map((item, index) => {
            const isParent = !!item.childrens;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            //Next pageMenu when the click language
                            setHistory((prev) => [...prev, item.childrens]);
                        } else {
                            onChange(item);
                        }
                    }}
                ></MenuItem>
            );
        });
    };
    // Reset menu onHide
    const handleResetToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };
    return (
        <Tippy
            hideOnClick={false}
            interactive
            // visible
            offset={[12, 10]}
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title={currentItem.title} onBack={handleBack} />}
                        <div className={cx('menu-scrollbar')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    );
}
Menu.propType = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
};
export default Menu;
