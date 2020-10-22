import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import moment from "moment";
import { RootState } from "../../app/store";

const eventsAdapter = createEntityAdapter();

const initialState = eventsAdapter.getInitialState({
    selectedDate: moment().format()
});

const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        changeSelectedDate(state, action) {
            state.selectedDate = action.payload;
        }
    }
});

export const { changeSelectedDate } = eventsSlice.actions;

export default eventsSlice.reducer;

const getSelectedDate = (store: RootState) => store.events.selectedDate;

export const selectSelectedDate = createSelector(getSelectedDate, res => res);