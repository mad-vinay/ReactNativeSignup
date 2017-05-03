import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
} from 'react-native';
import styles from './style';
@connect(state => ({
  details:state.data,
}),
  {
  })
export default class Details extends Component {
  	render() {
	    return (

	    	<View style={styles.scrollv}>
		    	<Text>{this.props.details.firstName}</Text>
		    	<Text>{this.props.details.lastName}</Text>
		    	<Text>{this.props.details.email}</Text>
		    	<Text>{this.props.details.mobno}</Text>
		    	<Text>{this.props.details.passwd}</Text>
	    	</View>
	    );
	}
}

