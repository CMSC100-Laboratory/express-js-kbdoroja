import express from "express"; 
import { appendFileSync } from 'node:fs';

const app = express(); 
app.use(express.json()); 
app.use(express.urlencoded({extended: false})); 

let bookarray = []; 

let book = []

let booklist = ["HarryPotter Man", "978-0-7475-3269-9", "JK Rowling", 1997]

app.get("/add-book", (req,res) =>{
    res.send("I have received your prodding")
})

app.post("/add-book", (req, res) => {
   book.push(req.body.Bookname);
   book.push(req.body.ISBN); 
   book.push(req.body.Author);
   book.push(req.body.YearPublished); 

    if(book.length == 4){
        if(book[0] && book[1] != 0 && book[2] != 0 && book[3] != 0){
            appendFileSync("books.txt", book[0]+","+ book[1]+","+ book[2]+","+ book[3] + "\n", "utf-8");
            res.send("success : true"); 
            book.length = 0; 
        }else{res.send("success: false")}
    }else{res.send("success: false")}
   
})

app.get("/find-by-isbn-author", (req,res) => {


})

app.get("/find-by-author", (req,res) => {

    
})

app.listen(3000, () => {console.log("Server started at port 3000")}); 