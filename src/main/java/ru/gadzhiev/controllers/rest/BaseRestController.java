package ru.gadzhiev.controllers.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.gadzhiev.models.rest.Product;
import ru.gadzhiev.models.rest.ProductCategory;

@RestController
@RequestMapping(path = "/rest")
public class BaseRestController {
    @GetMapping(path = "/product/{id}")
    public Product getProductById(@PathVariable int id) {
        return new Product(id, "test", ProductCategory.FRUITS, 1234);
    }
}
