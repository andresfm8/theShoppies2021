import { createSelector } from "reselect"

const selectCurrentNominees = state => state.nomineeList;

export const selectNomineeList = createSelector(
  [selectCurrentNominees],
  list => list.nomineeList
);

export const selectIsListComplete = createSelector(
  [selectCurrentNominees],
  list => list.isListComplete
);