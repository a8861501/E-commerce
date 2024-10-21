import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';


const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    
  return (
    <div className='my-1o'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>change this line in components/LatestCollection</p>
      </div>
    </div>
  )
}

export default LatestCollection