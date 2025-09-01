// import React from 'react'
import type { IProductType } from "../types/Product"

type CardProps = {
  product: IProductType
}

const Card = ({product}:CardProps) => {
  return (
    <div className="bg-[--color-card] text-[--color-card-foreground] rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-lg text-[--color-foreground]">₹{product.price}</p>
    </div>
  )
}

export default Card