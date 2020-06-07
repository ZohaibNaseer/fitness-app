import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Colors from '../../constants/Colors';

const DetailWorkoutCard = (props) => {
	let TouchableCmp = TouchableOpacity;

	if (Platform.OS == 'android' && Platform.Version >= 21) {
		TouchableCmp = TouchableNativeFeedback;
	}

	return (
		<TouchableCmp style={styles.container} onPress={props.didSelect} useForeground>
			<View>
				<View style={styles.menuStyle}>
					<Icon name={props.iconName} size={40} color={Colors.white} />
					<View style={styles.descriptionContainer}>
						<Text style={{ ...styles.titleTextStyles, ...props.style }}>{props.tileName}</Text>
						<Text numberOfLines={4} style={{ ...styles.descriptionTextStyles, ...props.style }}>
							{props.titleDescription}
						</Text>
					</View>
				</View>
			</View>
		</TouchableCmp>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.darkblue
	},
	menuStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: '8%',
		marginLeft: '8%'
	},
	descriptionContainer: {
		flexDirection: 'column',
		marginLeft: '8%',

		width: '80%'
	},
	titleTextStyles: {
		color: Colors.white,
		fontWeight: 'bold',

		fontSize: 16,
		lineHeight: 16
	},
	descriptionTextStyles: {
		color: Colors.app_secondaryTextColor,
		marginTop: '4%',
		fontSize: 14,
		lineHeight: 16
	}
});

export default DetailWorkoutCard;
