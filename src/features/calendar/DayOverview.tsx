/** @jsx jsx */
import React from "react";
import { Box, Grid, jsx } from "theme-ui";
import moment from "moment";

export type DayOverviewProps = {
    dateSpan: string
}

const DayOverview: React.FC<DayOverviewProps> = ({dateSpan}) => {
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
                {moment(dateSpan).format("Do of MMMM")}
            </Box>
        </Grid>
    </div>
}

export default DayOverview;