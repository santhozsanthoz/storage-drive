import React from 'react';
import styles from "./styles/navbarStyles";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

export default function FolderComponent() {
     const classes = styles();
    return(
        <div className={classes.navbar} >
            <div className={classes.navComps}>Store</div>
            <div className={classes.navComps}><DensityMediumIcon /></div>
        </div>
    );
}