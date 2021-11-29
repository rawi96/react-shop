import { createSelector } from "reselect";

const selectDirecotry = (state) => state.directory;

export const selectDirectorySection = createSelector(
  [selectDirecotry],
  (directory) => directory.sections
);