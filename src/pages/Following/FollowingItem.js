import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import videos from '~/assets/videos';
import AccountPreview from '~/components/AccountPreview';
import Image from '~/components/Image';
import HashtagInfo from '~/components/Info/HashtagInfo';
import HeaderInfo from '~/components/Info/HeaderInfo/HeaderInfo';
import { Wrapper } from '~/components/Popper';
import styles from './Following.module.scss';
import VideoItem from './VideoItem';
const cx = classNames.bind(styles);
const data = [
    {
        id: 1,
        nickname: 'bts_official_bighit',
        name: 'BTS',
        src: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/128514347b4c1a4e6a54a745d292d543.jpeg?x-expires=1670349600&x-signature=sOFEVLLOWH65VADzQE5%2FuEKq6LA%3D',
        srcvideo: videos.video,
        like: '1234',
        comment: 123,
        share: 111,
        notedescribe: 'Xinh gái - ngoan ngoãn hiền lành và chung thủy',
    },
];
function FollowingItem() {
    const isFollow = false;
    return (
        <div className={cx('items')}>
            <div className={cx('item')}>
                <div className={cx('img_avatar')}>
                    <Link to={`/@${data[0].nickname}`}>
                        <Tippy
                            interactive
                            delay={[700, 0]}
                            offset={[0, 5]}
                            placement="bottom-start"
                            render={(attrs) => (
                                <div className="box" tabIndex="-1" {...attrs}>
                                    <Wrapper>
                                        <AccountPreview data={data[0]} outline footer />
                                    </Wrapper>
                                </div>
                            )}
                        >
                            <Image src={data[0].src} alt={data[0].name} className={cx('avatar')} />
                        </Tippy>
                    </Link>
                </div>
                <div className={cx('container')}>
                    <div className={cx('text_info')}>
                        <HeaderInfo data={data[0]} offsetx={-130} offsety={32} isfollow={isFollow} />
                        <HashtagInfo />
                    </div>
                    <VideoItem data={data[0]} />
                </div>
            </div>
        </div>
    );
}

export default FollowingItem;
