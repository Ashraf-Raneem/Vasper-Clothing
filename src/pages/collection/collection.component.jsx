import React from 'react'
import './collection.styles.scss'

import {connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selector'
import CollectionItem from '../../component/collection-item/collection-item.component'

const CollectionPage = ({collection}) => {
    const {title , items} = collection
    console.log(collection )
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => 
                (<CollectionItem key={item.id} item={item}></CollectionItem>)
                )}
            </div>
        </div>
    )
}
const mapStateToProps = (state,ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage)