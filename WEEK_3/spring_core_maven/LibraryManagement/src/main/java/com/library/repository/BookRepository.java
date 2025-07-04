package com.library.repository;

public class BookRepository {
    public BookRepository() {
        System.out.println("BookRepository: Constructor called");
    }

    public void save(String bookName) {
        System.out.println("Book saved: " + bookName);
    }
}
