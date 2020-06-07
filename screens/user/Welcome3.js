import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from '../../constants/Colors';
import ButtonView from '../../components/UI/Button';
import Header from '../../components/UI/WelcomeHeader';
import TdeeData from '../../components/UI/TdeeDataCard';
import DietCard from '../../components/UI/DietCard';

import User from '../../models/userModel';
import * as authActions from '../../store/actions/auth';
import * as authReducer from '../../store/reducers/auth';

const Welcome3 = ({ navigation }) => {
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState();

	useEffect(
		() => {
			if (error) {
				Alert.alert('An Error Occurred', error, [ { text: 'Okay' } ]);
			}
		},
		[ error ]
	);

	const dispatch = useDispatch();

	const screenHandler = async () => {
		let action = authActions.signupcomplete(true);
		let singupAction = authActions.signup(User.email, User.password);
		setError(null);
		setIsLoading(true);
		try {
			await dispatch(singupAction);
			let user = authReducer.user;
			console.log(user.email);

			//await dispatch(action);
			Alert.alert(
				'SignUp Successfully',
				'initialStateur account created successfully please verify your email and signin',
				[ { text: 'Okay', onPress: () => navigation.replace('login') } ]
			);
		} catch (err) {
			setError(err.message);
			setIsLoading(false);
		}

		// dispatch(action);
		setIsLoading(false);
	};

	return (
		<View style={styles.mainContainer}>
			<Header headerName="Your TDEE" />
			<ScrollView>
				<View style={styles.bodyContainer}>
					<Text style={styles.headerStyle}>Your TDEE</Text>
					<Text style={styles.textStyle}>According to your data </Text>
				</View>
				<TdeeData
					perDayData="1,855"
					caloriesperDayData="calories per day"
					perweekData="12,984"
					caloriesperweekData="calories per week"
				/>

				<Text
					style={{
						marginTop: 20,
						marginLeft: '3%',
						marginRight: '3%',
						color: Colors.textColor,
						fontSize: 12,
						lineHeight: 20
					}}
				>
					Based on your stats, the best estimate for your maintenance calories is 1,855 calories per day based
					on the Mifflin-St Jeor Formula, which is widely known to be the most accurate. The table below shows
					the difference if you were to have selected a different activity level.
				</Text>

				<DietCard />

				<View style={styles.buttonContainer}>
					{isLoading ? (
						<ActivityIndicator size="large" color={Colors.white} />
					) : (
						<ButtonView style={{ marginBottom: '5%' }} buttonName="Continue" didSelect={screenHandler} />
					)}
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: Colors.darkblue
	},
	bodyContainer: {
		marginTop: 16,
		marginLeft: '5%',
		marginBottom: 16
	},
	headerStyle: {
		color: Colors.white,
		fontSize: 20,
		fontWeight: 'bold',
		lineHeight: 27
	},
	textStyle: {
		color: Colors.white,
		fontSize: 15,
		lineHeight: 20
	},
	heightInputContainer: {
		flexDirection: 'row',
		marginLeft: '2%',
		marginRight: '2%',
		marginTop: 8
	},
	buttonContainer: {
		marginTop: 32
	}
});

export default Welcome3;
