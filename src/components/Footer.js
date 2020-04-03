import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InstagramIcon from '@material-ui/icons/Instagram';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LanguageIcon from '@material-ui/icons/Language';

export default function Fotter() {

  return (

    <BottomNavigation className="footer">
        <BottomNavigationAction href="instagram.com/enridalberton" icon={<InstagramIcon />} />
       <BottomNavigationAction href="https://talent.start2impact.it/profile/enrico-d-alberton" icon={<AccountCircleIcon />} />
        <BottomNavigationAction href="dalberton.com" icon={<LanguageIcon />} />
    </BottomNavigation>
    
  );
}
