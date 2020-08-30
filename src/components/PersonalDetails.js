import React, { Component } from 'react';
import ProgressBar from './ProgressBar'
import '../css/PersonalDetails.css';

export default class PersonalDetails extends Component {
	state = {
		streetNameError: '',
		streetNumberError: '',
		suburbError: '',
		streettypeError:'',
        postcodeError: '',
		counterNext:0,
		counterPrevious:0
		
    };
    progressbarState={
        bgcolor:'#00695c',completed:'50'      
    }
	continue = (event) => {
		event.preventDefault();
		this.props.nextStep();
	};
	back = (event) => {
		event.preventDefault();
		this.setState({
			counterPrevious:1
		})
		this.props.prevStep();
	};
	handleValidation = () => {
		let streetNameError = '',
			streetNumberError = '',
			streettypeError='',
			suburbError = '',
			postcodeError = '';
		if (!this.props.values.streetName) {
			streetNameError = 'street name required';
		}
		if (!this.props.values.streetNumber) {
			streetNumberError = 'street number required';
		}
		if (!this.props.values.streetType || this.props.values.streetType==='Select') {
			streettypeError = 'street type required';
		}
		if (!this.props.values.suburb) {
			suburbError = 'suburb required';
		}
		if ((!this.props.values.postcode) || (this.props.values.postcode < parseInt(1440,8) || this.props.values.postcode > 7999)) {
			postcodeError = 'invalid postcode';
		}
		if (streetNumberError || streetNameError || streettypeError|| suburbError || postcodeError) {
			this.setState({ streetNumberError, streetNameError, streettypeError,suburbError, postcodeError });
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
		if (isValid) {
			return this.props.nextStep();
		}
	};
	render() {
		const { values, handleChange } = this.props;
		return (
			<div>
                <ProgressBar data={this.progressbarState}/>
				<h1>Form Wizard</h1>
				<h2>Personal Details</h2>
				<label class="streetnumber">Street Number</label>
				<input
					type="text"
					class="streetnumbertext"
					placeholder="Enter Your StreetNumber"
					onChange={handleChange('streetNumber')}
					value={values.streetNumber}
				/>
				<label style={{ fontSize: 12, color: 'red' }}>{this.state.streetNumberError}</label>
				<br />
				<label class="streetname">Street Name</label>
				<input
					type="text"
					class="streetnametext"
					placeholder="Enter Your StreetName"
					onChange={handleChange('streetName')}
					value={values.streetName}
				/>
				<label style={{ fontSize: 12, color: 'red' }}>{this.state.streetNameError}</label>
				<br />
				<label class="streettype">Street Type</label>
				<select id="streettype" onChange={handleChange('streetType')} value={values.streetType}>
					<option value="select">Select</option>
					<option value="CL">Cl</option>
					<option value="Ct">Ct</option>
					<option value="St">St</option>
					<option value="Pl">Pl</option>
					<option value="Ave">Ave</option>
				</select><label style={{ fontSize: 12, color: 'red' }}>{this.state.streettypeError}</label>
				<br />
				<label class="suburblabel">Suburb</label>
				<input
					type="text"
					class="suburbtext"
					placeholder="Enter Suburb"
					onChange={handleChange('suburb')}
					value={values.suburb}
				/>
				<label style={{ fontSize: 12, color: 'red' }}>{this.state.suburbError}</label>
				<br />
				<label class="postcode">PostCode</label>
				<input
					type="text"
					class="postcodetext"
					placeholder="Enter Postcode"
					onChange={handleChange('postcode')}
					value={values.postcode}
				/>
				<label style={{ fontSize: 12, color: 'red' }}>{this.state.postcodeError}</label>
				<br />
				<input type="submit" id="prevbutton" class="prevbutton" value="Back" onClick={this.back} />
				<input type="submit" id="submitbutton" class="submitbutton" value="Submit" onClick={this.handleSubmit} />
			</div>
		);
	}
}
