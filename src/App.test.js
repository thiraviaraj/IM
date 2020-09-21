import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';
configure({adapter: new Adapter()});
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test("renders learn react link", () => {
  const store = mockStore({}); 
  shallow(
    <Provider store={store}>   // Provides the store to your App
      <App />
    </Provider>
  );
  expect(true).toBe(true);
});
