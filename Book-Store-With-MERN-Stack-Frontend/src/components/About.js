import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <div className="abt">
        <h1>This is a Web Application for Bookstore Management System.</h1><br></br> <h3>In this the user can control the stock of the books. The user can add, 
          delete and update the book stock.
          <br></br>This is a CRUD Application using MERN Stack.
          <br></br>By Rashi Sharma</h3>
        </div>
          
      </Box>
    </div>
  );
};

export default About;
