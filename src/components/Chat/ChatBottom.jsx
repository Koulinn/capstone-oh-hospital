import React from 'react'
import { MdSend, MdOutlineAttachment } from 'react-icons/md'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { socket } from '../../views/Chat/Chat'


function ChatBottom({ roomID }) {

  const sendMessage = (e) => {
    e.preventDefault()
    const message = {
      senderID: '617fc01dd1832ee3bb069737',
      senderRole: 'assistant',
      text: e.target[0].value,
    }

    const payload = {
      message,
      roomID: roomID
    }
    socket.emit('newMessage', payload)
  }
  return (

    <form className="chatInput-wrapper d-flex align-items-center p-3" onSubmit={sendMessage}>
      <TextareaAutosize
        className="text-area-wrapper"
        aria-label="minimum height"
        minRows={3}
        placeholder="Enter your message"
      />
      <div className="sendAttachment-Btn-wrapper d-flex justify-content-center align-items-center ml-3 p-3">
        <label htmlFor="fileField" className="cursor-pointer m-0">
          <MdOutlineAttachment />
        </label>
        <input type="file" id="fileField" className="d-none" />
      </div>
      <div className="sendMessage-Btn-wrapper d-flex justify-content-center align-items-center my-3 ml-3">
        <button type="submit"><MdSend /></button>
      </div>
    </form>


  )
}

export default ChatBottom
