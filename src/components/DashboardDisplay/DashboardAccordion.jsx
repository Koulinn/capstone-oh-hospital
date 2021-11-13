import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { MdExpandMore } from 'react-icons/md'
import PersonalAccordion from './DasboardAccordions.jsx/PersonalAccordion';
import ContactAccordion from './DasboardAccordions.jsx/ContactAccordion';
import HealthDataAccordion from './DasboardAccordions.jsx/HealthDataAccordion';

function DashboardAccordion({ title, details }) {
    return (
        <div className="w-100 my-1">
            <Accordion>
                <AccordionSummary
                    expandIcon={<MdExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h5">{title}</Typography>
                </AccordionSummary>
                {title === 'Personal' && <PersonalAccordion details={details} />}
                {title === 'Contact' && <ContactAccordion details={details} />}
                {title === 'Health information' && <HealthDataAccordion details={details} />}

            </Accordion>

        </div>
    )
}

export default DashboardAccordion
