import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import { withRouter } from "react-router";
import Avatar from '@mui/material/Avatar';
import { Typography } from "@mui/material";


const logoURL =
  "https://res.cloudinary.com/koulin/image/upload/v1634995832/OneHealth/Website/logoOH_fskezn.svg";

const avatar = `https://cdn1.vectorstock.com/i/thumb-large/44/35/receptionist-girl-vector-11694435.jpg`

function NavigationBar({ history }) {

 

 

  const changeHistory = (path) => {
    history.push(path);
  };
  return (
    <Navbar
      id="topNavigation"
      bg="transparent"
      className="w-100 d-flex justify-content-between align-items-center"
      expand="sm"
    >
      <div
        className="logo"
        onClick={() => changeHistory("/")}
      >
        <img src={logoURL} className="py-3 pr-3" alt="logo" />
        <>OneHealth</>
      </div>

     
        <div className="d-flex justify-content-center"
        >

          <Avatar data-hj-suppress src={avatar} alt={'Valery Kashina'} className="cursor-pointer" />
          <Typography data-hj-suppress className="d-none ml-3 d-md-flex align-items-center cursor-pointer">{`Valery Kashina`}</Typography>

        </div>
      
      
    </Navbar>
  );
}

export default withRouter(NavigationBar);
