import React from 'react';
import FileIcon from '@mui/icons-material/InsertDriveFile';
import styles from "./styles/fileComponentStyles.js";

export default function FolderComponent({ name }) {
    const classes = styles();
    return(
        <div className={classes.file}>
            <FileIcon />
            {name}
        </div>
    );
}