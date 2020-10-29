import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import moment from "moment";
import { RootState } from "../../app/store";
import { v4 as uuidv4 } from "uuid";

type Event = {
    id: string,
    eventDate: string,
    title: string,
    description: string,
    duration: string,
    date: string
};

const eventsAdapter = createEntityAdapter<Event>({
    sortComparer: (a, b) => moment(a.eventDate).diff(moment(b.eventDate))
});

const eventsSlice = createSlice({
    name: "events",
    initialState: eventsAdapter.getInitialState(),
    reducers: {
        eventAdded(state, action) {
            const id = uuidv4();
            eventsAdapter.addOne(state, { id, ...action.payload})
        }
    }
});

export const { eventAdded } = eventsSlice.actions;

export default eventsSlice.reducer;

export const {
    selectAll: selectAllEvents,
    selectIds: selectEventIds
} = eventsAdapter.getSelectors((state: RootState) => state.events);

export const selectEventsByDate = createSelector(
    [ selectAllEvents, (state: RootState, eventDate: string) => eventDate ],
    (events, eventDate) => events.filter(event => event.eventDate === eventDate)
)
