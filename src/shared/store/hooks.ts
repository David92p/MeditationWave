import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"
import type { RootState, StoreDispatch } from "./store"

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector
export const useStoreDispatch = () => useDispatch<StoreDispatch>()