import  { useState } from 'react'
import Card from './components/Card'
import type { IProductType } from "./types/Product"
const App = () => {

  const [products, setProducts] = useState<IProductType[]>([
    {
      id: 1,
      name: 'Phone',
      price: 3000,
    }, {
      id: 2,
      name: 'Mac',
      price: 4000,
    }, {
      id: 3,
      name: 'lap',
      price: 5000,
    }
  ])
  return (
    <>
      hey
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </>
  )
}

export default App