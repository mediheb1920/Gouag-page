import React from 'react'
import './checkout-component.scss'
import { TableContainer, Paper, Table, TableBody, TableRow, TableCell, FormControlLabel, Checkbox, RadioGroup } from '@material-ui/core';
import { addItem , removeItem } from '../../redux/shop/cart-actions';
import {connect} from 'react-redux'


const TableProducts = ({item , addItem , removeItem}) => {
        
    const { name , price , id } = item ;

    

    const [value, setValue] = React.useState('');
    const [checked , setChecked] = React.useState(false)
    const handleChange = event => {
        setValue(event.target.value);
        if(!checked) {
            addItem(item)
            // alert('hamdoulh')
            
        }else{
            removeItem(item)
        }
    }
    const CheckboxChange = () =>{
        setChecked(!checked)
    }

    
     
    
     
     
    return(
        <div className="bottom-one">
        <TableContainer  component={Paper}>
            <Table  aria-label='simple-table'>
                <TableBody >
                        <TableRow key={id}>
                            <TableCell component='th' scope='row'>
                                <RadioGroup aria-label="gender" value={value} onChange={handleChange} >
                                    <FormControlLabel checked={checked}  className='checkbox' value={name} onClick={CheckboxChange} control={<Checkbox  onChange={handleChange} />} />
                                </RadioGroup>
                            </TableCell>
                            <TableCell component='th' scope='row'>
                                {name}
                            </TableCell>
                            <TableCell component='th' scope='row'>
                                {price}DT
                            </TableCell>
                        </TableRow>
                </TableBody>
            </Table>

        </TableContainer>
    </div>
    )
    }


const mapDispatchToProps = dispatch =>({
    addItem : item => dispatch(addItem(item)),
    removeItem : item => dispatch(removeItem(item))
})

export default connect(null , mapDispatchToProps)(TableProducts)