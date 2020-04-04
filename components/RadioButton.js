import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class RadioButton extends Component {
	state = {
		value: null,
	};

	render() {
		const { PROP } = this.props;
		const { value } = this.state;

		return (
			<View style={styles.radioWrapper}>
				{PROP.map(res => {
					return (
						<View key={res.key} style={styles.radioContainer}>
							
							<TouchableOpacity
								style={styles.radioCircle}
								onPress={() => {
									this.setState({
										value: res.key,
									});
								}}>
                                  {value === res.key && <View style={styles.selectedRb} />}
							</TouchableOpacity>
                            <Text style={styles.radioText}>{res.text}</Text>
						</View>
					);
				})}
                {/* <Text> Selected: {this.state.value} </Text> */}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	radioWrapper: {
		// width: '100%',
		flexDirection: "row", 
		// height: '50%',
		// alignContent: "stretch",
		// flexWrap: 'wrap'
	},
	radioContainer: {
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
        height: 56,
	},
    radioText: {
        fontSize: 10,
        color: '#231D38',
        fontWeight: '700',
        marginTop: 13,
    },
	radioCircle: {
		height: 30,
		width: 30,
		borderRadius: 100,
		borderWidth: 1,
		borderColor: '#745FB8',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 15,
		height: 15,
		borderRadius: 50,
		backgroundColor: '#745FB8',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});