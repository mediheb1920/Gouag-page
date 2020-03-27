import React from 'react'
import ProminentAppBar from '../page-market/page-one/page-one'
// import { makeStyles } from '@material-ui/core/styles';
import { TableContainer, Paper, Table, TableBody, TableRow, TableCell, FormControlLabel, Radio } from '@material-ui/core';

// const useStyles = makeStyles(theme => ({
    
// }))
const CheckoutPage = ({title , productes}) =>{
    
    
    // const classes = useStyles();
    return(
        <div className="">
            <ProminentAppBar />
            <div className="checkout-page">
                <div className="all-content">
                    <div className='face-one'>
                        <div className="header-one">
                            <img src={title} style='width : 100px  height:100px' alt="img"/>
                            <div className="text-header">
                                <h2>{title}</h2>
                                <span>{`Important Note${title}sold by SEA Gamer Mall can only used by Player from ALl World.`}</span>
                            </div>
                        </div>
                        <div className="bottom-one">
                            <TableContainer  component={Paper}>
                                <Table  aria-label='simple-table'>
                                    <TableBody >
                                        {{productes}.map(row => (
                                            <TableRow key={row.id}>
                                                <TableCell component='th' scope='row'>
                                                    <FormControlLabel control={<Radio />} />
                                                </TableCell>
                                                <TableCell component='th' scope='row'>
                                                    {row.name}
                                                </TableCell>
                                                <TableCell component='th' scope='row'>
                                                    {row.name}
                                                </TableCell>
                                                <TableCell component='th' scope='row'>
                                                    {row.price}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>

                            </TableContainer>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
};
export default CheckoutPage;

