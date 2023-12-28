import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type LanguageState = {
    currentLanguage: string;
};

const initialState: LanguageState = {
    currentLanguage: 'English',
};

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguage: (state, action: PayloadAction<string>) => {
            state.currentLanguage = action.payload;
        },
    },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
