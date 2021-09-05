package repositoryfullstack.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import repositoryfullstack.Model.Users;

@CrossOrigin(origins = "*", methods= {RequestMethod.GET})
@RestController
public class UserController {

    @Autowired
    private RestTemplate restTemplate;

    private final String USERS_API = "https://jsonplaceholder.typicode.com/users";

    @GetMapping("/users")
    public Users[] consumeAllUsers() {
        return restTemplate.getForObject(USERS_API, Users[].class);
    }


}