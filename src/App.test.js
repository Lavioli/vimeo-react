import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils'
import { shallow, mount, shallowWithConnect } from 'enzyme';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './redux/store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
	  <Provider store={store}>
	  	<App />
	  </Provider>, div);
});

let component;

describe('<App />', () => {
	beforeEach(() => {
	   component = mount(<App store={store} />);
	 });

	it('should render the header logo text', () => {
	  const header = <header id="logo">React Vimeo</header>;
	  expect(component.contains(header)).toEqual(true);
	});
})

