import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './src/navbar/searchSlice'


export const store = configureStore({
    reducer: {
        navMenuSearch: searchReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch