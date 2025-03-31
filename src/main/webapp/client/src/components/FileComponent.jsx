import React from 'react';
import FileIcon from '@mui/icons-material/InsertDriveFile';
import styles from "./styles/fileComponentStyles.js";

export default function FolderComponent({ name, downloadFile }) {
    const classes = styles();
    return(
        <div className={classes.file} onClick={() => downloadFile(name)} >
            <FileIcon />
            {name}
        </div>
    );
}