/** @jsx jsx */
import React, { useEffect } from "react";
import { Box, Grid, jsx } from "theme-ui";
import moment from "moment";

export type MonthOverviewProps = {
    dateSpan: string
}

const MonthOverview: React.FC<MonthOverviewProps> = ({ dateSpan }) => {
    const daysBeforeStart = moment(dateSpan).startOf("month").day() - 1;
    const daysAfterEnd = 7 - moment(dateSpan).endOf("month").day();

    const daysToRender: any[] = [];

    useEffect(() => {
        daysToRender.splice(0, daysToRender.length);
    }, [dateSpan, daysToRender])

    for (let index = daysBeforeStart; index > 0; index--) {
        const value = moment(dateSpan).startOf("month").subtract(index, "day")
        daysToRender.push(
            <Box key={value.format("DD/MM/YYYY")} p={{
                    x: "70px",
                    y: "65px"
                }}>
                {value.format("DD")}
            </Box>
        )
    }

    for (let index = 0; index < moment(dateSpan).daysInMonth(); index++) {
        const value = moment(dateSpan).startOf("month").add(index, "day")
        daysToRender.push(
            <Box key={value.format("DD/MM/YYYY")} p={{
                    x: "70px",
                    y: "65px"
                }}>
                {value.format("DD")}
            </Box>
        )
    }

    for (let index = 1; index <= daysAfterEnd; index++) {
        const value = moment(dateSpan).endOf("month").add(index, "day")
        daysToRender.push(
            <Box key={value.format("DD/MM/YYYY")} p={{
                    x: "70px",
                    y: "65px"
                }}>
                {value.format("DD")}
            </Box>
        )
    }
    
    return <Grid gap={0} columns={7}>
        <Box>Monday</Box>
        <Box>Tuesday</Box>
        <Box>Wednesday</Box>
        <Box>Thursday</Box>
        <Box>Friday</Box>
        <Box>Saturday</Box>
        <Box>Sunday</Box>
        {daysToRender}
        {/* <Grid gap={0} columns={7}>
        </Grid> */}
    </Grid>;
}

export default MonthOverview;