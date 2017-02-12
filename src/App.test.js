import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils'
import { shallow, mount, render } from 'enzyme';
import { Provider } from 'react-redux';
import store from './redux/store';
import chai from 'chai';
import {expect} from 'chai';
import App from './components/App';
import Video from './components/Video';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
	  <Provider store={store}>
	  	<App />
	  </Provider>, div);
});

let component,
	wrapper;


describe('<App />', () => {
	beforeEach(() => {
	   component = mount(<App store={store} />); //mounts children as well
	   wrapper = shallow(<App store={store} /> ); //no children involved
	 });

	it('should render the header logo text', () => {
	  const header = <header id="logo">React Vimeo</header>;
	  expect(component.contains(header)).to.equal(true);
	});

	it('should render the div containing className results wrapper', () => {
		expect(component.find('.results_wrapper').exists()).to.equal(true);
	});

	it('should render the Video components for the channel', () => {
		expect(component.find('Video').exists()).to.equal(true);
	});

	it('should render 20 Video components from the json data', () => {
		expect(component.find('Video')).to.have.length(20);
	})

});

