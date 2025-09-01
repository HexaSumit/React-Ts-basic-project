// import React from 'react'
import type { IProductType } from "../types/Product"

type CardProps = {
  product: IProductType
}

const Card = ({product}:CardProps) => {
  return (
    <div className="p-6 mb-5 rounded-xl shadow-md bg-card text-card-foreground transition hover:shadow-lg hover:scale-[1.02]">
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-lg text-foreground">₹{product.price}</p>
    </div>
  )
}

export default Card