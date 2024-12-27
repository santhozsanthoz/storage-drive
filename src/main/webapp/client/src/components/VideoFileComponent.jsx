import React from 'react';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import styles from "./styles/videoFileComponentStyles.js";

export default function VideoFileComponent({ name }) {
    const classes = styles();
    return(
        <div className={classes.file}>
            <VideoFileIcon />
            {name}
        </div>
    );
}