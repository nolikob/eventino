import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const calendarAdapter = createEntityAdapter();

const initialState = calendarAdapter.getInitialState();

const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {}
});

export default calendarSlice.reducer;