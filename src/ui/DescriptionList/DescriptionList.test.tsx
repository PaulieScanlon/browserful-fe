import * as React from 'react';
import { shallow } from 'enzyme';

import { DescriptionList, DescriptionTerm, DescriptionDescription } from './';

describe('DescriptionList', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <DescriptionList>
        <DescriptionTerm>Lorem Ipsum</DescriptionTerm>
        <DescriptionDescription>Dolor sit</DescriptionDescription>
      </DescriptionList>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
