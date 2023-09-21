package ru.gadzhiev.models.rest;

public record Product(int id, String name, ProductCategory category, long price) {
}
