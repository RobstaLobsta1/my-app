import React, { useState, useEffect } from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { getExpenses } from "../../src/lib/pocketbase";

const SpendByCategoryTable = () => {
  const [expenses, setExpenses] = useState([]);

  // Fetch data from 'expenses' collection in PocketBase
  useEffect(() => {
    getExpenses().then((res) => setExpenses(res));
  }, []);

  // Calculate total spending by category
  const spendingByCategory = expenses.reduce((acc, expense) => {
    if (expense.category in acc) {
      acc[expense.category] += expense.amount;
    } else {
      acc[expense.category] = expense.amount;
    }
    return acc;
  }, {});

  // Convert spending by category to an array of objects
  const spendData = Object.entries(spendingByCategory).map(([category, amount]) => ({
    category,
    amount,
  }));

  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {spendData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.category}</TableCell>
                <TableCell align="right">${row.amount.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SpendByCategoryTable;
