package com.dsahub.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
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