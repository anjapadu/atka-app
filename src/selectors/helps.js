import { createSelector } from "reselect";

export const helpsSelector = createSelector(
    state => state.helps.helps,
    (helps) => helps
)