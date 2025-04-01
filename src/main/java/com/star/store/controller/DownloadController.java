package com.star.store.controller;

import com.star.store.service.DownloadService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DownloadController {
    private final DownloadService downloadService;

    @Autowired
    public DownloadController(DownloadService downloadService) {
        this.downloadService = downloadService;
    }

    @GetMapping("/download/**")
    public ResponseEntity<FileSystemResource> downloadFile(HttpServletRequest request) {
        String currentPath = request.getRequestURI();
        String[] paths = currentPath.split("/");
        if(paths.length < 3) {
            return ResponseEntity.internalServerError().body(null);
        }
        String fileName = paths[paths.length - 1];
        FileSystemResource file = downloadService.getFile(paths);
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileName + "\"")
                .body(file);
    }
}
