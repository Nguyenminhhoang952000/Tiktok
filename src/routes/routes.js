import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Update from '~/pages/Update';
import Live from '~/pages/Live';
import HeaderOnly from '~/layouts/HeaderOnly';
import config from '~/config';
import Video from '~/pages/Video';
import ProfileLayout from '~/layouts/ProfileLayout';
import SearchLayout from '~/layouts/SearchLayout';
import Search from '~/pages/Search/Search';

// Các route mà không cần đăng nhập mà vẫn xem được
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile, layout: ProfileLayout },
    { path: config.routes.video, component: Video, layout: null },
    { path: config.routes.search, component: Search, layout: SearchLayout },
    { path: config.routes.update, component: Update, layout: HeaderOnly },
];
// Các route bắt buộc phải đăng nhập mới có thể xem được
const privateRoutes = [];
export { publicRoutes, privateRoutes };
