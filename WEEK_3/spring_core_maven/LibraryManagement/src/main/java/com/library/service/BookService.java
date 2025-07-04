package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository repository;

    public BookService(BookRepository repository) {
        this.repository = repository;
        System.out.println("BookService: Constructor called");
    }

    public void addBook(String name) {
        repository.save(name);
    }
}
