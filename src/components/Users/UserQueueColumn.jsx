import React from 'react'
import UserList from './UserList'

function UserQueueColumn({waitingList, setcurrentUserOnChat}) {
    return (
        <div className="userQueue-wrapper d-flex flex-column col-4 border-right px-0">
          <div className="">
            <header className="d-flex justify-content-center align-items-center">
              <h4 className="d-flex justify-content-center align-items-center">User Queue</h4>
            </header>
          </div>
          <div className="waitingList-wrapper scrollable-Area">
            <UserList
             waitingList={waitingList}
             setcurrentUserOnChat={setcurrentUserOnChat}
            />
          </div>
        </div>
    )
}

export default UserQueueColumn
