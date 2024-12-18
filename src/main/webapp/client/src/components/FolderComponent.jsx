import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import styles from "./styles/folderComponentStyles.js";

export default function FolderComponent({ name }) {
    const classes = styles();
    return(
        <div className={classes.folder}>
            <FolderIcon />
            {name}
        </div>
    );
}