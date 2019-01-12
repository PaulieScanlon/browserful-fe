import { IData } from './DoughnutChart';

export const addFillToData = (data: Array<IData>) => {
  return data.map(data => {
    return {
      name: data.name,
      value: data.value,
      fill: data.fill,
      stroke: data.stroke
    };
  });
};
