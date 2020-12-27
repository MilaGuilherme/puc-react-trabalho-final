import { render, screen } from '@testing-library/react';
import { Resources } from './resources';

import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from '../../reducers';

test('renders resources link', () => {
    const store = createStore(reducers);
    render(    
      <Provider store={store}>
      <BrowserRouter>
        <Resources />
      </BrowserRouter>
    </Provider>)
  const linkElement = screen.getByRole("list");
  expect(linkElement).toBeInTheDocument();
});
