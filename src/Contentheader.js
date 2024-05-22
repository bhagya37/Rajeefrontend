import React from 'react'
import { BiNotification, BiSearch } from 'react-icons/bi';
export const Contentheader = () => {
  return (
   <>
   <div className='content-header'>
    <h1 className='header-title'> Student-Dashboard</h1>
    <div className='header-activity'>
        <div className='search-box'>
            <input type='text' placeholder='search here...'/>
            <BiSearch className='icon'/>
        </div>
    <div className='notify'>
        <BiNotification className='icon'/>
    </div>
    </div>
   </div>
   </>
  )
}
export default Contentheader;