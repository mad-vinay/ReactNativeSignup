import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import styles from './style';
@connect(state => ({
  details:state.data,
}),
  {
  })
export default class Details extends Component {

	onPress = (id) => {
        this.props.navigator.push({
      		id: 'Signup'
    	});
    }

  	render() {
	    return (
	    	<View>
				<View style={styles.header}>
		        	<Text style={styles.headerText}>Registered Details</Text>
				</View>
		    	<View style={styles.popultedDetails}>
			    	<Text style={styles.details}>Fist Name: {this.props.details.firstName}</Text>
			    	<Text style={styles.details}>Last Name: {this.props.details.lastName}</Text>
			    	<Text style={styles.details}>Email id: {this.props.details.email}</Text>
			    	<Text style={styles.details}>Mobile Number: {this.props.details.mobno}</Text>
			    	<Text style={styles.details}>Password: {this.props.details.passwd}</Text>
		    	</View>
		    	<TouchableHighlight style={styles.backBtn} onPress={() => this.onPress()}>
		    		<Text style={styles.backBtnText}>back</Text>
				</TouchableHighlight>
	    	</View>
	    );
	}
}

