package com.library.model;

import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

public class Library {
    private List<String> bookList;
    private Set<String> authorSet;
    private Map<String, String> bookAuthorMap;
    private Properties bookCategories;

    public void setBookList(List<String> bookList) {
        this.bookList = bookList;
    }

    public void setAuthorSet(Set<String> authorSet) {
        this.authorSet = authorSet;
    }

    public void setBookAuthorMap(Map<String, String> bookAuthorMap) {
        this.bookAuthorMap = bookAuthorMap;
    }

    public void setBookCategories(Properties bookCategories) {
        this.bookCategories = bookCategories;
    }

    public void display() {
        System.out.println("Books List: " + bookList);
        System.out.println("Authors Set: " + authorSet);
        System.out.println("Book-Author Map: " + bookAuthorMap);
        System.out.println("Book Categories: " + bookCategories);
    }
}
