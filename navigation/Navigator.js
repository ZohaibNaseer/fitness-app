import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import Authstack from '../Route/AuthStack';
import Appstack from '../Route/AppStack';

const RootStack = createStackNavigator();

const navOptionHandler = () => ({
	headerShown: false
});

const App = ({ auth }) => {
	console.log(auth);

	const [ userToken, setUserToken ] = useState(null);
	const [ isSignupComplete, setIsSignupComplete ] = useState(false);

	const onChangeToken = (value) => {
		setUserToken(value.token);
		setIsSignupComplete(value.isSignupComplete);
	};

	useEffect(
		() => {
			if (auth.isSignupComplete) {
				onChangeToken(auth);
			}
		},
		[ auth.isSignupComplete ]
	);

	return (
		<NavigationContainer>
			<RootStack.Navigator headerMode="none">
				{isSignupComplete ? (
					<RootStack.Screen name="Appstack" component={Appstack} />
				) : (
					<RootStack.Screen name="Authstack" component={Authstack} options={navOptionHandler} />
				)}
			</RootStack.Navigator>
		</NavigationContainer>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, null)(App);
