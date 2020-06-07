import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { colors } from 'react-native-elements';

const DietCard = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.viewStyle}>
				<Text style={styles.dietNameStyle}>BMR</Text>
				<Text style={styles.calPerDayStyle}>1349 Cal/day</Text>
			</View>
			<View style={styles.viewStyle}>
				<Text style={styles.dietNameStyle}>BMR</Text>
				<Text style={styles.calPerDayStyle}>1349 Cal/day</Text>
			</View>
			<View style={styles.viewStyle}>
				<Text style={styles.dietNameStyle}>BMR</Text>
				<Text style={styles.calPerDayStyle}>1349 Cal/day</Text>
			</View>
			<View style={styles.viewStyle}>
				<Text style={styles.dietNameStyle}>BMR</Text>
				<Text style={styles.calPerDayStyle}>1349 Cal/day</Text>
			</View>
			<View style={styles.lastViewStyle}>
				<Text style={styles.dietNameStyle}>BMR</Text>
				<Text style={styles.calPerDayStyle}>1349 Cal/day</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		height: 300,
		backgroundColor: Colors.black,
		marginTop: 20,
		marginLeft: '3%',
		marginRight: '3%',
		borderRadius: 15
	},
	viewStyle: {
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: Colors.white,
		marginLeft: '10%',
		marginRight: '10%'
	},
	lastViewStyle: {
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center',
		marginLeft: '10%',
		marginRight: '10%'
	},
	dietNameStyle: {
		color: Colors.white,
		fontSize: 16,
		lineHeight: 20
	},
	calPerDayStyle: {
		color: Colors.app_primary,
		fontSize: 16,
		lineHeight: 20,
		marginLeft: '55%'
	}
});

export default DietCard;
