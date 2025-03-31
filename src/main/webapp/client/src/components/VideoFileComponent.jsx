import React from 'react';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import styles from "./styles/videoFileComponentStyles.js";

export default function VideoFileComponent({ name, downloadFile }) {
    const classes = styles();
    return(
        <div className={classes.file} onClick={() => downloadFile(name)}>
            <VideoFileIcon />
            {name}
        </div>
    );
}