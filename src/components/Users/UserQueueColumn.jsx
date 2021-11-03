import React from 'react'
import UserList from './UserList'

function UserQueueColumn({waitingList, setCurrentChat}) {
    return (
        <div className="userQueue-wrapper d-flex flex-column col-4 border-right pt-3 px-0">
          <div className=" mb-4">
            <header>
              <h4 className="text-center">User Queue</h4>
            </header>
          </div>
          <div className="waitingList-wrapper scrollable-Area">
            <UserList
             waitingList={waitingList}
             setCurrentChat={setCurrentChat}
            />
          </div>
        </div>
    )
}

export default UserQueueColumn
