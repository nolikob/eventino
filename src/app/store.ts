import { configureStore } from "@reduxjs/toolkit";

import calendarSlice from "../features/calendar/calendarSlice";
import eventsSlice from "../features/events/eventsSlice";

export default configureStore({
    reducer: {
        calendar: calendarSlice,
        events: eventsSlice
    }
})