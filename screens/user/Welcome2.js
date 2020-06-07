import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Colors from '../../constants/Colors';
import ButtonView from '../../components/UI/Button';
import Header from '../../components/UI/WelcomeHeader';
import HeightInput from '../../components/UI/heightInput';
import * as authActions from '../../store/actions/auth';

const Welcome2 = ({ navigation }) => {
	const [ kiloGrams, setKiloGrams ] = useState('');
	const [ grams, setGrams ] = useState('');
	const [ kg, setKg ] = useState('');

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
	const user = useSelector((state) => state.auth.user);

	const screenHandler = async () => {
		if (kiloGrams === '' || grams === '') {
			alert('All the filed are requried!');
			return;
		}
		if (kiloGrams > 120) {
			alert('Weight is less then 120kg');
			return;
		}
		if (grams >= 1000) {
			alert('Weight is less then 999g');
			return;
		}

		let action = authActions.signupcomplete(true);

		console.log('email : ' + user.email);

		let singupAction = authActions.signup(user.email, user.password);
		setError(null);
		setIsLoading(true);
		try {
			await dispatch(singupAction);

			//await dispatch(action);
			Alert.alert(
				'SignUp Successfully',
				'initialStateur account created successfully please verify your email and signin',
				[ { text: 'Ok', onPress: () => navigation.replace('login') } ]
			);
		} catch (err) {
			setError(err.message);
			setIsLoading(false);
		}

		setIsLoading(false);
	};

	return (
		<View style={styles.mainContainer}>
			<Header headerName="Welcome" />
			<View style={styles.bodyContainer}>
				<Text style={styles.headerStyle}>Weight</Text>
				<Text style={styles.textStyle}>Please add your weight </Text>
			</View>
			<View style={styles.heightInputContainer}>
				<HeightInput
					id="weight_kg"
					label="weight_kg"
					placeholder="0"
					keyboardType="numeric"
					autoCapitalize="none"
					required
					onChangeText={(val) => setKiloGrams(val)}
					initialValue=""
				/>
				<HeightInput
					id="weight_g"
					label="weight_g"
					placeholder="0"
					keyboardType="numeric"
					autoCapitalize="none"
					required
					onChangeText={(val) => setGrams(val)}
					initialValue=""
				/>
				<HeightInput
					id="kg"
					label="kg"
					placeholder="Kg"
					keyboardType="numeric"
					autoCapitalize="none"
					required
					onChangeText={(val) => setKg(val)}
					initialValue=""
				/>
			</View>
			<View style={styles.buttonContainer}>
				{isLoading ? (
					<ActivityIndicator size="large" color={Colors.white} />
				) : (
					<ButtonView style={{ marginBottom: '5%' }} buttonName="Continue" didSelect={screenHandler} />
				)}
			</View>

			{/* <View style={styles.container}>
				<Picker
					mode="dropdown"
					selectedValue={selectedValue}
					style={{
						height: 50,
						width: 150,
						backgroundColor: 'red',
						borderColor: 'green',
						borderWidth: 2,
						borderRadius: 15,
						textAlign: 'center',
						color: '#fff'
					}}
					onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
				>
					<Picker.Item label="Kg" value="kg" />
					<Picker.Item label="g" value="g" />
				</Picker>
				<Icon name="downcircle" size={25} color={Colors.white} style={{}} />
			</View> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 40
	},
	mainContainer: {
		flex: 1,
		backgroundColor: Colors.darkblue
	},
	bodyContainer: {
		marginTop: 64,
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

export default Welcome2;
