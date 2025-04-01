package com.star.store.controller;

import com.star.store.service.PathService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PathController {
    private final PathService pathService;

    @Autowired
    public PathController(PathService pathService) {
        this.pathService = pathService;
    }

    @GetMapping("/d/**")
    public ResponseEntity<List<String>> getCurrentFiles(HttpServletRequest request) {
        String currentPath = request.getRequestURI();
        String[] paths = currentPath.split("/");
        if(paths.length < 3) {
            return ResponseEntity.internalServerError().body(null);
        }
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        if(!username.equals(paths[2])) {
            return ResponseEntity.internalServerError().body(null);
        }
        List<String> directories = pathService.getPath(paths);
        return ResponseEntity.ok(directories);
    }
}
