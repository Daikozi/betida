import { FC, useState } from 'react'

import carat_down_dark from '@/assets/svg/carat_down_dark.svg'
import carat_down_light from '@/assets/svg/carat_down_light.svg'
import { AccordionDetails, AccordionSummary, Stack, StackProps, Typography } from '@mui/material'
import MUIAccordion from '@mui/material/Accordion'
import Image, { StaticImageData } from 'next/image'

type FAQItem = {
  question: string
  answer: string
}

type FAQProps = {
  accordionItems: readonly FAQItem[]
} & StackProps

const FAQ: FC<FAQProps> = ({ accordionItems, ...stackProps }) => {
  const [isExpanded, setIsExpanded] = useState<boolean[]>(Array(accordionItems.length).fill(false))

  const handleAccordionToggle = (index: number) => {
    const newExpanded = [...isExpanded]
    newExpanded[index] = !newExpanded[index]
    setIsExpanded(newExpanded)
  }

  return (
    <Stack spacing={1.2} {...stackProps}>
      {accordionItems.map(({ question, answer }, index) => (
        <MUIAccordion
          disableGutters
          key={question}
          expanded={isExpanded[index]}
          onChange={() => handleAccordionToggle(index)}
        >
          <AccordionSummary
            expandIcon={
              isExpanded[index] ? (
                <Image src={carat_down_light as StaticImageData} alt="Expand" width={24} height={24} />
              ) : (
                <Image src={carat_down_dark as StaticImageData} alt="Expand" width={24} height={24} />
              )
            }
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography
              variant="titleDark"
              component="span"
              color={isExpanded[index] ? 'text.secondary' : 'text.primary'}
            >
              {question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ pt: 0 }}>
            <Typography variant="textDark">{answer}</Typography>
          </AccordionDetails>
        </MUIAccordion>
      ))}
    </Stack>
  )
}

export default FAQ
