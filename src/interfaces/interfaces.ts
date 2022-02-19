export interface IChartDataInfo{
  name: string
  uv: number
  pv: number
  amt: number
}

export interface IThreeDimensionalCoordinate{
  x: number
  y: number
  z: number
}

export interface IComponentsList{
  name: string
  charttype: string
}

export interface IChartInfos{
  chartinfos:
  [name: string,
  width: number,
  height: number,
  x: number,
  y: number,
  moved: boolean,
  movable: boolean][]
}