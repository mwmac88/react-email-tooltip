import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('successfully renders 3 child components', () => {
    expect(wrapper.children()).toHaveLength(3);
  });
});
