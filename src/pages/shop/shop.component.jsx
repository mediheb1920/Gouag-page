import React from 'react'
import { Route} from 'react-router-dom'
import CollectionPage from '../collectionShop/collection-component'
import AllPage from '../../components/page-market/total-page'

const ShopPage = ({match}) => {
    return(
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={AllPage} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
    )
};
export default ShopPage ;