import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput
} from 'react-native';
import styles from './style';
import  saveData from '../../Redux/action';


@connect(state => ({
  
}),
  {
      saveData: saveData,
  })
export default class Signup extends Component {


	constructor(props) {
		super(props);
		this.state = {
		  firstName: '',
		  lastName: '',
		  email: '',
		  passwd:'',
		  isValidFistName:true,
		  isValidLastName: true,
		  isValidEmail: true,
		  isValidPasswd: true,
		  flag: true,
	      emailText: "",
	      passwordText: ""
		};
	}

	handle = () => {
		if (this.emptyValidation()) {
			var data ={
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				email: this.state.email,
				mobno: this.state.mobno,
				passwd: this.state.passwd
			}
			this.props.saveData(data);
	        this.props.navigator.push({
          		id: 'Details'
        	});
	    }
	    else {
	      return false;
	    }
	}


	emptyValidation() {
	    var emailFlag = "";
	    var passFlag = "";

	    if(this.state.firstName.length==0) {
	    	this.setState({ firstNameText: "First Name is a required feild" , isValidFistName:false,});
	      	emailFlag = false;
	    }
	    else {
	      this.setState({ firstNameText: "", isValidFistName:true, });
	      emailFlag = true;
	      
	    }
	    if(this.state.email.length==0) {
	      this.setState({ emailText: "Email is a required feild" , isValidEmail:false,});
	      passFlag = false;
	      
	    }
	    else {
	      this.setState({ emailText: "", isValidEmail:true, });
	      passFlag = true;
	      
	    }
	    if(this.state.passwd.length==0) {
	      this.setState({ passwdText: "Password is a required feild" , isValidPasswd:false,});
	      passFlag = false;
	      
	    }
	    else {
	      this.setState({ passwdText: "", isValidPasswd:true, });
	      passFlag = true;
	      
	    }
	    return emailFlag && passFlag;
	}



  	render() {
	    return (

	    	<View>
		    	<View style={styles.header}>
	        		<Text style={styles.headerText}>Register Here</Text>
			    </View>
		        <View style={styles.signupWrapper}>
					<TextInput 
						onChangeText={(firstName) => this.setState({firstName})}
						style={[this.state.isValidFistName ? styles.textInputStyle: styles.error]} 
						placeholder = 'First Name' 
						underlineColorAndroid='transparent'>
					</TextInput>
					<View>
						<Text style={styles.errMsg}>{this.state.firstNameText}</Text>
					</View>
					<TextInput 
						onChangeText={(lastName) => this.setState({lastName})}
						style={[this.state.isValidLastName ? styles.textInputStyle: styles.error]} 
						placeholder = 'Last Name' 
						underlineColorAndroid='transparent'>
					</TextInput>
					<TextInput 
						onChangeText={(email) => this.setState({email})}
						style={[this.state.isValidEmail ? styles.textInputStyle: styles.error]}
						placeholder = 'Email' 
						underlineColorAndroid='transparent'>
					</TextInput>
					<View>
						<Text style={styles.errMsg}>{this.state.emailText}</Text>
					</View>
					<TextInput 
						onChangeText={(mobno) => this.setState({mobno})}
						style={styles.textInputStyle}
						placeholder = 'Mobile No' 
						underlineColorAndroid='transparent'
						keyboardType = 'numeric'>
					</TextInput>
					<TextInput 
						onChangeText={(passwd) => this.setState({passwd})}
						style={[this.state.isValidPasswd ? styles.textInputStyle: styles.error]} 
						placeholder = 'Password' 
						secureTextEntry={true} 
						underlineColorAndroid='transparent'>
					</TextInput>
					<View>
						<Text style={styles.errMsg}>{this.state.passwdText}</Text>
					</View>
					<TouchableHighlight style={styles.signuptButton}  
					onPress={() => this.handle()}>
						<Text style={styles.buttonText}>Register</Text>
					</TouchableHighlight>
		        </View>
		    </View>
	    );
	}
}

