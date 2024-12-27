import React from 'react';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import styles from "./styles/audioFileComponentStyles.js";

export default function AudioFileComponent({ name }) {
    const classes = styles();
    return(
        <div className={classes.file}>
            <AudioFileIcon />
            {name}
        </div>
    );
}