import React from 'react'
import { useGetProductsQuery } from './productApi'
import CardLayout from '../../components/card'

const ProductList = () => {
    const { data , error, isLoading } = useGetProductsQuery()
  return (
    isLoading ? <p>Loading</p> : 
      <>
       { data.items.map((item)=>
        <CardLayout key={item.id} data={item} />
            ) }
        </> 
    
  )   
}

export default ProductList