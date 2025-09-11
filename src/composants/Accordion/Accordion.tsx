import {
  AccordionDetails,
  AccordionSummary,
  Stack,
  StackProps,
  Typography,
} from "@mui/material";
import MUIAccordion from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import React, { FC, useState } from "react";
import carat_down_dark from "@/assets/svg/carat_down_dark.svg";
import carat_down_light from "@/assets/svg/carat_down_light.svg";

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  accordionItems: AccordionItem[];
} & StackProps;

const Accordion: FC<AccordionProps> = ({ accordionItems, ...stackProps }) => {
  const CustomAccordion = styled(MUIAccordion)(() => ({
    "&.MuiAccordion-root": {
      borderRadius: "10px",
      "&:before": {
        display: "none",
      },
    },
  }));

  const [isExpanded, setIsExpanded] = useState<boolean[]>(
    Array(accordionItems.length).fill(false)
  );

  return (
    <Stack spacing="10px" {...stackProps}>
      {accordionItems.map(({ title, content }, index) => (
        <CustomAccordion
          disableGutters
          key={title}
          expanded={isExpanded[index]}
          onChange={() => {
            const newExpanded = [...isExpanded];
            newExpanded[index] = !newExpanded[index];
            setIsExpanded(newExpanded);
          }}>
          <AccordionSummary
            expandIcon={
              isExpanded[index] ? (
                <Image src={carat_down_light} alt="Expand" />
              ) : (
                <Image src={carat_down_dark} alt="Expand" />
              )
            }
            aria-controls="panel1-content"
            id="panel1-header">
            <Typography
              component="span"
              color={isExpanded[index] ? "text.secondary" : "text.primary"}
              fontWeight={600}>
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ pt: 0 }}>
            <Typography fontSize={14}>{content}</Typography>
          </AccordionDetails>
        </CustomAccordion>
      ))}
    </Stack>
  );
};

export default Accordion;
