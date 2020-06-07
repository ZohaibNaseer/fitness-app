import React, { useState, useEffect } from 'react';
import {
	Text,
	View,
	SafeAreaView,
	Image,
	ActivityIndicator,
	StyleSheet,
	ScrollView,
	Platform,
	ImageBackground
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';

import * as authActions from '../store/actions/auth';

import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../screens/AppScreens/Home';
import ChallengeDetails from '../screens/AppScreens/ChallengeDetails';
import WeeklyChallenge from '../screens/AppScreens/WeeklyChallenge';
import WorkOut from '../screens/AppScreens/WorkOut';
import DetailScreen from '../screens/AppScreens/DetailScreen';
import WorkOutDetails from '../screens/AppScreens/WorkOutDetails';

import MenuComponent from '../components/UI/MenuComponent';

import Colors from '../constants/Colors';

const CustomerDrawerContent = (props) => {
	const { navigation } = props;
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState();

	const dispatch = useDispatch();

	useEffect(
		() => {
			if (error) {
				Alert.alert('An Error Occurred', error, [ { text: 'Okay' } ]);
			}
		},
		[ error ]
	);

	const authHandler = async () => {
		let action = authActions.signout(false);

		setError(null);
		setIsLoading(true);
		try {
			await dispatch(action);
		} catch (err) {
			setError(err.message);
			setIsLoading(false);
		}
		setIsLoading(false);
	};

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: Colors.darkblue,
				borderBottomRightRadius: 15,
				borderTopRightRadius: 15
			}}
		>
			<View
				style={{
					alignItems: 'center',
					borderTopRightRadius: 15,

					justifyContent: 'center'
				}}
			>
				<ImageBackground
					source={{
						uri:
							'https://image.shutterstock.com/z/stock-photo-close-up-of-young-muscular-man-lifting-weights-over-dark-background-153788108.jpg'
					}}
					style={styles.backImageStyle}
					resizeMode="cover"
				>
					<View style={styles.textContainer}>
						<Image
							resizeMode="contain"
							source={require('../assets/person.png')}
							style={{ height: 80, width: 80, backgroundColor: '#97ACC9', borderRadius: 10 }}
						/>
						<Text style={styles.headerTextStyle}>Zohaib</Text>
						<Text style={styles.subHeaderTextStyle}>@Helo every one</Text>
					</View>
				</ImageBackground>
			</View>
			<ScrollView>
				<View style={{ margin: 10 }}>
					<MenuComponent
						didSelect={() => navigation.navigate('Home')}
						iconName={Platform.OS === 'android' ? 'md-home' : 'ios-home'}
						menuName="Home"
					/>
					<MenuComponent
						didSelect={() => navigation.navigate('DetailScreen')}
						iconName={Platform.OS === 'android' ? 'md-person' : 'ios-person'}
						menuName="My Profile"
					/>
					<MenuComponent
						didSelect={() => navigation.navigate('DetailScreen')}
						iconName={Platform.OS === 'android' ? 'md-notifications' : 'ios-notifications'}
						menuName="Notifications"
					/>
					<MenuComponent
						didSelect={() => navigation.navigate('DetailScreen')}
						iconName={Platform.OS === 'android' ? 'md-calendar' : 'ios-calendar'}
						menuName="Subscriptions"
					/>

					<MenuComponent
						style={{ color: Colors.secondaryTextColor }}
						// didSelect={() => navigation.navigate('DetailScreen')}
						menuName="About Us"
					/>
					<MenuComponent
						style={{ color: Colors.secondaryTextColor }}
						// didSelect={() => navigation.navigate('DetailScreen')}
						menuName="Privacy Policy"
					/>
					<MenuComponent
						style={{ color: Colors.secondaryTextColor }}
						// didSelect={() => navigation.navigate('DetailScreen')}
						menuName="Help"
					/>

					{isLoading ? (
						<ActivityIndicator size="large" color={Colors.white} />
					) : (
						<MenuComponent
							style={{ color: Colors.secondaryTextColor }}
							didSelect={authHandler}
							menuName="Log Out"
						/>
					)}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	backImageStyle: {
		width: '100%',
		height: 230,

		backgroundColor: 'blue'
	},
	textContainer: {
		marginTop: '32%',
		marginLeft: '8%',
		shadowColor: 'red'
	},
	headerTextStyle: {
		fontSize: 24,
		lineHeight: 24,
		width: '50%',
		marginTop: '4%',
		color: Colors.white
	},
	subHeaderTextStyle: {
		fontSize: 17,
		lineHeight: 24,

		color: Colors.white
	}
});

const headerStyle = () => {
	return {
		drawerLockMode: 'locked-closed',

		headerTitleAlign: 'center',
		// animationEnabled: false,
		headerStyle: {
			backgroundColor: Colors.darkblue
		},
		headerTintColor: Colors.app_primary,
		headerTitleStyle: {
			fontWeight: 'bold'
		}
	};
};

const homeHeaderStyle = (navigation) => {
	return {
		headerTitleAlign: 'center',
		// animationEnabled: false,
		headerLeft: () => (
			<Text onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 15 }}>
				<Icon name={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'} size={30} color={Colors.app_primary} />
			</Text>
		),
		headerStyle: {
			backgroundColor: Colors.darkblue
		},
		headerTintColor: Colors.app_primary,
		headerTitleStyle: {
			fontWeight: 'bold'
		}
	};
};

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainScreen = ({ navigation }) => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={Home} options={homeHeaderStyle(navigation)} />
			<Stack.Screen name="ChallengeDetails" component={ChallengeDetails} options={headerStyle} />
			<Stack.Screen name="WeeklyChallenge" component={WeeklyChallenge} options={headerStyle} />
			<Stack.Screen name="WorkOut" component={WorkOut} options={headerStyle} />
			<Stack.Screen name="DetailScreen" component={DetailScreen} options={headerStyle} />
			<Stack.Screen name="WorkOutDetails" component={WorkOutDetails} options={headerStyle} />
		</Stack.Navigator>
	);
};

const AppStock = ({ navigation }) => {
	return (
		<Drawer.Navigator
			initialRouteName="Home"
			drawerContent={(navigation) => <CustomerDrawerContent {...navigation} />}
		>
			<Drawer.Screen name="MainScreen" component={MainScreen} navigation={navigation} />
			<Drawer.Screen name="MainScreen1" component={MainScreen} />
		</Drawer.Navigator>
	);
};

export default AppStock;
