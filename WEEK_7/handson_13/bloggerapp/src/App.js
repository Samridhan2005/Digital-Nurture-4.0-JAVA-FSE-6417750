import React, { useState } from 'react';
function BookDetails() {
  return (
    <div>
      <h2>Book Details</h2>
      <ul>
        <li>Title: Learning React</li>
        <li>Author: Alex Banks</li>
        <li>Price: ₹600</li>
      </ul>
    </div>
  );
}
function BlogDetails() {
  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        <li>Title: React Best Practices</li>
        <li>Author: Ridhan</li>
        <li>Date: Aug 1, 2025</li>
      </ul>
    </div>
  );
}
function CourseDetails() {
  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        <li>Course: React Fundamentals</li>
        <li>Instructor: Samridhan</li>
        <li>Duration: 4 weeks</li>
      </ul>
    </div>
  );
}
function App() {
  const [view, setView] = useState("book");
  let content;
  if (view === "book") {
    content = <BookDetails />;
  } else if (view === "blog") {
    content = <BlogDetails />;
  } else if (view === "course") {
    content = <CourseDetails />;
  }
  return (
    <div>
      <h1>Blogger App</h1>

      <button onClick={() => setView("book")}>Book</button>
      <button onClick={() => setView("blog")}>Blog</button>
      <button onClick={() => setView("course")}>Course</button>
      <hr />
      {content}
      <hr />
      {view === "book" ? <BookDetails /> : null}
      {view === "blog" && <BlogDetails />}
      {{
        course: <CourseDetails />,
      }[view]}
    </div>
  );
}
export default App;
