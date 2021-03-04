import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
   position:'fixed',
   left:0,
   right: 0,
   bottom: 0,

  },
});

export default function FooterNav({ScreenConfig}) {
  const classes = useStyles();
//   const [value , setValue] = React.useState();
  
  

  return (
    <BottomNavigation
      value={ScreenConfig[0]}
      onChange={(event, newValue) => {
        // console.log(newValue);
        ScreenConfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Gobal" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Country stats" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Graphs" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
