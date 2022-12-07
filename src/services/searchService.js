import * as httpRequest from '~/utils/httpRequest';

export const Search = async (q, type = 'less') => {
    try {
        const response = await httpRequest.get('users/search', {
            params: { q, type },
        });
        return response.data;
    } catch (erro) {}
};
