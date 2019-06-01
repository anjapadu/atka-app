import { createSelector } from 'reselect';

export const isLoggedSelector = createSelector(
    state => state.app.isLogged,
    (isLogged) => ({
        isLogged
    })
)

export const positionSelector = createSelector(
    state => state.user.position,
    (position) => position
)