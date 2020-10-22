import React from "react";
import { useSelector } from "react-redux";
import { selectSelectedDate } from "./eventsSlice";

const AddEvent: React.FC = () => {
    const selectedDate = useSelector(selectSelectedDate);
    
    return <div>
        Add Event
    </div>
}

export default AddEvent;