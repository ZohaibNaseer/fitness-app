import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import Colors from '../../constants/Colors';
import ChallengeListCard from '../../components/UI/ChallengeListCard';

const Welcome1 = ({ navigation }) => {
	const screenHandler = async () => {
		navigation.navigate('WeeklyChallenge');
	};

	return (
		<View style={styles.mainContainer}>
			<ScrollView>
				<ChallengeListCard
					challengeImage={{
						uri:
							'https://image.shutterstock.com/image-photo/woman-exercise-workout-gym-fitness-600w-749969473.jpg'
					}}
					challengeName="28 Days Challenge"
					challengeDetail="Five Workout Series"
					didSelect={screenHandler}
				/>
				<ChallengeListCard
					challengeImage={{
						uri:
							'https://image.shutterstock.com/image-photo/brawny-barechested-young-man-lifting-600w-104866778.jpg'
					}}
					challengeName="Challenge Category"
					challengeDetail="Five Workout Series"
				/>
				<ChallengeListCard
					challengeImage={{
						uri: 'https://image.shutterstock.com/image-photo/exercising-gym-600w-1016717500.jpg'
					}}
					challengeName="Program Category "
					challengeDetail="Check our one month and 12 week program"
				/>
				<ChallengeListCard
					challengeImage={{
						uri: 'https://image.shutterstock.com/image-photo/training-open-air-600w-1065641894.jpg'
					}}
					challengeName="Nutrition Category"
					challengeDetail="Three nutrition programs"
				/>
				<ChallengeListCard
					challengeImage={{
						uri: 'https://image.shutterstock.com/image-photo/fit-man-using-laptop-600w-1050144236.jpg'
					}}
					challengeName="Online Comunity"
					challengeDetail="Link to our Facebook group for guidance "
				/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: Colors.darkblue
	}
});

export default Welcome1;
