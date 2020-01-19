import React from 'react'; 
import Shop_Data from './shopPage.data'; 
import CollectPreview from '../../component/collection-preview/collectionPreview.component';
class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: Shop_Data
        }
    }
    render (){
      const {collections} = this.state ; 
      return (<div className = "shopPage">
          {
              collections.map(({id, ...othercollections}) => (
              <CollectPreview key= {id}{...othercollections}></CollectPreview>
 
              ))
          }
      </div>)
    }
}

export default ShopPage; 