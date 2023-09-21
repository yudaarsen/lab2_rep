package ru.gadzhiev.models.rest;

public enum ProductCategory {
    FRUITS ("Фрукты"),
    VEGETABLES ("Овощи"),
    MILK ("Кисломолочные продукты"),
    BOOKS ("Книги");

    private final String name;

    private ProductCategory(String name) {
       this.name = name;
    }

    @Override
    public String toString() {
        return this.name;
    }
}
