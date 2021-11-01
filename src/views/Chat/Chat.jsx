import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";

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

// Get list of waiting users
// Open chat

function Chat() {



  useEffect(() => {
    socket.on("connection", () => {
    });

    const updateUserList = (payload) => {
        
      }
    const onUserChat = (payload) => {
       
      }
    
    socket.on("waitingUsers", updateUserList) 
    socket.on("onUserChat", onUserChat) 

    return ()=>{
        socket.off("waitingUsers", updateUserList)
        socket.off("onUserChat", onUserChat)
    }

  },[]);

  const logOnChats = (assistant) => {
    socket.emit("newAssistant", assistant);
  };
  const openChatWithUser = (user) => {
      const payload = {
          user: user,
          assistant:mockAssistant
      }
    socket.emit("openRoomWithUser", payload);
  };
  
  return (
    <div>
      <h1>Chat</h1>
      <button onClick={() => logOnChats(mockAssistant)}>Check user waiting List</button>
      <button onClick={() => openChatWithUser(mockUser)}>Open chat with user</button>
    </div>
  );
}

export default Chat;
