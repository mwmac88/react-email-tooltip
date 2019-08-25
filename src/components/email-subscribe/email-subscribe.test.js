import React from 'react';
import ReactDOM from 'react-dom';
import EmailSubscribe from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmailSubscribe />, div);
  ReactDOM.unmountComponentAtNode(div);
});