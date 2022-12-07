import { useEffect, useReducer, useRef, useState } from 'react';
import HeaderTippy from '@tippyjs/react/headless';

import * as searchService from '~/services/searchService';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { ClearIcon, LoaddingIcon, SearchIcon } from '~/components/Icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import { Link } from 'react-router-dom';
import reducer, { initState } from '~/store/reducers/userReducers';
import { setUser, getUser } from '~/store/actions/userSearch';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);
function Search() {
    const [link, setLink] = useState({ Comp: 'button', CompInput: 'div', props: {} });
    // const [searchValue, setSearchValue] = useState('');
    // const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loadding, setLoadding] = useState(false);
    const [stateUser, dispatch] = useReducer(reducer, initState);
    const { user, users } = stateUser.searchData;
    const debouncedValue = useDebounce(user, 500);
    const inputRef = useRef();
    useEffect(() => {
        if (!debouncedValue.trim()) {
            setLink((prev) => ({ ...prev, Comp: 'button', props: {} }));
            dispatch(getUser([]));
            return;
        }

        const fetchApi = async () => {
            setLoadding(true);
            const response = await searchService.Search(debouncedValue);
            dispatch(getUser(response));
            // setSearchResult(response);
            setLoadding(false);
            setLink((prev) => ({ ...prev, Comp: Link, props: { to: '/search', data: response } }));
        };
        fetchApi();
    }, [debouncedValue]);
    const handleOutSide = () => {
        setShowResult(false);
    };
    const handleCallAPI = () => {
        return users.map((result) => <AccountItem key={result.id} data={result} />);
    };
    const navigate = useNavigate();
    const handleEnterInput = async (e) => {
        if (e.keyCode === 13) {
            const response = await searchService.Search(debouncedValue);
            dispatch(getUser(response));
            navigate('/search');
        }
    };

    return (
        // Thêm thẻ div để fix lỗi Tippy thêm vào nodeElement
        <div>
            <HeaderTippy
                interactive
                visible={showResult && users.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {handleCallAPI()}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleOutSide}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={user}
                        type="text"
                        spellCheck={false}
                        placeholder="Search accounts and videos"
                        className={cx('inner-search')}
                        onChange={(e) => {
                            if (e.target.value[0] !== ' ') {
                                dispatch(setUser(e.target.value));
                            }
                        }}
                        onKeyUp={handleEnterInput}
                        onFocus={(e) => {
                            e.target.value && setShowResult(true);
                        }}
                    />
                    {!!user && !loadding && (
                        <button
                            className={cx('clear')}
                            onClick={() => {
                                dispatch(setUser(''));
                                inputRef.current.focus();
                                setShowResult(false);
                            }}
                        >
                            <ClearIcon />
                        </button>
                    )}
                    {loadding && (
                        <button className={cx('loadding')}>
                            <LoaddingIcon />
                        </button>
                    )}
                    <link.Comp {...link.props} className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </link.Comp>
                </div>
            </HeaderTippy>
        </div>
    );
}

export default Search;
