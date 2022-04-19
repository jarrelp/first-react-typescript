import React from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SaveIcon from "@mui/icons-material/Save";
import { AddList } from "./AddList";
import { IComponentsList } from "../../interfaces";

// interface TopBarProps {
//   onLayoutSave: (event: React.MouseEvent<HTMLElement>) => void
//   items: string[]
//   onRemoveItem: (itemId: string) => void
//   onAddItem: (itemId: string) => void
//   originalItems?: () => string[]
// };

const CardWrapper = styled(Card)(({ theme }) => ({
  padding: theme.spacing(1),
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
}));

export default function TopBar({
  onLayoutSave,
  items,
  onRemoveItem,
  onAddItem,
  originalItems,
}) {
  return (
    <>
      <CardWrapper>
        <AddList
          items={items}
          onRemoveItem={onRemoveItem}
          onAddItem={onAddItem}
          originalItems={originalItems}
        />
        <IconButton aria-label="save" onClick={onLayoutSave}>
          <SaveIcon />
        </IconButton>
      </CardWrapper>
    </>
  );
}
