package com.dsahub.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
@CrossOrigin(origins="http://localhost:3000")
public class CodeforcesController {

    @GetMapping("/api/codeforces/user")
    public String getUserData(@RequestParam String handle) {
        String url = "https://codeforces.com/api/user.info?handles=" + handle;
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, String.class);
    }
}
