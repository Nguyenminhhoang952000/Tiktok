import * as actionTypes from '~/store/actions/actionTypes';
export const initState = {
    searchData: { user: '', users: [] },
};
const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER_SEARCH:
            return {
                ...state,
                searchData: { ...state.searchData, user: action.data },
            };
        case actionTypes.GET_USER_SEARCH:
            return {
                ...state,
                searchData: { ...state.searchData, users: action.data || [] },
            };
        default:
            throw new Error('Invalid actions');
    }
};
export default reducer;
