import React from "react";
import { Box, Grid } from "@mui/material";
import PieChart from "../../components/PieChart";
import SpendByCategoryTable from "../../components/SpendTable";
import Expenses from "../../components/Expenses"
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box m="5px">
      {/* HEADER */}
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

      {/* Displaying PieChart and SpendByCategoryTable side by side */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box height="450px"> {/* Set an appropriate height */}
            <PieChart />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box height="450px"> {/* Set an appropriate height */}
            <Expenses />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;





