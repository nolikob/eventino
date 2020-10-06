import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const calendarAdapter = createEntityAdapter();

const initialState = calendarAdapter.getInitialState<{
    currentDate: string,
    selectedInterval: "day" | "week" | "month"
}>({
    currentDate: new Date().toISOString(),
    selectedInterval: "month"
});

const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {}
});

export default calendarSlice.reducer;