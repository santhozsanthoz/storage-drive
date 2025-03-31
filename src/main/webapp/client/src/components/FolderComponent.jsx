import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import styles from "./styles/folderComponentStyles.js";
import { useNavigate } from 'react-router-dom';

export default function FolderComponent({ name, updateCurrentPath }) {
    const classes = styles();
    return(
        <div className={classes.folder} onClick={() => updateCurrentPath(name)}>
            <FolderIcon />
            {name}
        </div>
    );
}