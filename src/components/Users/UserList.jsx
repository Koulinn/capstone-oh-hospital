import React from "react";
import List from "@mui/material/List";
import UserCard from "./UserCard";

function UserList({ waitingList, setcurrentUserOnChat, currentUserOnChat }) {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      {waitingList.map((u) => (
        <UserCard
          key={u.user._id}
          user={u.user}
          name={u.user.name}
          surname={u.user.surname}
          avatar={u.user.avatar}
          createdAt={u.user.createdAt}
          setcurrentUserOnChat={setcurrentUserOnChat}
          isSelected={currentUserOnChat && currentUserOnChat._id === u.user._id}
        />
      ))}
    </List>
  );
}

export default UserList;
