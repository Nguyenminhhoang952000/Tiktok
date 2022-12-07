import config from '~/config';
import classNames from 'classnames/bind';
import {
    HomeIcon,
    HomeActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    PeopleFollowingIcon,
    PeopleFollowingActiveIcon,
} from '~/components/Icons';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import SuggestAccounts from '~/components/SuggestAccounts';
import HashtagItem from '~/layouts/components/Sidebar/HashtagItem';
import Footer from './Footer';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Sidebar({ className }) {
    const [scrollBar, setScrollBar] = useState(0);

    const handleScroll = (e) => {
        if (e.target.scrollTop > 0) {
            setScrollBar(e.target.scrollTop);
        }
    };
    return (
        <aside className={cx('wrapper', { [className]: className })}>
            <div className={cx('sidebar_fixed')} onScroll={handleScroll}>
                <Menu>
                    <MenuItem
                        title="For You"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    />
                    <MenuItem
                        title="Following"
                        to={config.routes.following}
                        icon={<PeopleFollowingIcon />}
                        activeIcon={<PeopleFollowingActiveIcon />}
                    />
                    <MenuItem
                        title="LIVE"
                        to={config.routes.live}
                        icon={<LiveIcon />}
                        activeIcon={<LiveActiveIcon />}
                    />
                </Menu>
                <SuggestAccounts label="Suggested accounts" footer="See all" numberItem={5} />
                <SuggestAccounts label="Following accounts" numberItem={10} footer="See more" />
                <HashtagItem label="Discover" />
                <Footer />
            </div>
            <div className={cx('scrollbar')} style={{ top: `${scrollBar / 1.5}px` }}>
                <div className={cx('thumb')}></div>
            </div>
        </aside>
    );
}

export default Sidebar;
