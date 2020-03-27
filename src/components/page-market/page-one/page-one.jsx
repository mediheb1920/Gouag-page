import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon  from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import {Paper , Tabs , Tab  } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // marginBottom : 100
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    maxWidth: 500,
  },
  accountCircle : {
    marginLeft : theme.spacing(4) ,
  },
  accountCircle2 : {
    marginRight : theme.spacing(4) ,
  },
  typo : {
    flexGrow: 1,
    alignSelf: 'flex-end',
  }
  
}));
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


export default function ProminentAppBar() {
  const classes = useStyles();
  const StyledBadge = withStyles(theme => ({
    badge: {
      right: -3,
      top: 18,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
  setValue(newValue);
  };
  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          
          <h3>Gouhag</h3>
          <Typography className={classes.typo} variant="h5" noWrap>
                <Paper className={classes.root}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Gift Cards"  />
            </Tabs>
          </Paper>
          </Typography>
          <StyledBadge color="secondary" badgeContent={4} className={classes.accountCircle2} >
              <MailIcon />
          </StyledBadge>
          <StyledBadge badgeContent={4} color="secondary">
                  <ShoppingCartIcon />
            </StyledBadge>
          <AccountCircleIcon aria-label="display more actions" edge="end" color="inherit" className={classes.accountCircle}>
            <MoreIcon />
          </AccountCircleIcon>
        </Toolbar>
      </AppBar>
      {/* <TabPanel value={value} index={0} >
          <GiftGrid />
      </TabPanel> */}
    </div>
  );
};
