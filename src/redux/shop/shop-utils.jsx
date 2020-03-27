export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
    if (existingCartItem) {
        return cartItems.map(cartItem =>
          cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 , total : (cartItem.price + cartItemToAdd.price) }
            : cartItem
        );
      }
    
      return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
export const removeItemToCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );  
  
    if(existingCartItem){
        return cartItems.filter(cartItems => cartItems.id !== cartItemToRemove.id)
      }
}
