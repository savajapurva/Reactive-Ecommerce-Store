import {createSelector} from 'reselect';

const shopSelector = (state) => state.shop;

export const selectCollections = createSelector(
    [shopSelector],
    (shop) => shop.collections
)

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    (collections) => collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) => createSelector(
    [selectCollections], 
    (collection) => collection ? collection[collectionUrlParam] : null
);

