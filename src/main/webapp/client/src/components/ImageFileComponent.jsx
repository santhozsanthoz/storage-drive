import React from 'react';
import ImageIcon from '@mui/icons-material/Image';
import styles from "./styles/imageFileComponentStyles.jsx";

export default function ImageFileComponent({ name, downloadFile }) {
    const classes = styles();
    return(
        <div className={classes.file} onClick={() => downloadFile(name)} >
            <ImageIcon />
            {name}
        </div>
    );
}