package com.dsahub.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class helloController{
    @GetMapping("/")
    public String home(){
        return "Welcome to DSA-Hub";
    }
    @GetMapping("/api/test")
    public String test() {
        return "backend is working";
    }
}