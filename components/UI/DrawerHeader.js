import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import Colors from '../../constants/Colors';

const CustomerHeader = ({ title, isHome, navigation }) => {
	return (
		<View style={{ flexDirection: 'row', height: 50, backgroundColor: Colors.headerColor }}>
			<View style={{ flex: 1, justifyContent: 'center' }}>
				{isHome ? (
					<TouchableOpacity activeOpacity={1} onPress={() => navigation.openDrawer()}>
						<Image
							style={{ height: 30, width: 30, marginLeft: 5 }}
							source={require('../../assets/menu.png')}
							resizeMode="contain"
						/>
					</TouchableOpacity>
				) : (
					<TouchableOpacity
						style={{ flexDirection: 'row', alignItems: 'center' }}
						onPress={() => navigation.goBack()}
					>
						<Image
							style={{ height: 25, width: 25, marginLeft: 5 }}
							source={require('../../assets/backbtn.png')}
							resizeMode="contain"
						/>
						<Text>Back</Text>
					</TouchableOpacity>
				)}
			</View>
			<View style={{ flex: 1.5, justifyContent: 'center' }}>
				<Text style={{ textAlign: 'center' }}>{title}</Text>
			</View>
			<View style={{ flex: 1 }} />
		</View>
	);
};

export default CustomerHeader;
