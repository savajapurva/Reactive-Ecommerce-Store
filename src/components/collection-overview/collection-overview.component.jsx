import React from 'react';
import './collection-overview.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component'

const CollectionOverview = ({ collections }) => {
  console.log('collections', collections);
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})
 
export default connect(mapStateToProps)(CollectionOverview);