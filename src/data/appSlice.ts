import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Language = "ENG" | "ITA"

interface initialState {
    language: Language
    darkMode: boolean
}

const initialState:initialState = {
    language: "ENG",
    darkMode: true
  };

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        changeLanguage: (state, action: PayloadAction<Language>) => {
            state.language = action.payload
        },
        changeDarkMode: (state) => {
            state.darkMode = !state.darkMode
        }   
    }
})

export default globalSlice.reducer