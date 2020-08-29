import React, { Component } from 'react';
import ProgressBar from './ProgressBar'
import '../css/UserDetails.css';

export default class UserDetails extends Component {
	state = {
		firstNameError: '',
		lastNameError: '',
		emailError: '',
		phoneNumberError: '',
		counterNext:0
	};

    progressbarState={
        bgcolor:'#6a1b9a',completed:'0'      
}
	continue = (event) => {
		event.preventDefault();
		this.props.nextStep();
	};
	handleValidation = () => {
		let firstNameError = '',
			lastNameError = '',
			emailError = '',
			phoneNumberError = '',
			regex = /[\D]/g;
		if (!this.props.values.firstName){
			firstNameError = 'firstname required';
		}
		if (!this.props.values.lastName){
			lastNameError = 'lastname required';
		}
		if (!this.props.values.email.includes('@')) {
			emailError = 'invalid email';
		}
		if (!this.props.values.email){
			emailError = 'email required';
		}
		if (!this.props.values.phone || this.props.values.phone.match(regex) || this.props.values.phone.length<10 || this.props.values.phone.length>10 ) {
			console.log('phone number error', phoneNumberError,this.props.values.phone.length);
			phoneNumberError = 'invalid phone number';
		}
        if (firstNameError || lastNameError || emailError || phoneNumberError) {
			this.setState({ firstNameError, lastNameError, emailError, phoneNumberError });
			return false;
        }
		return true;
	};
	handleSubmit = (event) => {
		event.preventDefault();
		const isValid = this.handleValidation();
		this.setState({
			counterNext:1
		})
		if(isValid) {
            return this.props.nextStep();
    };
}
	render() {
		const { values, handleChange } = this.props;
		return (
			<div>
                <ProgressBar data={this.progressbarState}/>
				<form onSubmit={this.handleSubmit}>
					<h1>Form Wizard</h1>
					<h2>User Details</h2>
					<div>
						<label className="firstname">First Name</label>
						<input
							type="text"
							className="firstnametext"
							name="firstName"
							placeholder="Enter Your Firstname"
							onChange={handleChange('firstName')}
							value={values.firstName}
						/>
						<label style={{ fontSize: 12, color: 'red' }}>{this.state.firstNameError}</label>
						<br />
					</div>
					<div>
						<label class="lastname">Last Name</label>
						<input
							type="text"
							className="lastnametext"
							name='lastName'
							placeholder="Enter Your Lastname"
							onChange={handleChange('lastName')}
							value={values.lastName}
						/>
						<label style={{ fontSize: 12, color: 'red' }}>{this.state.lastNameError}</label>
						<br />
					</div>
					<div>
						<label className="email">Email</label>
						<input
							type="text"
							className="emailtext"
							placeholder="Enter Your Email"
							onChange={handleChange('email')}
							value={values.email}
						/>
						<label style={{ fontSize: 12, color: 'red' }}>{this.state.emailError}</label>
						<br />
					</div>
					<div>
						<label class="phone">Phone</label>
						<input
							type="text"
							className="phonenumber"
							placeholder="Enter Phone Number"
							onChange={handleChange('phone')}
							value={values.phone}
						/>
						<label style={{ fontSize: 12, color: 'red' }}>{this.state.phoneNumberError}</label>
						<br />
					</div>   
					<input type="submit" id="nextbutton" className="nextbutton" value="Next" onClick={this.handleSubmit} />        
				</form>
			</div>
		);
	}
}
