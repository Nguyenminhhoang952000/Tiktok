import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {
    faPlus,
    faCircleQuestion,
    faKeyboard,
    faEarthAsia,
    faUser,
    faGear,
    faMoon,
    faArrowRightToBracket,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import config from '~/config';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessagesIcon, MorebtnIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
const cx = classNames.bind(styles);
const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        childrens: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
function Header({ className }) {
    const currentTippy = true;
    const useMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoang',
        },
        {
            icon: <FontAwesomeIcon icon={faTiktok} />,
            title: 'Get Coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faVideo} />,
            title: 'LIVE Studio',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEM,
        {
            icon: <FontAwesomeIcon icon={faMoon} />,
            title: 'Dark mode',
        },
        {
            icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    const handerItem = (item) => {
        switch (item.type) {
            case 'language':
                console.log(item);
                break;
            default:
                console.log('entity');
        }
    };
    return (
        <header className={cx('wrapper', { [className]: className })}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo.default} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    <Button text Lefticon={<FontAwesomeIcon icon={faPlus} />}>
                        Update
                    </Button>
                    {currentTippy ? (
                        <>
                            <Tippy content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessagesIcon className={cx('iconMessages')} />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <Button primary className={cx('custom-login')}>
                            Login
                        </Button>
                    )}

                    <Menu items={currentTippy ? useMenu : MENU_ITEM} onChange={handerItem}>
                        {currentTippy ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9b32963aa1e688a1ba8ff21738970dca~c5_100x100.jpeg?x-expires=1668272400&x-signature=AbB889swVotSjFZYzBRYg0Gt0bc%3D"
                                alt="Nguyen Minh Hoang"
                                className={cx('user-avatar')}
                                fallback="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1668456000&x-signature=KBCL39xOTguWQW2hjKnONWgkRAc%3D"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <MorebtnIcon width="2rem" height="2rem" />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
