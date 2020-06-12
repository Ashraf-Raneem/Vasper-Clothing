import React from 'react'
import { Route, Link } from 'react-router-dom';
import {connect} from 'react-redux'
import ShopPage from '../../pages/shopPage/shopPage.component';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'; 
import {createStructuredSelector} from 'reselect'
import {selectDirectorySections} from '../../redux/directory/directory.selector'
const Directory = ({sections}) => {

  return (
    <div className="directory-menu">
        {
            sections.map(({id,...otherSectionProps})=>(
                <MenuItem key={id} {...otherSectionProps}></MenuItem>
            ))}
    </div>
);
}
const mapStateToProps = createStructuredSelector ({
  sections : selectDirectorySections
})
export default connect(mapStateToProps)(Directory);  