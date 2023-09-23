package ru.gadzhiev.data.repositories;

import ru.gadzhiev.models.rest.Product;

import java.util.List;

public interface ProductRepository {
    List<Product> getAllProducts();
    void changeProduct(Product product);
    void deleteProduct(int id);
    void createProduct(Product product);
}
