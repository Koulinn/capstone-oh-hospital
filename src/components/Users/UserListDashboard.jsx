import React from "react";
import { Grid, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";
import UserCard from "../../components/Users/UserCard";

function UserListDashboard({ newestUsers, setUserID, userID }) {
  return (
    <Grid item xs={3}>
      <Typography variant="h5" className="pl-3 py-2 text-center">
        Members
      </Typography>
      <Box>
        {newestUsers.map((u, i) => (
          <UserCard
            key={i}
            user={u}
            name={u.name}
            surname={u.surname}
            avatar={u.avatar}
            createdAt={u.createdAt}
            setcurrentUserOnChat={setUserID}
            isSelected={userID && userID._id === u._id}
          />
        ))}
      </Box>
    </Grid>
  );
}

export default UserListDashboard;
