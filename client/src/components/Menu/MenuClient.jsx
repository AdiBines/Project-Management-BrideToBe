import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import History from '@material-ui/icons/CalendarToday';
import SendIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import NewMeetingIcon from '@material-ui/icons/AddAlarm';
import CalendarToday from '@material-ui/icons/AccessAlarmsTwoTone';
import './Menu.scss';
import Select from "react-dropdown-select";
import NewMeeting from '../../pages/NewMeeting';

const styles = theme => ({

});

function ListItemComposition(props) {
  const { classes } = props;

  const [pageIndex, setPageIndex] = useState(0);

  const handleChangeIndex = (index) => {
    setPageIndex(index);
  }

  const options = [,"My Details",<NewMeeting />, "Future Meetings","Meeting History","Send Email" ];
    return (
      <div className='menu-container'>
      {options[pageIndex]}
      <MenuList>
      <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="My Details" />
        </MenuItem>
        
        <MenuItem className={classes.menuItem} onClick={() => handleChangeIndex(2)}>
          <ListItemIcon className={classes.icon}>
            <NewMeetingIcon />
          </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.primary }}
              inset
              primary="New Meeting"   
          />
        </MenuItem>
       
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <CalendarToday />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Future Meetings" />
        </MenuItem>
        
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <History />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Meeting History" />
        </MenuItem>
        
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <SendIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Send Email" />
        </MenuItem>
      </MenuList>
    
    </div>
  );
}

ListItemComposition.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListItemComposition);