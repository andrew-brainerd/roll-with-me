import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  const render = () => shallow(
    <App />
  );

  it('should render', () => {
    const component = render();
    expect(component).toBeTruthy();
  });
});
