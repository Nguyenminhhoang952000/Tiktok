import styles from './ContentItem.module.scss';
import classNames from 'classnames/bind';
import CommentContent from '../CommentContent';
const cx = classNames.bind(styles);
function CommentList() {
    return (
        <>
            <div className={cx('comment_item-container')}>
                <div>
                    <CommentContent />
                </div>
                <div className={cx('comment_Reply-container')}>
                    <CommentContent />
                </div>
            </div>
        </>
    );
}

export default CommentList;
