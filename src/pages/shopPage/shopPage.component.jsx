import React from 'react'; 
import {Route} from 'react-router-dom'
import CollectionOverview from '../../component/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component'


const ShopPage = ({match}) =>  (
    <div className = "shopPage">
      <Route exact path={`${match.path}`} component = {CollectionOverview} />  
      <Route path = '/shop/:collectionId' component={CollectionPage}/>
    </div>    
)

export default ShopPage; 