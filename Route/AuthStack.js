import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../screens/user/Splash';
import TutorialScreen from '../screens/user/TutorialScreen';
import login from '../screens/user/Login';
import Signup from '../screens/user/Signup';
import Welcome from '../screens/user/Welcome';
import Welcome1 from '../screens/user/Welcome1';
import Welcome2 from '../screens/user/Welcome2';
import Welcome3 from '../screens/user/Welcome3';

const stack = createStackNavigator();

export default function AuthStock() {
	return (
		<stack.Navigator>
			<stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
			<stack.Screen name="TutorialScreen" component={TutorialScreen} options={{ headerShown: false }} />
			<stack.Screen name="login" component={login} options={{ headerShown: false }} />
			<stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
			<stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
			<stack.Screen name="Welcome1" component={Welcome1} options={{ headerShown: false }} />
			<stack.Screen name="Welcome2" component={Welcome2} options={{ headerShown: false }} />
			<stack.Screen name="Welcome3" component={Welcome3} options={{ headerShown: false }} />
		</stack.Navigator>
	);
}
