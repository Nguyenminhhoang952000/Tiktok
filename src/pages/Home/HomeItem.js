import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import videos from '~/assets/videos';
import AccountPreview from '~/components/AccountPreview';
import Image from '~/components/Image';
import HashtagInfo from '~/components/Info/HashtagInfo';
import HeaderInfo from '~/components/Info/HeaderInfo/HeaderInfo';
import { Wrapper } from '~/components/Popper';
import styles from './Home.module.scss';
import VideoItem from './VideoItem';
const cx = classNames.bind(styles);
const data = [
    {
        id: 1,
        nickname: 'noteHoang',
        name: 'Nguyen Minh Hoang',
        src: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/73a64a04a844f3729d5e5c2afbd9b34b~c5_100x100.jpeg?x-expires=1669741200&x-signature=0z82nlqZfl%2BD%2FlHZJ5xl4X8KCPU%3D',
        srcvideo: videos.video,
        like: '1234',
        comment: 100,
        share: 100,
        notedescribe: 'Xinh gái - ngoan ngoãn hiền lành và chung thủy',
    },
];
function HomeItem() {
    return (
        <div className={cx('items')}>
            <div className={cx('item')}>
                <div className={cx('img_avatar')}>
                    <Link to="/@Quynh">
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
                            <Image src={data[0].src} alt="Dương Quỳnh" className={cx('avatar')} />
                        </Tippy>
                    </Link>
                </div>
                <div className={cx('container')}>
                    <div className={cx('text_info')}>
                        <HeaderInfo data={data[0]} offsetx={-130} offsety={32} />
                        <HashtagInfo />
                    </div>
                    <VideoItem data={data[0]} />
                </div>
            </div>
        </div>
    );
}

export default HomeItem;
