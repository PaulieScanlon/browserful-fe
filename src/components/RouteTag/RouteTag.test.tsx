import * as React from 'react';
import { shallow, mount } from 'enzyme';

import { RouteTag } from './RouteTag';
import { Button } from '../Button';

const onClick = event => {};

const shallowDefault = props => {
  return shallow(<RouteTag {...props} disableLink={true} />);
};

describe('<RouteTag />', () => {
  it('renders correctly', () => {
    const wrapper = shallowDefault({ route: '/' });
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders its children', () => {
    const wrapper = shallow(
      <RouteTag route="/">
        <Button onClick={event => onClick(event)} />
      </RouteTag>
    );
    const button = wrapper.find(Button);
    expect(button).toHaveLength(1);
  });
  it('passes the correct route on the route prop', () => {
    const wrapper = shallow(<RouteTag route="/" />);
    expect(wrapper.props().route).toEqual('/');
  });
  it('passes the correct params on the param prop', () => {
    const wrapper = shallow(<RouteTag route="/" params={{ id: 1 }} />);
    expect(wrapper.props().params).toEqual({ id: 1 });
  });
});
