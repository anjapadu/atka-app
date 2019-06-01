import { createSelector } from 'reselect';

export const isLoggedSelector = createSelector(
    state => state.app.isLogged,
    (isLogged) => ({
        isLogged
    })
)