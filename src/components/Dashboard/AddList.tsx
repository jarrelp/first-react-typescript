import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Popover from "@mui/material/Popover";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { ComponentsListData } from "./data/ComponentsListData";

interface TopBarProps {
  items: string[]
  onRemoveItem: (itemId: string) => void
  onAddItem: (itemId: string) => void
  originalItems?: () => string[]
};


const useStyles = makeStyles((theme) => ({
  popup: {
    padding: theme.spacing(2)
  }
}));

export const AddList = ({
  items,
  onRemoveItem,
  onAddItem,
  originalItems
}: TopBarProps) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleChange = (e: any) => {
    if (e.target.checked) {
      onAddItem(e.target.name);
    } else {
      onRemoveItem(e.target.name);
    }
  };

  return (
    <>
      <IconButton aria-label="add" onClick={handleClick} aria-describedby={id}>
        <AddCircleOutlineIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <div className={classes.popup}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Select Widgets</FormLabel>
            <FormGroup>
              {originalItems.map((i: any) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={items.includes(i)}
                      onChange={handleChange}
                      name={i}
                    />
                  }
                  label={ComponentsListData[i]}
                  key={i}
                />
              ))}
            </FormGroup>
          </FormControl>
        </div>
      </Popover>
    </>
  );
}
