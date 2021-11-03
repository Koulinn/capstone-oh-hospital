import React from 'react'
import { MdSend, MdOutlineAttachment } from 'react-icons/md'
import TextareaAutosize from '@mui/material/TextareaAutosize';

function ChatBottom() {
    return (
        <div className="chatInput-wrapper d-flex align-items-center p-3">
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
              <MdSend />
            </div>

          </div>
    )
}

export default ChatBottom
