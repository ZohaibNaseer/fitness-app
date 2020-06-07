import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Button } from 'react-native';
import Video from 'react-native-video';

import Colors from '../../constants/Colors';
import DetailsCard from '../../components/UI/DetailsCard';

const WorkOutDetails = ({ navigation }) => {
	const screenHandler = async () => {
		alert('hiiiiii');
		// navigation.navigate('WeeklyChallenge');
	};

	return (
		<View style={styles.container}>
			<Video
				source={{
					uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
				}}
				style={{ width: '100%', height: '50%' }}
				controls={true}
				resizeMode="cover"
				fullscreen
				fullscreenAutorotate={true}
			/>
		</View>
		// <View style={styles.mainContainer}>
		// 	<ScrollView>
		// 		<DetailsCard
		// 			challengeImage={{
		// 				uri:
		// 					'https://image.shutterstock.com/image-photo/woman-exercise-workout-gym-fitness-600w-749969473.jpg'
		// 			}}
		// 			challengeName="CIRCUIT Body weight"
		// 			challengeDetail="6 Workout routines"
		// 			didSelect={screenHandler}
		// 		/>

		// 	</ScrollView>
		// </View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: Colors.darkblue
	},
	container: {
		flex: 1,

		alignItems: 'center',
		backgroundColor: Colors.darkblue
	}
});

export default WorkOutDetails;
