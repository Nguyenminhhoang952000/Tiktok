import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Footer.module.scss';
const cx = classNames.bind(styles);
const footerItems = [
    {
        title: 'About',
        href: 'https://www.tiktok.com/about?lang=en',
    },
    {
        title: 'Newsroom',
        href: 'https://newsroom.tiktok.com/en-us/',
    },
    {
        title: 'Contact',
        href: 'https://www.tiktok.com/about/contact?lang=en',
    },
    {
        title: 'Careers',
        to: 'https://careers.tiktok.com/',
    },
    {
        title: 'ByteDance',
        href: 'https://www.bytedance.com/',
    },
    {
        title: 'Tiktok for Good',
        to: '/following',
    },
    {
        title: 'Advertlse',
        to: '/following',
    },
    {
        title: 'Developers',
        to: '/following',
    },
    {
        title: 'Transparency',
        to: '/following',
    },
    {
        title: 'TikTok Rewards',
        to: '/following',
    },
    {
        title: 'Tiktok Browse',
        to: '/following',
    },
    {
        title: 'Tiktok Embeds',
        to: '/following',
    },
    {
        title: 'Help',
        to: '/following',
    },
    {
        title: 'Safety',
        to: '/following',
    },
    {
        title: 'Terms',
        to: '/following',
    },
    {
        title: 'Privacy',
        to: '/following',
    },
    {
        title: 'Ceator Portal',
        to: '/following',
    },
    {
        title: 'Communlty Guldellnes',
        to: '/following',
    },
];
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {footerItems.slice(0, 5).map((footerItem) => (
                    <Button
                        key={footerItem.title}
                        className={cx('footer-btn')}
                        target="_blank"
                        href={footerItem.href}
                        to={footerItem.to}
                    >
                        {footerItem.title}
                    </Button>
                ))}
            </div>
            <div className={cx('container')}>
                {footerItems.slice(5, 12).map((footerItem) => (
                    <Button
                        key={footerItem.title}
                        className={cx('footer-btn')}
                        target="_blank"
                        href={footerItem.href}
                        to={footerItem.to}
                    >
                        {footerItem.title}
                    </Button>
                ))}
            </div>
            <div className={cx('container')}>
                {footerItems.slice(12, footerItems.length).map((footerItem) => (
                    <Button
                        key={footerItem.title}
                        className={cx('footer-btn')}
                        target="_blank"
                        href={footerItem.href}
                        to={footerItem.to}
                    >
                        {footerItem.title}
                    </Button>
                ))}
            </div>
            <span className={cx('span_copyright')}>© 2022 TikTok</span>
        </div>
    );
}

export default Footer;
