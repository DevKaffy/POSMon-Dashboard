import React from 'react'

const Transactions = ({details, figure}:{
  details: string;
  figure: string;
}) => {
  return (
    <div>
    <ul className='flex disc'>
      <li>{details}</li>
      <li>{figure}</li>
    </ul>
    </div>

  )
}

export default Transactions