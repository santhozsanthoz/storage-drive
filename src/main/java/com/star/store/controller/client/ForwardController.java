package com.star.store.controller.client;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/q")
public class ForwardController {
    @RequestMapping("/**")
    public String clientLoginPage() {
        return "forward:/";
    }
}