import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  SxProps,
  Theme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface AccordionComponentProps {
  title: string;
  details: string;
  style?: SxProps<Theme>;
  titleStyle?: SxProps<Theme>;
  detailsStyle?: SxProps<Theme>;
}

const AccordionComponent = (props: AccordionComponentProps) => {
  const { details, title, style, detailsStyle, titleStyle } = props;
  return (
    <Accordion sx={style}>
      <AccordionSummary
        sx={titleStyle}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {title}
      </AccordionSummary>
      <AccordionDetails sx={detailsStyle}>{details}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
