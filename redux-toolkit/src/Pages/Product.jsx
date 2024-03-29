import React from 'react'
import all_product from '../Assets/all_product'
import Item from '../Components/Item'
import './Product.css'

const Product = () => {
  return (
    <div className='products'>
      <div className="heading">
        <h1>HEll</h1>
      </div>
      <div className='product-items'>
        {all_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.new_price} />
        })}
      </div>
    </div>
  )
}
export default Product;