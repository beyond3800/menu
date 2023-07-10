import React from 'react'

const EachCustomer =(props)=> {
    const {fullName,userName,phoneNumber,address,email}=props.data

  return (
    <div className='eachCustomer'>
        <div className='info'> <h3>name</h3> <span>{fullName}</span></div>
        <div className='info'> <h3>username</h3> <span>{userName}</span></div>
        <div className='info'> <h3>phone numeber</h3> <span>{phoneNumber}</span></div>
        <div className='info'> <h3>address</h3> <span></span>{address}</div>
        <div className='info'> <h3>email</h3> <span>{email}</span></div>
    </div>
  )
}

export default EachCustomer