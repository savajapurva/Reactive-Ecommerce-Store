import { createSelector } from 'reselect';

// Input Selector
const selectCart = state => state.cart;

// create selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartToggle = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) =>  cartItems.reduce((acc, curr) => {
        return acc + curr.quantity;
     }, 0) 
);

export const selectCartTotal = createSelector (
    [selectCartItems],
    (cartItems) =>  cartItems.reduce((acc, curr) => {
        return acc + curr.quantity + curr.price;
     }, 0)
)