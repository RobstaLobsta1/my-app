import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
  MenuItem, // Import MenuItem for Select component
  Select, // Import Select component
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import { mockDataInvoices } from "../../data/mockData";

const spendingCategories = [
  'Food',
  'Transportation',
  'Housing',
  'Entertainment',
  'Utilities',
  'Others',
];

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Mock data for the expenses
  const [expenses, setExpenses] = useState(mockDataInvoices);

  // State to hold user input for expense details
  const [expenseName, setExpenseName] = useState('');
  const [expenseValue, setExpenseValue] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('');

  const handleNameChange = (event) => {
    setExpenseName(event.target.value);
  };

  const handleValueChange = (event) => {
    setExpenseValue(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setExpenseCategory(event.target.value);
  };

  const handleAddExpense = () => {
    // Creating a new expense object with the entered values
    const newExpense = {
      id: expenses.length + 1,
      name: expenseName,
      cost: parseFloat(expenseValue),
      category: expenseCategory,
      // You might add other fields like date, etc., as needed
    };

    // Adding the new expense to the expenses array
    setExpenses([...expenses, newExpense]);

    // Clearing the input fields after adding an expense
    setExpenseName('');
    setExpenseValue('');
    setExpenseCategory('');
  };

  const handleDeleteExpense = (id) => {
    // Filtering out the expense with the given ID
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'cost', headerName: 'Cost', flex: 1 },
    { field: 'category', headerName: 'Category', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={() => handleDeleteExpense(params.row.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="EXPENSES" subtitle="List of Expenses" />
      {/* Input fields for adding new expenses */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        m="20px 0"
      >
        <TextField
          label="Expense Name"
          value={expenseName}
          onChange={handleNameChange}
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          label="Expense Value"
          value={expenseValue}
          onChange={handleValueChange}
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <Select
          value={expenseCategory}
          onChange={handleCategoryChange}
          variant="outlined"
          displayEmpty
          fullWidth
          renderValue={(selected) => (selected ? selected : 'Category')}
        >
          <MenuItem disabled value="">
            Category
          </MenuItem>
          {spendingCategories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
        <Button variant="contained" color="primary" onClick={handleAddExpense}>
          Add Expense
        </Button>
      </Box>

      {/* DataGrid to display the expenses */}
      <Box
        height="calc(100vh - 280px)"
        sx={{
          // Styles for DataGrid...
        }}
      >
        <DataGrid
          rows={expenses}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Invoices;
