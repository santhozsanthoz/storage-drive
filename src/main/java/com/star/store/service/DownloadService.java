package com.star.store.service;

import com.star.store.config.PathConfig;
import com.star.store.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.File;
import java.net.URLDecoder;

@Service
public class DownloadService {
    @Autowired
    private PathConfig pathConfig;

    public FileSystemResource getFile(String[] paths) {
        String basePath = pathConfig.getApplicationPath();
        // TODO : validate the current path and get the path file names in it
        String currentPath = getCurrentPath(paths);
        String fullPath = basePath + currentPath;
        File file = new File(fullPath);

        if (!file.exists() || file.isDirectory()) {
            throw new ResourceNotFoundException();
        }

        return new FileSystemResource(file);
    }
    public String getCurrentPath(String[] paths) {
        StringBuilder currentPath = new StringBuilder();
        for(int i = 2; i<paths.length; i++) {
            currentPath.append(File.separator + URLDecoder.decode(paths[i]));
        }
        return currentPath.toString();
    }
}
