import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const TdeeDataCard = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.body}>
				<Text style={styles.textStyle}>{props.perDayData}</Text>
				<Text style={styles.subTextStyle}>{props.caloriesperDayData}</Text>
			</View>
			<View style={styles.borderLeftStyle}>
				<Text style={styles.textStyle}>{props.perweekData}</Text>
				<Text style={styles.subTextStyle}>{props.caloriesperweekData}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		height: 120,
		marginTop: 10,
		borderColor: Colors.white,
		borderRadius: 15,
		marginLeft: '8%',
		marginRight: '8%',
		borderWidth: 1
	},
	body: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textStyle: {
		color: Colors.white,
		fontSize: 48,
		lineHeight: 48
	},
	subTextStyle: {
		color: Colors.white,
		fontSize: 12,
		lineHeight: 12
	},
	borderLeftStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderLeftWidth: 1,
		borderColor: Colors.white
	}
});

export default TdeeDataCard;
