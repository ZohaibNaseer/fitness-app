import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Platform } from 'react-native';

import Card from '../UI/Card';
import Colors from '../../constants/Colors';

const ChallengeListCard = (props) => {
	return (
		<Card style={styles.container} didSelect={props.didSelect}>
			<ImageBackground source={props.challengeImage} style={styles.backImageStyle} resizeMode="cover">
				<View style={styles.textContainer}>
					<Text style={styles.headerTextStyle}>{props.challengeName}</Text>
					<Text style={styles.subHeaderTextStyle}>{props.challengeDetail}</Text>
				</View>
			</ImageBackground>
		</Card>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 20,

		...Platform.select({
			ios: {
				shadowColor: 'black',
				shadowOffset: { height: 2, width: 0 },
				shadowOpacity: 1,
				shadowRadius: 5
			},
			android: {
				elevation: 8
			}
		})
	},
	backImageStyle: {
		width: '100%',
		height: 200
	},
	textContainer: {
		alignItems: 'center',
		marginTop: '24%',
		shadowColor: 'black'
	},
	headerTextStyle: {
		fontSize: 24,
		fontWeight: 'bold',
		lineHeight: 24,
		width: '50%',
		color: Colors.white
	},
	subHeaderTextStyle: {
		fontSize: 17,
		lineHeight: 24,
		fontWeight: 'bold',
		width: '50%',
		color: Colors.app_primary
	}
});

export default ChallengeListCard;
