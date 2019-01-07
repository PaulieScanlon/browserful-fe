import * as tinycolor from 'tinycolor2';

import { overrides } from '../../utils/matrix-utils/enums';

import { IData } from './DoughnutChart';

export const addFillToData = (data: Array<IData>, segmentColour: string) => {
  const treatmentColours = {
    [overrides.IS_INCLUDED]: tinycolor(segmentColour).toString(),
    [overrides.IS_EXCLUDED]: tinycolor(segmentColour)
      .setAlpha(0.5)
      .toString()
  };

  return data.map(data => {
    return {
      name: data.name,
      value: data.value,
      key: data.key,
      fill: treatmentColours[data.key]
    };
  });
};
