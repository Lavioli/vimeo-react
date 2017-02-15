import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App';
import Video from './components/Video';
import * as vimeoResult from './redux/vimeo.json';

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

	it('should call component', () => {
		sinon.spy(App.prototype, 'componentDidMount');
		const wrapper = mount(<App store={store} />);
		expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
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
	});

	it('should props being passed down', () => {
		const wrapper = mount(<App video='video' store={store} />);
		expect(wrapper.prop('video')).to.equal('video');
		expect(wrapper.get(0).selector.props.channelData).to.have.length(20);
		expect(wrapper.get(0).selector.props.comments).to.equal(null);
		expect(wrapper.get(0).selector.props.error).to.equal(null);
	});
	
});

describe('<Video />', () => {
	beforeEach(() => {
		const result = vimeoResult[0];
		component = mount(<Video result={result} />);
	 });

	it('should render the div containing className card', () => {
		expect(component.find('.card').exists()).to.equal(true);
	});

	it('should render the a element with the url from result', () => {
		const url = (
			<a 
				className="card_url" 
				href={vimeoResult[0].url} 
				target="_blank">
				<img 
					className="card_img" 
					src={vimeoResult[0].thumbnail_large} 
					alt="thumbnail"
				/>
			</a>
		);
		expect(component.find('.card_url').exists()).to.equal(true);
		expect(component.contains(url)).to.equal(true);
	});


});

