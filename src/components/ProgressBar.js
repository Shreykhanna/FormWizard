import React from 'react'

const ProgressBar=(props)=>{
    
 const {bgcolor,completed}=props.data;
  console.log("Progress bar data",props)
    const containerStyles = {
        height: 20,
        width: '80%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
      }
    
      const labelStyles = {
        color: 'white',
        fontWeight: 'bold',
        padding:5
      }
    
      return (
        <div style={containerStyles}>
          <div style={fillerStyles}>
            <span style={labelStyles}>{`${completed}%`}</span>
          </div>
        </div>
      );
}

export default ProgressBar;