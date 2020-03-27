import React from 'react'
import giftApi from  './gift-card'
import { makeStyles } from '@material-ui/core/styles';
import {  Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow : 1,
        width: '65vw',
      height: '50vh',
      margin : 'auto',
      marginTop : '100px'

    },
    grid : {
        display : 'flex',
        flexDirection : 'column',
        margin : 'auto',
        '&:hover':{
            transform: 'scale(1.1)',
    
        },
        transition : '0.2s',
        
        
    },
    span : {
        textAlign : 'center',
        fontSize : '9px',
        
    },
    img : {
        backgroundColor : '#D6D2D2',
        borderRadius : '1.4em',
        cursor : 'pointer',
        height : '210px',
        boxShadow : '#D6D2D2 1px 1px 1px 1px'
        
        
    }
  }));
  
  

const GiftGrid = ({ match , history}) =>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid   container spacing={5}>
                {giftApi.map((tile  )=>(
                    <Grid   className={classes.grid} key={tile.id} item xs={6} sm={4} md={3} lg={2}>
                       
                        <img  onClick={() => history.push(`${match.url}${tile.linkUrl}`)} className={classes.img} src={tile.imageUrl} alt={tile.title}/>
                       
                        <span className={classes.span}>{tile.title}</span>
                    </Grid>
                    
                ))}
            </Grid>
        </div>
    )
}
export default withRouter(GiftGrid) ;


