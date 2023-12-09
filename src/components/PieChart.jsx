import React, { useState, useEffect } from "react";
import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { getExpenses } from "../lib/pocketbase";

const PieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [expensesData, setExpensesData] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const expenses = await getExpenses();
      setExpensesData(expenses);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  // Format expenses data for the pie chart
  const groupedData = expensesData.reduce((acc, expense) => {
    if (!acc[expense.category]) {
      acc[expense.category] = 0;
    }
    acc[expense.category] += parseFloat(expense.amount);
    return acc;
  }, {});

  const totalAmount = Object.values(groupedData).reduce(
    (total, amount) => total + amount,
    0
  );

  // Format expenses data for the pie chart
  const formattedData = Object.entries(groupedData).map(([category, amount]) => ({
    id: category, // Unique ID for each expense
    label: category, 
    value: amount, 
    percentage: ((amount / totalAmount) * 100).toFixed(2) + "%",
  }));

  return (
      <ResponsivePie
        data={formattedData}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: colors.grey[100],
              },
            },
            legend: {
              text: {
                fill: colors.grey[100],
              },
            },
            ticks: {
              line: {
                stroke: colors.grey[100],
                strokeWidth: 1,
              },
              text: {
                fill: colors.grey[100],
              },
            },
          },
          legends: {
            text: {
              fill: colors.grey[100],
            },
          },
        }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={colors.grey[100]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        enableArcLabels={true}
        arcLabelsRadiusOffset={0.4}
        arcLabelsSkipAngle={7}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        legends={[
          {
            anchor: "center",
            direction: "column",
            justify: false,
            translateX: 0,
            translateY: 175,
            itemsSpacing: 3,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
            formatter: (legend) => `${legend.label} (${legend.percentage})`,
          },
        ]}
      />
  );
};

export default PieChart;
