package ru.gadzhiev.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.gadzhiev.data.repositories.ProductRepository;
import ru.gadzhiev.models.rest.Product;

import java.util.List;

@RestController
@RequestMapping(path = "/rest")
public class BaseRestController {

    @Autowired
    private ProductRepository productRepository;


    @GetMapping(path = "/products")
    public List<Product> getProductById() {
        return productRepository.getAllProducts();
    }

    @PostMapping(path = "/product")
    public void createProduct(@RequestBody Product product) {
        productRepository.createProduct(product);
    }
}
