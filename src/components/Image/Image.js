import { forwardRef, useState } from 'react';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function Image({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) {
    const [fallback, setFallback] = useState('');
    const handleError = () => setFallback(customFallback);
    return (
        <img
            src={fallback || src}
            alt={alt}
            className={cx('wrapper', className)}
            ref={ref}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
