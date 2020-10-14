import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

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
    reducers: {
        changeSelectedInterval(state, action) {
            state.selectedInterval = action.payload;
        },
    }
});

export const { changeSelectedInterval } = calendarSlice.actions;

export default calendarSlice.reducer;

const getInterval = (store: RootState) => store.calendar.selectedInterval;

export const getCurrentDate = (store: RootState) => store.calendar.currentDate;

export const selectInterval = createSelector(getInterval, res => res);

export const selectCurrentInterval = createSelector(getCurrentDate, res => res);
