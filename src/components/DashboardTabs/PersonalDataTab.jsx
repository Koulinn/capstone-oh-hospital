import React,{useState, useEffect} from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import lib from '../../lib';
import PersonalData from '../DashboardDisplay/PersonalData';
const{requests_reg} = lib
const{getUserData} = requests_reg

function PersonalDataTab({ children, value, index, userID, ...other }) {
    const [userData, setUserData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const asyncWrapper = async()=>{
        try {
            setIsLoading(true)
            const res = await getUserData('personalData',userID)
            if(res.status === 200){
                setUserData(res.data.user[0])
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
      {value === index && userData && <PersonalData userData={userData} isLoading={isLoading}/>}
    </div>
    )
}

export default PersonalDataTab
