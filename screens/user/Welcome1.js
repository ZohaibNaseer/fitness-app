import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../../store/actions/auth';

import Colors from '../../constants/Colors';
import ButtonView from '../../components/UI/Button';
import Header from '../../components/UI/WelcomeHeader';
import HeightInput from '../../components/UI/heightInput';

const Welcome1 = ({ navigation }) => {
	const [ feet, setFeet ] = useState('');
	const [ inches, setInches ] = useState('');
	const [ cm, setCm ] = useState('');

	const dispatch = useDispatch();

	const user = useSelector((state) => state.auth.user);

	const screenHandler = () => {
		if (feet === '' || inches === '' || cm === '') {
			alert('All the filed are requried!');
			return;
		}
		if (feet > 10) {
			alert('feet is less then 10f');
			return;
		}
		if (inches >= 12) {
			alert('Inches is less then 12in');
			return;
		}
		if (cm >= 2.54) {
			alert('centimeters is less then 2.54');
			return;
		}

		dispatch(authActions.updateUserModel(user.email, user.password, user.is_male, feet, inches, cm));
		navigation.navigate('Welcome2');
	};

	return (
		<View style={styles.mainContainer}>
			<Header headerName="Welcome" />
			<View style={styles.bodyContainer}>
				<Text style={styles.headerStyle}>Height</Text>
				<Text style={styles.textStyle}>Please select your Height </Text>
			</View>
			<View style={styles.heightInputContainer}>
				<HeightInput
					id="feet"
					label="feet"
					placeholder="0"
					keyboardType="numeric"
					autoCapitalize="none"
					required
					onChangeText={(val) => setFeet(val)}
					initialValue=""
					heightInputText="Feets"
				/>
				<HeightInput
					id="inches"
					label="inches"
					placeholder="0"
					keyboardType="numeric"
					autoCapitalize="none"
					required
					onChangeText={(val) => setInches(val)}
					initialValue=""
					heightInputText="Inches"
				/>
				<HeightInput
					id="cm"
					label="cm"
					placeholder="0"
					keyboardType="numeric"
					autoCapitalize="none"
					required
					onChangeText={(val) => setCm(val)}
					initialValue=""
					heightInputText="cm"
				/>
			</View>
			<View style={styles.buttonContainer}>
				<ButtonView buttonName="Continue" didSelect={screenHandler} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
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
		marginTop: 64
	}
});

export default Welcome1;
