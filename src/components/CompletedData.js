import React, { Component } from 'react'
import '../css/CompletedData.css'

export default class CompletedData extends Component {
    render() {
        const {values:{firstName,lastName,email,phone,streetNumber,streetName,streetType,suburb,postcode}}=this.props
        return (
            <div>
                <form>
                <div>
                    <h2>Completed Data</h2>
            <table>
                <tbody>
                 <tr>     
                  <th class="label-firstname">FirstName </th><th class="text-firstname"> {firstName}</th>
                 </tr>
                 <tr>
                  <th class="label-lastname">LastName </th><th class="text-lastname" >{lastName}</th>
                  </tr>
                  <tr>
                  <th class="label-email">Email </th><th class="text-email"> {email}</th>
                  </tr>
                  <tr>
                  <th class="label-phonenumber">Phone Number </th><th class="text-phone">  {phone}</th>
                  </tr>
                  <tr>
                  <th class="label-streetnumber">StreetNumber </th><th class="text-streetnumber">  {streetNumber}</th>
                  </tr>
                  <tr>
                  <th class="label-streetname">StreetName </th><th class="text-streetname">  {streetName}</th>
                  </tr>
                  <tr>
                 <th class="label-streettype">Street Type </th><th class="text-streettype"> {streetType}</th>
                 </tr>
                 <tr>
                  <th class="label-suburb">Suburb </th><th class="text-suburb">  {suburb}</th>
                  </tr>
                  <tr>
                  <th class="label-postcode">Postcode </th><th class="text-postcode">  {postcode}</th>
                  </tr>
                  </tbody>
                  </table>
                </div>

                </form>
            </div>
        )
    }
}
