import { createSlice, createEntityAdapter, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import moment from "moment";

const calendarAdapter = createEntityAdapter();

const initialState = calendarAdapter.getInitialState<{
    selectedInterval: "day" | "week" | "month",
    selectedDate: string,
}>({
    selectedInterval: "month",
    selectedDate: moment().format("YYYY-MM-DD"),
});

type IntervalAndDate= {
    selectedInterval: "day" | "week" | "month",
    selectedDate: string,
};

const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        changeSelectedInterval(state, action) {
            state.selectedInterval = action.payload;
        },
        changeSelectedDate(state, action) {
            state.selectedDate = action.payload;
        },
        changeIntervalAndDate(state, action: PayloadAction<IntervalAndDate>) {
            state.selectedInterval = action.payload.selectedInterval;
            state.selectedDate = action.payload.selectedDate;
        }
    }
});

export const {
    changeSelectedInterval,
    changeSelectedDate,
    changeIntervalAndDate
} = calendarSlice.actions;

export default calendarSlice.reducer;

const getInterval = (store: RootState) => store.calendar.selectedInterval;

const getSelectedDate = (store: RootState) => store.calendar.selectedDate;

export const selectInterval = createSelector(getInterval, res => res);

export const selectSelectedDate = createSelector(getSelectedDate, res => res);
