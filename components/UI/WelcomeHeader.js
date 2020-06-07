import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const WelcomeHeader = (props) => {
	return (
		<View style={styles.headerContainer}>
			<Text style={styles.header}>{props.headerName}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		alignItems: 'center',
		height: '10%',
		justifyContent: 'center',
		backgroundColor: Colors.headerColor
	},
	header: {
		color: Colors.app_primary,
		fontSize: 24,
		lineHeight: 32
	}
});

export default WelcomeHeader;
