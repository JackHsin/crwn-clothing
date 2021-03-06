import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

// import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';
import { CartDropdownContainer, CartDropdownButton, CartItemsContainer, EmptyMessageSpan } from './cart-dropdown.styles';

export const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {   
                cartItems.length ?
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                :
                <EmptyMessageSpan>Your cart is empty</EmptyMessageSpan>
            }
        </CartItemsContainer>
        <CartDropdownButton onClick={ () => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }
        }>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
)

const maptStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(maptStateToProps)(CartDropdown));