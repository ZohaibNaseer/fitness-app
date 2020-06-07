import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, ImageBackground } from 'react-native';

import Colors from '../../constants/Colors';
import DetailsCard from '../../components/UI/DetailsCard';
import DetailWorkoutCard from '../../components/UI/DetailWorkoutCard';

const DetailScreen = ({ navigation }) => {
	const screenHandler = async () => {
		() => navigation.navigate('WorkOutDetails');
	};

	return (
		<View style={styles.mainContainer}>
			<ScrollView>
				<DetailsCard
					challengeImage={{
						uri:
							'https://image.shutterstock.com/image-photo/woman-exercise-workout-gym-fitness-600w-749969473.jpg'
					}}
					challengeName="CIRCUIT Body weight"
					challengeDetail="6 Workout routines"
				/>
				<DetailWorkoutCard
					//didSelect={screenHandler}
					didSelect={() => navigation.navigate('WorkOutDetails')}
					iconName={'dumbbell'}
					tileName="CIRCUIT Body weight 1 "
					titleDescription="Squat jump x 15, Side lunge x 15, Press up x 15, Burpee x 15. X 3 rounds Mountain climbers x 30, Bench hops x 30. X 3 rounds Dips x 15, Glute bridge x 15. X 3 rounds"
				/>
				<DetailWorkoutCard
					// didSelect={() => navigation.navigate('DetailScreen')}
					iconName={'dumbbell'}
					tileName="CIRCUIT Body weight 2 "
					titleDescription="Squat jump x 15, Side lunge x 15, Press up x 15, Burpee x 15. X 3 rounds Mountain climbers x 30, Bench hops x 30. X 3 rounds Dips x 15, Glute bridge x 15. X 3 rounds"
				/>
				<DetailWorkoutCard
					// didSelect={() => navigation.navigate('DetailScreen')}
					iconName={'dumbbell'}
					tileName="CIRCUIT Body weight 3 "
					titleDescription="Squat jump x 15, Side lunge x 15, Press up x 15, Burpee x 15. X 3 rounds Mountain climbers x 30, Bench hops x 30. X 3 rounds Dips x 15, Glute bridge x 15. X 3 rounds"
				/>
				<DetailWorkoutCard
					// didSelect={() => navigation.navigate('DetailScreen')}
					iconName={'dumbbell'}
					tileName="CIRCUIT Body weight 4 "
					titleDescription="Squat jump x 15, Side lunge x 15, Press up x 15, Burpee x 15. X 3 rounds Mountain climbers x 30, Bench hops x 30. X 3 rounds Dips x 15, Glute bridge x 15. X 3 rounds"
				/>
				<DetailWorkoutCard
					// didSelect={() => navigation.navigate('DetailScreen')}
					iconName={'dumbbell'}
					tileName="CIRCUIT Body weight 5 "
					titleDescription="Squat jump x 15, Side lunge x 15, Press up x 15, Burpee x 15. X 3 rounds Mountain climbers x 30, Bench hops x 30. X 3 rounds Dips x 15, Glute bridge x 15. X 3 rounds"
				/>
				<DetailWorkoutCard
					// didSelect={() => navigation.navigate('DetailScreen')}
					iconName={'dumbbell'}
					tileName="CIRCUIT Body weight 6 "
					titleDescription="Squat jump x 15, Side lunge x 15, Press up x 15, Burpee x 15. X 3 rounds Mountain climbers x 30, Bench hops x 30. X 3 rounds Dips x 15, Glute bridge x 15. X 3 rounds"
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

export default DetailScreen;
