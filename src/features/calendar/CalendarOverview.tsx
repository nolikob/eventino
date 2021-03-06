/** @jsx jsx */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, jsx, Select } from "theme-ui";
import moment from "moment";

import {
    changeSelectedDate,
    changeSelectedInterval,
    selectInterval,
    selectSelectedDate,
} from "./calendarSlice";

import MonthOverview from "./MonthOverview";
import WeekOverview from "./WeekOverview";
import DayOverview from "./DayOverview";

export const CalendarOverview: React.FC = () => {
    const selectedInterval = useSelector(selectInterval);
    const storedSelectedDate = useSelector(selectSelectedDate);
    const dispatch = useDispatch();
    const [distanceFromCurrent, setDistanceFromCurrent] = useState<number>(0);
    const today = moment().format();
    let selectedDate = moment(today).add(distanceFromCurrent, selectedInterval);
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
            {selectedInterval !== "day" ? <div sx={{
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
            </div> : <div sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                ml: "auto",
                mr: "auto",
            }}>
                <Button
                    type={"button"}
                    variant={"secondaryOutline"}
                    onClick={() => dispatch(changeSelectedDate(moment(storedSelectedDate).subtract(1, "day").format("YYYY-MM-DD")))}
                >
                    {"<"}
                </Button>
                <span sx={{ mx: 4 }}>{moment(storedSelectedDate).format("DD.MM. YYYY")}</span>
                <Button
                    type={"button"}
                    variant={"secondaryOutline"}
                    onClick={() => dispatch(changeSelectedDate(moment(storedSelectedDate).add(1, "day").format("YYYY-MM-DD")))}
                >
                    {">"}
                </Button>
            </div>}
            <Select
                value={selectedInterval}
                onChange={e => dispatch(changeSelectedInterval(e.target.value))}
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
        {selectedInterval === "month" && <MonthOverview
            dateSpan={selectedDate.format()}
            today={today}
        />}
        {selectedInterval === "week" && <WeekOverview dateSpan={selectedDate.format()} />}
        {selectedInterval === "day" && <DayOverview />}
    </div>;
}