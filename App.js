import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { AppLoading, Font } from 'react-native';
import ReduxThunk from 'redux-thunk';

import Navigator from './navigation/Navigator';
import ProductRedcer from './store/reducers/products';
import AuthRedcer from './store/reducers/auth';
import UserRedcer from './store/reducers/User';

const rootReducer = combineReducers({
	products: ProductRedcer,
	auth: AuthRedcer,
	user: UserRedcer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

// const fetchFonts = () => {
// 	return Font.loadAsync({
// 		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
// 		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
// 	});
// };

export default function App() {
	const [ fontLoaded, setFontLoaded ] = useState(false);

	// if (!fontLoaded) {
	// 	return (
	// 		<AppLoading
	// 			startAsync={fetchFonts}
	// 			onFinish={() => {
	// 				setFontLoaded(true);
	// 			}}
	// 		/>
	// 	);
	// }
	return (
		<Provider store={store}>
			<Navigator />
		</Provider>
	);
}
