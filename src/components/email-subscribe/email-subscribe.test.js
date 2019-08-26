import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import EmailSubscribe from './index';

describe('EmailSubscribe Component', () => {
  let wrapper;
  let styledEmailSubscribe;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = shallow(<EmailSubscribe visible={false} />);
    styledEmailSubscribe = renderer.create(<EmailSubscribe visibile={false} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has default props as false on initial load', () => {
    expect(wrapper.props().visible).toBe(false);
  });

  it('does not display on initial load', () => {
    const styledEmailSubscribeJSON = styledEmailSubscribe.toJSON();
    expect(styledEmailSubscribeJSON).toHaveStyleRule('display', 'none');
    expect(styledEmailSubscribeJSON).toMatchSnapshot();
  })

  describe('Show EmailSubscribe component', () => {
    beforeEach(() => {
      wrapper = shallow(<EmailSubscribe visible={true} />);
      styledEmailSubscribe = renderer.create(<EmailSubscribe visible={true} />);
    });

    it('has visible prop set as true', () => {
      expect(wrapper.props().visible).toBe(true);
    });

    it('displays the component successfully', () => {
      const styledEmailSubscribeJSON = styledEmailSubscribe.toJSON();
      expect(styledEmailSubscribeJSON).toHaveStyleRule('display', 'block');
      expect(styledEmailSubscribeJSON).toMatchSnapshot();
    })
  });
});
