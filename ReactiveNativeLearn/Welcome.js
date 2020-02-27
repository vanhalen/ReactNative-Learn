import React, { Component } from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class Welcome extends Component {
	state = {
		logo: 'Calculei'
	}

	alternar = () =>{
		this.setState({
			logo: this.state.logo ? '' : 'Calculei'
		})
	}

	render(){
		return (
			<View style={styles.container}>
				<Text style={styles.texto}>{this.props.titulo}</Text>
				<Text style={styles.logo}>
					{this.props.logo}
					{this.state.logo}
					<Text style={styles.slogan}>
						{this.props.slogan}
					</Text>
				</Text>
				<TouchableOpacity onPress={this.alternar}>
					<Text>Próximo</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
