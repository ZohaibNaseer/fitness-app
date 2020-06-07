import React, { useState, useReducer, useCallback, useEffect } from 'react';
import {
	ScrollView,
	View,
	Text,
	Image,
	KeyboardAvoidingView,
	StyleSheet,
	Alert,
	AsyncStorage,
	ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';

import Input from '../../components/UI/Input';
import ButtonView from '../../components/UI/Button';
import Colors from '../../constants/Colors';
import * as authActions from '../../store/actions/auth';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
	if (action.type === FORM_INPUT_UPDATE) {
		const updateValues = {
			...state.inputValues,
			[action.input]: action.value
		};

		const updatedValidities = {
			...state.inputValidities,
			[action.input]: action.isValid
		};
		let updatedFormIsValid = true;
		for (const key in updatedValidities) {
			updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
		}
		return {
			formIsValid: updatedFormIsValid,
			inputValidities: updatedValidities,
			inputValues: updateValues
		};
	}
	return state;
};

const test = (props) => {
	console.log(props);
	const { navigation } = props;
	const [ isSignup, setIsSignup ] = useState(false);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState();

	const dispatch = useDispatch();

	const [ formState, dispatchFormState ] = useReducer(formReducer, {
		inputValues: {
			email: '',
			password: '',
			re_password: ''
		},
		inputValidities: {
			email: false,
			password: false,
			re_password: false
		},
		formIsValid: false
	});

	useEffect(
		() => {
			if (error) {
				Alert.alert('An Error Occurred', error, [ { text: 'Okay' } ]);
			}
		},
		[ error ]
	);

	const authHandler = () => {
		let action;

		if (formState.inputValues.password != formState.inputValues.re_password) {
			Alert.alert('An Error Occurred', 'Password does`t match', [ { text: 'Okay' } ]);
			return;
		} else {
			action = authActions.updateUserModel(formState.inputValues.email, formState.inputValues.password, 0);
		}
		//authActions.signup(formState.inputValues.email, formState.inputValues.password);

		// setError(null);
		// setIsLoading(true);
		// try {
		// await
		dispatch(action);
		navigation.replace('Welcome');
		// } catch (err) {
		// setError(err.message);
		// setIsLoading(false);
		// }

		// setIsLoading(false);
	};

	const inputChangeHandler = useCallback(
		(inputIdentifier, inputValue, inputValidity) => {
			dispatchFormState({
				type: FORM_INPUT_UPDATE,
				value: inputValue,
				isValid: inputValidity,
				input: inputIdentifier
			});
		},
		[ dispatchFormState ]
	);

	return (
		<View style={styles.MainContainer}>
			<ScrollView style={styles.Input}>
				<View style={{ alignItems: 'center' }}>
					<Text style={styles.header}>Signup</Text>
					<Image source={require('../../assets/logo.png')} style={styles.img} />
				</View>

				<View>
					<Input
						id="email"
						label="E-Mail"
						keyboardType="email-address"
						placeholder="Email"
						autoCapitalize="none"
						required
						email
						errorText="Please enter a valid email address."
						onInputChange={inputChangeHandler}
						initialValue=""
					/>

					<Input
						id="password"
						label="Password"
						keyboardType="default"
						placeholder="Password"
						secureTextEntry
						required
						minLength={8}
						autoCapitalize="none"
						errorText="Please enter 8 characters for valid password."
						onInputChange={inputChangeHandler}
						initialValue=""
					/>

					<Input
						id="re_password"
						label="re_Password"
						keyboardType="default"
						placeholder="Password"
						secureTextEntry
						required
						minLength={8}
						autoCapitalize="none"
						errorText="Please enter 8 characters for valid password."
						onInputChange={inputChangeHandler}
						initialValue=""
					/>
				</View>

				<View>
					{isLoading ? (
						<ActivityIndicator size="large" color={Colors.white} />
					) : (
						<ButtonView style={styles.Buttoncontainer} buttonName="SignUp" didSelect={authHandler} />
					)}
				</View>

				<View>
					<Text
						style={{ margin: 10, textAlign: 'right', color: '#fff' }}
						onPress={() => navigation.replace('login')}
					>
						Have an account?
					</Text>
				</View>

				<View style={styles.dashstyle} />

				<View style={styles.signupwithfb}>
					<Icon name="facebook" size={25} color={Colors.app_primary} style={styles.iconstyle} />
					<Text style={styles.signupTextStyle}>SIGNUP WITH FACEBOOK</Text>
				</View>
				<View style={styles.signupwithmail}>
					<Icon
						style={{ backgroundColor: 'red' }}
						name="gmail"
						size={25}
						color={Colors.white}
						style={styles.iconstyle}
					/>
					<Text style={styles.signupTextStyle2}>SIGNUP WITH EMAIL</Text>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	MainContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.black
	},
	Input: {
		width: '80%'
	},
	header: {
		color: Colors.app_primary,
		textAlign: 'center',
		fontSize: 30,
		lineHeight: 32,
		marginTop: 32
	},
	img: {
		height: 150,
		width: 150
	},
	Buttoncontainer: {
		marginTop: 24,
		padding: 15,
		marginLeft: '5%',
		marginRight: '5%',
		height: 50,
		backgroundColor: Colors.app_primary,
		borderRadius: 10
	},
	ButtonStyles: {
		color: Colors.white,
		fontSize: 15,
		lineHeight: 17,
		textAlign: 'center'
	},
	dashstyle: {
		marginTop: 24,
		height: 5,
		marginLeft: '45%',
		marginRight: '45%',
		backgroundColor: Colors.dash
	},
	signupwithfb: {
		flexDirection: 'row',
		marginTop: 16,
		padding: 15,
		backgroundColor: Colors.white,
		borderRadius: 50
	},
	signupTextStyle: {
		color: Colors.black,
		fontSize: 10,
		lineHeight: 12,
		textAlignVertical: 'center',
		textAlign: 'center',
		marginLeft: 20
	},
	signupTextStyle2: {
		color: Colors.white,
		fontSize: 10,
		lineHeight: 12,
		textAlignVertical: 'center',
		textAlign: 'center',
		marginLeft: 20
	},
	signupwithmail: {
		flexDirection: 'row',
		marginTop: 16,
		padding: 15,
		backgroundColor: Colors.gray,
		borderRadius: 50
	},
	iconstyle: {
		marginLeft: 10
	}
});

export default test;
