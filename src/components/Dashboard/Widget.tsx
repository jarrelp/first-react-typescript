import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { WidgetNames } from "./data/ComponentsListData";
import { IChartTypes } from "../../interfaces";
import AreaChart from "./customcharts/AreaChart"

// interface WidgetProps {
//   id: string
//   onRemoveItem: (itemId: string) => void
//   component: React.ReactNode
// }

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  header: {
    display: "flex",
    alignItems: "center",
    padding: "0.5rem"
  },
  spacer: {
    flexGrow: 1
  },
  body: {
    padding: "0.5rem",
    flexGrow: 1
  }
});

export default function Widget({ id, onRemoveItem, component: Item }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h6" gutterBottom>
          {WidgetNames[id]}
        </Typography>
        <div className={classes.spacer} />
        <IconButton aria-label="delete" onClick={() => onRemoveItem(id)}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </div>
      <div className={classes.body}>
        <Item />
      </div>
    </Card>
  );
}