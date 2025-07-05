package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void save(String bookName) {
        bookRepository.save(bookName);
    }

    public void addBook(String bookName) {
        System.out.println("Book added: " + bookName);
    }
}
