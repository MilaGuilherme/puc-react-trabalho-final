import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from '../../reducers';

import App from './app';

test('renders app file', () => {
  const store = createStore(reducers);

  render(    
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
  const element = screen.getByText(/Dnd 5e/i);
  expect(element).toBeInTheDocument();
});
