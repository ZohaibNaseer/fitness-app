import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';
import Colors from '../../constants/Colors';

const Button = (props) => {
	let TouchableCmp = TouchableOpacity;

	if (Platform.OS == 'android' && Platform.Version >= 21) {
		TouchableCmp = TouchableNativeFeedback;
	}

	return (
		<TouchableCmp onPress={props.didSelect}>
			<View style={{ ...styles.Buttoncontainer, ...props.style }}>
				<Text style={styles.ButtonStyles}>{props.buttonName}</Text>
			</View>
		</TouchableCmp>
	);
};

const styles = StyleSheet.create({
	Buttoncontainer: {
		justifyContent: 'center',
		marginLeft: '12%',
		marginRight: '12%',
		padding: 15,
		height: 50,
		backgroundColor: Colors.app_primary,
		borderRadius: 15
	},
	ButtonStyles: {
		color: Colors.white,
		fontSize: 16,
		lineHeight: 16,
		textAlign: 'center'
	}
});

export default Button;
