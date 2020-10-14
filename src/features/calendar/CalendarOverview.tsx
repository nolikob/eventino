/** @jsx jsx */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, jsx, Select } from "theme-ui";
import moment from "moment";

import { changeSelectedInterval, getCurrentDate, getInterval } from "./calendarSlice";

import MonthOverview from "./MonthOverview"; 

export const CalendarOverview: React.FC = () => {
    moment.locale("cs");
    const selectedInterval = useSelector(getInterval);
    const currentDate = useSelector(getCurrentDate);
    const dispatch = useDispatch();
    const [ distanceFromCurrent, setDistanceFromCurrent ] = useState<number>(0);
    let selectedDate = moment(currentDate).add(distanceFromCurrent, selectedInterval);
    let display = "";

    switch (selectedInterval) {
        case "month":
            display = selectedDate.format("MMMM - YYYY")
            break;
        case "week":
            display = `${selectedDate.startOf("week").format("DD.MM")} - ${selectedDate.endOf("week").format("DD.MM")} ${selectedDate.format("YYYY")}`
            break;
        default:
            display = `${selectedDate.format("DD.MM.")} ${selectedDate.format("YYYY")}`
            break;
    }

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
            alignItems: "center",
            padding: "0 1rem",
            position: "relative",
        }}>
            <div sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                ml: "auto",
                mr: "auto",
            }}>
                <Button
                    type={"button"}
                    variant={"secondaryOutline"}
                    onClick={() => setDistanceFromCurrent(prev => prev - 1)}
                >
                    {"<"}
                </Button>
                <span sx={{ mx: 4 }}>{display}</span>
                <Button
                    type={"button"}
                    variant={"secondaryOutline"}
                    onClick={() => setDistanceFromCurrent(prev => prev + 1)}
                >
                    {">"}
                </Button>
            </div>
            <Select
                defaultValue={selectedInterval}
                onChange={e =>  dispatch(changeSelectedInterval(e.target.value))}
                sx={{
                    width: "6rem",
                    position: "absolute",
                    right: "1rem",
                    p: 2,
                    top: 0,
                    bottom: 0,
                }}
            >
                <option value={"month"}>Month</option>
                <option value={"week"}>Week</option>
                <option value={"day"}>Day</option>
            </Select>
        </div>
        {selectedInterval === "month" && <MonthOverview dateSpan={selectedDate.format()} />}
        {selectedInterval === "week"}
        {selectedInterval === "day"}
    </div>;
}