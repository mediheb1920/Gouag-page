import { createSelector } from 'reselect'


const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop =>shop.collections
);
export const selectCartItems = createSelector(
    [selectShop],
    shop => shop.cartItems
  );

export const selectCartItemsTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity ,  cartItems) => accumulatedQuantity + cartItems.quantity * cartItems.price , 0
    )
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    );