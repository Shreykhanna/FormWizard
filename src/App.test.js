import React from 'react';
import App from './App';
import {shallow,mount} from 'enzyme';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import PersonalDetails from './components/PersonalDetails'
import UserDetails from './components/UserDetails'
import CompletedData from './components/CompletedData'
import UserForm from './components/UserForm'

configure({adapter:new Adapter()})

const wrapper_userform=shallow(<UserForm/>)

describe('<UserDetails/>',()=>{
  it('Should Render',()=>{
    const handleChange=jest.fn();
    const nextStep=jest.fn();
    const values={
      firstName:'',
      lastName:'',
      email:'',
      phone:''
    }
    shallow(<UserDetails values={values} nextStep={nextStep} handleChange={handleChange}/>)
  })
  
  it('Next Button Click Test Case',()=>{
    const handleChange=jest.fn();
    const nextStep=jest.fn();
    const values={
      firstName:'',
      lastName:'',
      email:'',
      phone:''
    }
    const wrapper=shallow(<UserDetails values={values} nextStep={nextStep} handleChange={handleChange}/>)
    wrapper.find('#nextbutton').simulate('click',{preventDefault: () => {
    }})
    expect(wrapper.state('counterNext')).toEqual(1)
  })
})
  describe('<PersonalDetails/>',()=>{
    it('Should Render ',()=>{
      const handleChange=jest.fn();
      const prevStep=jest.fn();
      const nextStep=jest.fn();
      const values={
        streetNumber:'',
        streetName:'',
        streetType:'',
        suburb:'',
        postcode:''
      }
      shallow(<PersonalDetails values={values} nextStep={nextStep} prevStep={prevStep} handleChange={handleChange}/>)
    })
    it('Previous Button Should Click',()=>{
      const handleChange=jest.fn();
      const prevStep=jest.fn();
      const nextStep=jest.fn();
      const values={
        streetNumber:'',
        streetName:'',
        streetType:'',
        suburb:'',
        postcode:''
      }
      const wrapper=shallow(<PersonalDetails values={values} nextStep={nextStep} prevStep={prevStep} handleChange={handleChange}/>)
      wrapper.find('#prevbutton').simulate('click',{preventDefault: () => {
      }})
      expect(wrapper.state('counterPrevious')).toEqual(1)
    })
    it('Next Button Should Click',()=>{
      const handleChange=jest.fn();
      const prevStep=jest.fn();
      const nextStep=jest.fn();
      const values={
        streetNumber:'',
        streetName:'',
        streetType:'',
        suburb:'',
        postcode:''
      }
      const wrapper=shallow(<PersonalDetails values={values} nextStep={nextStep} prevStep={prevStep} handleChange={handleChange}/>)
      wrapper.find('#submitbutton').simulate('click',{preventDefault: () => {
      }})
      expect(wrapper.state('counterNext')).toEqual(1)
    })

  })

describe("<CompletedData/>",()=>{
  it('Should Render',()=>{
    const values={
      firstName:'',
      lastName:'',
      email:'',
      phone:'',
      streetNumber:'',
      streetName:'',
      streetType:'',
      suburb:'',
      postcode:''
    }
      shallow(<CompletedData values={values}/>)
  })
})

