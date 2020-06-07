import React from 'react';
import { View, Text, TextInput, Alert, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const heightInput = (props) => {
	const textChangeHandler = (text) => {
		let newText = '';
		let numbers = '0123456789';

		for (var i = 0; i < text.length; i++) {
			if (numbers.indexOf(text[i]) > -1) {
				newText = newText + text[i];
			} else {
				Alert.alert('An Error Occurred', 'please enter positive numbers only', [ { text: 'Okay' } ]);
			}
		}
	};

	return (
		<View style={styles.inputContainer}>
			<TextInput
				{...props}
				placeholderTextColor={Colors.white}
				// onChangeText={textChangeHandler}
				style={styles.input}
			/>
			<Text style={styles.inputTextStyle}>{props.heightInputText}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		marginLeft: '2%',
		marginRight: '2%'
	},
	inputTextStyle: {
		textAlign: 'center',
		color: Colors.white,
		fontSize: 16,
		lineHeight: 16,
		marginTop: 12
	},
	input: {
		marginTop: 16,
		paddingHorizontal: 20,
		color: Colors.white,
		height: 50,
		fontSize: 16,
		lineHeight: 18,
		textAlign: 'center',
		backgroundColor: Colors.black,
		borderRadius: 10
	}
});

export default heightInput;
