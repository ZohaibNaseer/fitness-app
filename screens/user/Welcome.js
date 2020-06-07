import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../../store/actions/auth';

import Colors from '../../constants/Colors';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import ButtonView from '../../components/UI/Button';
import Header from '../../components/UI/WelcomeHeader';

const Welcome = ({ navigation }) => {
	const dispatch = useDispatch();

	const [ isMale, setIsMale ] = useState(true);
	// const [ isFemale, setIsFemale ] = useState(false);

	const user = useSelector((state) => state.auth.user);

	const screenHandler = () => {
		dispatch(authActions.updateUserModel(user.email, user.password, isMale));
		navigation.navigate('Welcome1');
	};

	return (
		<View style={styles.mainContainer}>
			<Header headerName="Welcome" />
			<View style={styles.bodyContainer}>
				<Text style={styles.headerStyle}>Gender</Text>
				<Text style={styles.textStyle}>Please select your gender</Text>
			</View>
			<View>
				<CheckBox
					title="Male    "
					iconRight
					containerStyle={styles.checkBoxContainerStyle}
					checkedIcon={<Icon name="checkcircle" size={25} color={Colors.app_primary} />}
					uncheckedIcon={<Icon name="checkcircle" size={25} color={Colors.uncheckedColor} />}
					checked={isMale}
					textStyle={styles.textStyles}
					onPress={() => setIsMale((prevState) => !prevState)}
				/>
				<CheckBox
					title="Female"
					iconRight
					containerStyle={styles.checkBoxContainerStyle}
					checkedIcon={<Icon name="checkcircle" size={25} color={Colors.app_primary} />}
					uncheckedIcon={<Icon name="checkcircle" size={25} color={Colors.uncheckedColor} />}
					checked={!isMale}
					textStyle={styles.textStyles}
					onPress={() => setIsMale((prevState) => !prevState)}
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
	textStyles: {
		color: Colors.white,
		fontSize: 16,
		lineHeight: 20,
		marginRight: '70%'
	},
	checkBoxContainerStyle: {
		justifyContent: 'center',
		marginTop: 8,
		padding: 15,
		marginLeft: '5%',
		marginRight: '5%',
		height: 60,
		backgroundColor: Colors.black,
		borderColor: Colors.black,
		borderRadius: 10
	},
	buttonContainer: {
		marginTop: 64
	}
});

export default Welcome;
