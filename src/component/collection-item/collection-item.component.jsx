import React from 'react'; 
import CustomButton from '../custom-button/custom-button.component'

import {connect} from 'react-redux'
import {addToCart} from '../../redux/cart/cart.actions'

import './collection-item.styles.scss'; 

const CollectionItem = ({item,addToCart}) => {
    const {imageUrl , name , price} = item 
    return (
        <div className= "collection-item">
            <div 
            className = "image"
            style = {{
                backgroundImage: `url(${imageUrl})`
            }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomButton inverted onClick = {() => addToCart(item)}>ADD TO CART</CustomButton>
        </div>  
    )
}

const mapStateToProps = dispatch => ({
    addToCart : items => dispatch(addToCart(items))
})
export default connect (null,mapStateToProps)(CollectionItem); 