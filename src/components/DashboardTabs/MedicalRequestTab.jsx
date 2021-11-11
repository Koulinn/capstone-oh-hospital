import React,{useState, useEffect}  from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import lib from '../../lib';
import MedicalRequest from '../DashboardDisplay/MedicalRequest';
const{requests_reg} = lib
const{getUserData} = requests_reg

function MedicalRequestTab({ children, value, index, userID, ...other }) {
  const [userMedicalRequests, setUserMedicalRequests] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const asyncWrapper = async()=>{
      try {
          setIsLoading(true)
          const res = await getUserData('medicalRequest',userID)
          if(res.status === 200){
              setUserMedicalRequests(res.data.requests)
              setIsLoading(false)
          } else{
              setIsLoading(false)
          }
      } catch (error) {
          setIsLoading(false)
          console.log(error)
      }
  }

  useEffect(()=>{
      if(userID){
          asyncWrapper()
      }
  },[userID])

  
  
  return (
        <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index &&
       userMedicalRequests && 
       <MedicalRequest userMedicalRequests={userMedicalRequests} setUserMedicalRequests={setUserMedicalRequests}/>}
    </div>
    )
}

export default MedicalRequestTab
