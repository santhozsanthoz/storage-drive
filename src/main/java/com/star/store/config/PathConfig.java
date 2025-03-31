package com.star.store.config;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Getter
public class PathConfig {
    @Value("${app.path}")
    private String applicationPath;
}
