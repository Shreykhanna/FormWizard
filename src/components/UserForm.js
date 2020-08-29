import React, { Component } from 'react'
import PersonalDetails from './PersonalDetails'
import UserDetails from './UserDetails'
import CompletedData from './CompletedData'
export default class UserForm extends Component {
    state={
        step:1,
        firstName:'',
        lastName:'',
        email:'',
        emailError:'',
        phone:'',
        streetNumber:'',
        streetName:'',
        streetType:'',
        suburb:'',
        postcode:null
    }

    nextStep=()=>{
        const {step}=this.state;
        this.setState({
            step:step+1
        })
    }
    prevStep=()=>{
        const {step}=this.state;
        this.setState({
            step:step-1
        })
    }
    handleChange=input=>event=>{
            this.setState({
                [input]:event.target.value
            })
            console.log("INPUT VALUE IN USERFORM" ,event.target.value)
    }

    render() {
        const {step}=this.state;
        const {firstName,lastName,email,phone,streetNumber,streetName,streetType,suburb,postcode}=this.state;
        const values={firstName,lastName,email,phone,streetNumber,streetName,streetType,suburb,postcode};
        switch(step){
            case 1:  return(<UserDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values}/>)
            case 2 : return (<PersonalDetails nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values}/>)
            case 3 : return(<CompletedData values={values}/>)
            default: return(<UserDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values}/>)

        }
    }
}
