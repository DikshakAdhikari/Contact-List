import { configureStore } from "@reduxjs/toolkit";
import { ContactSlice } from "./contactSlice";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";


export const store= configureStore({
    reducer: ContactSlice.reducer
})

export const useAppDispatch: ()=> typeof store.dispatch= useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector; 