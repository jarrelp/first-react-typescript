import AreaChart from "../components/Dashboard/customcharts/AreaChart";
import BarChart from "../components/Dashboard/customcharts/BarChart";
import LineChart from "../components/Dashboard/customcharts/LineChart";
import ScatterChart from "../components/Dashboard/customcharts/ScatterChart";

export type IChartTypes = typeof AreaChart | typeof BarChart | typeof LineChart | typeof ScatterChart;