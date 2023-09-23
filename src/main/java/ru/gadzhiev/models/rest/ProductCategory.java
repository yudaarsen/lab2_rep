package ru.gadzhiev.models.rest;

import com.fasterxml.jackson.annotation.JsonValue;

public enum ProductCategory {
    FRUITS ("Фрукты"),
    VEGETABLES ("Овощи"),
    MILK ("Кисломолочные продукты"),
    BOOKS ("Книги");

    private final String productName;

    private ProductCategory(String productName) {
       this.productName = productName;
    }

    @JsonValue
    public String getValue() {
        return productName;
    }
}
