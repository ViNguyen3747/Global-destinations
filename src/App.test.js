import React from 'react';
import ReactDOM from 'react-dom';
import Map from './map';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Map />, div);
});