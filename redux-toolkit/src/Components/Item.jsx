import React from 'react'
import all_products from '../Assets/all_product'
import { addToCart } from '../Store/CartSlice'
import { useDispatch } from 'react-redux'

const Item = (props) => {
  const dispatch = useDispatch();

  const handleCart = ()=>{
    dispatch(addToCart(props))
  }
  return (
    <div>
        <div className="name">
            {props.name}
        </div>
        <img src={props.image} alt="" />
        <p>{props.price}</p>
        <button onClick={handleCart}>Add to Cart</button>
    </div>
  )
}

export default Item