import React from 'react'
import ProminentAppBar from './page-one/page-one'
import GiftGrid from '../page-market/page-gift-card/gift-card-1'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



const AllPage = () =>{
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
          >
            {value === index && <Box p={3}>{children}</Box>}
          </Typography>
        );
      }
      
      TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
      };
      const [value] = React.useState(0);
        
    return(
        <div>
            <ProminentAppBar />
             <TabPanel value={value} index={0} >
                <GiftGrid />
            </TabPanel> 
            
        </div>
    )
}
export default AllPage ;