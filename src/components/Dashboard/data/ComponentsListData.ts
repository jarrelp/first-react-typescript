import { IComponentsList } from "../../../interfaces";
import { IChartInfos } from "../../../interfaces";

import LineChart from "../customcharts/LineChart";
import AreaChart from "../customcharts/AreaChart";
import BarChart from "../customcharts/BarChart";
import ScatterChart from "../customcharts/ScatterChart";

// export const ComponentsListData: IComponentsList[] = [
//   {
//     name: "a", 
//     charttype: "Line Chart"
//   },
//   {
//     name: "b", 
//     charttype: "Area Chart"
//   },
//   {
//     name: "c", 
//     charttype: "Bar Chart"
//   },
//   {
//     name: "d", 
//     charttype: "Scatter Chart"
//   },
//   {
//     name: "e", 
//     charttype: "Scatter Chart"
//   },
//   {
//     name: "f", 
//     charttype: "Scatter Chart"
//   }
// ];

export const WidgetNames = {
  a: 'Line Chart',
  b: 'Area Chart',
  c: 'Bar Chart',
  d: 'Scatter Chart',
  e: 'Line Chart',
  f: 'Bar Chart'
};

export const ComponentListData = {
  a: LineChart,
  b: AreaChart,
  c: BarChart,
  d: ScatterChart,
  e: LineChart,
  f: BarChart
};

export const OriginalItems = ["a", "b", "c", "d", "e", "f"];

export const InitialLayouts: IChartInfos = {
  chartinfos: [
    [ "a", 6, 6, 0, 0, false, false ],
    [ "b", 6, 6, 6, 0, false, false ],
    [ "c", 6, 6, 6, 6, false, false ],
    [ "d", 6, 6, 12, 6, false, false ],
    [ "e", 6, 6, 12, 12, false, false ],
    [ "f", 6, 6, 18, 12, false, false ]
  ]
};
