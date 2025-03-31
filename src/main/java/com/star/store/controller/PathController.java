package com.star.store.controller;

import com.star.store.service.PathService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PathController {
    @Autowired
    private PathService pathService;
    @GetMapping("/d/**")
    public ResponseEntity<List<String>> getCurrentFiles(HttpServletRequest request) {
        String currentPath = request.getRequestURI();
        String[] paths = currentPath.split("/");
        if(paths.length < 3) {
            return ResponseEntity.internalServerError().body(null);
        }
        List<String> directories = pathService.getPath(paths);
        return ResponseEntity.ok(directories);
    }
}
