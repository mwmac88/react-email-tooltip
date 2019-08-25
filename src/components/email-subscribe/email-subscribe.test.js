import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import EmailSubscribe from './index';

describe('EmailSubscribe Component', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = shallow(<EmailSubscribe visible={false} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has default visible prop', () => {
    expect(wrapper.props().visible).toBe(false);
  });
})



