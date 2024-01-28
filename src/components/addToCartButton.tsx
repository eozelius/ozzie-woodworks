'use client'
import React from 'react'

type TProps = {
  productId: number
}

export const AddToCartButton: React.FC<TProps> = ({ productId }): React.ReactElement | null => {
  const handleAddToCart = ({ productId }: { productId: number }  ) => {
    console.log('[ Home ] handleAddToCart() productId => ', productId)
  }
  
  return (
    <button onClick={() => handleAddToCart({ productId })}>Add to Cart</button>
  )
}