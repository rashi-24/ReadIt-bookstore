import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <marquee width="100%" direction="left" height="150px" scrollamount="12">
      <h2 id="heading">Welcome to ReadIt Store</h2></marquee>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 15, background: "#A084CF" }}
          variant="contained"
        >
          <h4>View All products</h4>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
