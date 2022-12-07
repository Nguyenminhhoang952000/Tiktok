import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debouneValue, setDbouneValue] = useState(value);
    useEffect(() => {
        const handleEvent = setTimeout(() => setDbouneValue(value), delay);
        return () => clearTimeout(handleEvent);
    }, [value]);
    return debouneValue;
}
useDebounce.propTypes = {
    value: PropTypes.string,
    delay: PropTypes.number,
};
export default useDebounce;
