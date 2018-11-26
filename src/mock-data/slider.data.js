import { RangeSlider } from '../components/RangeSlider';
import { colours } from '../theme';
import { action } from '@storybook/addon-actions';

export const sliderData = [
  {
    title: 'By Date',
    component: () => <RangeSlider min={1970} max={2018} steps={8} />
  },
  {
    title: 'By Usage',
    component: () => (
      <RangeSlider min={1} max={10} steps={1} sliderColour={colours.teal} />
    )
  },
  {
    title: 'By Era',
    component: () => (
      <RangeSlider min={1} max={100} steps={10} sliderColour={colours.blue} />
    )
  }
];
