import React, { Component } from 'react';

import {
  TextInput
} from 'react-native';
import styles from './style';

export default class TextInputValidation extends Component {


	constructor(props) {
		super(props);
		this.state = {
		  text: '',
		  isValidEmail:true
		};
	}

	handle(){
		if(this.state.text.length==0){
			this.setState({
	           isValidEmail:false
	        })
		}
	}


  	render() {
	    return (
			<TextInput 
				onChangeText={(text) => this.setState({text})}
				onChange= {this.handle()}
				style={[this.state.isValidEmail?styles.textInputStyle: styles.error]} 
				underlineColorAndroid='transparent'>
			</TextInput>
	    );
	}
}

