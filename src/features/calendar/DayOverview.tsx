/** @jsx jsx */
import React from "react";
import { Box, Grid, jsx } from "theme-ui";
import moment from "moment";
import { useSelector } from "react-redux";
import { selectSelectedDate } from "./calendarSlice";

export type DayOverviewProps = {
    dateSpan: string
}

const DayOverview: React.FC<DayOverviewProps> = ({dateSpan}) => {
    const selectedDate = useSelector(selectSelectedDate)

    return <div sx={{
        display: "flex",
        flexDirection: "column",
    }}>
        <Grid gap={0} columns={7}>
            <Box sx={{
                P: {
                    x: "70px",
                    y: "65px"
                },
                flex: "1"
            }}>
                {moment(selectedDate).format("Do of MMMM")}
            </Box>
        </Grid>
    </div>
}

export default DayOverview;