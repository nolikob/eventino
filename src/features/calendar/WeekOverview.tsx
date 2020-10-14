/** @jsx jsx */
import React from "react";
import { Box, Grid, jsx } from "theme-ui";
import moment from "moment";

export type WeekOverviewProps = {
    dateSpan: string
}

const WeekOverview: React.FC<WeekOverviewProps> = ({dateSpan}) => {
    const daysToRender: any[] = [];

    for (let index = 0; index < 7; index++) {
        const value = moment(dateSpan).startOf("week").add(index, "day")
        daysToRender.push(
            <Box key={value.format("DD/MM/YYYY")}>
                {value.format("Do of MMMM")}
            </Box>
        )
    }

    return <div sx={{
        display: "flex",
        flexDirection: "column",
    }}>
        <Grid gap={0} columns={7}>
            {daysToRender}
        </Grid>
        <Grid gap={0} columns={7}>
            {daysToRender.map((val, i) => <Box key={i} sx={{
                P: {
                    x: "70px",
                    y: "65px"
                },
                flex: "1"
            }}>

            </Box>)}
        </Grid>
    </div>
}

export default WeekOverview;