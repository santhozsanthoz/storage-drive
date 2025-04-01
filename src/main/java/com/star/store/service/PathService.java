package com.star.store.service;

import com.star.store.config.PathConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.List;

@Service
public class PathService {
    @Autowired
    private PathConfig pathConfig;

    public List<String> getPath(String[] paths) {
        String basePath = pathConfig.getApplicationPath();
        String currentPath = getCurrentPath(paths);
        String fullPath = basePath + currentPath;
        File directory = new File(fullPath);
        ArrayList<String> listOfDirectoriesString = new ArrayList<>();
        File[] files = directory.listFiles();
        if(files != null) {
            for(File file : files) listOfDirectoriesString.add(file.getName());
        }
        return listOfDirectoriesString;
    }
    public String getCurrentPath(String[] paths) {
        StringBuilder currentPath = new StringBuilder();
        for(int i = 2; i<paths.length; i++) {
            currentPath.append(File.separator + URLDecoder.decode(paths[i]));
        }
        return currentPath.toString();
    }
}
