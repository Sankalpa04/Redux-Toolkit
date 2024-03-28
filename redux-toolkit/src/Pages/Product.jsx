import React from 'react'
import all_product from '../Assets/all_product'
import Item from '../Components/Item'

const Product = () => {
  return (
    <div>
        {all_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.new_price} />
        })}
    </div>
  )
}
export default Product;