/** @jsx jsx */
import React from "react";
import { Box, Grid, jsx } from "theme-ui";
import moment from "moment";
import { useSelector } from "react-redux";
import { selectEventsByDate } from "../events/eventsSlice";
import { RootState } from "../../app/store";
import { selectSelectedDate } from "./calendarSlice";


const DayOverview: React.FC = () => {
    const selectedDate = useSelector(selectSelectedDate);
    const selectedEvents = useSelector((store: RootState) => selectEventsByDate(store, selectedDate));

    return <div sx={{
        display: "flex",
        flexDirection: "column",
    }}>
        <Grid gap={0} columns={7} sx={{
            display: "flex",
            flexDirection: "column"
        }}>
            <Box sx={{
                P: {
                    x: "70px",
                    y: "65px"
                },
                flex: "1"
            }}>
                {moment(selectedDate).format("Do of MMMM")}
            </Box>
            {selectedEvents.map(m => <Box key={m.date} sx={{
                marginBottom: "1rem",
                backgroundColor: "primary",
                display: "flex",
                flexDirection: "column",
            }}>
                <h3>{m.title}</h3>
                <p>{m.description}</p>
                <span>{moment(m.date).hours()}</span>
            </Box>)}
        </Grid>
    </div>
}

export default DayOverview;