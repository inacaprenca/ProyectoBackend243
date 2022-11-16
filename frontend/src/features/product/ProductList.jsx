import React from 'react'
import { useGetProductsQuery } from './productApi'

const ProductList = () => {
    const { data , error, isLoading } = useGetProductsQuery()
  return (
    isLoading ? <p>Loading</p> : 
        data.items.map((item)=>
            item.name
            )
    
  )
}

export default ProductList