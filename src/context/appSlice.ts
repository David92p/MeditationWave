import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EngAbout, EngHome, ItaAbout, ItaHome } from "../data";

type Language = "ENG" | "ITA"

interface initialState {
    language: Language
    darkMode: boolean
    home: typeof ItaHome | typeof EngHome
    about: typeof ItaAbout | typeof EngAbout
}

const initialState:initialState = {
    language: "ENG",
    darkMode: true,
    home: EngHome,
    about: EngAbout
};

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        changeLanguage: (state, action: PayloadAction<Language>) => {
            state.language = action.payload
            switch (action.payload){
                case "ENG":
                    state.home = EngHome
                    state.about = EngAbout
                    break
                case "ITA":
                    state.home = ItaHome
                    state.about = ItaAbout
                    break
            }
        },
        changeDarkMode: (state, action: PayloadAction<boolean>) => {
            state.darkMode = action.payload
        }   
    },
});

export default globalSlice