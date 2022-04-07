import React from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SaveIcon from "@mui/icons-material/Save";
import { AddList } from "./AddList";
import { IComponentsList } from "../../interfaces";

import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

// interface TopBarProps {
//   onLayoutSave: (event: React.MouseEvent<HTMLElement>) => void
//   items: string[]
//   onRemoveItem: (itemId: string) => void
//   onAddItem: (itemId: string) => void
//   originalItems?: () => string[]
// };

const CardWrapper = styled("div")(({ theme }) => ({
  // padding: theme.spacing(1),
  // width: "100%",
  // display: "flex",
  // justifyContent: "flex-end"
}));

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  // position: "absolute",
  // bottom: theme.spacing(2),
  // right: theme.spacing(2),
}));

const StyledBox = styled(Box)(({ theme }) => ({
  height: 320,
  transform: "translateZ(0px)",
  flexGrow: 1,
  position: "fixed",
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: 1,
}));

export default function SpeedDialComponent({
  onLayoutSave,
  items,
  onRemoveItem,
  onAddItem,
  originalItems,
}) {
  const actions = [
    { icon: <SaveIcon />, name: "Save", onClick: () => onLayoutSave() },
    {
      icon: <AddCircleOutlineIcon />,
      name: "Add",
    },
  ];

  return (
    // <div>

    //   <AddList
    //     items={items}
    //     onRemoveItem={onRemoveItem}
    //     onAddItem={onAddItem}
    //     originalItems={originalItems}
    //   />
    //   <IconButton aria-label="save" onClick={onLayoutSave}>
    //     <SaveIcon />
    //   </IconButton>
    // </div>
    <StyledBox
    // sx={{
    //   height: 320,
    //   transform: "translateZ(0px)",
    //   flexGrow: 1,
    //   position: "fixed",
    //   bottom: "0",
    //   right: "15",
    // }}
    >
      <StyledSpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: "absolute", bottom: 0, right: 0 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        direction="left"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.onClick}
          />
        ))}
      </StyledSpeedDial>
    </StyledBox>
  );
}
