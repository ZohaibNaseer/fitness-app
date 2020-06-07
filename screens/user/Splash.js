import React from 'react';
import { StatusBar, View, Image, StyleSheet } from 'react-native';
import colors from '../../constants/Colors';

export default class main extends React.Component {
	componentDidMount() {
		setTimeout(() => {
			this.props.navigation.replace('TutorialScreen');
		}, 1000);
	}
	render() {
		return (
			<View style={styles.container}>
				<StatusBar hidden={true} />
				<Image source={require('../../assets/logo.png')} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.black
	}
});
