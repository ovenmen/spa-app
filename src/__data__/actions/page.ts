import { CHANGE_CURRENT_PAGE } from '../actionsTypes';

export const changeCurrentPage = (currentPage: string) => ({
    type: CHANGE_CURRENT_PAGE,
    payload: currentPage
});