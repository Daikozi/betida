'use client'

import { FC, useState } from 'react'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import Image from 'next/image'

import { footerContent } from './Footer.content'

const Footer: FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean[]>(Array(footerContent.length).fill(false))

  const handleAccordionChange = (index: number) => {
    const newExpanded = [...isExpanded]
    newExpanded[index] = !newExpanded[index]
    setIsExpanded(newExpanded)
  }

  return (
    <Stack component="footer" direction="row" justifyContent="center" mb={4.5}>
      <Paper
        sx={{
          maxWidth: 1200,
          width: '100%',
          bgcolor: { lg: 'background.paper', xs: 'transparent' },
          padding: { xs: 0, lg: 3 },
          pb: { xs: 0, lg: 2 },
          mx: 2,
        }}
      >
        <Grid container spacing={2} sx={{ display: { xs: 'none', lg: 'flex' } }}>
          {footerContent.map(({ links, title }) => (
            <Grid size={{ sm: 6, md: 4, lg: 2 }} key={title}>
              <Typography variant="textLight" fontWeight={600}>
                {title}
              </Typography>
              <List dense>
                {links.map(({ label, url }) => (
                  <ListItem sx={{ p: 0 }} key={label}>
                    <Link href={url}>
                      <Typography variant="textDark">
                        <ListItemText primary={label} />
                      </Typography>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ mt: 2, mb: 1, display: { xs: 'none', lg: 'block' } }} />
        <Stack alignItems="center" spacing={3} sx={{ mb: 3, display: { lg: 'none' } }}>
          <Stack direction="row" alignItems="center" gap={1.5} flexGrow={1}>
            <Image src="/assets/svg/logo.svg" alt="Logo" width={32} height={32} />
            <Typography variant="titleLight" component="div">
              BRAND NAME
            </Typography>
          </Stack>

          <Stack spacing={1.2} width="100%">
            {footerContent.map(({ title, links }, index) => (
              <Accordion
                key={title}
                disableGutters
                onChange={() => handleAccordionChange(index)}
                expanded={isExpanded[index]}
              >
                <AccordionSummary
                  expandIcon={
                    isExpanded[index] ? (
                      <Image src="/assets/svg/carat_down_light.svg" alt="Expand" width={24} height={24} />
                    ) : (
                      <Image src="/assets/svg/carat_down_dark.svg" alt="Expand" width={24} height={24} />
                    )
                  }
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography
                    component="span"
                    variant="titleDark"
                    color={isExpanded[index] ? 'text.secondary' : 'text.primary'}
                  >
                    {title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0 }}>
                  <List dense>
                    {links.map(({ label, url }) => (
                      <ListItem sx={{ p: 0 }} key={label}>
                        <Link href={url}>
                          <Typography variant="textDark">
                            <ListItemText primary={label} />
                          </Typography>
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Stack>
        <Stack direction={{ xs: 'column', lg: 'row' }} justifyContent="space-between" spacing={2} alignItems="center">
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="space-evenly"
            width={{ xs: '100%', lg: 'auto' }}
          >
            <IconButton aria-label="delete">
              <Image src="/assets/svg/Social Icons-1.svg" alt="Social Icon 1" width={16} height={16} />
            </IconButton>
            <IconButton aria-label="delete">
              <Image src="/assets/svg/Social Icons-2.svg" alt="Social Icon 2" width={16} height={16} />
            </IconButton>
            <IconButton aria-label="delete">
              <Image src="/assets/svg/Social Icons-3.svg" alt="Social Icon 3" width={16} height={16} />
            </IconButton>
            <IconButton aria-label="delete">
              <Image src="/assets/svg/Social Icons-4.svg" alt="Social Icon 4" width={16} height={16} />
            </IconButton>
            <IconButton aria-label="delete">
              <Image src="/assets/svg/Social Icons-5.svg" alt="Social Icon 5" width={16} height={16} />
            </IconButton>
            <IconButton aria-label="delete">
              <Image src="/assets/svg/Social Icons-6.svg" alt="Social Icon 6" width={16} height={16} />
            </IconButton>
            <IconButton aria-label="delete">
              <Image src="/assets/svg/Social Icons-7.svg" alt="Social Icon 7" width={16} height={16} />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Typography variant="caption">© 2025 brandname.com</Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="caption">All Rights Reserved.</Typography>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  )
}

export default Footer
