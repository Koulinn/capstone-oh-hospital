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

function Chat({setChatUsers}) {
  const [roomId, setRoomId] = useState(null)
  const [waitingList, setWaitingUsers] = useState([])
  const [currentUserOnChat, setcurrentUserOnChat] = useState(null)
  const [currentMessageHistory, setCurrentMessageHistory] = useState([])


  const updateChatMessages = (payload) => {
    setCurrentMessageHistory([...currentMessageHistory, payload])
  }

  useEffect(() => {
    socket.on("connection", () => {
    });

    const updateUserList = (payload) => {
      setWaitingUsers([...waitingList, ...payload])
    }
    const onUserChat = (payload) => {
      const { roomID } = payload
      setRoomId(roomID.toString())
    }

    socket.on("waitingUsers", updateUserList)
    socket.on("onUserChat", onUserChat)

    logOnChats(mockAssistant)

    return () => {
      socket.off("waitingUsers", updateUserList)
      socket.off("onUserChat", onUserChat)
    }
  }, []);

  useEffect(() => {
    if (currentUserOnChat) {
      openChatWithUser(currentUserOnChat)
    }
  }, [currentUserOnChat])
  useEffect(() => {
    setChatUsers(waitingList.length)
  }, [waitingList])


  useEffect(() => {
    socket.on('recipientMessage', updateChatMessages)
    return () => {
      socket.off('recipientMessage', updateChatMessages)
    }
  }, [currentMessageHistory])

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

  return (
    <Container className="box-shadow my-5" >
      <Row>
        <UserQueueColumn
          waitingList={waitingList}
          setcurrentUserOnChat={setcurrentUserOnChat}
          currentUserOnChat={currentUserOnChat}
        />
        <ChatColumn currentMessageHistory={currentMessageHistory} currentUserOnChat={currentUserOnChat} />
      </Row>

    </Container>
  );
}

export default Chat;
