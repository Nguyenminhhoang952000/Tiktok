import * as actionTypes from './actionTypes';
export const setUser = (data) => {
    return {
        type: actionTypes.SET_USER_SEARCH,
        data,
    };
};
export const getUser = (data) => {
    return {
        type: actionTypes.GET_USER_SEARCH,
        data,
    };
};
