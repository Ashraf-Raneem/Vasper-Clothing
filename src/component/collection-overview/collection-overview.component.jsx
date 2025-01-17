import React from 'react'
import './collection-overview.styles.scss'
import CollectionPreview from '../collection-preview/collectionPreview.component'
import {createStructuredSelector} from 'reselect'
import { selectCollectionsForPreview} from '../../redux/shop/shop.selector'
import { connect } from 'react-redux'
 
const CollectionOverview = ({collections}) => {
    
    return (
        <div className='collection-overview' >
    {
        collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key= {id}{...otherCollectionProps}></CollectionPreview>
        ))
    }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionOverview)