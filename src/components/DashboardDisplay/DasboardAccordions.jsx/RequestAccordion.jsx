import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { MdExpandMore } from 'react-icons/md'
import { Box } from '@mui/system';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Button, Chip } from '@mui/material';
import lib from '../../../lib/index.js'

const {requests_reg} = lib
const {confirmMedicalRequest} = requests_reg


function RequestAccordion({ request, userMedicalRequests, setUserMedicalRequests }) {
    const { _id, user_tests_requested, facility } = request
    const { userFilesURL, userTestsTags } = user_tests_requested
    const {name, phone} = facility

    const sendMedicalRequestConfirmation = async ()=>{
        try {
            const body = {
                is_user_confirmed: true
            }
            const res = await confirmMedicalRequest(_id, body)
            console.log(res)
            if(res.status === 203){
                const filteredRequests = userMedicalRequests.filter(r=> r._id !== res.data.updatedRequest._id)
                setUserMedicalRequests([...filteredRequests, res.data.updatedRequest])
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="w-100 my-1">
            <Accordion>
                <AccordionSummary
                    expandIcon={<MdExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                        <Typography variant="subtitle2">{_id}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="h6">Doctor register  </Typography>
                    <Typography variant="body1">546587  </Typography>
                    <Typography className="mt-3" variant="h6">Medical tests  </Typography>
                    {userFilesURL.length > 0 &&
                        <ImageList sx={{ width: '100%', height: 128 }} cols={5} rowHeight={128}>
                            {userFilesURL.map((item) => (
                                <ImageListItem key={item} className="m-1">
                                    <img
                                        src={`${item}`}
                                        srcSet={`${item}`}
                                        alt={''}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    }
                    {userTestsTags.length > 0 &&
                        (<ul className="m-0 p-0">
                            {userTestsTags.map((t, index) => <Chip key={index} label={t} className="m-1" />)}
                        </ul>)
                    }
                    <Typography className="mt-3" variant="h6">Location</Typography>
                    <Box className="w-50">
                            <Typography variant="subtitle1">{name}</Typography>
                            <Typography variant="subtitle2">{phone}</Typography>
                       
                    </Box>
                    <Box className="d-flex justify-content-end align-items-center w-100 pr-3">
                        <Button variant="text" onClick={async()=> await sendMedicalRequestConfirmation()}>Approve</Button>
                    </Box>

                </AccordionDetails>


            </Accordion>

        </div>
    )
}

export default RequestAccordion
