import { useState } from "react";
import { styled } from "@mui/material";
import Popover from "@mui/material/Popover";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { WidgetNames } from "./data/ComponentsListData";
import Widget from "./Widget";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";

const ToolBoxItem = ({ item, onTakeItem }) => {
  return (
    <div className="toolbox__items__item" onClick={onTakeItem}>
      {item.i}
    </div>
  );
};

const ToolBox = ({
  items,
  width,
  onLayoutChange,
  onRemoveItem,
  componentListData,
}) => {
  return (
    <div className="toolbox">
      {/* <div className="toolbox__items">
        {items.map((item) => (
          <ToolBoxItem key={item.i} item={item} onTakeItem={onTakeItem} />
        ))}
      </div> */}
      <ResponsiveGridLayout
        className="layout"
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={60}
        width={width}
        onLayoutChange={onLayoutChange}
      >
        {items.map((key) => (
          <div
            key={key}
            className="widget"
            data-grid={{ w: 3, h: 2, x: 0, y: Infinity }}
          >
            <Widget
              id={key}
              onRemoveItem={onRemoveItem}
              component={componentListData[key]}
            />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default ToolBox;
