import React from 'react'
import {connect} from 'react-redux'
import ProminentAppBar from '../../components/page-market/page-one/page-one'
import './checkout-component.scss'
import {selectCollection} from '../../redux/shop/shop-selectors'
import TableProducts from './table-component'
import  Total from './total'

const CollectionPage = ({collection })=>{
    console.log(collection)
  
    const {title ,  imageUrl ,  products} = collection
    return (
        <div className="">
            <ProminentAppBar />
            <div className="checkout-page">
                <div className="all-content">
                    <div className='face-one'>
                        <div className="header-one">
                            <img src={imageUrl} style={{width : 100  , height : 100}}  alt="img"/>
                            <div className="text-header">
                                <h2>{title}</h2>
                                <span style={{color: "orange"}}>{`Important Note  :  ${title}sold by SEA Gamer Mall can only used by Player from ALl World.`}</span>
                            </div>
                        </div>
                        {products.map(item => (
                            <TableProducts key={item.id} item={item}/>
                        ))}
                    </div> 
                    <div className="face-two">
                        <div className="price-final">
                            <span className="price1">
                                <Total />
                            </span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state , ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
    
});


export default connect(mapStateToProps)(CollectionPage) ;
