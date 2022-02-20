import { getAll, get, create, update, remove, removeAll } from "./GenericService"
import { IChartDataInfo } from "../interfaces"

const path = "chart";

const getAllCharts = getAll(path);
const getChart = (id: any) => { get(path, id); };
const createChart = (data: IChartDataInfo) => { create(path, data); };
const updateChart = (id: any, data: IChartDataInfo) => { update(path, id, data); };
const removeChart = (id: any) => { remove(path, id); };
const removeAllCharts = () => { removeAll(path); };
// const findByName = (name: string) => {
//   return http.get<Array<IChartDataInfo>>(`/charts?name=${name}`);
// };
const ChartService = {
  getAllCharts,
  getChart,
  createChart,
  updateChart,
  removeChart,
  removeAllCharts,
  // findByName,
};
export default ChartService;