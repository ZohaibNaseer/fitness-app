import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import Colors from '../../constants/Colors';
import ChallengeListCard from '../../components/UI/ChallengeListCard';

const WorkOut = ({ navigation }) => {
	const screenHandler = async () => {
		navigation.navigate('DetailScreen');
	};

	return (
		<View style={styles.mainContainer}>
			<ScrollView>
				<ChallengeListCard
					challengeImage={{
						uri:
							'https://image.shutterstock.com/image-photo/woman-exercise-workout-gym-fitness-600w-749969473.jpg'
					}}
					challengeName="CIRCUIT Body 
                    weight "
					didSelect={screenHandler}
				/>
				<ChallengeListCard
					challengeImage={{
						uri:
							'https://image.shutterstock.com/image-photo/brawny-barechested-young-man-lifting-600w-104866778.jpg'
					}}
					challengeName="
                    CHIPPERS"
				/>
				<ChallengeListCard
					challengeImage={{
						uri: 'https://image.shutterstock.com/image-photo/exercising-gym-600w-1016717500.jpg'
					}}
					challengeName="LADDERS  "
				/>
				<ChallengeListCard
					challengeImage={{
						uri: 'https://image.shutterstock.com/image-photo/training-open-air-600w-1065641894.jpg'
					}}
					challengeName="SUPER SET 
                    or TRI SET "
				/>
				<ChallengeListCard
					challengeImage={{
						uri: 'https://image.shutterstock.com/image-photo/fit-man-using-laptop-600w-1050144236.jpg'
					}}
					challengeName="INTERVALS "
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

export default WorkOut;
