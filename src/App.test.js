import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';

describe('App', () => {
	it('should render without crashing', () => {
	  const renderer = new ShallowRenderer();
		renderer.render(<App />);
	});
})