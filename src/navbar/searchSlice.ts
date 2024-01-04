import { createSlice } from "@reduxjs/toolkit";


interface SearchState {
    isOpen: boolean,
}

const initialState = {
    isOpen: false,
} as SearchState

const searchModalSlice = createSlice({
    name: 'searchModal',
    initialState,
    reducers: {
        openSearchModal: (state => {
            state.isOpen = true;
        }),
        closeSearchModal: (state => {
            state.isOpen = false;
        }),
    },
});

export const { openSearchModal, closeSearchModal } = searchModalSlice.actions;
export default searchModalSlice.reducer;