import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import UserList from "../../components/Users/UserList";
import Avatar from '@mui/material/Avatar';
import ChatCard from "../../components/Chat/ChatCard";
import { MdOutlineChatBubbleOutline, MdSend, MdOutlineAttachment } from 'react-icons/md'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import UserQueueColumn from "../../components/Users/UserQueueColumn";
import ChatColumn from "../../components/Chat/ChatColumn";




const ADDRESS = process.env.REACT_APP_API_URL;
export const socket = io(ADDRESS, { transports: ["websocket"] });

const mockAssistant = {
  _id: "617fc01dd1832ee3bb069737",
  name: "Mary Doe",
  role: "assistant",
  avatar: "https://ui-avatars.com/api/?name=Mary Doe",
};

const mockUser = {
  _id: '617edbbc25fbe2e8d7fa795d',
  name: "Rafael",
  surname: "Limaa",
  avatar: "https://res.cloudinary.com/koulin/image/upload/v1635704994/OneHealth/patient/avatar/ti7wxty5xc2znimy34ca.png",
  email: "drdverzola@gmail.com",
  googleId: "114978369901583530553",
  phone_primary: "7895144568",
};
// const waitingList = [mockUser, mockUser, mockUser, mockUser, mockUser, mockUser, mockUser, mockUser, mockUser, mockUser, mockUser, mockUser, mockUser, mockUser,]

// Get list of waiting users
// Open chat
const mockMessage = {
  senderID: '617fc01dd1832ee3bb069737',
  senderRole: 'assistant',
  text: `I'm patatine hello!`,
}
function Chat() {
  const [roomId, setRoomId] = useState(null)
  const [waitingList, setWaitingUsers] = useState([])



  useEffect(() => {
    socket.on("connection", () => {
    });

    const updateUserList = (payload) => {
      setWaitingUsers([...waitingList,...payload])
      console.log(payload)

    }
    const onUserChat = (payload) => {
      const { roomID } = payload
      setRoomId(roomID.toString())
    }

    const updateChatMessages = (payload) => {
      console.log('recipientMessage', payload)

    }
    socket.on('recipientMessage', updateChatMessages)

    socket.on("waitingUsers", updateUserList)
    socket.on("onUserChat", onUserChat)

    logOnChats(mockAssistant)

    return () => {
      socket.off("waitingUsers", updateUserList)
      socket.off("onUserChat", onUserChat)
      socket.off('recipientMessage', updateChatMessages)
    }

  }, []);

  const logOnChats = (assistant) => {
    socket.emit("newAssistant", assistant);
  };
  const openChatWithUser = (user) => {
    const payload = {
      user: user,
      assistant: mockAssistant
    }
    socket.emit("openRoomWithUser", payload);
  };

  const sendMessage = (message, roomID) => {
    const payload = {
      message,
      roomID: roomID
    }
    socket.emit('newMessage', payload)
  }


  // <button onClick={() => logOnChats(mockAssistant)}>Check user waiting List</button>
  // <button onClick={() => openChatWithUser(mockUser)}>Open chat with user</button>
  // <button onClick={() => sendMessage(mockMessage, roomId)}>Send message</button>
  return (
    <Container className="box-shadow mt-5" >
      <Row>
        <UserQueueColumn 
        waitingList={waitingList}
        />
        <ChatColumn mockUser={mockUser}/>
      </Row>

    </Container>
  );
}

export default Chat;
