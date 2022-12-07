import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    primary = false,
    text = false,
    small = false,
    large = false,
    disable = false,
    rounded = false,
    outline = false,
    Lefticon,
    Righticon,
    className,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        disable,
        small,
        rounded,
        outline,
        text,
        large,
    });
    return (
        <Comp className={classes} {...props}>
            {Lefticon && <span className={cx('icon')}>{Lefticon}</span>}
            <span>{children}</span>
            {Righticon && <span className={cx('icon')}>{Righticon}</span>}
        </Comp>
    );
}
Button.prototype = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    text: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    disable: PropTypes.bool,
    rounded: PropTypes.bool,
    outline: PropTypes.bool,
    Lefticon: PropTypes.node,
    Righticon: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};
export default Button;
