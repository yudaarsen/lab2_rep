package ru.gadzhiev.data.repositories;

import org.springframework.stereotype.Repository;
import ru.gadzhiev.models.rest.Product;
import ru.gadzhiev.models.rest.ProductCategory;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class ProductRepositoryInMem implements ProductRepository{

    private static final Map<Integer, Product> data = new HashMap<>();

    public ProductRepositoryInMem() {
        data.put(1, new Product(1, "Тестовый товар", ProductCategory.BOOKS, 100));
    }

    private int getLastKey() {
       return data.keySet().stream().max(Integer::compareTo).get();
    }

    @Override
    public List<Product> getAllProducts() {
        return data.values().stream().toList();
    }

    @Override
    public void changeProduct(Product product) {
        data.put(product.id(), product);
    }

    @Override
    public void deleteProduct(int id) {
        data.remove(id);
    }

    @Override
    public void createProduct(Product product) {
        int id = getLastKey() + 1;
        Product newProduct = Product.copy(id, product);
        data.put(id, newProduct);
    }
}
