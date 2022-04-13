import { useState } from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { withSize } from "react-sizeme";
import TopBar from "./TopBar";
import ToolBox from "./ToolBox";
import Widget from "./Widget";
import SpeedDialComponent from "./SpeedDialComponent";
import {
  ComponentListData,
  OriginalItems,
  InitialLayouts,
} from "./data/ComponentsListData";

const columns = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };

function Content({ size: { width } }) {
  const [items, setItems] = useState(OriginalItems);
  const [toolBoxItems, setToolBoxItems] = useState([]);
  const [layouts, setLayouts] = useState(
    getFromLS("layouts") || InitialLayouts
  );
  const [breakpoint, setBreakpoint] = useState(null);
  const [cols, setCols] = useState(columns);
  const onLayoutChange = (
    _: ReactGridLayout.Layout[],
    allLayouts: ReactGridLayout.Layouts
  ) => {
    setLayouts(allLayouts);
  };
  const onBreakpointChange = (breakpoint, cols) => {
    setBreakpoint(breakpoint);
    setCols(cols);
  };
  const onLayoutSave = () => {
    saveToLS("layouts", layouts);
  };
  const onRemoveItem = (itemId: string) => {
    setItems(items.filter((i) => i !== itemId));
  };
  const onAddItem = (itemId: string) => {
    setItems([...items, itemId]);
  };
  const onRemoveToolBoxItem = (itemId: string) => {
    setToolBoxItems(toolBoxItems.filter((i) => i !== itemId));
  };
  const onAddToolBoxItem = (itemId: string) => {
    setToolBoxItems([...toolBoxItems, itemId]);
  };

  const onTakeItem = (itemId: string) => {
    onRemoveItem(itemId);
    onAddToolBoxItem(itemId);
  };

  const onPutItem = (itemId: string) => {
    onRemoveToolBoxItem(itemId);
    onAddItem(itemId);
  };

  return (
    <div>
      <ToolBox
        items={toolBoxItems}
        width={width}
        onRemoveItem={onRemoveItem}
        onAddItem={onPutItem}
        componentListData={ComponentListData}
      />
      {/* <TopBar
        onLayoutSave={onLayoutSave}
        items={items}
        onRemoveItem={onTakeItem}
        onAddItem={onPutItem}
        originalItems={OriginalItems}
      /> */}
      <SpeedDialComponent
        onLayoutSave={onLayoutSave}
        items={items}
        onRemoveItem={onRemoveItem}
        onAddItem={onAddItem}
        originalItems={OriginalItems}
      />
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={cols}
        rowHeight={60}
        width={width}
        onLayoutChange={onLayoutChange}
      >
        {items.map((key) => (
          <div
            key={key}
            className="widget"
            data-grid={{
              w: 2,
              h: 3,
              x: (items.length * 2 - 2) % (cols.md || 12),
              y: Infinity,
            }}
          >
            <Widget
              id={key}
              onRemoveItem={onTakeItem}
              onAddItem={onPutItem}
              component={ComponentListData[key]}
            />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}

export default withSize({ refreshMode: "debounce", refreshRate: 60 })(Content);

function getFromLS(key: string) {
  let ls = [];
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8") ?? "") || {};
    } catch (e) {}
  }
  return ls[key];
}

function saveToLS(key: string, value: any) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value,
      })
    );
  }
}
