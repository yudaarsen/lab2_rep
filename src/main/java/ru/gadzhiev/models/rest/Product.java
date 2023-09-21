package ru.gadzhiev.models.rest;

public record Product(int id, String name, ProductCategory category, long price) {

    public static Product copy(int newId, Product product) {
        return new Product(newId, product.name(), product.category(), product.price());
    }
}
