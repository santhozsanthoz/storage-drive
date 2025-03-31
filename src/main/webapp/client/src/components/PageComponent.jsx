import React, { useEffect, useState } from 'react';
import FolderComponent from './FolderComponent.jsx';
import VideoFileComponent from './VideoFileComponent.jsx';
import AudioFileComponent from './AudioFileComponent.jsx';
import ImageFileComponent from './ImageFileComponent.jsx';
import FileComponent from './FileComponent.jsx';
import { audioFormats, videoFormats, imageFormats } from './data/formatsData.js';
import styles from './styles/pageComponentStyles.js';
import axios from 'axios';

export default function PageComponent({ user, setUser, navigateToPath }) {
    const classes = styles();

    const [dirList, setDirList] = useState([]);

    const getCurrentPathDirList = () => {
        const currentPath = getDirPathFromURL();
        user && axios.get("/d/" + user.username + currentPath).then(({ data }) => {
            setDirList(data);
        });
    }

    const getDirPathFromURL = () => {
        const path = window.location.pathname.split("/");
        let resultDir = "";
        if(path.length > 3) {
            for(let i = 3; i<path.length;i++) {
                resultDir += "/" + path[i];
            }
        }
        return resultDir;
    }

    const downloadFile = (fileName) => {
        const currentPath = getDirPathFromURL();
        axios.get("/download/" + user.username + currentPath + "/" + fileName, { responseType: 'blob' }).then((response) => {
            const blob = new Blob([response.data], { type: response.headers['content-type'] });

            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.setAttribute('download', fileName);

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }).catch((error) => {
            console.error('Error downloading the file');
        });
    }
    const updateCurrentPath = (currentPath) => {
        const fullCurrentPath = window.location.pathname + currentPath;
        setUser((prevUser) => ({
            ...prevUser,       
            currentPath: fullCurrentPath,           
        }));
        navigateToPath(window.location.pathname + "/" + currentPath);
    }
    useEffect(() => {
        getCurrentPathDirList();
    }, [user]);
    return(
        <div className={classes.page}>
            {dirList.map((data) => {
                const splitter = data.split(".");
                if(splitter.length == 1) {
                    return <FolderComponent name={data} updateCurrentPath={updateCurrentPath} />
                } else {
                    if (videoFormats.includes(splitter[1])) {
                        return <VideoFileComponent name={data} downloadFile={downloadFile} />;
                    } else if (imageFormats.includes(splitter[1])) {
                        return <ImageFileComponent name={data} downloadFile={downloadFile} />;
                    } else if (audioFormats.includes(splitter[1])) {
                        return <AudioFileComponent name={data} downloadFile={downloadFile} />;
                    } else {
                        return <FileComponent name={data} downloadFile={downloadFile} />;
                    }
                }
            })}
        </div>
    );
}