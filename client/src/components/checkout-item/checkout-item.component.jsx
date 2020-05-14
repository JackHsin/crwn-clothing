import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions'

// import './checkout-item.styles.scss';
import { CheckoutItemContainer, ImageContainer, TestContainer, QuantityContainer, RemoveButtonContainer } from './checkout-item.styles';

export const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item"/>
            </ImageContainer>
            <TestContainer>{name}</TestContainer>
            <QuantityContainer>
                <div onClick={ () => removeItem(cartItem)} >&#10094;</div>
                <span>{quantity}</span>
                <div onClick={ () => addItem(cartItem) }>&#10095;</div>
            </QuantityContainer>
            <TestContainer>{price}</TestContainer>
            <RemoveButtonContainer onClick={ () => clearItem(cartItem) }>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);