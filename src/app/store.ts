import { configureStore } from "@reduxjs/toolkit";

import calendarSlice from "../features/calendar/calendarSlice";
import eventsSlice from "../features/events/eventsSlice";

export const store = configureStore({
    reducer: {
        calendar: calendarSlice,
        events: eventsSlice
    }
});

export type RootState = ReturnType<typeof store.getState>