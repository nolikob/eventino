import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const eventsAdapter = createEntityAdapter();

const initialState = eventsAdapter.getInitialState();

const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {}
});

export default eventsSlice.reducer;