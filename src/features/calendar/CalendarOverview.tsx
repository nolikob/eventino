/** @jsx jsx */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getCurrentDate, getInterval } from "./calendarSlice";
import { Button, jsx } from "theme-ui";
import moment from "moment";

export const CalendarOverview: React.FC = () => {
    const selectedInterval = useSelector(getInterval);
    const currentDate = useSelector(getCurrentDate);
    const [ distanceFromCurrent, setDistanceFromCurrent ] = useState<number>(0);
    const display = moment(currentDate)

    return <div sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background"
    }}>
        <div sx={{
            backgroundColor: "background",
            display: "flex",
            height: "3rem",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Button
                type={"button"}
                variant={"secondary-outline"}
                onClick={() => setDistanceFromCurrent(prev => prev - 1)}
            >
                {"<"}
            </Button>
            <span sx={{ mx: 4 }}>{currentDate}</span>
            <Button
                type={"button"}
                variant={"secondary-outline"}
                onClick={() => setDistanceFromCurrent(prev => prev + 1)}
            >
                {">"}
            </Button>
        </div>
        {selectedInterval === "month"}
        {selectedInterval === "week"}
        {selectedInterval === "day"}
    </div>;
}