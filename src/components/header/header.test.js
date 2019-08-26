import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('successfully renders 1 child component', () => {
    expect(wrapper.children()).toHaveLength(1);
  });
});
