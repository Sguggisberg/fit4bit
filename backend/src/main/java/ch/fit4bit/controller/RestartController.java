package ch.fit4bit.controller;

import ch.fit4bit.MainApplication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/restart")
public class RestartController {

    @PostMapping
    public void restart() {
        MainApplication.restart();
    }
}
