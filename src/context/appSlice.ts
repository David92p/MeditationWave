import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EngAbout, EngHome, ItaAbout, ItaHome } from "../data";
import { EngContact, ItaContact } from "../data/context/context";

type Language = "ENG" | "ITA"

export interface initialState {
    language: Language
    darkMode: boolean
    home: typeof ItaHome | typeof EngHome
    about: typeof ItaAbout | typeof EngAbout
    contact: typeof ItaContact | typeof EngContact
}

 const initialState:initialState = {
    language: "ENG",
    darkMode: true,
    home: EngHome,
    about: EngAbout,
    contact: EngContact
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
                    state.contact = EngContact
                    break
                case "ITA":
                    state.home = ItaHome
                    state.about = ItaAbout
                    state.contact = ItaContact
                    break
            }
        },
        changeDarkMode: (state, action: PayloadAction<boolean>) => {
            state.darkMode = action.payload
        }   
    },
});

export default globalSlice