package org.server.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class AppController {


    @RequestMapping(value="/", method= RequestMethod.GET)
    public String renderEntryPoint() {
        return "/index";
    }

    @RequestMapping(value="/admin", method=RequestMethod.GET)
    public String admin() {
        return "/ngtest";
    }


    @RequestMapping(value="/login_redirect", method=RequestMethod.GET)
    public String redirectToLogin() {
        return "/redirect_login";
    }

    @RequestMapping(value="/login", method=RequestMethod.GET)
    public String login() {
        return "/login";
    }


}
