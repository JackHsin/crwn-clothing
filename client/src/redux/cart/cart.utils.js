export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem => 
         cartItem.id === cartItemToAdd.id
         ? { ...cartItem, quantity: cartItem.quantity + 1 }
         : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity -1 }
        : cartItem
    )
}

export const combineNotSignInItemsWithFirebaseItems = (cartItems, firebaseItems) => {
    let remainingfirebaseItems = firebaseItems;

    let newCartItemsArray = cartItems.map(cartItem => {
        let tempItem = cartItem;

        firebaseItems.forEach( (firebaseItem, index) => {
            if (cartItem.id === firebaseItem.id) {
                remainingfirebaseItems.splice(index, 1);
                tempItem = { ...cartItem, quantity: cartItem.quantity + firebaseItem.quantity };
            }
        });

        return tempItem;
    });

    remainingfirebaseItems.forEach( item => {
        newCartItemsArray.push(item);
    })

    return newCartItemsArray;
}