import React from 'react';
import { Route } from 'react-router-dom';

import {default as Mango} from '../../components/collections-overview/collection-overview.container';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={Mango} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
