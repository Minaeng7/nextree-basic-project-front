import React from "react";
import {Box, Typography} from "@mui/material";
import MainCard from "../util/Card/MainCard";

const FAQView = ({faqList}) => {

    return (
        faqList.map(faq => (
            <Box key={`faq + ${faq.id}`}>
                <Box sx={{marginTop: 2}}>
                </Box>
                <MainCard title={faq.title}>
                    <Typography variant="body2">
                        {faq.contents}
                    </Typography>
                </MainCard>
            </Box>
        ))

    )
}
export default FAQView