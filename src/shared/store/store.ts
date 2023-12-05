import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "../../data/appSlice"

const store = configureStore({
    reducer: {
        globalReducer: globalSlice.reducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type StoreDispatch = typeof store.dispatch