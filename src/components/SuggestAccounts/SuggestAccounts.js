import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';
import AccountItem from './AccountItem';
import { useState } from 'react';
const cx = classNames.bind(styles);
const accountItems = [
    {
        id: 1,
        nickname: 'noteHoang',
        name: 'Nguyen Minh Hoang',
        src: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/624ce65b075b8242f86d4424bfbe4925~c5_100x100.jpeg?x-expires=1669489200&x-signature=VdQfrLVe0UG6b85pR8%2FbnfUFmIc%3D',
    },
    {
        id: 2,
        nickname: 'Lu$',
        name: 'Nguyen Hoang Lu',
        src: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/60d0cf18328d67ff762f9e2385532ad9.jpeg?x-expires=1669460400&x-signature=JlzO%2BPvZmbzFADD1j22EzBNiwy4%3D',
    },
    {
        id: 3,
        nickname: 'samNote',
        name: 'Quynh Sin',
        src: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1660881222252545.jpeg?x-expires=1669460400&x-signature=J2v3aHydqlo1OoBNkEl3TkJxiCA%3D',
    },
    {
        id: 4,
        nickname: 'Duwork',
        name: 'Nguyen Thai Du',
        src: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c3125730d48cbafe2a580c8fee979a54~c5_100x100.jpeg?x-expires=1669460400&x-signature=QfA8C2tpBH6Vec8bCfWqBNkPdpI%3D',
    },
    {
        id: 5,
        nickname: 'shopeHoan',
        name: 'Dong Xuan Hoan',
        src: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1655364588561410.jpeg?x-expires=1669460400&x-signature=n9SuEMMCoCD238gsI9tyEq7RaFo%3D',
    },
    {
        id: 6,
        nickname: 'Hoannghien',
        name: 'Do Minh Hieu',
        src: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/dc5f3ff1e5c9724673986e9a5b5b75a6~c5_100x100.jpeg?x-expires=1669460400&x-signature=HuV1bzBfg5WBuzk43k4Mw8wQIn0%3D',
    },
    {
        id: 7,
        nickname: 'Kim<3',
        name: 'Tran Anh Kim',
        src: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/479c7d2fe49ff418c2344cef42ac5351.jpeg?x-expires=1669460400&x-signature=fuxdWkXFUC5LFcv2FRNHwmTHoS4%3D',
    },
    {
        id: 8,
        nickname: 'Huyencake',
        name: 'Nguyen Thi Huyen',
        src: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/22f520e796dab9489859ed8cfdb54b7b~c5_100x100.jpeg?x-expires=1669460400&x-signature=ZB45A50HN%2FZhAL0JufZX3rDVjwA%3D',
    },
    {
        id: 9,
        nickname: 'Dyutn',
        name: 'Nguyen Hoang Duy',
        src: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/07ff4f0ed68c95cfef5918034fcf5466~c5_100x100.jpeg?x-expires=1669489200&x-signature=BUl31U6w8KyM%2B6ejDFwr34ZouVo%3D',
    },
    {
        id: 10,
        nickname: 'Tungngau',
        name: 'Nguyen Thanh Tung',
        src: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d14b0c92e3cb529d334bbf82083a8770~c5_100x100.jpeg?x-expires=1669489200&x-signature=ZC89n7zQCiyCzUXtDXdQYXhpKtg%3D',
    },
    {
        id: 11,
        nickname: 'Girlpho',
        name: 'Nguyen Tuyet May',
        src: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7dfdc814f4281f0e3ea0600d2e9a3ec6.jpeg?x-expires=1669489200&x-signature=yAbLMCFgCz5FU7OSrbUg97dZlXw%3D',
    },
];
function SuggestAccounts({ label, numberItem, footer }) {
    const [show, setShow] = useState(true);
    const handleShowItem = () => {
        setShow((prev) => !prev);
    };
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {accountItems.slice(0, numberItem).map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}
            {accountItems.slice(numberItem, accountItems.length).map((account) => (
                <AccountItem key={account.id} data={account} className={!show ? '' : 'active'} />
            ))}

            {show ? (
                <p className={cx('see-btn')} onClick={handleShowItem}>
                    {footer}
                </p>
            ) : (
                <p className={cx('see-btn')} onClick={handleShowItem}>
                    See less
                </p>
            )}
        </div>
    );
}
SuggestAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SuggestAccounts;
