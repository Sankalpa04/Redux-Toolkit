import React from 'react'
import all_products from '../Assets/all_product'

const Item = (props) => {
  return (
    <div>
        <div className="name">
            {props.name}
        </div>
        <img src={props.image} alt="" />
        <p>{props.price}</p>
    </div>
  )
}

export default Item