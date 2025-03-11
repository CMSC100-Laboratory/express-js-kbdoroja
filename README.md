# cmsc-100-exer5

**Name: kristina b. doroja**

**Section: c-2l**

This program makes use of express and needle npm packages in order to simulate request and respond between server and client
In this program there are three main methods implemented: 
POST method (/add-book) : request.js sends an object containing details of a book, in which the method in server.js then processes its validity and appends it on a text file
GET method (/find-by-isbn-author) : request.js accesses a url with queries in it in order to search a book by isbn and author
GET method (/find-by-author) : request.js accesses a url with queries for author, and server.js returns an array of matches for the query 
