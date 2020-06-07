import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import Colors from '../../constants/Colors';
import ChallengeListCard from '../../components/UI/ChallengeListCard';

const WeeklyChallenge = ({ navigation }) => {
	const screenHandler = async () => {
		navigation.navigate('WorkOut');
	};

	return (
		<View style={styles.mainContainer}>
			{/* <DrawerHeader title="28 Days Challenge" isHome={false} navigation={navigation} /> */}
			<ScrollView>
				<ChallengeListCard
					challengeImage={{
						uri:
							'https://image.shutterstock.com/image-photo/woman-exercise-workout-gym-fitness-600w-749969473.jpg'
					}}
					challengeName="Week 1- 4 workouts 
                    drip feed each week"
					challengeDetail="Five Workout Series"
					didSelect={screenHandler}
				/>
				<ChallengeListCard
					challengeImage={{
						uri:
							'https://image.shutterstock.com/image-photo/brawny-barechested-young-man-lifting-600w-104866778.jpg'
					}}
					challengeName="Body weight workout"
					challengeDetail="Five Workout Series"
				/>
				<ChallengeListCard
					challengeImage={{
						uri: 'https://image.shutterstock.com/image-photo/exercising-gym-600w-1016717500.jpg'
					}}
					challengeName="
                    Dumbbell Workouts "
					challengeDetail="Check our one month and 12 week program"
				/>
				<ChallengeListCard
					challengeImage={{
						uri: 'https://image.shutterstock.com/image-photo/training-open-air-600w-1065641894.jpg'
					}}
					challengeName="Online Kettlebell Workout"
					challengeDetail="Three nutrition programs"
				/>
				<ChallengeListCard
					challengeImage={{
						uri: 'https://image.shutterstock.com/image-photo/fit-man-using-laptop-600w-1050144236.jpg'
					}}
					challengeName="
                    Functional Warm up"
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

export default WeeklyChallenge;
