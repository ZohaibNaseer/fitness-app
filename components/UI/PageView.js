import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const PageView = (props) => {
	return (
		<View style={styles.viewPagerStyle}>
			<ImageBackground style={{ width: '95%' }} source={props.backImageSrc} resizeMode="contain">
				<Image
					style={{ marginLeft: 80, marginTop: '20%', width: '45%' }}
					source={props.imageSrc}
					resizeMode="contain"
				/>
			</ImageBackground>
			<View style={styles.textStyle}>
				<Text style={styles.headingStyle}>{props.titleText}</Text>
				<Text style={styles.paragraphStyle}>{props.detailText}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	viewPagerStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 64
	},
	textStyle: {
		marginBottom: 128
	},
	headingStyle: {
		textAlign: 'center',
		color: Colors.white,
		fontSize: 27,
		lineHeight: 32
	},
	paragraphStyle: {
		textAlign: 'center',
		color: Colors.white,
		fontSize: 16,
		lineHeight: 22,
		marginTop: 16
	}
});

export default PageView;
