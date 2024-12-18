import React from 'react';
import FolderComponent from './FolderComponent.jsx';
import FileComponent from './FileComponent.jsx';
import styles from './styles/pageComponentStyles.js';

export default function PageComponent() {
    const classes = styles();
    return(
        <div className={classes.page}>
            <FileComponent name="File1" />
            <FileComponent name="File2" />
        </div>
    );
}