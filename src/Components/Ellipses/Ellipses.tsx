import React from 'react'

const Ellipses = ({img, title}: {
    img: string,
    title: string,
}) => {
  return (
    <div className='flex items-center gap-x-[0.5rem] text-[0.75rem]'>
        <span><img src={img} alt="" /></span>
        <span>{title}</span>
    </div>
  )
}

export default Ellipses