import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../../constants/Colors';

const MenuComponent = (props) => {
	let TouchableCmp = TouchableOpacity;

	if (Platform.OS == 'android' && Platform.Version >= 21) {
		TouchableCmp = TouchableNativeFeedback;
	}

	return (
		<TouchableCmp style={styles.container} onPress={props.didSelect} useForeground>
			<View>
				<View style={styles.menuStyle}>
					<Icon name={props.iconName} size={40} color={Colors.white} />
					<Text style={{ ...styles.textStyles, ...props.style }}>{props.menuName}</Text>
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
	textStyles: {
		color: Colors.white,
		marginLeft: '3%',
		fontSize: 18,
		lineHeight: 24
	}
});

export default MenuComponent;
