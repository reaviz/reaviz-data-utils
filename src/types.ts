import type bigInt from "big-integer";

export type ChartInternalDataTypes = number | string | Date;

export type ChartDataTypes = ChartInternalDataTypes | bigInt.BigInteger;

export interface BaseChartDataShape<T> {
  key: ChartDataTypes;
  data: T;
  target?: T;
  metadata?: any;
  id?: string;
}

export type ChartShallowDataShape<
  T = ChartDataTypes | [ChartDataTypes, ChartDataTypes]
> = BaseChartDataShape<T>;

export type ChartNestedDataShape = BaseChartDataShape<
  ChartShallowDataShape<ChartDataTypes>[] | ChartNestedDataShape[]
>;

export type ChartDataShape = ChartNestedDataShape | ChartShallowDataShape;
