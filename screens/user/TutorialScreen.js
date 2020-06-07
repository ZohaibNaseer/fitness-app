import React, { useState } from 'react';
import { View, StyleSheet, Settings } from 'react-native';
import { Pages } from 'react-native-pages';

import PageView from '../../components/UI/PageView';
import ButtonView from '../../components/UI/Button';

import Colors from '../../constants/Colors';

export default function Welcome1({ navigation }) {
	const [ isButtonShow, setIsButtonShow ] = useState(false);
	// Settings.set();

	const screenHandler = async () => {
		navigation.replace('login');
	};

	return (
		<View style={styles.screenContainer}>
			<View style={{ flex: 1, marginBottom: 30 }}>
				<Pages
					style={styles.PagerStyle}
					indicatorColor={Colors.app_primary}
					indicatorOpacity={0.54}
					onScrollEnd={(index) => {
						if (index === 2) {
							setIsButtonShow(true);
							return;
						}
						setIsButtonShow(false);
						console.log(index);
					}}
				>
					<PageView
						backImageSrc={require('../../assets/back.png')}
						imageSrc={require('../../assets/workout.png')}
						titleText="DAILY WORKOUT ROUTINE"
						detailText={
							'Lorem ipsum dolor sit amet,\n consectetuer adipiscing elit,\n sed diam nonummy nibh euismod \n tincidunt.'
						}
					/>
					<PageView
						backImageSrc={require('../../assets/back.png')}
						imageSrc={require('../../assets/kettlebells.png')}
						titleText="CALM AND COMFORT"
						detailText={
							'Lorem ipsum dolor sit amet,\n consectetuer adipiscing elit, \nsed diam nonummy nibh euismod \ntincidunt.'
						}
					/>
					<PageView
						backImageSrc={require('../../assets/back.png')}
						imageSrc={require('../../assets/shoes.png')}
						titleText={'FREE WORKOUT TRAINING \n FOR 30 DAYS'}
						detailText={
							'Lorem ipsum dolor sit amet,\nconsectetuer adipiscing elit, \nsed diam nonummy nibh euismod \ntincidunt.'
						}
					/>
				</Pages>
			</View>
			<View />
			{isButtonShow ? (
				<ButtonView style={{ marginBottom: '5%' }} buttonName="Continuee" didSelect={screenHandler} />
			) : null}
		</View>
	);
}

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		backgroundColor: Colors.darkblue
	}
});
