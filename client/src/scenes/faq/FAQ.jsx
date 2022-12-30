import React from 'react';
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = (props) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title={"FAQ"} subtitle ={"Frequently Asked Question Page"} />
            <Accordion >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography colors = {colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Semper viverra nam libero justo laoreet.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography colors = {colors.greenAccent[500]} variant="h5">
                        Another Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Semper viverra nam libero justo laoreet.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography colors = {colors.greenAccent[500]} variant="h5">
                        Your Favorite Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Semper viverra nam libero justo laoreet.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography colors = {colors.greenAccent[500]} variant="h5">
                        Some Random Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Semper viverra nam libero justo laoreet.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography colors = {colors.greenAccent[500]} variant="h5">
                        Another Random Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Semper viverra nam libero justo laoreet.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography colors = {colors.greenAccent[500]} variant="h5">
                        The Final Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Semper viverra nam libero justo laoreet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default FAQ;