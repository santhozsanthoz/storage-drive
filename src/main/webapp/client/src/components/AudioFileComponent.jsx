import React from 'react';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import styles from "./styles/audioFileComponentStyles.js";

export default function AudioFileComponent({ name, downloadFile }) {
    const classes = styles();
    return(
        <div className={classes.file} onClick={() => downloadFile(name)} >
            <AudioFileIcon />
            {name}
        </div>
    );
}