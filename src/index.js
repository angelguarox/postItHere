import React, {StrictMode, Fragment} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import "bootswatch/dist/litera/bootstrap.min.css";
import Navigation from './components/Navigation';
import Home from './containers/Home';
import generateStore from './redux/store';

const App = () => {
	const store = generateStore();

	return(
		<Provider store={store}>
			<Fragment>
				<Navigation />
				<div className="container p-4">
					<Home />
				</div>
			</Fragment>
		</Provider>
	);
};

render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById('root')
);