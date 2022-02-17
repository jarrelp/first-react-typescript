import { ComponentsList } from "../interfaces/interfaces";
import { ChartInfos } from "../interfaces/interfaces";

export const ComponentsListData: ComponentsList[] = [
  {
    name: "a", 
    charttype: "Line Chart"
  },
  {
    name: "b", 
    charttype: "Area Chart"
  },
  {
    name: "c", 
    charttype: "Bar Chart"
  },
  {
    name: "d", 
    charttype: "Scatter Chart"
  },
  {
    name: "e", 
    charttype: "Scatter Chart"
  },
  {
    name: "f", 
    charttype: "Scatter Chart"
  }
];

export function OriginalItems(): string[] {
  var namelist = [];
  for(var i = 0; i < ComponentsListData.length; i++) namelist.push(ComponentsListData[i].name);
  return namelist;
}

export const InitialLayouts: ChartInfos = {
  chartinfos: [
    [ "a", 6, 6, 0, 0, false, false ],
    [ "b", 6, 6, 6, 0, false, false ],
    [ "c", 6, 6, 6, 6, false, false ],
    [ "d", 6, 6, 12, 6, false, false ],
    [ "e", 6, 6, 12, 12, false, false ],
    [ "f", 6, 6, 18, 12, false, false ]
  ]
};
