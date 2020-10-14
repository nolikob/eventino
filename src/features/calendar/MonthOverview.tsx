/** @jsx jsx */
import React from "react";
import { Box, Grid, jsx } from "theme-ui";
import moment from "moment";
import { Link } from "react-router-dom";

export type MonthOverviewProps = {
    dateSpan: string,
    today: string,
}

const MonthOverview: React.FC<MonthOverviewProps> = ({ dateSpan, today }) => {
    const daysBeforeStart = moment(dateSpan).startOf("month").day() - 1;
    const daysAfterEnd = 7 - moment(dateSpan).endOf("month").day();

    const daysToRender: any[] = [];

    const amountToRender = moment(dateSpan).daysInMonth() + daysAfterEnd;

    for (let index = -daysBeforeStart; index < amountToRender; index++) {
        const value = moment(dateSpan).startOf("month").add(index, "day")
        const isToday = moment(value.startOf("day")).diff(moment(today).startOf("day"), "day");
        daysToRender.push(
            <Box key={value.format("DD/MM/YYYY")} p={{
                    x: "70px",
                    y: "65px"
                }}>
                <Link sx={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "20px",
                    display: "block",
                    color: "text",
                    lineHeight: "28px",
                    textDecoration: "none",
                    backgroundColor: !isToday ? "primary" : "transparent",
                    margin: "0 auto"
                }} to={"/events/add-event"}>
                    {value.format("DD")}
                </Link>
            </Box>
        )
    }

    return <div>
        <Grid gap={0} columns={7}>
            <Box>Monday</Box>
            <Box>Tuesday</Box>
            <Box>Wednesday</Box>
            <Box>Thursday</Box>
            <Box>Friday</Box>
            <Box>Saturday</Box>
            <Box>Sunday</Box>
        </Grid>
        <Grid gap={0} columns={7}>
            {daysToRender}
        </Grid>
    </div>
}

export default MonthOverview;