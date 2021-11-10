import React,{useState, useEffect} from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import lib from '../../lib';
const{requests_reg} = lib
const{getUserData} = requests_reg


function ChatHistoryTab({ children, value, index, userID, ...other }) {
  const [userChatHistory, setUserChatHistory] = useState(null)

  const [isLoading, setIsLoading] = useState(false)

  const asyncWrapper = async()=>{
      try {
          setIsLoading(true)
          const res = await getUserData('chatHistory',userID)
          if(res.status === 200){
              setUserChatHistory(res.data.chatHistory)
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
      {value === index && <p>Chat</p>}
    </div>
    )
}

export default ChatHistoryTab
