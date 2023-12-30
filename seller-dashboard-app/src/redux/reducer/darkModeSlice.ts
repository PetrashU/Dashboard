import { createSlice } from "@reduxjs/toolkit";

export type DarkModeType = {
    isDarkModeOn: boolean;
};

const initDarkMode: DarkModeType = {
    isDarkModeOn: false,
};

export const darkModeSlice = createSlice({
    name: "darkMode",
    initialState: initDarkMode,
    reducers: {
        toggleDarkMode: (state: DarkModeType) => {
            state.isDarkModeOn = !state.isDarkModeOn;
        },
    },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer