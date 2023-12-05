import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../../data/appSlice"

const store = configureStore({
    reducer: {
        globalReducer
    }
})

export default store