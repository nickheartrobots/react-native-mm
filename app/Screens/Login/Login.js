/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	Text,
	View,
	Button,
	TextInput
} from 'react-native';
import styles from './styles'

export default class Login extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Login Screen
				</Text>
				<Button 
					title="Login"
					onPress={() => this.props.navigation.navigate('Home')}
				/>
			</View>
		);
	}
}
