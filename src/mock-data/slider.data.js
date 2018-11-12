import { RangeSlider } from '../components/RangeSlider';
import { colours } from '../theme';
import { action } from '@storybook/addon-actions';

const onChange = value => {
  action('onChange')('min: ', value[0], 'max: ', value[1]);
};

export const sliderData = [
  {
    title: 'By Date',
    component: () => (
      <RangeSlider
        min={1970}
        max={2018}
        steps={8}
        onChange={value => onChange(value)}
      />
    )
  },
  {
    title: 'By Usage',
    component: () => (
      <RangeSlider
        min={1}
        max={10}
        steps={1}
        sliderColour={colours.teal}
        onChange={value => onChange(value)}
      />
    )
  },
  {
    title: 'By Era',
    component: () => (
      <RangeSlider
        min={1}
        max={100}
        steps={10}
        sliderColour={colours.blue}
        onChange={value => onChange(value)}
      />
    )
  }
];
